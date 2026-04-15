// ===== Contract view (?view=post = 신청 후) =====
function initContractView() {
  const params = new URLSearchParams(window.location.search);
  const isPost = params.get('view') === 'post';
  document.body.classList.toggle('hub-view--post', isPost);
  document.body.classList.toggle('hub-view--pre', !isPost);
  initMovingPortfolioModule();
}

function initMovingPortfolioModule() {
  const modulePairs = [
    {
      row: document.getElementById('atfPortfolioCompanyRow'),
      items: document.getElementById('atfPortfolioItemRow'),
    },
    {
      row: document.getElementById('portfolioCompanyRow'),
      items: document.getElementById('portfolioItemRow'),
    },
  ].filter((pair) => pair.row && pair.items);
  if (!modulePairs.length) return;

  const base = './assets/components/hub-post/';
  const avatars = ['pf-avatar-0.png', 'pf-avatar-1.png', 'pf-avatar-2.png', 'pf-avatar-3.png'];
  const cards = ['pf-card-0.png', 'pf-card-1.png', 'pf-card-2.png'];
  const names = ['굿데이이사', '이사플랜', '스마트이사', '원클릭이사', '해피무빙', '이사의정석', '씨앤씨이사', '투데이이사', '굿파트너', '이사마스터'];
  const consults = ['1,442', '742', '942', '442', '542', '1,200', '330', '890', '120', '2,100'];
  const snippets = [
    '너무 친절하시고 깔끔하게 잘 마무리해주셨어요!!',
    '시간 약속을 잘 지켜주셔서 안심이었어요.',
    '포장부터 배치까지 꼼꼼했어요.',
    '견적 대비 깔끔한 마무리였습니다.',
    '추가 비용 없이 약속대로 진행됐어요.',
    '상담 응대가 빨라서 좋았어요.',
    '짐이 많았는데도 안전하게 옮겨주셨어요.',
    '입주 청소까지 한 번에 해결했어요.',
    '다음에도 이 업체로 다시 맡기고 싶어요.',
    '주변에도 추천할 만한 서비스였어요.',
  ];

  function fetchMockPortfolioByCompany(companyId) {
    // 목업 API 재호출 시뮬레이션: 회사별로 후기 순서를 다르게 리턴
    return new Promise((resolve) => {
      window.setTimeout(() => {
        const offset = Number(companyId || 0) % snippets.length;
        const rotatedSnippets = snippets.map((_, idx) => snippets[(idx + offset) % snippets.length]);
        resolve(
          Array.from({ length: 10 }, (_, j) => ({
            img: base + cards[(j + offset) % cards.length],
            caption: 'woojin님의 후기',
            text: rotatedSnippets[j % rotatedSnippets.length],
          }))
        );
      }, 120);
    });
  }

  const companies = names.map((name, i) => ({
    id: String(i),
    name,
    consult: consults[i],
    avatar: base + avatars[i % avatars.length],
    badge: i === 0 ? '책임보장' : null,
    homeUrl: './companies.html?id=' + encodeURIComponent(String(i)),
  }));

  function renderItems(itemsEl, items) {
    itemsEl.innerHTML = items
      .map((item) => `
        <article class="portfolio-bundle__card">
          <div class="portfolio-bundle__card-img-wrap">
            <img src="${item.img}" alt="" class="portfolio-bundle__card-img" width="136" height="188" loading="lazy" />
          </div>
          <div class="portfolio-bundle__card-overlay">
            <p class="portfolio-bundle__card-caption">${item.caption}</p>
            <p class="portfolio-bundle__card-text">${item.text}</p>
          </div>
        </article>
      `)
      .join('');
  }

  modulePairs.forEach(({ row, items }) => {
    let selectedId = '0';

    row.innerHTML = companies
      .map((c, i) => `
        <button type="button" role="tab" aria-selected="${i === 0 ? 'true' : 'false'}" class="portfolio-company ${i === 0 ? 'is-active' : ''}" data-company-id="${c.id}">
          <span class="portfolio-company__avatar-wrap">
            <img class="portfolio-company__avatar" src="${c.avatar}" alt="" width="56" height="56" loading="lazy" />
            ${c.badge ? `<span class="portfolio-company__badge">${c.badge}</span>` : ''}
          </span>
          <span class="portfolio-company__name">${c.name}</span>
          <span class="portfolio-company__meta">상담 ${c.consult}회</span>
        </button>
      `)
      .join('');

    row.querySelectorAll('.portfolio-company').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-company-id');
        row.querySelectorAll('.portfolio-company').forEach((b) => {
          b.classList.remove('is-active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');
        selectedId = id;
        items.setAttribute('aria-busy', 'true');
        const apiItems = await fetchMockPortfolioByCompany(selectedId);
        renderItems(items, apiItems);
        items.removeAttribute('aria-busy');
      });
    });

    fetchMockPortfolioByCompany(selectedId).then((apiItems) => {
      renderItems(items, apiItems);
    });
  });
}

