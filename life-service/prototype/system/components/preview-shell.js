(function initPreviewControl() {
  var MIN_W = 360;
  var MAX_W = 1920;
  var MIN_H = 300;
  var MAX_H = 2000;

  var iframe = document.getElementById('ab-preview');
  var frame = document.getElementById('abFrame');
  var stage = document.getElementById('previewStage');
  var pageMenuSelect = document.getElementById('pageMenuSelect');
  var breakpointButtons = document.querySelectorAll('.viewport-toggle__btn');
  var widthInput = document.getElementById('frameWidthInput');
  var heightInput = document.getElementById('frameHeightInput');
  var widthRange = document.getElementById('frameWidthRange');
  var frameSizeText = document.getElementById('frameSizeText');
  var breakpointText = document.getElementById('breakpointText');
  var leftResizer = document.querySelector('.frame-resizer--left');
  var rightResizer = document.querySelector('.frame-resizer--right');
  var bottomResizer = document.querySelector('.frame-resizer--bottom');

  if (!iframe || !frame || !pageMenuSelect || !breakpointButtons.length || !widthInput || !heightInput || !widthRange) return;

  var pageGroups = [
    {
      label: 'O2O홈',
      pages: [
        { id: 'O2O_HOME_PRE', label: '신청전', src: './hub.html' },
        { id: 'O2O_HOME_POST', label: '신청후', src: './hub.html?view=post' },
      ],
    },
    {
      label: '신청폼',
      pages: [
        { id: 'FORM_MOVING', label: '이사신청', src: 'https://ohou.se/experts/moving' },
        { id: 'FORM_REMODELING', label: '시공업체신청', src: 'https://o2o.ohou.se/remodeling/home/discovery' },
        { id: 'FORM_PART_TAB_KITCHEN', label: '부분시공 카테고리별 탭 랜딩', src: 'https://o2o.ohou.se/remodeling/direct-part/intro?tab=kitchen&inflow=KITCHEN_SHORTCUT' },
        { id: 'FORM_PART_FIND', label: '부분시공 업체 찾기', src: 'https://o2o.ohou.se/remodeling/part' },
        { id: 'FORM_RENTAL', label: '렌탈', src: 'https://store.ohou.se/brands/101601' },
        { id: 'FORM_REPAIR', label: '제품설치', src: 'https://o2o.ohou.se/repair' },
        { id: 'FORM_CLEANING', label: '입주청소', src: 'https://ohou.se/competitions/917' },
      ],
    },
  ];

  var pageMap = {};
  var presetMap = {
    mobile: 360,
    tablet: 768,
    desktop: 1280,
  };
  var frameWidth = 360;
  var frameHeight = 812;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, Math.round(value)));
  }

  function getBreakpointLabel(width) {
    if (width <= 768) return 'Mobile';
    if (width < 1280) return 'Tablet';
    return 'Desktop';
  }

  function renderDropdown() {
    pageMenuSelect.innerHTML = pageGroups
      .map(function (group) {
        return (
          '<optgroup label="' + group.label + '">' +
          group.pages
            .map(function (page) {
              pageMap[page.id] = page;
              return (
                '<option value="' + page.id + '">' +
                group.label + ' / ' + page.label + ' (' + page.id + ')' +
                '</option>'
              );
            })
            .join('') +
          '</optgroup>'
        );
      })
      .join('');
  }

  function selectPage(pageId) {
    var page = pageMap[pageId];
    if (!page) return;

    iframe.src = page.src;
    pageMenuSelect.value = page.id;
  }

  function syncBreakpointButtons() {
    var label = getBreakpointLabel(frameWidth).toLowerCase();
    breakpointButtons.forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-preset') === label);
    });
  }

  function applyFrameSize(nextWidth, nextHeight) {
    frameWidth = clamp(nextWidth, MIN_W, MAX_W);
    frameHeight = clamp(nextHeight, MIN_H, MAX_H);

    document.documentElement.style.setProperty('--preview-content-width', frameWidth + 'px');
    document.documentElement.style.setProperty('--preview-content-height', frameHeight + 'px');
    document.documentElement.style.setProperty('--preview-side-padding', frameWidth <= 768 ? '16px' : '60px');

    widthInput.value = String(frameWidth);
    heightInput.value = String(frameHeight);
    widthRange.value = String(frameWidth);
    if (frameSizeText) frameSizeText.textContent = 'Frame: ' + frameWidth + ' × ' + frameHeight;
    if (breakpointText) breakpointText.textContent = 'Breakpoint: ' + getBreakpointLabel(frameWidth);
    syncBreakpointButtons();
  }

  function bindHorizontalResizer(resizer, side) {
    if (!resizer) return;
    resizer.addEventListener('pointerdown', function (event) {
      event.preventDefault();
      var startX = event.clientX;
      var startW = frameWidth;

      function onMove(moveEvent) {
        var delta = (moveEvent.clientX - startX) * 2;
        var nextWidth = side === 'left' ? startW - delta : startW + delta;
        applyFrameSize(nextWidth, frameHeight);
      }

      function onUp() {
        document.removeEventListener('pointermove', onMove);
        document.removeEventListener('pointerup', onUp);
      }

      document.addEventListener('pointermove', onMove);
      document.addEventListener('pointerup', onUp);
    });
  }

  function bindBottomResizer(resizer) {
    if (!resizer) return;
    resizer.addEventListener('pointerdown', function (event) {
      event.preventDefault();
      var startX = event.clientX;
      var startY = event.clientY;
      var startW = frameWidth;
      var startH = frameHeight;

      function onMove(moveEvent) {
        var deltaX = (moveEvent.clientX - startX) * 2;
        var deltaY = moveEvent.clientY - startY;
        applyFrameSize(startW + deltaX, startH + deltaY);
      }

      function onUp() {
        document.removeEventListener('pointermove', onMove);
        document.removeEventListener('pointerup', onUp);
      }

      document.addEventListener('pointermove', onMove);
      document.addEventListener('pointerup', onUp);
    });
  }

  renderDropdown();

  pageMenuSelect.addEventListener('change', function () {
    selectPage(pageMenuSelect.value);
  });

  breakpointButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var preset = btn.getAttribute('data-preset');
      if (!preset || !presetMap[preset]) return;
      applyFrameSize(presetMap[preset], frameHeight);
    });
  });

  widthInput.addEventListener('change', function () {
    applyFrameSize(parseInt(widthInput.value, 10) || frameWidth, frameHeight);
  });
  widthInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') applyFrameSize(parseInt(widthInput.value, 10) || frameWidth, frameHeight);
  });

  heightInput.addEventListener('change', function () {
    applyFrameSize(frameWidth, parseInt(heightInput.value, 10) || frameHeight);
  });
  heightInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') applyFrameSize(frameWidth, parseInt(heightInput.value, 10) || frameHeight);
  });

  widthRange.addEventListener('input', function () {
    applyFrameSize(parseInt(widthRange.value, 10) || frameWidth, frameHeight);
  });

  bindHorizontalResizer(leftResizer, 'left');
  bindHorizontalResizer(rightResizer, 'right');
  bindBottomResizer(bottomResizer);

  if (stage) {
    stage.scrollTop = 0;
    stage.scrollLeft = 0;
  }

  applyFrameSize(frameWidth, frameHeight);
  selectPage('O2O_HOME_PRE');
})();
