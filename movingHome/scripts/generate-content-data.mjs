import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const generated = JSON.parse(
  readFileSync(join(__dirname, "generated-content.json"), "utf8"),
);
const profileMock = JSON.parse(
  readFileSync(join(__dirname, "content-profile-mock.json"), "utf8"),
);
const PROFILE_THUMBNAIL_URLS = profileMock.profile_thumbnail_urls;

const LOCAL_IMAGE_IMPORTS = {
  "__LOCAL__/guarantee/01-hero.png": "imgGuaranteeHero",
  "__LOCAL__/guarantee/02-comparison.png": "imgGuaranteeComparison",
  "__LOCAL__/guarantee/03-howto.png": "imgGuaranteeHowto",
  "__LOCAL__/guarantee/04-usp-01.png": "imgGuaranteeUsp01",
  "__LOCAL__/guarantee/04-usp-02.png": "imgGuaranteeUsp02",
};

const STATIC_META = {
  "partner-guarantee": {
    title: "견적정찰제·직접중개, 오늘의집 책임보장",
    author: "오늘의집",
    bio: "오늘의집 공식",
    thumbnail: "imgThumbPartnerGuarantee",
    thumbnailIsImport: true,
    publishedAt: "상시",
    views: "—",
    sourceUrl: "https://ohou.se/competitions/1282",
  },
  "move-type-summary": {
    title: "포장이사/반포장/일반이사 종류별 정리",
    author: "Lyu59",
    bio: "이사 종류별 차이를 쉽게 정리해 드려요.",
    thumbnail: "imgThumbMoveTypeSummary",
    thumbnailIsImport: true,
    publishedAt: "02.27",
    views: "179",
    likes: 0,
    comments: 0,
    shares: 0,
  },
  "mypackage-save": {
    title: "🏠오늘의집 나만의 패키지로 ₩506,466원 절약한 꿀팁 소개합니다~",
    author: "리니랑마미",
    bio: "이사하며 알게 된 절약 노하우를 나눠요.",
    thumbnail: "imgThumbMypackageSave",
    thumbnailIsImport: true,
    publishedAt: "12.08",
    views: "4,066",
    likes: 11,
    comments: 0,
    shares: 0,
    sourceUrl:
      "https://contents.ohou.se/community/posts/%EC%98%A4%EB%8A%98%EC%9D%98%EC%A7%91-%EB%82%98%EB%A7%8C%EC%9D%98%ED%8C%A8%ED%82%A4%EC%A7%80%EB%A1%9C-506-466%EC%9B%90-%EC%A0%88%EC%95%BD%ED%95%9C-%EA%BF%80%ED%8C%81-%EC%86%8C%EA%B0%9C%ED%95%A9%EB%8B%88%EB%8B%A4-444552174624768",
  },
  "tworoom-pack-vs-semi": {
    thumbnail: "imgThumbTworoomPackVsSemi",
    thumbnailIsImport: true,
    publishedAt: "04.28",
    views: "70",
    likes: 2,
    comments: 0,
    shares: 2,
  },
  "6ton-packing": {
    thumbnail: "imgThumb6tonPacking",
    thumbnailIsImport: true,
    bio: "간식쟁이 유지어터 맛있게 사는집✨️",
    publishedAt: "03.10",
    views: "24,329",
  },
  "company-select-guide": {
    thumbnail: "imgThumbCompanySelectGuide",
    thumbnailIsImport: true,
    publishedAt: "04.07",
    views: "27,894",
    likes: 339,
    comments: 19,
    shares: 34,
  },
  "tenant-4-tips": {
    thumbnail: "imgThumbTenant4Tips",
    thumbnailIsImport: true,
    author: "오늘의집에디터",
    bio: "라이프스타일 슈퍼앱, 오늘의집 에디터입니다.",
    publishedAt: "10.24",
    views: "27,627",
    likes: 217,
    comments: 8,
    shares: 22,
  },
  "d15-move-prep": {
    title: "첫자취 플래너 | D-15, 이사 전 준비할 것",
    author: "자취플래너✒️",
    bio: "첫 자취를 위한 실전 플랜을 공유해요.",
    thumbnail: "imgThumbD15MovePrep",
    thumbnailIsImport: true,
    publishedAt: "03.04",
    views: "53,146",
    likes: 691,
    comments: 11,
    shares: 117,
  },
  "oneroom-checklist": {
    thumbnail: "imgThumbOneroomChecklist",
    thumbnailIsImport: true,
    publishedAt: "02.25",
    views: "1,367",
    likes: 39,
    comments: 0,
    shares: 4,
  },
  "small-house-remodel": {
    thumbnail: "imgThumbSmallHouseRemodel",
    thumbnailIsImport: true,
    author: "앙고라홈",
    bio: "insta: withhouse813 / blog: alice813",
    publishedAt: "06.12",
    views: "68,081",
    likes: 366,
    comments: 31,
    shares: 37,
  },
  "move-veteran-tips": {
    thumbnail: "imgThumbMoveVeteranTips",
    thumbnailIsImport: true,
  },
  "post-move-essentials": {
    thumbnail: "imgThumbPostMoveEssentials",
    thumbnailIsImport: true,
    publishedAt: "08.30",
    views: "14,055",
    likes: 90,
    comments: 16,
    shares: 9,
  },
};

