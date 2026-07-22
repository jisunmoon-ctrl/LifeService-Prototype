/**
 * Fetches real ohou.se content and prints ContentBlock[] JSON per item.
 * Run: node scripts/fetch-content-blocks.mjs
 */

const SOURCES = {
  "partner-guarantee": { type: "local-guarantee" },
  "move-type-summary": {
    type: "community",
    url: "https://contents.ohou.se/community/posts/%ED%8F%AC%EC%9E%A5%EC%9D%B4%EC%82%AC-%EB%B0%98%ED%8F%AC%EC%9E%A5%EC%9D%B4%EC%82%AC-%EC%9D%BC%EB%B0%98%EC%9D%B4%EC%82%AC-%EC%A2%85%EB%A5%98%EB%B3%84-%EC%9D%B4%EC%82%AC-%EC%B4%88%EA%B0%84%EB%8B%A8-%EC%A0%95%EB%A6%AC-473229222674432",
  },
  "mypackage-save": {
    type: "community",
    url: "https://contents.ohou.se/community/posts/%EC%98%A4%EB%8A%98%EC%9D%98%EC%A7%91-%EB%82%98%EB%A7%8C%EC%9D%98%ED%8C%A8%ED%82%A4%EC%A7%80%EB%A1%9C-506-466%EC%9B%90-%EC%A0%88%EC%95%BD%ED%95%9C-%EA%BF%80%ED%8C%81-%EC%86%8C%EA%B0%9C%ED%95%A9%EB%8B%88%EB%8B%A4-444552174624768",
  },
  "tworoom-pack-vs-semi": { type: "advice", id: 12409 },
  "6ton-packing": { type: "advice", id: 4522 },
  "company-select-guide": { type: "advice", id: 4595 },
  "tenant-4-tips": { type: "advice", id: 2612 },
  "d15-move-prep": { type: "advice", id: 4510 },
  "oneroom-checklist": { type: "advice", id: 12199 },
  "small-house-remodel": { type: "advice", id: 6526 },
  "move-veteran-tips": {
    type: "community",
    url: "https://contents.ohou.se/community/posts/7%EB%85%84-%EC%82%AC%EC%9D%B4-%EC%9D%B4%EC%82%AC-6%EB%B2%88-%EA%B2%BD%ED%97%98%EC%9E%90%EA%B0%80-%EC%A0%95%EB%A6%AC%ED%95%9C-%EC%9D%B4%EC%82%BF%EB%82%A0-%EA%BF%80%ED%8C%81-5%EA%B0%80%EC%A7%80-471038580113536",
  },
  "post-move-essentials": { type: "advice", id: 9639 },
};

