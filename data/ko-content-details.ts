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
  { parent: "about", slug: "leadership", title: "센터 원장 우신 교수", summary: "우신 교수는 본 센터 원장으로서 금융 혁신, 국제 서비스, 프랑스어 금융 융합인재 양성을 이끌고 있습니다.", points: ["금융 혁신, 자본시장, 사회경제 발전 연구", "기업 국제화와 국경 간 금융 지원", "프랑스어, 금융, 문화 간 역량을 결합한 인재 양성"] },
  { parent: "about", slug: "history", title: "센터의 역사", summary: "10년 이상의 수업, 학습 커뮤니티, 교육 개발이 오늘날의 센터를 만들어 왔습니다.", points: ["영어 수업과 소규모 학습 모임에서 4개 언어 과정 체계로", "공식 수업 밖의 정기적인 언어 클럽, 워크숍, 학습자 지원", "교육과정, 수업 실천, 기관 서비스의 지속적인 검토"] },
  { parent: "about", slug: "approach", title: "교육 방식", summary: "명확한 단계, 의미 있는 과제, 학습자가 활용할 수 있는 피드백을 통해 언어 지식을 소통으로 바꿉니다.", points: ["학습자의 현재 수준, 목표, 가능한 학습 시간에서 출발하기", "어휘와 문법을 실제 상황과 목적 있는 과제와 연결하기", "단계 목표와 피드백으로 성장과 다음 단계를 가시화하기"] },
  { parent: "about", slug: "organization", title: "센터 운영 체계", summary: "수업, 교육과정, 학습자 지원, 협력 기능이 공유된 교육 방침 아래 함께 일합니다.", points: ["언어 팀이 수업을 진행하고 학습자 성과에 대응한다", "교육과정·연구 업무가 목표, 교재, 평가를 정렬한다", "학습자 지원·프로젝트 팀이 배치, 수업, 협력을 조율한다"] },
  { parent: "about", slug: "facilities", title: "평가 시설", summary: "컴퓨터 기반 시험 좌석, 칸막이, 음향 장비가 언어 평가와 멀티미디어 수업을 지원합니다.", points: ["컴퓨터 기반 시험과 단계별 언어 평가에 맞춰 좌석이 구성되어 있다", "헤드셋이 듣기 입력과 말하기 응답 연습을 지원한다", "분리된 좌석이 시험, 모의 평가, 집중 연습 중 간섭을 줄인다"] },

  { parent: "programs", slug: "general", title: "일반 언어 능력", summary: "현재 수준에 맞는 진행을 통해 균형 잡힌 듣기·말하기·읽기·쓰기 능력을 키웁니다.", points: ["기초에서 더 자립적인 소통으로 이어지는 수준별 경로", "수용적·산출적 언어 기술에 걸친 통합적 작업", "학습자가 지금 할 수 있는 것을 보여 주는 정기적인 응용 과제"] },
  { parent: "programs", slug: "exam-preparation", title: "시험 준비 및 진학", summary: "근본적인 언어 발달과 시험 및 미래 학업을 위한 실용적인 준비를 결합합니다.", points: ["시험 기술 전에 진단하여 실제 수준에서 준비 시작하기", "테스트되는 모든 기술에 걸친 시간 제한 연습, 과제 분석, 피드백", "목표 점수와 지속 가능한 언어 성장을 연결하는 학습 계획"] },
  { parent: "programs", slug: "business", title: "비즈니스 및 직무 언어", summary: "회의, 이메일, 발표, 고객 소통, 다문화 팀워크를 위한 소통을 연습합니다.", points: ["고립된 전문 용어가 아닌 직장 상황에서 도출한 언어", "서면, 구두, 협업 소통을 위한 역할 기반 연습", "명확성, 어조, 직업적 판단, 응답 전략에 대한 피드백"] },
  { parent: "programs", slug: "academic", title: "학술 영어 및 소통", summary: "대학 및 연구 환경에서의 더 명확한 읽기, 쓰기, 발표, 토론 능력을 키웁니다.", points: ["자료를 비판적으로 읽고 유용한 노트 작성하기", "명확한 주장, 근거, 논리적 전개로 쓰기", "학술적 아이디어를 발표하고 질문에 자신 있게 답하기"] },
  { parent: "programs", slug: "young-learners", title: "청소년 언어 성장", summary: "연령에 맞는 단계별 학습을 통해 흥미, 표현력, 지속적인 학습 습관을 키웁니다.", points: ["연령, 집중력, 현재 언어 발달 단계에 맞춘 활동", "소통, 리터러시, 프로젝트, 문화 탐구의 균형", "학습자를 위한 건설적인 피드백과 가정에 대한 명확한 성장 소통"] },
  { parent: "programs", slug: "corporate", title: "맞춤형 기업 연수", summary: "직무, 산업, 국제 업무, 특정 팀 성과를 중심으로 언어 연수를 설계합니다.", points: ["참가자와 실제 직장 상황에 기반한 요구 분석", "언어, 내용, 일정, 제공 형식의 유연성", "참가를 관찰 가능한 소통 성과와 연결하는 검토 과정"] },
  { parent: "programs", slug: "workshops", title: "집중 단기 워크숍", summary: "압축적이고 집중적인 연수를 통해 하나의 실용적인 소통 과제를 다룹니다.", points: ["이메일, 발표, 말하기 자신감 등 좁게 정의된 주제", "각 세션에서 시연, 연습, 피드백, 즉각적인 수정", "개인, 캠퍼스, 팀, 전문가 그룹에 적합한 형식"] },
  { parent: "programs", slug: "study-abroad", title: "유학 언어 준비", summary: "해외 유학의 학술적 소통, 일상적 적응, 실용적인 언어 요구에 대비합니다.", points: ["시험 목표와 입학 후 필요한 언어 연결하기", "수업 참여, 발표, 이메일, 자기 주도 학습 연습하기", "일상생활과 학업 기대를 위한 이문화 의식 키우기"] },

  { parent: "practice", slug: "tutoring", title: "언어 보충 지도", summary: "진단, 질문, 집중 피드백을 사용하여 특정 학습 어려움을 해결합니다.", points: ["장애물이 지식, 연습, 전략, 자신감과 관련된 것인지 명확히 하기", "예시와 유도된 수정을 통해 관리 가능한 목표 다루기", "자율 연습을 위한 실용적인 다음 단계를 갖고 돌아가기"] },
  { parent: "practice", slug: "language-clubs", title: "언어 클럽 및 학습 커뮤니티", summary: "다른 사람들과 말하고, 듣고, 배울 수 있는 부담 없는 정기적인 기회를 만듭니다.", points: ["각 참가자에게 기여할 명확한 이유를 제공하는 주제", "활동을 또 다른 수업으로 만들지 않는 교사 또는 진행자 지원", "수업 사이에 연습을 유지하는 데 도움이 되는 지속적인 커뮤니티"] },
  { parent: "practice", slug: "cultural-events", title: "언어 및 문화 체험", summary: "언어가 관습, 미디어, 일상적 선택, 창의적 표현 속에서 어떻게 살아있는지 탐구합니다.", points: ["참가자가 참여할 수 있는 수준의 진정성 있는 문화 자료 사용하기", "어휘와 표현을 그 의미를 부여하는 상황과 연결하기", "관찰, 비교, 존중하는 이문화 토론 장려하기"] },
  { parent: "practice", slug: "competitions", title: "대회 및 학습 발표", summary: "말하기, 글쓰기, 프로젝트에 실제 청중과 가시적인 성과를 부여합니다.", points: ["행사를 결과만이 아닌 학습 과정으로 다루는 준비", "내용, 언어, 발표, 성찰에 대한 명확한 기준", "발표, 글쓰기, 협업 작업을 통해 성장을 공유할 기회"] },
  { parent: "practice", slug: "study-tours", title: "테마 탐방 및 교류", summary: "관찰이 소통으로 이어지는 캠퍼스, 기관, 문화적 맥락으로 언어 과제를 가져갑니다.", points: ["각 방문 전에 명확한 주제와 소통 과제 설정하기", "현장에서 유도된 관찰, 질문, 인터뷰, 협업 과제 수행하기", "경험을 학습으로 전환하는 최종 보고서, 발표, 성찰 작성하기"] },

  { parent: "faculty", slug: "english", title: "영어 교수 팀", summary: "공통된 기준이 일반 영어, 회화, 학술, 직무, 시험 수업을 연결합니다.", points: ["교원들이 전문적 강점을 발휘하면서 공통 단계 목표를 중심으로 계획한다", "수업 증거와 학습자 피드백이 정기적인 과정 검토에 반영된다", "팀 개발이 일반적인 진행과 전문 과정 경로를 연결한다"] },
  { parent: "faculty", slug: "french", title: "프랑스어 교수 팀", summary: "프랑스어 단계별 진행이 문화적 맥락과 실용적인 소통과 함께 가르쳐집니다.", points: ["첫 발음부터 자립적 표현까지 CEFR 준거 단계", "각 수준에서 통합된 듣기·말하기·읽기·쓰기", "문화 학습과 DELF 준비를 위한 집중 지원"] },
  { parent: "faculty", slug: "japanese", title: "일본어 교수 팀", summary: "체계적인 설명과 의미 있는 활용이 학습자가 문자, 문법, 자연스러운 소통을 연결하는 데 도움이 됩니다.", points: ["히라가나·가타카나에서 중급 언어 발달까지의 체계적인 경로", "학습자를 인식에서 적절한 사용으로 이끄는 수업 과제", "실용적인 소통과 JLPT 진행을 위한 통합 지원"] },
  { parent: "faculty", slug: "korean", title: "한국어 교수 팀", summary: "명확한 기초와 반복 연습이 한글에서 연결된 중급 표현으로의 진행을 지원합니다.", points: ["음성, 문자, 구조, 고빈도 언어에 대한 체계적인 작업", "학습을 기억에 남기게 하는 일상적 상황과 문화적 맥락", "실용적인 소통과 TOPIK 목표 모두를 지원하는 진행"] },
  { parent: "faculty", slug: "chinese", title: "국제 중국어 교원진", summary: "국제 언어로서의 중국어 교육. 발음과 한자, 문법, 실제 소통을 잇습니다.", points: ["병음과 성조, 한자, 기초 표현으로 시작하는 입문", "HSK 대비 — 종합 능력에서 시험 집중 대비까지", "학습과 연구, 업무를 위한 학술·직무 중국어"] },

  { parent: "research", slug: "teaching-research", title: "언어 수업 연구", summary: "수업 관찰이 학습자의 반복적인 어려움을 교수 팀이 검토할 수 있는 질문으로 바꿉니다.", points: ["추상적인 경향이 아닌 학습자의 가시적인 성과에서 출발하기", "소규모 시도, 토론, 증거를 사용하여 교육적 대응 검증하기", "일상적인 수업 결정을 개선할 수 있는 형태로 결과 공유하기"] },
  { parent: "research", slug: "curriculum-development", title: "교육과정 개발", summary: "각 언어 진행에 걸쳐 목표, 수업 과제, 교재, 평가를 정렬합니다.", points: ["각 단계 말에 학습자가 할 수 있어야 하는 것 정의하기", "그 목표를 직접 지원하는 내용과 실습 선택하기", "한 과정이 학습자를 다음 과정에 대비시키도록 전환 검토하기"] },
  { parent: "research", slug: "faculty-development", title: "교원 역량 개발", summary: "공동 계획, 동료 참관, 수업 사례가 전문적인 학습을 실용적으로 유지합니다.", points: ["공유된 준비가 목표와 품질 기대를 더 일관되게 만든다", "참관이 전문적인 토론을 위한 구체적인 기반을 만든다", "성찰이 개인의 경험을 팀이 사용할 수 있는 지식으로 바꾼다"] },

  { parent: "resources", slug: "study-guides", title: "학습 가이드", summary: "실용적인 안내가 학습자의 목표 설정, 루틴 구축, 제한된 학습 시간의 더 효과적인 활용을 돕습니다.", points: ["주간 연습을 안내하기에 충분히 구체적인 목표 선택하기", "입력, 능동적 회상, 소통, 복습의 균형 잡기", "과제와 교사 피드백에서 나온 증거를 사용하여 루틴 조정하기"] },
  { parent: "resources", slug: "downloads", title: "과정 교재", summary: "과정 교재, 체크리스트, 엄선된 학습 자료가 가장 유용한 맥락에서 공유됩니다.", points: ["과정 안내가 학습자의 수준과 기대치 이해를 돕는다", "학습 체크리스트가 수업 사이의 준비와 복습을 지원한다", "교재는 비구조적인 아카이브가 아닌 현재 수업에 맞게 조정된다"] },
  { parent: "resources", slug: "faq", title: "자주 묻는 질문", summary: "수준, 배치, 일정, 학습 기대치에 대한 명확한 답변이 과정 결정을 용이하게 합니다.", points: ["흥미만이 아닌 증거에 기반하여 언어와 수준 선택하기", "등록 전에 현재 날짜, 형식, 비용, 가용성 확인하기", "이전 학습이 단순한 레이블에 맞지 않을 때 배치 면담 요청하기"] },
  { parent: "resources", slug: "digital-learning", title: "디지털 학습", summary: "명확한 목적으로 디지털 도구를 사용하여 기술이 언어 연습을 지원하고 분산시키지 않도록 합니다.", points: ["특정 기술이나 반복적인 학습 문제를 위한 도구 선택하기", "짧은 디지털 연습과 더 깊은 읽기, 쓰기, 소통 결합하기", "앱과 자료를 수집하는 대신 정기적으로 진행 상황 검토하기"] },

  { parent: "collaboration", slug: "campus", title: "캠퍼스 협력", summary: "특정 학생 커뮤니티의 요구를 위해 과정, 워크숍, 언어 평가 지원을 공동 설계합니다.", points: ["참가자, 학업 맥락, 원하는 성과에서 출발하기", "언어 학습을 전공 분야, 학생 생활, 캠퍼스 이니셔티브와 결합하기", "CEFR 등 국제 기준에 맞춘 교수 및 학업 평가 자원 공유하기"] },
  { parent: "collaboration", slug: "enterprise", title: "기업 및 기관 협력", summary: "직장 상황, 참가자 역할, 기관의 국제 소통 요구에서 연수를 구성합니다.", points: ["내용을 설계하기 전에 고빈도 과제와 소통 위험 파악하기", "민감한 정보를 노출하지 않는 관련 사례, 시뮬레이션, 문서 사용하기", "참여와 직장으로의 실용적인 전이 모두 검토하기"] },
  { parent: "collaboration", slug: "international", title: "국제 교류", summary: "국제 교육 자원을 언어 역량 향상, 학업 기준, 평가 서비스와 연결합니다.", points: ["대학, 공식 교육기관, 기관 파트너와의 협력 구축", "명확한 학업 관리와 일관된 평가 기준에 따라 운영", "언어 역량 향상과 국제 평가 준비를 위한 높은 수준의 플랫폼 지원"] },
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

export const koContentDetails: LocalizedContentDetail[] = copies.map((copy) => {
  const source = sourceGroups[copy.parent].find((page) => page.slug === copy.slug);
  if (!source) throw new Error(`Missing source page for ${copy.parent}/${copy.slug}`);
  return { ...copy, heroImage: source.heroImage, image: source.image };
});

export const findKoContentDetail = (parent: string, slug: string) =>
  koContentDetails.find((d) => d.parent === parent && d.slug === slug);

export const koDetailsByParent = (parent: string) =>
  koContentDetails.filter((d) => d.parent === parent);
