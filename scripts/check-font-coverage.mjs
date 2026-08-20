/**
 * 构建前检查：站内文案有没有出现中文字体子集没覆盖的字。
 *
 * public/fonts/ 里的字体是按当时的站内用字裁剪的。以后往 data/ 里加新闻、
 * 课程或人名时，可能引入子集里没有的字——那些字会静默回退到系统宋体，
 * 在页面上表现为个别字忽然变粗变丑，很难靠肉眼发现。
 *
 * 这个脚本把当前用字和 public/fonts/charset.txt 比对，缺字就报出来，
 * 提示重跑 ./scripts/build-fonts.sh。
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";

const MANIFEST = "scripts/font-charset.txt";

if (!fs.existsSync(MANIFEST)) {
  console.warn(`⚠ 找不到 ${MANIFEST}，跳过字体覆盖检查。`);
  process.exit(0);
}

const covered = new Set(fs.readFileSync(MANIFEST, "utf8"));
const current = execFileSync(
  process.execPath,
  ["scripts/collect-charset.mjs"],
  { encoding: "utf8", maxBuffer: 1 << 24 },
);

const missing = [...new Set(current)].filter((ch) => !covered.has(ch));

if (missing.length === 0) {
  process.exit(0);
}

console.warn("");
console.warn(`⚠ 有 ${missing.length} 个字符不在中文字体子集里，会回退到系统字体：`);
console.warn(`  ${missing.join(" ")}`);
console.warn("");
console.warn("  重新生成字体子集： ./scripts/build-fonts.sh");
console.warn("");
