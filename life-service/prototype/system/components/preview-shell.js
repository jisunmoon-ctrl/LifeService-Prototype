(function initPreviewControl() {
  var MIN_W = 360;
  var MAX_W = 1920;
  var MIN_H = 300;
  var MAX_H = 2000;

  var iframe = document.getElementById('ab-preview');
  var frame = document.getElementById('abFrame');
  var stage = document.getElementById('previewStage');
  var previewPane = document.querySelector('.preview-pane');
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
  var floatingControl = document.getElementById('floatingControl');
  var floatingControlTrigger = document.getElementById('floatingControlTrigger');
  var floatingControlBar = document.getElementById('floatingControlBar');
  var floatingControlClose = document.getElementById('floatingControlClose');
  var viewModeChip = document.getElementById('viewModeChip');
  var pageDropdownTrigger = document.getElementById('pageDropdownTrigger');
  var pageDropdownMenu = document.getElementById('pageDropdownMenu');
  var pageDropdownList = document.getElementById('pageDropdownList');
  var currentPageLabel = document.getElementById('currentPageLabel');

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
    mobile: 375,
    tablet: 768,
    desktop: 1280,
  };
  var frameWidth = 375;
  var frameHeight = 812;

  function isMobileView() {
    return frameWidth <= 768;
  }

  function syncViewChipState() {
    if (!viewModeChip) return;
    if (isMobileView()) {
      viewModeChip.textContent = 'MobileView';
      viewModeChip.classList.remove('is-outlined');
    } else {
      viewModeChip.textContent = 'DesktopView';
      viewModeChip.classList.add('is-outlined');
    }
  }

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

    if (pageDropdownList) {
      pageDropdownList.innerHTML = Object.keys(pageMap)
        .map(function (id) {
          var page = pageMap[id];
          return '<button type="button" class="page-option" data-page-id="' + page.id + '">' + page.id + '</button>';
        })
        .join('');
    }
  }

  function selectPage(pageId) {
    var page = pageMap[pageId];
    if (!page) return;

    iframe.src = page.src;
    pageMenuSelect.value = page.id;
    if (currentPageLabel) currentPageLabel.textContent = page.label === '신청전' || page.label === '신청후' ? 'O2OHome' : page.label;
    if (pageDropdownList) {
      Array.prototype.forEach.call(pageDropdownList.querySelectorAll('.page-option'), function (option) {
        option.classList.toggle('is-active', option.getAttribute('data-page-id') === page.id);
      });
    }
  }

  function syncBreakpointButtons() {
    var label = getBreakpointLabel(frameWidth).toLowerCase();
    breakpointButtons.forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-preset') === label);
    });
    syncViewChipState();
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

  function fitMobileFrameToStageHeight() {
    if (!stage) return;

    // Compute visible height from the full preview pane, excluding fixed UI
    // (status strip + bottom resizer + stage paddings), to prevent bottom clipping.
    var containerHeight = previewPane ? previewPane.clientHeight : stage.clientHeight;
    if (!containerHeight) return;

    var statusHeight = frameSizeText && frameSizeText.parentElement ? frameSizeText.parentElement.offsetHeight : 0;
    var bottomResizerHeight = bottomResizer ? bottomResizer.offsetHeight : 0;
    var bottomResizerStyles = bottomResizer ? window.getComputedStyle(bottomResizer) : null;
    var bottomResizerMarginTop = bottomResizerStyles ? parseFloat(bottomResizerStyles.marginTop) || 0 : 0;
    var bottomResizerMarginBottom = bottomResizerStyles ? parseFloat(bottomResizerStyles.marginBottom) || 0 : 0;

    var stageStyle = window.getComputedStyle(stage);
    var paddingTop = parseFloat(stageStyle.paddingTop) || 0;
    var paddingBottom = parseFloat(stageStyle.paddingBottom) || 0;
    var usableHeight = containerHeight
      - statusHeight
      - bottomResizerHeight
      - bottomResizerMarginTop
      - bottomResizerMarginBottom
      - paddingTop
      - paddingBottom;
    if (usableHeight <= 0) return;

    var stageWidth = stage.clientWidth;
    var paddingLeft = parseFloat(stageStyle.paddingLeft) || 0;
    var paddingRight = parseFloat(stageStyle.paddingRight) || 0;
    // Account for both horizontal resizers (14px each)
    var horizontalControllerWidth = 28;
    var usableWidth = stageWidth - paddingLeft - paddingRight - horizontalControllerWidth;
    if (usableWidth <= 0) return;

    // Fit 375:812 frame into available viewport area without clipping.
    var ratio = 375 / 812;
    var targetHeight = Math.min(812, usableHeight);
    var targetWidth = Math.round(targetHeight * ratio);

    if (targetWidth > usableWidth) {
      targetWidth = Math.floor(usableWidth);
      targetHeight = Math.round(targetWidth / ratio);
    }

    applyFrameSize(targetWidth, targetHeight);
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

  function setFloatingBarOpen(isOpen) {
    if (!floatingControlBar || !floatingControlTrigger) return;
    floatingControlBar.hidden = !isOpen;
    floatingControlTrigger.hidden = isOpen;
    floatingControlTrigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (!isOpen) setPageDropdownOpen(false);
  }

  function setPageDropdownOpen(isOpen) {
    if (!pageDropdownMenu || !pageDropdownTrigger) return;
    pageDropdownMenu.hidden = !isOpen;
    pageDropdownTrigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  renderDropdown();

  pageMenuSelect.addEventListener('change', function () {
    selectPage(pageMenuSelect.value);
  });

  if (pageDropdownList) {
    pageDropdownList.addEventListener('click', function (event) {
      var option = event.target.closest('.page-option');
      if (!option) return;
      var pageId = option.getAttribute('data-page-id');
      if (!pageId) return;
      selectPage(pageId);
      setPageDropdownOpen(false);
    });
  }

  breakpointButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var preset = btn.getAttribute('data-preset');
      if (!preset || !presetMap[preset]) return;
      applyFrameSize(presetMap[preset], frameHeight);
    });
  });

  if (viewModeChip) {
    viewModeChip.addEventListener('click', function () {
      var nextPreset = isMobileView() ? 'desktop' : 'mobile';
      applyFrameSize(presetMap[nextPreset], frameHeight);
    });
  }

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

  if (floatingControlTrigger && floatingControlBar && floatingControl) {
    floatingControlTrigger.addEventListener('click', function () {
      setFloatingBarOpen(true);
    });

    if (floatingControlClose) {
      floatingControlClose.addEventListener('click', function () {
        setFloatingBarOpen(false);
      });
    }

    if (pageDropdownTrigger) {
      pageDropdownTrigger.addEventListener('click', function () {
        setPageDropdownOpen(pageDropdownMenu ? pageDropdownMenu.hidden : false);
      });
    }

    document.addEventListener('click', function (event) {
      var clickInside = floatingControl.contains(event.target);
      if (!clickInside) {
        setPageDropdownOpen(false);
        if (floatingControlBar && !floatingControlBar.hidden) setFloatingBarOpen(false);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setPageDropdownOpen(false);
        setFloatingBarOpen(false);
      }
    });
  }

  if (stage) {
    stage.scrollTop = 0;
    stage.scrollLeft = 0;
  }

  window.addEventListener('resize', function () {
    if (isMobileView()) fitMobileFrameToStageHeight();
  });

  fitMobileFrameToStageHeight();
  selectPage('O2O_HOME_PRE');
  setFloatingBarOpen(false);
})();
