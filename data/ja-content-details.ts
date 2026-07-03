import {
  aboutPages,
  collaborationPages,
  facultyPages,
  practicePages,
  programPages,
  researchPages,
  resourcePages,
  type ContentPage,
} from "@/data/content";
import type { LocalizedContentParent } from "@/data/fr-content-details";
export type { LocalizedContentParent };

type DetailCopy = {
  parent: LocalizedContentParent;
  slug: string;
  title: string;
  summary: string;
  points: [string, string, string];
};

const copies: DetailCopy[] = [
  { parent: "about", slug: "history", title: "センターの歩み", summary: "十年以上の授業・学習コミュニティ・教育開発が今日のセンターを形づくってきました。", points: ["英語クラスと小さな学習グループから四言語コース体系へ", "授業外での定期的な語学クラブ・ワークショップ・学習支援", "カリキュラム・指導実践・組織サービスの継続的な見直し"] },
  { parent: "about", slug: "approach", title: "教育アプローチ", summary: "明確な段階・意味のある課題・活用できるフィードバックを通じて、言語知識をコミュニケーションに変えます。", points: ["学習者の現在のレベル・目標・利用可能な学習時間から出発する", "語彙と文法を現実の状況と目的のある課題に結びつける", "段階目標とフィードバックで進歩と次のステップを可視化する"] },
  { parent: "about", slug: "organization", title: "センターの運営体制", summary: "指導・カリキュラム・学習支援・連携機能が、共通の学習方針のもとで連携しています。", points: ["言語チームがコースを実施し、学習者のパフォーマンスに対応する", "カリキュラム・研究部門が到達目標・教材・評価を整合させる", "学習支援・プロジェクトチームが配置・授業・連携を調整する"] },

  { parent: "programs", slug: "general", title: "総合語学能力", summary: "現在のレベルに適した進行を通じて、バランスの取れた聴読話書能力を伸ばします。", points: ["基礎からより自律的なコミュニケーションへのレベル別ルート", "受容的・産出的言語スキルにわたる統合的な取り組み", "学習者が現在できることを示す定期的な応用課題"] },
  { parent: "programs", slug: "exam-preparation", title: "試験対策・進学準備", summary: "根本的な言語発達と試験・将来の学業に向けた実践的な準備を組み合わせます。", points: ["試験テクニックの前に診断し、実際のレベルから準備を始める", "テスト対象スキルにわたるタイム付き練習・課題分析・フィードバック", "目標スコアと持続可能な言語成長をつなぐ学習計画"] },
  { parent: "programs", slug: "business", title: "ビジネス・職業英語", summary: "会議・メール・プレゼン・顧客対応・異文化チームワークのコミュニケーションを練習します。", points: ["孤立した専門用語ではなく職場の状況から引き出した言語", "書面・口頭・協働コミュニケーションのためのロールベース練習", "明確さ・トーン・職業的判断・対応戦略へのフィードバック"] },
  { parent: "programs", slug: "academic", title: "アカデミック英語・コミュニケーション", summary: "大学・研究の場面でのより明確な読解・ライティング・プレゼン・ディスカッションを伸ばします。", points: ["資料を批判的に読み有用なノートを取る", "明確な主張・根拠・論理的展開を持って書く", "学術的なアイデアを提示し質問に自信を持って応答する"] },
  { parent: "programs", slug: "young-learners", title: "ジュニア学習者の語学成長", summary: "年齢に合った段階的な学習を通じて、興味・表現力・持続的な学習習慣を育みます。", points: ["年齢・集中力・現在の言語発達段階に合わせた活動", "コミュニケーション・読み書き・プロジェクト・文化探求のバランス", "学習者への建設的なフィードバックと家庭への進捗の明確な報告"] },
  { parent: "programs", slug: "corporate", title: "カスタム法人研修", summary: "職種・業界・国際業務・特定のチーム成果に合わせた語学研修を設計します。", points: ["参加者と実際の職場の状況に基づくニーズ分析", "言語・内容・スケジュール・提供形式の柔軟性", "参加を観察可能なコミュニケーション成果と結びつけるレビュープロセス"] },
  { parent: "programs", slug: "workshops", title: "集中短期ワークショップ", summary: "コンパクトで集中した研修を通じて、一つの実践的なコミュニケーション課題に取り組みます。", points: ["メール・プレゼン・会話の自信など明確に定義されたテーマ", "各セッションにデモ・練習・フィードバック・即時修正", "個人・キャンパス・チーム・専門家グループに適した形式"] },
  { parent: "programs", slug: "study-abroad", title: "留学準備", summary: "海外での学術的コミュニケーション・日常的な適応・実践的な語学要件に備えます。", points: ["入学後に必要な言語と試験目標をつなぐ", "授業参加・プレゼン・メール・自立学習を練習する", "日常生活と学術的期待のための異文化意識を高める"] },

  { parent: "practice", slug: "tutoring", title: "語学補講", summary: "診断・質問・集中フィードバックを使って特定の学習困難を解決します。", points: ["障害が知識・練習・方略・自信に関するものかを明確にする", "例題と誘導修正を通じて管理可能な目標に取り組む", "自立練習のための実践的な次のステップを持って帰る"] },
  { parent: "practice", slug: "language-clubs", title: "語学クラブ・学習コミュニティ", summary: "他者と話し・聞き・学ぶ、プレッシャーのない定期的な機会を作ります。", points: ["各参加者に明確な貢献理由を与えるテーマ", "活動をもう一つの授業にしない教師またはファシリテーターのサポート", "コース間での練習維持を助ける継続コミュニティ"] },
  { parent: "practice", slug: "cultural-events", title: "語学・文化体験", summary: "言語が慣習・メディア・日常の選択・創造的表現の中にどのように生きているかを探求します。", points: ["参加者が関わることができるレベルの本物の文化素材を使う", "語彙と表現をそれらに意味を与える状況に結びつける", "観察・比較・敬意ある異文化ディスカッションを促す"] },
  { parent: "practice", slug: "competitions", title: "コンテスト・学習発表", summary: "スピーキング・ライティング・プロジェクトに実際の観衆と可視化された成果を与えます。", points: ["イベントを結果だけでなく学習プロセスとして扱う準備", "内容・言語・発表・振り返りの明確な評価基準", "スピーチ・ライティング・共同作業を通じて進歩を共有する機会"] },
  { parent: "practice", slug: "study-tours", title: "テーマ研学・交流", summary: "観察がコミュニケーションにつながるキャンパス・組織・文化的場面に語学課題を持ち込みます。", points: ["各訪問前の明確なテーマとコミュニケーション方針", "現地での誘導された観察・質問・インタビュー・協働課題", "経験を学びに変える最終報告・発表・振り返り"] },

  { parent: "faculty", slug: "english", title: "英語指導チーム", summary: "共通の基準が、総合英語・会話・学術・職業・試験指導をつないでいます。", points: ["教員が専門的な強みを発揮しながら共通の段階目標を中心に計画する", "授業の証拠と学習者のフィードバックが定期的なコースレビューに生かされる", "チーム開発が総合的な進行と専門コースを結びつける"] },
  { parent: "faculty", slug: "french", title: "フランス語指導チーム", summary: "フランス語の段階的進行は、文化的背景と実践的なコミュニケーションとともに指導されます。", points: ["最初の発音から自律的な表現までのCEFR準拠のステージ", "各レベルで統合されたリスニング・スピーキング・リーディング・ライティング", "文化学習とDELF準備への集中サポート"] },
  { parent: "faculty", slug: "japanese", title: "日本語指導チーム", summary: "体系的な説明と意味のある活用が、学習者が文字・文法・自然なコミュニケーションをつなぐ助けになります。", points: ["かなから中級言語発達までの体系的なルート", "認識から適切な使用へと学習者を進める授業課題", "実践的なコミュニケーションとJLPT進行への統合サポート"] },
  { parent: "faculty", slug: "korean", title: "韓国語指導チーム", summary: "明確な基礎と繰り返しの練習が、ハングルから繋がった中級表現への進歩を支えます。", points: ["音声・文字・構造・高頻度語彙の体系的な取り組み", "学習を記憶に残りやすくする日常的な場面と文化的背景", "実践的なコミュニケーションとTOPIK目標の両方を支える進行"] },

  { parent: "research", slug: "teaching-research", title: "語学教育研究", summary: "授業観察が、学習者の繰り返し現れる困難を指導チームが検討できる問いに変えます。", points: ["抽象的な傾向ではなく学習者の可視化されたパフォーマンスから出発する", "小規模な試み・議論・証拠を使って指導対応を検証する", "日常の授業判断を改善できる形で知見を共有する"] },
  { parent: "research", slug: "curriculum-development", title: "カリキュラム開発", summary: "各言語進行にわたって到達目標・授業課題・教材・評価を整合させます。", points: ["各段階の終わりに学習者が何をできるべきかを定義する", "それらの目標を直接支えるコンテントと練習を選ぶ", "あるコースが学習者を次のコースに備えさせるよう移行を見直す"] },
  { parent: "research", slug: "faculty-development", title: "教員開発", summary: "合同計画・相互観察・授業事例が、専門的な学習を実践的に維持します。", points: ["共有された準備が目標と品質の期待を一致させる", "観察が専門的な議論の具体的な基盤を作る", "振り返りが個人の経験をチームが使える知識に変える"] },

  { parent: "resources", slug: "study-guides", title: "学習ガイド", summary: "実践的なガイダンスが学習者の目標設定・ルーティン構築・限られた学習時間のより効果的な活用を助けます。", points: ["週次練習を導くのに十分具体的な目標を選ぶ", "インプット・能動的回想・コミュニケーション・復習のバランスをとる", "課題と教師のフィードバックからの証拠を使ってルーティンを調整する"] },
  { parent: "resources", slug: "downloads", title: "コース教材", summary: "コースハンドブック・チェックリスト・厳選された学習素材が最も役立つ文脈で共有されます。", points: ["コース情報が学習者のレベルと期待値の理解を助ける", "学習チェックリストが授業間の準備と復習をサポートする", "教材は非構造的なアーカイブとして提供されるのではなく現在のクラスに合わせられる"] },
  { parent: "resources", slug: "faq", title: "よくある質問", summary: "レベル・配置・スケジュール・学習期待値に関する明確な回答がコース決定を容易にします。", points: ["興味だけでなく証拠に基づいて言語とレベルを選ぶ", "入学前に現在の日付・形式・費用・空き状況を確認する", "以前の学習が単純なラベルに合わない場合に配置面談を求める"] },
  { parent: "resources", slug: "digital-learning", title: "デジタル学習", summary: "明確な目的でデジタルツールを使い、テクノロジーが言語練習を支援し断片化しないようにします。", points: ["特定のスキルや繰り返し現れる学習課題のためにツールを選ぶ", "短いデジタル練習とより深い読解・ライティング・コミュニケーションを組み合わせる", "アプリやリソースを集めるのではなく定期的に進歩を振り返る"] },

  { parent: "collaboration", slug: "campus", title: "大学間連携", summary: "特定の学生コミュニティのニーズのためにコース・ワークショップ・文化活動を共同設計します。", points: ["参加者・学術的背景・望ましい成果から出発する", "語学学習を専門分野・学生生活・キャンパスの取り組みと組み合わせる", "現実的に実施・評価できる形式を選ぶ"] },
  { parent: "collaboration", slug: "enterprise", title: "企業・組織連携", summary: "職場の状況・参加者の役割・組織の国際コミュニケーションニーズから研修を構築します。", points: ["コンテントを設計する前に高頻度のタスクとコミュニケーションリスクを特定する", "機密情報を露出しない関連ケース・シミュレーション・ドキュメントを使う", "参加と職場への実践的な転移の両方をレビューする"] },
  { parent: "collaboration", slug: "international", title: "国際交流", summary: "儀礼的な訪問ではなく、対話と意味のある共同課題を中心に交流を設計します。", points: ["参加者が貢献するために必要な言語と背景を準備する", "質問・協働・相互学習のための構造化された機会を作る", "共有された成果を使って交流に継続性と教育的価値を与える"] },
];

const sourceGroups: Record<LocalizedContentParent, ContentPage[]> = {
  about: aboutPages,
  programs: programPages,
  practice: practicePages,
  faculty: facultyPages,
  research: researchPages,
  resources: resourcePages,
  collaboration: collaborationPages,
};

export type LocalizedContentDetail = DetailCopy & { heroImage: string; image?: string };

export const jaContentDetails: LocalizedContentDetail[] = copies.map((copy) => {
  const source = sourceGroups[copy.parent].find((page) => page.slug === copy.slug);
  if (!source) throw new Error(`Missing source page for ${copy.parent}/${copy.slug}`);
  return { ...copy, heroImage: source.heroImage, image: source.image };
});

export const findJaContentDetail = (parent: string, slug: string) =>
  jaContentDetails.find((d) => d.parent === parent && d.slug === slug);

export const jaDetailsByParent = (parent: string) =>
  jaContentDetails.filter((d) => d.parent === parent);
