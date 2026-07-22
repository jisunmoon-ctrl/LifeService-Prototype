import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const seedsPath = join(__dirname, "partner-seeds.jsonl");
const scriptsOutput = join(__dirname, "movingPartnerLatestReviews.json");
const appOutput = join(root, "src/app/data/movingPartnerLatestReviews.json");

const seeds = readFileSync(seedsPath, "utf8")
  .trim()
  .split("\n")
  .map((line) => JSON.parse(line));

const reviewBodyPool = [...new Set(seeds.flatMap((seed) => seed.reviews.map(([, body]) => body)))];

function expandReviews(partnerId, seedReviews, maxShown) {
  const expanded = seedReviews.map(([rating, body], index) => ({
    review_id: `R${String(partnerId).padStart(3, "0")}-${String(index + 1).padStart(2, "0")}`,
    author: "오**",
    rating,
    date: "2026-06-23",
    body,
    order: index + 1,
  }));

  let poolIndex = 0;
  while (expanded.length < maxShown) {
    const [rating] = seedReviews[expanded.length % seedReviews.length];
    expanded.push({
      review_id: `R${String(partnerId).padStart(3, "0")}-${String(expanded.length + 1).padStart(2, "0")}`,
      author: "오**",
      rating,
      date: "2026-06-23",
      body: reviewBodyPool[(partnerId + poolIndex) % reviewBodyPool.length],
      order: expanded.length + 1,
    });
    poolIndex += 1;
  }

  return expanded.slice(0, maxShown);
}

const partners = seeds.map(({ id, name, count, reviews }) => {
  const shownCount = count === 0 ? 0 : Math.min(10, Math.max(1, (id % 10) + 1));

  return {
    partner_id: id,
    partner_name: name,
    total_review_count: count,
    shown_count: shownCount,
    reviews: shownCount === 0 ? [] : expandReviews(id, reviews, shownCount),
  };
});

const full = {
  schema: "moving_partner_latest_reviews",
  version: "1.0",
  generated_for: "PRD 목업 (이사 파트너홈)",
  note: "업체별 최신 리뷰 최대 10개. 가상 목업 데이터.",
  partner_count: partners.length,
  total_reviews: partners.length * 10,
  partners,
};

const slim = {
  schema: full.schema,
  version: full.version,
  partner_count: full.partner_count,
  partners: partners.map((p) => ({
    partner_id: p.partner_id,
    partner_name: p.partner_name,
    total_review_count: p.total_review_count,
    reviews: p.reviews.map(({ rating, body }) => ({ rating, body })),
  })),
};

writeFileSync(scriptsOutput, `${JSON.stringify(full, null, 2)}\n`, "utf8");
writeFileSync(appOutput, `${JSON.stringify(slim, null, 2)}\n`, "utf8");
console.log(`Wrote ${partners.length} partners`);
