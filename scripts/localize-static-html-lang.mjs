import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve("out");
const localizedRoots = new Set(["en", "fr", "es", "ja", "ko"]);

async function collectHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(
    entries.map(async (entry) => {
      const absolutePath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        return collectHtmlFiles(absolutePath);
      }

      return entry.isFile() && entry.name.endsWith(".html") ? [absolutePath] : [];
    }),
  );

  return nestedFiles.flat();
}

const htmlFiles = await collectHtmlFiles(outputDirectory);

await Promise.all(
  htmlFiles.map(async (filePath) => {
    const relativePath = path.relative(outputDirectory, filePath);
    const rootSegment = relativePath.split(path.sep)[0];
    const language = localizedRoots.has(rootSegment) ? rootSegment : "zh-CN";
    const source = await readFile(filePath, "utf8");
    const localizedSource = source.replace(/<html lang="[^"]+"/, `<html lang="${language}"`);

    if (localizedSource !== source) {
      await writeFile(filePath, localizedSource, "utf8");
    }
  }),
);

console.log(`Localized the lang attribute in ${htmlFiles.length} exported HTML files.`);
