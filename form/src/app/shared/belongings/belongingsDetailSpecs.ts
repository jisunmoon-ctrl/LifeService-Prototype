/**
 * 짐 항목 세부정보 스펙 (엑셀 v2 0406 기준)
 * 필드가 있으면 ChipSelect로 노출, "-" / 빈값이면 해당 필드 숨김. 수량은 항상 표시.
 */

export type DetailFieldKey = "kind" | "size" | "width" | "height" | "install";

export interface ProductDetailSpec {
  id: string;
  name: string;
  fields: Partial<Record<DetailFieldKey, string[]>>;
}

export const INSTALL_OPTIONS = ["분해·설치 필요", "분해만", "설치만", "필요 없음"] as const;

export const DETAIL_FIELD_LABELS: Record<DetailFieldKey, string> = {
  kind: "종류",
  size: "크기",
  width: "너비",
  height: "높이",
  install: "분리/설치 필요",
};

const INSTALL = [...INSTALL_OPTIONS];

/** UI 표시명 → 스펙 (PRODUCT_CATEGORIES 이름과 맞춤; 장롱 = 엑셀 옷장(장농)) */
export const PRODUCT_DETAIL_SPECS: Record<string, ProductDetailSpec> = {
  TV: {
    id: "TV",
    name: "TV",
    fields: {
      kind: ["일반", "벽걸이", "스탠드", "기타"],
      size: ["70인치 미만", "70인치 이상"],
    },
  },
  냉장고: {
    id: "REFRIGERATOR",
    name: "냉장고",
    fields: {
      kind: ["일반", "김치 냉장고", "와인 냉장고", "기타"],
      size: ["4도어", "양문형", "1도어"],
    },
  },
  세탁기: {
    id: "WASHER",
    name: "세탁기",
    fields: {
      kind: ["통돌이", "드럼", "기타"],
      size: ["25kg 미만", "25kg 이상"],
    },
  },
  건조기: {
    id: "DRYER",
    name: "건조기",
    fields: {
      size: ["20kg 미만", "20kg 이상"],
    },
  },
  스타일러: { id: "STYLER", name: "스타일러", fields: {} },
  에어컨: {
    id: "AIR_CONDITIONER",
    name: "에어컨",
    fields: {
      kind: ["벽걸이", "스탠딩", "기타"],
      install: INSTALL,
    },
  },
  "레인지·인덕션": { id: "RANGE_HOOD", name: "레인지·인덕션", fields: {} },
  안마의자: {
    id: "MASSAGE_CHAIR",
    name: "안마의자",
    fields: { install: INSTALL },
  },
  정수기: {
    id: "WATER_PURIFIER",
    name: "정수기",
    fields: { install: INSTALL },
  },
  공기청정기: {
    id: "AIR_PURIFIER",
    name: "공기청정기",
    fields: {
      height: ["50cm 미만", "50-100cm", "100cm 초과"],
    },
  },
  청소기: {
    id: "VACUUM",
    name: "청소기",
    fields: {
      kind: ["유선형", "무선형", "로봇 청소기", "기타"],
    },
  },
  모니터: {
    id: "MONITOR",
    name: "모니터",
    fields: {
      size: ["30인치 미만", "30인치 이상"],
    },
  },
  식기세척기: { id: "DISHWASHER", name: "식기세척기", fields: {} },
  전자레인지: {
    id: "MICROWAVE",
    name: "전자레인지",
    fields: {
      kind: ["일반형", "오븐형", "기타"],
    },
  },
  침대: {
    id: "BED",
    name: "침대",
    fields: {
      kind: ["일반", "수납형", "2층·벙커형", "기타"],
      size: ["접이식", "싱글·슈퍼싱글", "더블·퀸", "킹 이상"],
    },
  },
  소파: {
    id: "SOFA",
    name: "소파",
    fields: {
      kind: ["일반", "리클라이너", "쇼파베드", "기타"],
      size: ["1인용", "2인용", "3인용", "4인용 이상"],
    },
  },
  "옷장(단품)": { id: "WARDROBE", name: "옷장(단품)", fields: {} },
  장롱: {
    id: "DRESSER",
    name: "장롱",
    fields: {
      kind: ["일반", "슬라이드장", "붙박이", "기타"],
      width: ["100cm 미만", "100-149cm", "150-199cm", "200cm 이상"],
      install: INSTALL,
    },
  },
  행거: {
    id: "HANGER",
    name: "행거",
    fields: {
      kind: ["시스템", "이동형", "고정형", "기타"],
      size: ["1단", "2단", "3단", "4단 이상"],
    },
  },
  "거실장·TV장": {
    id: "TV_STAND",
    name: "거실장·TV장",
    fields: {
      width: ["100cm 미만", "100-149cm", "150-199cm", "200cm 이상"],
    },
  },
  "수납·서랍장": {
    id: "STORAGE_CABINET",
    name: "수납·서랍장",
    fields: {
      width: ["50cm 미만", "50-99cm", "100-149cm", "150cm 이상"],
    },
  },
  화장대: { id: "DRESSING_TABLE", name: "화장대", fields: {} },
  선반: {
    id: "SHELF",
    name: "선반",
    fields: {
      width: ["50cm 미만", "50-99cm", "100-149cm", "150cm 이상"],
      height: ["50cm 미만", "50-99cm", "100-149cm", "150cm 이상"],
    },
  },
  "진열장·책장": {
    id: "DISPLAY_CABINET",
    name: "진열장·책장",
    fields: {
      width: ["50cm 미만", "50-99cm", "100-149cm", "150cm 이상"],
    },
  },
  책상: {
    id: "DESK",
    name: "책상",
    fields: {
      kind: ["일반", "독서실형", "컴퓨터 책상", "기타"],
      width: ["100cm 미만", "100-149cm", "150-199cm", "200cm 이상"],
    },
  },
  "테이블·식탁": {
    id: "TABLE",
    name: "테이블·식탁",
    fields: {
      size: ["1~2인용", "3~4인용", "5~6인용", "7인 이상"],
    },
  },
  의자: {
    id: "CHAIR",
    name: "의자",
    fields: {
      kind: ["일반", "게임용", "스툴", "기타"],
    },
  },
  거울: {
    id: "MIRROR",
    name: "거울",
    fields: {
      kind: ["벽걸이", "스탠딩", "기타"],
      size: ["반전신", "전신"],
    },
  },
  커튼: {
    id: "CURTAIN",
    name: "커튼",
    fields: {
      kind: ["커튼", "블라인드", "버티컬", "기타"],
      install: INSTALL,
    },
  },
  조명: { id: "LIGHTING", name: "조명", fields: {} },
  피아노: {
    id: "PIANO",
    name: "피아노",
    fields: {
      kind: ["일반", "디지털", "그랜드", "기타"],
    },
  },
  캣타워: { id: "CAT_TOWER", name: "캣타워", fields: {} },
  운동용품: {
    id: "EXERCISE",
    name: "운동용품",
    fields: {
      kind: ["러닝머신", "사이클", "보드·스키", "골프백", "자전거", "기타"],
    },
  },
  화분: {
    id: "PLANT",
    name: "화분",
    fields: {
      height: ["50cm 미만", "50-99cm", "100-149cm", "150-199cm", "200cm 이상"],
    },
  },
  캐리어: {
    id: "CARRIER",
    name: "캐리어",
    fields: {
      size: ["20인치 미만", "20인치", "24인치", "24인치 초과"],
    },
  },
};

export function getProductDetailSpec(name: string): ProductDetailSpec {
  return (
    PRODUCT_DETAIL_SPECS[name] ?? {
      id: name,
      name,
      fields: {},
    }
  );
}

export function getDetailFieldOrder(spec: ProductDetailSpec): DetailFieldKey[] {
  const order: DetailFieldKey[] = ["kind", "size", "width", "height", "install"];
  return order.filter((key) => (spec.fields[key]?.length ?? 0) > 0);
}
