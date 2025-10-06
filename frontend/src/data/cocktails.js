import ginTonicImg from "../assets/cocktails/gin-and-tonic.jpg";
import mojitoImg from "../assets/cocktails/mojito.jpg";
import margaritaImg from "../assets/cocktails/margarita.jpg";
import oldFashionedImg from "../assets/cocktails/old-fashioned.jpg";
import dryMartiniImg from "../assets/cocktails/dry-martini.jpg";
import negroniImg from "../assets/cocktails/negroni.jpg";
import whiskeySourImg from "../assets/cocktails/whiskey-sour.jpg";
import cosmopolitanImg from "../assets/cocktails/cosmopolitan.jpg";
import daiquiriImg from "../assets/cocktails/daiquiri.jpg";
import aperolSpritzImg from "../assets/cocktails/aperol-spritz.jpg";
import moscowMuleImg from "../assets/cocktails/moscow-mule.jpg";
import longIslandImg from "../assets/cocktails/long-island-iced-tea.jpg";
import pinaColadaImg from "../assets/cocktails/pina-colada.jpg";
import palomaImg from "../assets/cocktails/paloma.jpg";
import blueHawaiiImg from "../assets/cocktails/blue-hawaii.jpg";
import espressoMartiniImg from "../assets/cocktails/espresso-martini.jpg";
import bloodyMaryImg from "../assets/cocktails/bloody-mary.jpg";
import maiTaiImg from "../assets/cocktails/mai-tai.jpg";
import sangriaImg from "../assets/cocktails/sangria.jpg";
import belliniImg from "../assets/cocktails/bellini.jpg";