// ===== DOM References =====
const bottomTabs = document.querySelectorAll('.nav-item');
const scrollCarousel = document.getElementById('scrollCarousel');
const mainHeader = document.getElementById('mainHeader');
const fab = document.getElementById('fab');
const bottomPromo = document.getElementById('bottomPromo');
const promoCta = document.getElementById('promoCta');
const interiorPanel = document.querySelector('.panel-interior');
const emptyView = document.getElementById('emptyView');
const offeringBanner = document.getElementById('atfOfferingBanner');
const consultFlow = document.getElementById('consultFlow');
const consultFlowForm = document.getElementById('consultFlowForm');
const consultFlowLoading = document.getElementById('consultFlowLoading');
const consultFlowHistory = document.getElementById('consultFlowHistory');
const consultSubmitBtn = document.getElementById('consultSubmitBtn');
const productChips = document.querySelectorAll('.product-chip');
const chipButtons = document.querySelectorAll('.chip');
const companyCarousel = document.querySelector('#interior-company-carousel');
let consultFlowTimerId = null;

// ===== Bottom Navigation =====
bottomTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    bottomTabs.forEach(item => {
      item.classList.remove('active');
      const iconEl = item.querySelector('.catalog-icon-img');
      const inactiveSrc = item.getAttribute('data-inactive-src');
      if (iconEl && inactiveSrc) iconEl.setAttribute('src', inactiveSrc);
    });

    tab.classList.add('active');
    const activeIcon = tab.querySelector('.catalog-icon-img');
    if (activeIcon) {
      const activeSrc = tab.getAttribute('data-active-src');
      if (activeSrc) activeIcon.setAttribute('src', activeSrc);
    }

    const selectedTab = tab.getAttribute('data-tab');
    const isExpertsTab = selectedTab === 'experts';

    if (interiorPanel) {
      interiorPanel.hidden = !isExpertsTab;
    }
    if (emptyView) {
      emptyView.hidden = isExpertsTab;
    }

    if (!isExpertsTab) {
      scrollCarousel?.setAttribute('hidden', '');
      fab?.classList.remove('visible');
      bottomPromo?.setAttribute('hidden', '');
    } else {
      updateScrollUI();
    }
  });
});

// ===== Scroll Behavior =====
let scrollThreshold = 200;

function updateScrollUI() {
  const scrollY = window.scrollY;
  const isExpertsTab = !!document.querySelector('.nav-item[data-tab="experts"]')?.classList.contains('active');
  const shouldShowOverlay = isExpertsTab && interiorPanel && !interiorPanel.hidden;

  if (mainHeader) {
    mainHeader.classList.toggle('is-scrolled', scrollY > 0);
  }

  // Show scroll carousel on experts tab when scrolled
  if (scrollCarousel) {
    if (shouldShowOverlay && scrollY > scrollThreshold) {
      scrollCarousel.removeAttribute('hidden');
    } else {
      scrollCarousel.setAttribute('hidden', '');
    }
  }

  // Show FAB when scrolled
  if (fab) {
    if (shouldShowOverlay && scrollY > 400) {
      fab.classList.add('visible');
    } else {
      fab.classList.remove('visible');
    }
  }

  // Show bottom promo when scrolled to product section
  if (bottomPromo && shouldShowOverlay) {
    const productSection = document.getElementById('productList');
    if (productSection) {
      const rect = productSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        bottomPromo.removeAttribute('hidden');
      } else {
        bottomPromo.setAttribute('hidden', '');
      }
    }
  } else if (bottomPromo) {
    bottomPromo.setAttribute('hidden', '');
  }
}

window.addEventListener('scroll', updateScrollUI, { passive: true });

// ===== Offering Flow =====
function showConsultStep(step) {
  if (!consultFlowForm || !consultFlowLoading || !consultFlowHistory) return;
  consultFlowForm.hidden = step !== 'form';
  consultFlowLoading.hidden = step !== 'loading';
  consultFlowHistory.hidden = step !== 'history';
}

function openConsultFlow() {
  if (!consultFlow) return;
  consultFlow.hidden = false;
  document.body.classList.add('flow-open');
  showConsultStep('form');
}

function closeConsultFlow() {
  if (!consultFlow) return;
  consultFlow.hidden = true;
  document.body.classList.remove('flow-open');
  if (consultFlowTimerId) {
    window.clearTimeout(consultFlowTimerId);
    consultFlowTimerId = null;
  }
  showConsultStep('form');
}

offeringBanner?.addEventListener('click', (event) => {
  event.preventDefault();
  openConsultFlow();
});

consultSubmitBtn?.addEventListener('click', () => {
  showConsultStep('loading');
  if (consultFlowTimerId) window.clearTimeout(consultFlowTimerId);
  consultFlowTimerId = window.setTimeout(() => {
    showConsultStep('history');
  }, 3000);
});

