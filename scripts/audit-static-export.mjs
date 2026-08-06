import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve("out");
const localizedRoots = new Set(["en", "fr", "es", "ja", "ko"]);

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(
    entries.map(async (entry) => {
      const absolutePath = path.join(directory, entry.name);
      return entry.isDirectory() ? collectFiles(absolutePath) : [absolutePath];
    }),
  );

  return nestedFiles.flat();
}

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

function resolveExportTarget(value, sourceFile) {
  const cleanValue = value.split("#")[0].split("?")[0];
  if (!cleanValue || /^(?:[a-z]+:|#|\/\/)/i.test(cleanValue)) return null;

  const decodedValue = decodeURIComponent(cleanValue);
  const absoluteTarget = decodedValue.startsWith("/")
    ? path.join(outputDirectory, decodedValue)
    : path.resolve(path.dirname(sourceFile), decodedValue);

  if (path.extname(absoluteTarget)) return [absoluteTarget];
  return [absoluteTarget, path.join(absoluteTarget, "index.html"), `${absoluteTarget}.html`];
}

const allFiles = await collectFiles(outputDirectory);
const htmlFiles = allFiles.filter((filePath) => filePath.endsWith(".html"));
const missingTargets = [];
const languageMismatches = [];
const pagesWithoutHeading = [];

for (const htmlFile of htmlFiles) {
  const source = await readFile(htmlFile, "utf8");
  const relativePath = path.relative(outputDirectory, htmlFile);
  const rootSegment = relativePath.split(path.sep)[0];
  const expectedLanguage = localizedRoots.has(rootSegment) ? rootSegment : "zh-CN";
  const actualLanguage = source.match(/<html lang="([^"]+)"/)?.[1];

  if (actualLanguage !== expectedLanguage) {
    languageMismatches.push({ page: relativePath, expectedLanguage, actualLanguage });
  }

  if (!relativePath.startsWith("404") && !/<h1[ >]/.test(source)) {
    pagesWithoutHeading.push(relativePath);
  }

  const references = source.matchAll(/(?:href|src)="([^"]+)"/g);
  for (const [, reference] of references) {
    const candidates = resolveExportTarget(reference, htmlFile);
    if (!candidates) continue;

    const checks = await Promise.all(candidates.map(exists));
    if (!checks.some(Boolean)) {
      missingTargets.push({ page: relativePath, reference });
    }
  }
}

const uniqueMissingTargets = [
  ...new Map(missingTargets.map((item) => [`${item.page}:${item.reference}`, item])).values(),
];

console.log(
  JSON.stringify(
    {
      htmlPages: htmlFiles.length,
      files: allFiles.length,
      missingTargets: uniqueMissingTargets,
      languageMismatches,
      pagesWithoutHeading,
    },
    null,
    2,
  ),
);

if (uniqueMissingTargets.length || languageMismatches.length || pagesWithoutHeading.length) {
  process.exitCode = 1;
}