function formatViews(n) {
  if (n == null || n === "") return "0";
  const num = typeof n === "number" ? n : Number(String(n).replace(/,/g, ""));
  if (Number.isNaN(num)) return String(n);
  return num.toLocaleString("en-US");
}

function hashString(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function createSeededRandom(seed) {
  let state = seed >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state;
  };
}

function displayProfileUrl(url) {
  return url.replace(/w=\d+/g, "w=80").replace(/h=\d+/g, "h=80");
}

function mockEngagement(contentId) {
  const next = createSeededRandom(hashString(contentId));
  const daysAgo = 1 + (next() % 90);
  const views = 120 + (next() % 98_880);
  const likes = next() % 501;
  const comments = next() % 51;
  const shares = next() % 31;
  const avatar = displayProfileUrl(PROFILE_THUMBNAIL_URLS[next() % PROFILE_THUMBNAIL_URLS.length]);

  return {
    avatar,
    publishedAt: `${daysAgo}일전`,
    views: formatViews(views),
    likes,
    comments,
    shares,
  };
}

function serializeBlock(block) {
  if (block.type === "text") {
    return `    { type: "text", text: ${JSON.stringify(block.text)} }`;
  }
  const localKey = LOCAL_IMAGE_IMPORTS[block.src];
  if (localKey) {
    return `    { type: "image", src: ${localKey} }`;
  }
  return `    { type: "image", src: ${JSON.stringify(block.src)} }`;
}

function buildItem(id, data) {
  const staticMeta = STATIC_META[id] || {};
  const meta = { ...(data.meta || {}), ...staticMeta };
  const engagement = mockEngagement(id);

  if (data.error) {
    console.error(`WARN ${id}: ${data.error} — keeping card with empty body`);
    return {
      id,
      title: staticMeta.title || meta.title || id,
      author: staticMeta.author || meta.author || "",
      thumbnail: staticMeta.thumbnail || meta.thumbnail || "",
      thumbnailIsImport: Boolean(staticMeta.thumbnailIsImport),
      avatar: engagement.avatar,
      bio: staticMeta.bio || meta.bio || "",
      publishedAt: engagement.publishedAt,
      views: engagement.views,
      likes: engagement.likes,
      comments: engagement.comments,
      shares: engagement.shares,
      sourceUrl: meta.sourceUrl || staticMeta.sourceUrl || "",
      blocks: [],
    };
  }

  if (!data.blocks?.length) {
    console.error(`SKIP ${id}: no blocks`);
    return null;
  }

  const blocks = data.blocks.map((b) => {
    if (b.type === "image" && b.src?.startsWith("__LOCAL__/")) {
      return { ...b, src: b.src };
    }
    return b;
  });

  const thumbnail =
    meta.thumbnailIsImport
      ? meta.thumbnail
      : meta.thumbnail || blocks.find((b) => b.type === "image")?.src || "";

  return {
    id,
    title: meta.title,
    author: meta.author,
    thumbnail,
    thumbnailIsImport: Boolean(meta.thumbnailIsImport),
    avatar: engagement.avatar,
    bio: meta.bio || "",
    publishedAt: engagement.publishedAt,
    views: engagement.views,
    likes: engagement.likes,
    comments: engagement.comments,
    shares: engagement.shares,
    sourceUrl: meta.sourceUrl || "",
    blocks,
  };
}

