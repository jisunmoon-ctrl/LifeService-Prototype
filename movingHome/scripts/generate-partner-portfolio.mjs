import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const seedsPath = join(__dirname, "partner-seeds.jsonl");
const sourcePath = join(__dirname, "soomgo-review-image-urls.json");
const poolOutput = join(root, "src/app/data/soomgoReviewImagePool.json");
const countsOutput = join(root, "src/app/data/partnerPortfolioImageCounts.json");

const seeds = readFileSync(seedsPath, "utf8")
  .trim()
  .split("\n")
  .map((line) => JSON.parse(line));

const source = JSON.parse(readFileSync(sourcePath, "utf8"));

/** 업체별 포트폴리오 이미지 개수 (기본 12장) */
const PORTFOLIO_IMAGE_COUNTS = {
  11: 6,
  30: 4,
  34: 1,
  36: 10,
  38: 9,
  39: 9,
  54: 10,
  55: 8,
  66: 4,
  77: 10,
  85: 1,
  91: 3,
  92: 8,
};

const totalImagesNeeded = seeds.reduce((sum, { id }) => {
  return sum + (PORTFOLIO_IMAGE_COUNTS[id] ?? 12);
}, 0);

const poolSize = Math.min(source.image_urls.length, totalImagesNeeded + 100);

const pool = {
  schema: "soomgo_review_image_pool",
  version: "1.0",
  source_url: source.source_url,
  extracted_at: source.extracted_at,
  pool_size: poolSize,
  image_urls: source.image_urls.slice(0, poolSize),
};

const counts = {
  schema: "moving_partner_portfolio_image_counts",
  version: "1.0",
  partner_count: seeds.length,
  partners: seeds.map(({ id, name }) => ({
    partner_id: id,
    partner_name: name,
    image_count: PORTFOLIO_IMAGE_COUNTS[id] ?? 12,
  })),
};

writeFileSync(poolOutput, `${JSON.stringify(pool, null, 2)}\n`, "utf8");
writeFileSync(countsOutput, `${JSON.stringify(counts, null, 2)}\n`, "utf8");
console.log(`Wrote pool=${poolSize} urls, partners=${counts.partners.length}, needed=${totalImagesNeeded}`);
