/**
 * 扫描站内所有会渲染成文字的源文件，收集中文字体子集需要保留的字符。
 *
 * 站点内容全部写死在 data/ 里，字符集是有限且可枚举的，所以字体按实际用字裁剪，
 * 体积能从整套思源的十几 MB 压到几百 KB。
 *
 * 输出一整行字符串：
 *   - scripts/build-fonts.sh 把它喂给 pyftsubset
 *   - scripts/check-font-coverage.mjs 拿它和已生成的子集比对，发现缺字
 */
import fs from "node:fs";
import path from "node:path";

const ROOTS = ["data", "app", "components", "lib"];
const EXT = /\.(ts|tsx|css|json|md)$/;

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (EXT.test(entry.name)) out.push(fs.readFileSync(full, "utf8"));
  }
}

const buffers = [];
for (const root of ROOTS) {
  if (fs.existsSync(root)) walk(root, buffers);
}

const chars = new Set(buffers.join(""));

// 基础拉丁、数字与常用符号
for (let code = 0x20; code <= 0x7e; code += 1) {
  chars.add(String.fromCharCode(code));
}

// 中英混排里常见的全角标点与符号，避免个别标点掉回系统字体
const punctuation = [
  0x3000, 0x3001, 0x3002, 0x300a, 0x300b, 0x3010, 0x3011, 0x3008, 0x3009,
  0x300c, 0x300d, 0x300e, 0x300f, 0x3014, 0x3015, 0x2014, 0x2026, 0x2018,
  0x2019, 0x201c, 0x201d, 0x00b7, 0x00d7, 0x00f7, 0x00b0, 0x2030, 0x2190,
  0x2191, 0x2192, 0x2193, 0x21d2,
];
for (const code of punctuation) chars.add(String.fromCodePoint(code));
for (let code = 0xff01; code <= 0xff5e; code += 1) {
  chars.add(String.fromCodePoint(code));
}

const list = [...chars]
  .filter((ch) => ch.codePointAt(0) >= 0x20)
  .sort();

process.stdout.write(list.join(""));
