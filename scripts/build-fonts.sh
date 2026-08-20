#!/usr/bin/env bash
#
# 生成 public/fonts/ 下的自托管字体子集。
#
# 中文用思源宋体 / 思源黑体（Noto Serif SC / Noto Sans SC），按站内实际用字裁剪；
# 拉丁字母与数字用 Source Serif 4 / Source Sans 3——它们和思源系同源，
# 中西混排时字面大小、重心和字重都能对上。
#
# 产物已经提交进仓库，日常构建不需要联网、也不需要 Python。
# 只有在 data/ 里新增了没被覆盖的字时才需要重跑（构建前的 check-font-coverage
# 会把缺字列出来提醒你）：
#
#   ./scripts/build-fonts.sh
#
# 依赖：fonttools[woff]（提供 pyftsubset，需要 brotli 支持）
#   pip install "fonttools[woff]" brotli
#
set -euo pipefail

cd "$(dirname "$0")/.."

SRC_DIR=".fonts-src"
OUT_DIR="public/fonts"
mkdir -p "$SRC_DIR" "$OUT_DIR"

PYFTSUBSET="${PYFTSUBSET:-$(command -v pyftsubset || true)}"
if [ -z "$PYFTSUBSET" ]; then
  echo "找不到 pyftsubset，请先执行： pip install \"fonttools[woff]\" brotli" >&2
  exit 1
fi

NOTO_SERIF_URL="https://github.com/notofonts/noto-cjk/releases/download/Serif2.003/14_NotoSerifSC.zip"
NOTO_SANS_URL="https://github.com/notofonts/noto-cjk/releases/download/Sans2.004/18_NotoSansSC.zip"
# 思源宋体／黑体的 SC 版本不含谚文（实测谚文音节 0 个），韩语页面和首屏的韩语标题
# 会掉到系统字体。补一套 KR 字重，只裁站内用到的谚文。
NOTO_SERIF_KR_URL="https://github.com/notofonts/noto-cjk/releases/download/Serif2.003/13_NotoSerifKR.zip"
NOTO_SANS_KR_URL="https://github.com/notofonts/noto-cjk/releases/download/Sans2.004/17_NotoSansKR.zip"

fetch_cjk_sources() {
  if [ ! -d "$SRC_DIR/serif" ]; then
    echo "下载 Noto Serif SC ..."
    curl -sL -o "$SRC_DIR/serif.zip" "$NOTO_SERIF_URL"
    unzip -oq "$SRC_DIR/serif.zip" -d "$SRC_DIR/serif"
  fi
  if [ ! -d "$SRC_DIR/sans" ]; then
    echo "下载 Noto Sans SC ..."
    curl -sL -o "$SRC_DIR/sans.zip" "$NOTO_SANS_URL"
    unzip -oq "$SRC_DIR/sans.zip" -d "$SRC_DIR/sans"
  fi
  if [ ! -d "$SRC_DIR/serif-kr" ]; then
    echo "下载 Noto Serif KR ..."
    curl -sL -o "$SRC_DIR/serif-kr.zip" "$NOTO_SERIF_KR_URL"
    unzip -oq "$SRC_DIR/serif-kr.zip" -d "$SRC_DIR/serif-kr"
  fi
  if [ ! -d "$SRC_DIR/sans-kr" ]; then
    echo "下载 Noto Sans KR ..."
    curl -sL -o "$SRC_DIR/sans-kr.zip" "$NOTO_SANS_KR_URL"
    unzip -oq "$SRC_DIR/sans-kr.zip" -d "$SRC_DIR/sans-kr"
  fi
}

# 拉丁字体取 Google Fonts 的 latin 分块 woff2（每个几十 KB），
# 取回后一并放进 public/fonts，运行时不再依赖 Google。
fetch_latin() {
  local family="$1" outfile="$2" axis="$3"
  if [ -f "$OUT_DIR/$outfile" ]; then
    return
  fi
  echo "下载 $family ..."
  local css url
  css=$(curl -s -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36" \
    "https://fonts.googleapis.com/css2?family=${family}:${axis}&display=swap")
  # Google 按 unicode-range 分块返回，基础 latin 块（U+0000-00FF）总是最后一段
  url=$(printf '%s' "$css" | grep -o 'https://[^)]*woff2' | tail -1 || true)
  if [ -z "$url" ]; then
    echo "  取不到 $family 的 woff2 地址，跳过（可稍后重跑本脚本）" >&2
    return
  fi
  curl -sL -o "$OUT_DIR/$outfile" "$url"
}

subset_cjk() {
  local src="$1" out="$2" charfile="$3"
  "$PYFTSUBSET" "$src" \
    --text-file="$charfile" \
    --flavor=woff2 \
    --layout-features='' \
    --no-hinting \
    --desubroutinize \
    --output-file="$OUT_DIR/$out"
}

fetch_cjk_sources

CHARSET=$(mktemp)
trap 'rm -f "$CHARSET"' EXIT
node scripts/collect-charset.mjs > "$CHARSET"

echo "裁剪中文字体 ..."
subset_cjk "$SRC_DIR/serif/SubsetOTF/SC/NotoSerifSC-SemiBold.otf" "noto-serif-sc-600.woff2" "$CHARSET"
subset_cjk "$SRC_DIR/sans/NotoSansSC-Regular.otf"                 "noto-sans-sc-400.woff2"  "$CHARSET"
subset_cjk "$SRC_DIR/sans/NotoSansSC-Medium.otf"                  "noto-sans-sc-500.woff2"  "$CHARSET"

echo "裁剪韩文字体 ..."
KR_SERIF=$(find "$SRC_DIR/serif-kr" -name "NotoSerifKR-SemiBold.otf" | head -1)
KR_SANS=$(find "$SRC_DIR/sans-kr" -name "NotoSansKR-Regular.otf" | head -1)
if [ -n "$KR_SERIF" ]; then
  subset_cjk "$KR_SERIF" "noto-serif-kr-600.woff2" "$CHARSET"
else
  echo "  找不到 NotoSerifKR-SemiBold.otf，跳过" >&2
fi
if [ -n "$KR_SANS" ]; then
  subset_cjk "$KR_SANS" "noto-sans-kr-400.woff2" "$CHARSET"
else
  echo "  找不到 NotoSansKR-Regular.otf，跳过" >&2
fi

echo "获取拉丁字体 ..."
fetch_latin "Source+Serif+4" "source-serif-4-latin.woff2" "opsz,wght@8..60,400..700"
fetch_latin "Source+Sans+3"  "source-sans-3-latin.woff2"  "wght@400..700"

# 记录这批子集覆盖了哪些字，供 check-font-coverage.mjs 在构建前比对。
# 放在 scripts/ 而不是 public/，避免这份清单被一起发布到线上。
cp "$CHARSET" "scripts/font-charset.txt"

echo
ls -la "$OUT_DIR" | awk 'NR>1 && $9 ~ /woff2/ {printf "  %-32s %6.0f KB\n", $9, $5/1024}'