export const cocktails = [
  {
    id: 1,
    name: "진 토닉",
    slug: "gin-and-tonic",
    abv: 10,
    tags: ["진", "라임", "탄산"],
    ingredients: [
      { name: "진", amount: "45ml" },
      { name: "토닉워터", amount: "적당량" },
      { name: "라임 웨지", amount: "1개" },
    ],
    steps: [
      "하이볼 글라스에 얼음을 채운다.",
      "진을 붓고 토닉워터로 채운다.",
      "라임을 짜 넣고 가볍게 스터한다.",
    ],
    image: ginTonicImg,
    comment: "깔끔한 진과 라임 가볍게"
  },
  {
    id: 2,
    name: "모히또",
    slug: "mojito",
    abv: 10,
    tags: ["럼", "민트", "라임", "탄산"],
    ingredients: [
      { name: "화이트 럼", amount: "45ml" },
      { name: "라임 주스", amount: "25ml" },
      { name: "민트", amount: "8~10잎" },
      { name: "소다수", amount: "적당량" },
    ],
    steps: [
      "글라스에서 민트·시럽·라임을 가볍게 머들한다.",
      "얼음과 럼을 넣고 저은 뒤 소다수로 채운다.",
      "민트로 가니시한다.",
    ],
    image: mojitoImg,
    comment: "민트 상쾌함 시원하게"
  },
  {
    id: 3,
    name: "마가리타",
    slug: "margarita",
    abv: 22,
    tags: ["데킬라", "상큼", "소금림"],
    ingredients: [
      { name: "데킬라", amount: "45ml" },
      { name: "트리플 섹", amount: "20ml" },
      { name: "라임 주스", amount: "25ml" },
    ],
    steps: [
      "글라스 림에 소금을 입힌다.",
      "쉐이커에 재료와 얼음을 넣고 쉐이크한다.",
      "더블 스트레인하여 따른다.",
    ],
    image: margaritaImg,
    comment: "라임 산뜻함 선명한 맛"
  },
  {
    id: 4,
    name: "올드 패션드",
    slug: "old-fashioned",
    abv: 28,
    tags: ["위스키", "비터", "클래식"],
    ingredients: [
      { name: "버번 위스키", amount: "50ml" },
      { name: "설탕", amount: "1 티스푼" },
      { name: "앙고스투라 비터", amount: "2~3 대시" },
    ],
    steps: [
      "락 글라스에서 설탕과 비터를 섞는다.",
      "얼음과 위스키를 넣고 스터한다.",
      "오렌지 필로 가니시한다.",
    ],
    image: oldFashionedImg,
    comment: "단맛과 비터 균형 차분함"
  },
  {
    id: 5,
    name: "드라이 마티니",
    slug: "dry-martini",
    abv: 30,
    tags: ["진", "버무스", "드라이"],
    ingredients: [
      { name: "진", amount: "60ml" },
      { name: "드라이 버무스", amount: "10ml" },
    ],
    steps: [
      "믹싱글라스에 얼음과 재료를 넣고 스터한다.",
      "칠한 마티니 글라스에 따른다.",
      "레몬필 또는 올리브로 가니시한다.",
    ],
    image: dryMartiniImg,
    comment: "매우 드라이 선명한 향"
  },
  {
    id: 6,
    name: "네그로니",
    slug: "negroni",
    abv: 24,
    tags: ["진", "캄파리", "버무스"],
    ingredients: [
      { name: "진", amount: "30ml" },
      { name: "스위트 버무스", amount: "30ml" },
      { name: "캄파리", amount: "30ml" },
    ],
    steps: [
      "락 글라스에 얼음을 넣고 재료를 붓는다.",
      "부드럽게 스터한다.",
      "오렌지로 가니시한다.",
    ],
    image: negroniImg,
    comment: "쓴단맛 조화 진득한 여운"
  },
  {
    id: 7,
    name: "위스키 사워",
    slug: "whiskey-sour",
    abv: 18,
    tags: ["위스키", "새콤", "폼"],
    ingredients: [
      { name: "버번 위스키", amount: "50ml" },
      { name: "레몬 주스", amount: "25ml" },
      { name: "슈가시럽", amount: "20ml" },
    ],
    steps: [
      "드라이 쉐이크 후 얼음을 넣고 다시 쉐이크한다.",
      "글라스에 따라낸다.",
      "레몬필 또는 체리로 가니시한다.",
    ],
    image: whiskeySourImg,
    comment: "상큼달콤 부드러운 폼"
  },
  {
    id: 8,
    name: "코스모폴리탄",
    slug: "cosmopolitan",
    abv: 18,
    tags: ["보드카", "트리플섹", "크랜베리"],
    ingredients: [
      { name: "보드카", amount: "40ml" },
      { name: "코앵트로", amount: "20ml" },
      { name: "크랜베리 주스", amount: "30ml" },
    ],
    steps: [
      "얼음과 함께 쉐이크한다.",
      "칠한 칵테일 글라스에 따른다.",
      "라임휠로 가니시한다.",
    ],
    image: cosmopolitanImg,
    comment: "루비빛 산미 깔끔한 마무리"
  },
  {
    id: 9,
    name: "다이키리",
    slug: "daiquiri",
    abv: 20,
    tags: ["럼", "라임", "클래식"],
    ingredients: [
      { name: "화이트 럼", amount: "50ml" },
      { name: "라임 주스", amount: "25ml" },
      { name: "슈가시럽", amount: "15ml" },
    ],
    steps: [
      "쉐이커에 재료와 얼음을 넣고 쉐이크한다.",
      "차갑게 칠한 글라스에 따른다.",
    ],
    image: daiquiriImg,
    comment: "라임 직선감 깨끗한 피니시"
  },
  {
    id: 10,
    name: "아페롤 스프리츠",
    slug: "aperol-spritz",
    abv: 11,
    tags: ["스파클링", "상큼", "이탈리안"],
    ingredients: [
      { name: "프로세코", amount: "90ml" },
      { name: "아페롤", amount: "60ml" },
      { name: "소다수", amount: "30ml" },
    ],
    steps: [
      "와인 글라스에 얼음을 넣는다.",
      "프로세코, 아페롤, 소다수 순으로 붓는다.",
      "살짝 스터 후 가니시한다.",
    ],
    image: aperolSpritzImg,
    comment: "오렌지빛 탄산감 여유로운 한 잔"
  },
  {
    id: 11,
    name: "모스코 뮬",
    slug: "moscow-mule",
    abv: 11,
    tags: ["보드카", "진저비어", "라임"],
    ingredients: [
      { name: "보드카", amount: "45ml" },
      { name: "라임 주스", amount: "15ml" },
      { name: "진저비어", amount: "적당량" },
    ],
    steps: [
      "컵(머그)에 얼음을 채운다.",
      "보드카와 라임 주스를 붓고 진저비어로 채운다.",
      "라임웨지로 가니시한다.",
    ],
    image: moscowMuleImg,
    comment: "진저의 톡쏨 상큼한 리프레시"
  },
  {
    id: 12,
    name: "롱 아일랜드 아이스티",
    slug: "long-island-iced-tea",
    abv: 22,
    tags: ["하이볼", "스트롱", "콜라"],
    ingredients: [
      { name: "보드카", amount: "15ml" },
      { name: "진", amount: "15ml" },
      { name: "화이트 럼", amount: "15ml" },
      { name: "데킬라", amount: "15ml" },
      { name: "트리플 섹", amount: "15ml" },
      { name: "레몬 주스", amount: "20ml" },
      { name: "콜라", amount: "적당량" },
    ],
    steps: [
      "하이볼에 얼음과 베이스 전부를 넣는다.",
      "살짝 스터 후 콜라로 채운다.",
      "레몬 가니시한다.",
    ],
    image: longIslandImg,
    comment: "진한 바디 달큰한 피니시"
  },
  {
    id: 13,
    name: "피나 콜라다",
    slug: "pina-colada",
    abv: 13,
    tags: ["럼", "파인애플", "코코넛"],
    ingredients: [
      { name: "화이트 럼", amount: "45ml" },
      { name: "코코넛 크림", amount: "30ml" },
      { name: "파인애플 주스", amount: "90ml" },
    ],
    steps: [
      "얼음과 함께 블렌드 또는 쉐이크한다.",
      "차가운 글라스에 따른다.",
      "파인애플/체리로 가니시한다.",
    ],
    image: pinaColadaImg,
    comment: "코코넛과 파인 부드럽게 달콤"
  },
  {
    id: 14,
    name: "팔로마",
    slug: "paloma",
    abv: 12,
    tags: ["데킬라", "자몽", "탄산"],
    ingredients: [
      { name: "데킬라", amount: "50ml" },
      { name: "라임 주스", amount: "10ml" },
      { name: "자몽 소다", amount: "적당량" },
    ],
    steps: [
      "림 솔트(선택) 적용 후 얼음을 채운다.",
      "데킬라와 라임 주스를 붓고 자몽소다로 채운다.",
      "가볍게 스터한다.",
    ],
    image: palomaImg,
    comment: "자몽의 담백한 쌉쌀함 깔끔한 청량감"
  },
  {
    id: 15,
    name: "블루 하와이",
    slug: "blue-hawaii",
    abv: 14,
    tags: ["럼", "보드카", "블루 큐라소"],
    ingredients: [
      { name: "화이트 럼", amount: "30ml" },
      { name: "보드카", amount: "15ml" },
      { name: "블루 큐라소", amount: "15ml" },
      { name: "파인애플 주스", amount: "60ml" },
    ],
    steps: [
      "얼음과 함께 쉐이크한다.",
      "필스너/하이볼에 따른다.",
      "파인애플로 가니시한다.",
    ],
    image: blueHawaiiImg,
    comment: "달콤 상큼한 트로피컬 톤"
  },
  {
    id: 16,
    name: "에스프레소 마티니",
    slug: "espresso-martini",
    abv: 18,
    tags: ["보드카", "커피", "디저트"],
    ingredients: [
      { name: "보드카", amount: "45ml" },
      { name: "에스프레소", amount: "30ml" },
      { name: "커피 리큐르", amount: "20ml" },
    ],
    steps: [
      "얼음과 함께 강하게 쉐이크한다.",
      "차갑게 칠한 글라스에 따른다.",
      "커피빈 3개로 가니시한다.",
    ],
    image: espressoMartiniImg,
    comment: "커피 향 분명 달큰한 여운"
  },  {
    id: 17,
    name: "블러디 메리",
    slug: "bloody-mary",
    abv: 12,
    tags: ["보드카", "토마토", "스파이시"],
    ingredients: [
      { name: "보드카", amount: "45ml" },
      { name: "토마토 주스", amount: "90ml" },
      { name: "레몬 주스", amount: "15ml" },
      { name: "우스터 소스 & 타바스코", amount: "약간" },
      { name: "셀러리 소금·후추", amount: "취향" },
    ],
    steps: [
      "글라스에 얼음을 넣는다.",
      "모든 재료를 붓고 잘 스터한다.",
      "셀러리 스틱으로 가니시한다.",
    ],
    image: bloodyMaryImg,
    comment: "토마토와 스파이스 해장용 한잔"
  },
  {
    id: 18,
    name: "마이 타이",
    slug: "mai-tai",
    abv: 20,
    tags: ["럼", "트로피컬", "상큼"],
    ingredients: [
      { name: "화이트 럼", amount: "40ml" },
      { name: "다크 럼", amount: "20ml" },
      { name: "라임 주스", amount: "20ml" },
      { name: "오렌지 큐라소", amount: "15ml" },
      { name: "아몬드 시럽", amount: "15ml" },
    ],
    steps: [
      "쉐이커에 화이트 럼·라임·큐라소·시럽을 넣고 쉐이크한다.",
      "글라스에 붓고 다크 럼을 플로팅한다.",
      "라임과 민트로 가니시한다.",
    ],
    image: maiTaiImg,
    comment: "트로피컬 감성 깊은 향"
  },
  {
    id: 19,
    name: "상그리아",
    slug: "sangria",
    abv: 9,
    tags: ["와인", "과일", "파티"],
    ingredients: [
      { name: "레드 와인", amount: "1병" },
      { name: "브랜디", amount: "60ml" },
      { name: "오렌지 주스", amount: "120ml" },
      { name: "사과·오렌지·레몬", amount: "조각" },
      { name: "탄산수", amount: "적당량" },
    ],
    steps: [
      "큰 피처에 과일 조각을 담는다.",
      "와인·브랜디·주스를 붓고 냉장 숙성한다.",
      "잔에 따르고 탄산수로 채운다.",
    ],
    image: sangriaImg,
    comment: "과일 풍성 파티 무드"
  },
  {
    id: 20,
    name: "벨리니",
    slug: "bellini",
    abv: 8,
    tags: ["스파클링", "복숭아", "이탈리안"],
    ingredients: [
      { name: "스파클링 와인(프로세코)", amount: "90ml" },
      { name: "피치 퓌레", amount: "60ml" },
    ],
    steps: [
      "플루트 글라스에 피치 퓌레를 넣는다.",
      "스파클링 와인을 천천히 따른다.",
      "살짝 저어 완성한다.",
    ],
    image: belliniImg,
    comment: "복숭아 달콤 가볍게"
  },
];