function stripHtml(html) {
  if (!html) return "";
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function pushText(blocks, text) {
  const t = (text || "").trim();
  if (!t) return;
  const last = blocks[blocks.length - 1];
  if (last?.type === "text") {
    last.text += (last.text.endsWith("\n") ? "" : "\n\n") + t;
  } else {
    blocks.push({ type: "text", text: t });
  }
}

function parseAdviceContents(contents = []) {
  const blocks = [];
  for (const c of contents) {
    if (c.type === "text" || c.type === "title") {
      const text = stripHtml(c.content || c.description || "");
      if (text) pushText(blocks, text);
    } else if (c.type === "photo" && c.photo_img_url) {
      blocks.push({ type: "image", src: c.photo_img_url });
    }
  }
  return blocks;
}

async function fetchAdvice(id) {
  const res = await fetch(`https://ohou.se/advices/${id}.json`);
  if (!res.ok) throw new Error(`advice ${id}: ${res.status}`);
  const { advices: a } = await res.json();
  return {
    meta: {
      title: a.title,
      author: a.writer?.nickname,
      bio: a.writer?.introduction,
      thumbnail: a.cover_img_url || a.cover_image_url,
      publishedAt: formatDate(a.created_at),
      views: String(a.view_count),
      likes: a.like_count ?? 0,
      comments: a.reply_count ?? 0,
      shares: a.share_count ?? 0,
      sourceUrl: `https://ohou.se/advices/${id}`,
    },
    blocks: parseAdviceContents(a.contents),
  };
}

async function fetchProject(id) {
  const res = await fetch(`https://ohou.se/projects/${id}.json`);
  if (!res.ok) throw new Error(`project ${id}: ${res.status}`);
  const { project: p } = await res.json();
  const blocks = [];
  for (const card of p.cards || []) {
    if (!card) continue;
    if (card.description) pushText(blocks, stripHtml(card.description));
    const img = card.image_url || card.img_url;
    if (img) blocks.push({ type: "image", src: img });
  }
  return {
    meta: {
      title: p.title,
      author: p.user?.nickname,
      bio: p.user?.introduction,
      thumbnail: p.cover_img_url || p.cover_image_url,
      publishedAt: formatDate(p.created_at),
      views: String(p.view_count),
      likes: p.like_count ?? 0,
      comments: p.reply_count ?? 0,
      shares: p.share_count ?? 0,
      sourceUrl: `https://contents.ohou.se/projects/${p.id}`,
    },
    blocks,
  };
}

function parseCommunityPost(post) {
  const blocks = [];
  for (const c of post.components || []) {
    const type = c.componentType || c.type;
    if (type === "TEXT" || type === "text") {
      pushText(blocks, c.content || c.text || "");
    } else if (type === "IMAGE" || type === "image") {
      const src = c.image?.url || c.imageUrl || c.url;
      if (src) blocks.push({ type: "image", src });
    }
  }
  return blocks;
}

function firstCommunityImage(post) {
  for (const c of post.components || []) {
    const type = c.componentType || c.type;
    if (type === "IMAGE" || type === "image") {
      return c.image?.url || c.imageUrl || c.url || null;
    }
  }
  return null;
}

async function fetchCommunity(url) {
  const res = await fetch(url, { headers: { "user-agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`community: ${res.status}`);
  const html = await res.text();
  const ogMatch = html.match(/property="og:image" content="([^"]+)"/);
  const ogImage = ogMatch?.[1]?.replace(/&amp;/g, "&") || null;
  const m = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
  if (!m) throw new Error("community: no __NEXT_DATA__");
  const data = JSON.parse(m[1]);
  const queries = data?.props?.pageProps?.dehydratedState?.queries || [];
  let post = null;
  for (const q of queries) {
    const d = q.state?.data;
    if (d?.post) {
      post = d.post;
      break;
    }
  }
  if (!post) throw new Error("community: post not found");
  const writer = post.writer?.profile || post.user;
  const thumbnail =
    post.coverImageUrl ||
    post.thumbnailUrl ||
    firstCommunityImage(post) ||
    ogImage ||
    "";
  return {
    meta: {
      title: post.title?.trim(),
      author: writer?.nickname,
      bio: writer?.description || writer?.introduction || "",
      thumbnail,
      publishedAt: formatDate(post.createdAt || post.created_at),
      views: String(post.viewCount ?? post.view_count ?? ""),
      likes: post.likeCount ?? post.like_count ?? 0,
      comments: post.commentCount ?? post.reply_count ?? 0,
      shares: post.shareCount ?? post.share_count ?? 0,
      sourceUrl: url.split("?")[0],
    },
    blocks: parseCommunityPost(post),
  };
}

async function findAdviceByTitle(titlePart, views) {
  for (let id = 12000; id <= 12700; id++) {
    const res = await fetch(`https://ohou.se/advices/${id}.json`);
    if (!res.ok) continue;
    const { advices: a } = await res.json();
    if (!a) continue;
    if (a.title?.includes(titlePart) || (views && a.view_count === views)) {
      return fetchAdvice(a.id);
    }
  }
  throw new Error(`advice not found: ${titlePart}`);
}

function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return String(iso).slice(0, 5);
  return `${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

async function resolveSource(key, source) {
  if (source.type === "advice") return fetchAdvice(source.id);
  if (source.type === "project") {
    try {
      return await fetchProject(source.id);
    } catch {
      // legacy card id fallback
      const res = await fetch(`https://ohou.se/cards/${source.id}.json`);
      if (res.ok) {
        const { card: c } = await res.json();
        const blocks = [];
        if (c.description) pushText(blocks, stripHtml(c.description));
        if (c.image_url) blocks.push({ type: "image", src: c.image_url });
        for (const p of c.placeholders || []) {
          if (p.description) pushText(blocks, stripHtml(p.description));
          if (p.image_url) blocks.push({ type: "image", src: p.image_url });
        }
        return {
          meta: {
            title: c.title || c.description?.slice(0, 40),
            author: c.user?.nickname,
            sourceUrl: c.share_url,
          },
          blocks,
        };
      }
      throw new Error(`project/card ${source.id} not found`);
    }
  }
  if (source.type === "community") return fetchCommunity(source.url);
  if (source.type === "advice-search") return findAdviceByTitle(source.title, source.views);
  if (source.type === "local-guarantee") {
    return {
      meta: { sourceUrl: "https://ohou.se/competitions/1282" },
      blocks: [
        { type: "image", src: "__LOCAL__/guarantee/01-hero.png" },
        { type: "image", src: "__LOCAL__/guarantee/04-usp-01.png" },
        { type: "image", src: "__LOCAL__/guarantee/04-usp-02.png" },
        { type: "image", src: "__LOCAL__/guarantee/02-comparison.png" },
        { type: "image", src: "__LOCAL__/guarantee/03-howto.png" },
      ],
    };
  }
  throw new Error(`unknown source type for ${key}`);
}

const outPath = process.argv.find((a) => a.startsWith("--out="))?.slice(6);

const results = {};
for (const [key, source] of Object.entries(SOURCES)) {
  try {
    results[key] = await resolveSource(key, source);
    console.error(`OK ${key}: ${results[key].blocks.length} blocks`);
  } catch (e) {
    console.error(`FAIL ${key}:`, e.message);
    results[key] = { error: e.message };
  }
}

const json = JSON.stringify(results, null, 2);
if (outPath) {
  const { writeFileSync } = await import("fs");
  writeFileSync(outPath, json);
} else {
  console.log(json);
}
