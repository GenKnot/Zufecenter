/**
 * 四个语种的视觉标识。
 *
 * 之前四个语种在页面上只靠圆圈里的 EN / FR / 日 / 한 区分，其余完全同色，
 * 这是全站最该有性格、却最没性格的地方。
 *
 * 取色不是随机分配的，每种都来自该语言文化里有出处的传统色，
 * 并统一压低明度和饱和度，让它们能和站点的海军蓝、金色共处：
 * 语种色只用在与该语种相关的语境里（标记、级别条、选中态），
 * 金色 --gold 仍然是全站唯一的通用强调色。
 */

export type LanguageSlug = "english" | "french" | "japanese" | "korean";

export type LanguageIdentity = {
  /** 圆形标记里的字符 */
  mark: string;
  /** 中文名 */
  label: string;
  /** 该语种自己的写法，用作副标题 */
  native: string;
  /** 主色：用于选中态底色、级别条 */
  accent: string;
  /** 浅色：用于大面积底纹 */
  tint: string;
  /** 在浅色底上使用的文字色，保证对比度 */
  ink: string;
  /** 该语种课程覆盖的通用等级区间，用于首页概览 */
  standard: string;
  /** 取色出处，写在这里避免以后被当成随手取的颜色改掉 */
  origin: string;
};

export const languageIdentity: Record<LanguageSlug, LanguageIdentity> = {
  english: {
    mark: "EN",
    label: "英语",
    native: "English",
    accent: "#1c4f8c",
    tint: "#eaf0f7",
    ink: "#153c6b",
    standard: "CEFR A1—B2",
    origin: "牛津蓝，压暗后与站点海军蓝同族，作为四语种里的基准色",
  },
  french: {
    mark: "FR",
    label: "法语",
    native: "Français",
    accent: "#7c3b50",
    tint: "#f6ecef",
    ink: "#5e2c3d",
    standard: "CEFR A1.1—B2",
    origin: "勃艮第红，法国传统色 bordeaux",
  },
  japanese: {
    mark: "日",
    label: "日语",
    native: "日本語",
    accent: "#8c3a2c",
    tint: "#f7ede9",
    ink: "#6b2c21",
    standard: "JLPT N5—N2",
    origin: "绯色（あけいろ），日本传统色",
  },
  korean: {
    mark: "한",
    label: "韩语",
    native: "한국어",
    accent: "#2f6b5c",
    tint: "#e9f2ef",
    ink: "#245245",
    standard: "TOPIK 1—4",
    origin: "青绿（청록），韩国丹青五方色之一",
  },
};

export const languageOrder: LanguageSlug[] = [
  "english",
  "french",
  "japanese",
  "korean",
];

export function isLanguageSlug(value: string): value is LanguageSlug {
  return value in languageIdentity;
}
