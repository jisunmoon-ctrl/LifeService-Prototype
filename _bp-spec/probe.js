async (page) => {
  const URL_ = 'https://o2o.qa-web.dailyhou.se/my/consultations?consultationType=0';
  const WIDTHS = [375, 768, 1024, 1256, 1440];

  const PROBE = () => {
    const R = el => el.getBoundingClientRect();
    const CS = el => getComputedStyle(el);
    const px = v => Math.round(parseFloat(v) || 0);
    const sig = el => {
      const c = (el.getAttribute('class') || '').trim().split(/\s+/).filter(Boolean).slice(0, 2).join('.');
      return el.tagName.toLowerCase() + (c ? '.' + c : '');
    };
    const chain = el => { const a = []; let n = el; while (n && n !== document.documentElement) { a.unshift(sig(n)); n = n.parentElement; } return a.join('>'); };
    const box = c => [px(c.paddingTop), px(c.paddingRight), px(c.paddingBottom), px(c.paddingLeft)].join('/');
    // redact PII: digit runs (phone/date/address numbers) -> #, keep structural labels only
    const scrub = s => (s || '').replace(/[\d０-９]{2,}/g, '#').replace(/\s+/g, ' ');

    let root = document.body;
    for (let i = 0; i < 12; i++) {
      const kids = [...root.children].filter(k => R(k).height > 40);
      const tall = kids.filter(k => R(k).height >= R(root).height * 0.8);
      if (kids.length >= 2 && tall.length !== 1) break;
      if (!kids.length) break;
      root = tall.length === 1 ? tall[0] : kids[0];
    }

    // shell: only levels where width or gutter actually changes
    const shellRaw = []; { let n = root; while (n && n !== document.documentElement) { const r = R(n), c = CS(n);
      shellRaw.unshift(`${sig(n).slice(0,26)} w=${Math.round(r.width)} x=${Math.round(r.left)} max=${c.maxWidth} pad=${box(c)} m=${c.marginLeft}/${c.marginRight}`);
      n = n.parentElement; } }

    const sections = [];
    (function scan(parent, d) {
      [...parent.children].forEach(el => {
        const r = R(el), c = CS(el);
        if (r.height < 24 || r.width < 80) return;
        sections.push(`d${d} ${sig(el).slice(0,24)} w=${Math.round(r.width)} h=${Math.round(r.height)} x=${Math.round(r.left)} max=${c.maxWidth} pad=${box(c)} ${c.display} gap=${c.gap!=='normal'?c.gap:'-'} | ${scrub(el.innerText).trim().slice(0,26)}`);
        if (d < 2) scan(el, d + 1);
      });
    })(root, 0);

    const groups = [], seen = new Set();
    document.querySelectorAll('body *').forEach(el => {
      const kids = [...el.children].filter(k => R(k).width > 40 && R(k).height > 40);
      if (kids.length < 2) return;
      const uniq = [...new Set(kids.map(k => Math.round(R(k).width)))];
      if (uniq.length > 2) return;
      const r = R(el); if (r.width < 150) return;
      const key = sig(el) + '|' + kids.length;
      if (seen.has(key)) return; seen.add(key);
      const c = CS(el);
      const rows = new Set(kids.map(x => Math.round(R(x).top))).size;
      groups.push(`${sig(el).slice(0,24)} w=${Math.round(r.width)} n=${kids.length} cols=${Math.ceil(kids.length/rows)} rows=${rows} item=${uniq.join('/')} ${c.display} gtc=${(c.gridTemplateColumns!=='none'?c.gridTemplateColumns:'-').slice(0,40)} gap=${c.gap!=='normal'?c.gap:'-'} wrap=${c.flexWrap} ovfX=${c.overflowX}${el.scrollWidth>el.clientWidth+2?' SCROLLS':''} pad=${box(c)}`);
    });

    const fixed = [];
    document.querySelectorAll('body *').forEach(el => {
      const c = CS(el);
      if (c.position !== 'fixed' && c.position !== 'sticky') return;
      const r = R(el); if (r.height < 8 || r.width < 40) return;
      fixed.push(`${sig(el).slice(0,26)} ${c.position} w=${Math.round(r.width)} h=${Math.round(r.height)} x=${Math.round(r.left)} top=${c.top} bot=${c.bottom} z=${c.zIndex} pad=${box(c)}`);
    });

    const type = [];
    ['h1','h2','h3','h4','button','input'].forEach(t => {
      [...document.querySelectorAll(t)].filter(e => R(e).height > 0).slice(0, 3).forEach(e => {
        const c = CS(e), r = R(e);
        const label = t === 'input' ? (e.getAttribute('placeholder') || e.type || '') : (e.innerText || '');
        type.push(`${t} fs=${c.fontSize} lh=${c.lineHeight} fw=${c.fontWeight} h=${Math.round(r.height)} w=${Math.round(r.width)} pad=${box(c)} r=${c.borderRadius.slice(0,12)} | ${scrub(label).trim().slice(0,22)}`);
      });
    });

    const mq = {};
    for (const ss of document.styleSheets) {
      let rules; try { rules = ss.cssRules; } catch (e) { continue; }
      (function walk(list) { for (const r of list) {
        if (r.type === 4) { const c = r.conditionText || r.media.mediaText; mq[c] = (mq[c]||0)+1; if (r.cssRules) walk(r.cssRules); }
        else if (r.cssRules) walk(r.cssRules); } })(rules);
    }

    return { vw: innerWidth, docW: document.documentElement.scrollWidth,
      ovf: document.documentElement.scrollWidth > innerWidth + 1,
      url: location.href, title: document.title, root: chain(root).slice(-70),
      shell: shellRaw, sections: sections.slice(0, 55), groups: groups.slice(0, 26), fixed, type,
      mq: Object.entries(mq).sort((a,b)=>b[1]-a[1]).map(([k,v])=>`${k} (${v})`) };
  };

  const out = {};
  for (const w of WIDTHS) {
    await page.setViewportSize({ width: w, height: 900 });
    try { await page.goto(URL_, { waitUntil: 'networkidle', timeout: 40000 }); }
    catch (e) { try { await page.goto(URL_, { waitUntil: 'domcontentloaded', timeout: 25000 }); } catch (e2) {} }
    await page.waitForTimeout(2500);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1200);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    try { out[w] = await page.evaluate(PROBE); } catch (e) { out[w] = { error: String(e) }; }
    if (w !== WIDTHS[0] && out[w] && out[w].mq) delete out[w].mq; // mq identical across widths
  }
  return out;
}
