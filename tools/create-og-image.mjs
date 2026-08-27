import sharp from "sharp";

const width = 1200;
const height = 630;
const source = "public/images/campus-autumn.webp";
const output = "public/images/og-default.png";

const overlay = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="shade" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#071f3e" stop-opacity="0.94"/>
      <stop offset="0.56" stop-color="#0b2f5b" stop-opacity="0.78"/>
      <stop offset="1" stop-color="#071f3e" stop-opacity="0.38"/>
    </linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#f2dfaf"/>
      <stop offset="1" stop-color="#c99b48"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#shade)"/>
  <rect x="72" y="72" width="1056" height="486" rx="0" fill="none" stroke="rgba(255,255,255,0.24)" stroke-width="1.5"/>
  <rect x="72" y="72" width="8" height="486" fill="url(#gold)"/>
  <text x="112" y="142" fill="#f2dfaf" font-family="Arial Unicode MS, STHeiti, sans-serif" font-size="25" font-weight="700" letter-spacing="5">ZHEJIANG UNIVERSITY OF FINANCE &amp; ECONOMICS</text>
  <text x="112" y="248" fill="#ffffff" font-family="Arial Unicode MS, STHeiti, sans-serif" font-size="72" font-weight="700">浙江财经大学语言中心</text>
  <text x="116" y="318" fill="rgba(255,255,255,0.82)" font-family="Arial Unicode MS, STHeiti, sans-serif" font-size="34" font-weight="500">英语 · 法语 · 日语 · 韩语课程与培训</text>
  <text x="116" y="394" fill="rgba(255,255,255,0.7)" font-family="Arial Unicode MS, STHeiti, sans-serif" font-size="28">Language Center · ZUFE</text>
  <g transform="translate(116 458)">
    <rect x="0" y="0" width="172" height="48" fill="rgba(255,255,255,0.12)" stroke="rgba(242,223,175,0.45)"/>
    <text x="24" y="32" fill="#f2dfaf" font-family="Arial Unicode MS, STHeiti, sans-serif" font-size="20" font-weight="700">多语种课程</text>
    <rect x="196" y="0" width="172" height="48" fill="rgba(255,255,255,0.12)" stroke="rgba(242,223,175,0.45)"/>
    <text x="220" y="32" fill="#f2dfaf" font-family="Arial Unicode MS, STHeiti, sans-serif" font-size="20" font-weight="700">考试与升学</text>
    <rect x="392" y="0" width="172" height="48" fill="rgba(255,255,255,0.12)" stroke="rgba(242,223,175,0.45)"/>
    <text x="416" y="32" fill="#f2dfaf" font-family="Arial Unicode MS, STHeiti, sans-serif" font-size="20" font-weight="700">职业语言</text>
  </g>
</svg>`;

await sharp(source)
  .resize(width, height, { fit: "cover", position: "center" })
  .modulate({ brightness: 0.76, saturation: 0.82 })
  .composite([{ input: Buffer.from(overlay), top: 0, left: 0 }])
  .png({ quality: 92, compressionLevel: 9 })
  .toFile(output);

console.log(`Created ${output}`);