const ORDER = [
  "partner-guarantee",
  "move-type-summary",
  "mypackage-save",
  "tworoom-pack-vs-semi",
  "6ton-packing",
  "company-select-guide",
  "tenant-4-tips",
  "d15-move-prep",
  "oneroom-checklist",
  "small-house-remodel",
  "move-veteran-tips",
  "post-move-essentials",
];

const items = ORDER.map((id) => buildItem(id, generated[id])).filter(Boolean);

const itemStrings = items
  .map((item) => {
    const thumb = item.thumbnailIsImport
      ? item.thumbnail
      : JSON.stringify(item.thumbnail);

    return `  {
    id: ${JSON.stringify(item.id)},
    title: ${JSON.stringify(item.title)},
    author: ${JSON.stringify(item.author)},
    thumbnail: ${thumb},
    avatar: ${JSON.stringify(item.avatar)},
    bio: ${JSON.stringify(item.bio)},
    publishedAt: ${JSON.stringify(item.publishedAt)},
    views: ${JSON.stringify(item.views)},
    likes: ${item.likes},
    comments: ${item.comments},
    shares: ${item.shares},
    sourceUrl: ${JSON.stringify(item.sourceUrl)},
    blocks: [
${item.blocks.map(serializeBlock).join(",\n")}
    ],
  }`;
  })
  .join(",\n");

const file = `import imgGuaranteeHero from "../../assets/content/guarantee/01-hero.png";
import imgGuaranteeComparison from "../../assets/content/guarantee/02-comparison.png";
import imgGuaranteeHowto from "../../assets/content/guarantee/03-howto.png";
import imgGuaranteeUsp01 from "../../assets/content/guarantee/04-usp-01.png";
import imgGuaranteeUsp02 from "../../assets/content/guarantee/04-usp-02.png";
import imgThumbPartnerGuarantee from "../../assets/content/thumbnails/partner-guarantee.png";
import imgThumbMoveTypeSummary from "../../assets/content/thumbnails/move-type-summary.png";
import imgThumbMypackageSave from "../../assets/content/thumbnails/mypackage-save.png";
import imgThumbTworoomPackVsSemi from "../../assets/content/thumbnails/tworoom-pack-vs-semi.png";
import imgThumb6tonPacking from "../../assets/content/thumbnails/6ton-packing.png";
import imgThumbCompanySelectGuide from "../../assets/content/thumbnails/company-select-guide.png";
import imgThumbTenant4Tips from "../../assets/content/thumbnails/tenant-4-tips.png";
import imgThumbD15MovePrep from "../../assets/content/thumbnails/d15-move-prep.png";
import imgThumbOneroomChecklist from "../../assets/content/thumbnails/oneroom-checklist.png";
import imgThumbSmallHouseRemodel from "../../assets/content/thumbnails/small-house-remodel.png";
import imgThumbMoveVeteranTips from "../../assets/content/thumbnails/move-veteran-tips.png";
import imgThumbPostMoveEssentials from "../../assets/content/thumbnails/post-move-essentials.png";

export type ContentBlock =
  | { type: "text"; text: string }
  | { type: "image"; src: string };

export interface ContentItem {
  id: string;
  title: string;
  author: string;
  thumbnail: string;
  avatar: string;
  bio: string;
  publishedAt: string;
  views: string;
  likes: number;
  comments: number;
  shares: number;
  sourceUrl?: string;
  blocks: ContentBlock[];
}

export const CONTENT_ITEMS: ContentItem[] = [
${itemStrings}
];

export function getContentById(id: string): ContentItem | undefined {
  return CONTENT_ITEMS.find((item) => item.id === id);
}
`;

writeFileSync(join(__dirname, "../src/app/data/contentData.ts"), file);
console.error(`Wrote ${items.length} items to contentData.ts`);