document.querySelectorAll('[data-flow-close]').forEach((btn) => {
  btn.addEventListener('click', closeConsultFlow);
});

// ===== Product Chip Toggle =====
productChips.forEach(chip => {
  chip.addEventListener('click', () => {
    productChips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    // Update promo CTA state based on selected tab
    const selectedTab = chip.getAttribute('data-product-tab');
    if (promoCta) {
      if (selectedTab === 'internet') {
        promoCta.classList.remove('disabled');
        promoCta.textContent = '바로 상담';
      } else {
        promoCta.classList.add('disabled');
        promoCta.textContent = '바로 상담';
      }
    }
  });
});

// ===== Generic Chip Toggle =====
document.querySelectorAll('.quote-chips, .filter-chips').forEach(group => {
  const chips = group.querySelectorAll('.chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    });
  });
});

// ===== Load Interior Companies (from JSON) =====
async function loadInteriorCompanies() {
  if (!companyCarousel) return;
  try {
    const res = await fetch('./assets/components/data/remodeling-individual.json');
    const data = await res.json();
    const summaries = Array.isArray(data.summaries) ? data.summaries.slice(0, 8) : [];

    const titleEl = document.querySelector('#interior-company-title');
    if (titleEl && data.townName) {
      titleEl.textContent = `${data.townName} 추천 시공업체`;
    }

    companyCarousel.innerHTML = summaries.map(item => {
      const imgs = item.imageUrls || [];
      const star = Number(item.avgReviewStar || 0).toFixed(1);
      return `
        <article class="interior-company-card">
          <div class="interior-thumb-grid">
            <img src="${imgs[0] || ''}" alt="">
            <img src="${imgs[1] || imgs[0] || ''}" alt="">
            <img src="${imgs[2] || imgs[0] || ''}" alt="">
          </div>
          <div class="interior-company-label">오늘의집 스탠다드 투명하고 합리적인 시공 보장</div>
          <div class="interior-company-info">
            <div class="company-name-row">
              <span class="company-name">${item.companyName || '업체명'}</span>
              <span class="badge-guarantee">책임보장</span>
            </div>
            <div class="company-stats">
              <span class="star-rating">★ ${star}</span>
              <span class="stat-item">계약자리뷰 ${item.reviewCount || 0}</span>
              <span class="stat-dot">・</span>
              <span class="stat-item">최근계약 ${item.contractCount || 0}</span>
            </div>
          </div>
        </article>
      `;
    }).join('');
  } catch (e) {
    companyCarousel.innerHTML = '';
  }
}

// ===== Load Interior Portfolios (from JSON) =====
async function loadInteriorPortfolios() {
  const portfolioScroll = document.querySelector('#interior-portfolio-scroll');
  if (!portfolioScroll) return;
  try {
    const res = await fetch('./assets/components/data/remodeling-portfolios.json');
    const data = await res.json();
    const items = Array.isArray(data.items) ? data.items.slice(0, 10) : [];

    const titleEl = document.querySelector('#interior-portfolio-title');
    if (titleEl && data.title) {
      titleEl.textContent = data.title;
    }

    portfolioScroll.innerHTML = items.map(item => {
      const label = Array.isArray(item.tags) ? item.tags.join(' · ') : '';
      return `
        <article class="portfolio-card">
          <div class="portfolio-thumb" style="background-image:url('${item.imageUrl || ''}');background-size:cover;background-position:center;"></div>
          <p class="portfolio-title">${label || item.title || ''}</p>
        </article>
      `;
    }).join('');
  } catch (e) {
    portfolioScroll.innerHTML = '';
  }
}

// ===== Load Interior Reviews (from JSON) =====
async function loadInteriorReviews() {
  const reviewScroll = document.querySelector('#interior-review-scroll');
  if (!reviewScroll) return;
  try {
    const res = await fetch('./assets/components/data/remodeling-reviews.json');
    const data = await res.json();
    const items = Array.isArray(data.reviews) ? data.reviews.slice(0, 10) : [];

    const titleEl = document.querySelector('#interior-review-title');
    const subtitleEl = document.querySelector('#interior-review-subtitle');
    if (titleEl && data.sectionTitle) titleEl.textContent = data.sectionTitle;
    if (subtitleEl && data.sectionSubtitle) subtitleEl.textContent = data.sectionSubtitle;

    reviewScroll.innerHTML = items.map(item => {
      const tags = Array.isArray(item.tags) ? item.tags : [];
      const title = tags.length ? [...tags].reverse().join(' · ') : '리뷰';
      return `
        <article class="review-image-card">
          <div class="review-image-thumb" style="background-image:url('${item?.image?.url || ''}');background-size:cover;background-position:center;"></div>
          <p class="review-image-title">${title}</p>
        </article>
      `;
    }).join('');
  } catch (e) {
    reviewScroll.innerHTML = '';
  }
}

// ===== Init =====
initContractView();
loadInteriorCompanies();
loadInteriorPortfolios();
loadInteriorReviews();
