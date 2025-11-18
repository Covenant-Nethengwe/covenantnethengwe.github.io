// LEFT TABS
const cors = require('cors')
const tabButtons = document.querySelectorAll(".lab-tab");
const panels = document.querySelectorAll(".lab-panel");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.panel;

    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    panels.forEach((panel) => {
      panel.classList.toggle("active", panel.id === `panel-${target}`);
    });
  });
});

// CASE DATA
const caseData = {
  vaseline: {
    title: "Vaseline Glow – AR Skincare Journey",
    meta: "Student Brief · UX/UI · AR · Campaign Experience",
    why:
      "Connect Vaseline to Gen Z by turning everyday skincare into a personalised, interactive and shareable experience.",
    concept:
      "An AR-powered Skin Scan analyses hydration, dryness and irritation using the phone’s camera, then recommends Vaseline products. The #VaselineGlowChallenge invites users to document a 7-day glow journey on Snapchat, Instagram and TikTok.",
    process: [
      "Researched Gen Z skincare habits and expectations around personalisation and transparency.",
      "Mapped the AR Skin Scan flow and designed interaction states for different skin results.",
      "Created mobile-first UI screens and microcopy that feels encouraging rather than clinical.",
      "Planned the campaign journey, from discovering the filter to sharing progress."
    ],
    timeline: "2–3 weeks · First week focused on ideation and AR concept development."
  },
  "blue-owl": {
    title: "Blue Owl – Conservation Microsite",
    meta: "Allee Bleue · Collaboration · Brand Experience",
    why:
      "Bring Allee Bleue’s Blue Owl to life online while honouring wine heritage and positioning the owl as a conservation symbol.",
    concept:
      "A narrative-led microsite that blends Cape Dutch-inspired visuals with modern layouts and subtle motion, showing how each bottle connects to shared experiences and endangered South African owls.",
    process: [
      "Researched local owl species, conservation stories and the brand’s wine heritage.",
      "Defined a visual language using refined blue tones, elegant serif type and clean composition.",
      "Designed the microsite structure to guide visitors from story to bottle to conservation impact.",
      "Collaborated with a colleague to refine flow, hierarchy and interactions."
    ],
    timeline: "3 weeks · Collaborative project with a former colleague."
  },
  recycling: {
    title: "Recycling League – Behaviour Change App",
    meta: "Student Brief · UX · Behavioural Design",
    why:
      "Help families understand and practice recycling in a way that feels emotional, tangible and part of daily life.",
    concept:
      "Recycling League invites households to sort their real waste while the app gives instant feedback. Mistakes become learning moments, and the tone stays encouraging to turn frustration into pride.",
    process: [
      "Mapped sorting journeys and designed clear feedback states for correct and incorrect sorting.",
      "Observed emotional responses to mistakes and improvement during informal testing.",
      "Refined tone of voice to be supportive, not shaming, while still educational.",
      "Designed a friendly, accessible UI that can be used together by families."
    ],
    timeline: "1–1.5 weeks · Focused on key flows and core visual language."
  },
  era: {
    title: "Era App – Future Generational Bridge",
    meta: "Student Brief · Futuristic UX · Scenario Design",
    why:
      "Explore how a digital platform could bridge mistrust between young innovators and older leaders in a 2040 smart-city South Africa.",
    concept:
      "Era imagines an interface where ideas, outcomes and impact are visible to both generations. It uses transparency and shared metrics to turn generational tension into collaboration.",
    process: [
      "Defined a 2040 scenario around AI-driven smart cities, sustainable energy and digital finance.",
      "Identified key tensions between young innovators and older policymakers or industry leaders.",
      "Mapped opportunities where a platform could create alignment around shared goals.",
      "Sketched conceptual flows and interface directions focused on clarity and trust."
    ],
    timeline: "Concept-driven project · Focus on narrative, mapping and UX thinking."
  },
  reboost: {
    title: "Reboost – Gaming Microsite Launch",
    meta: "Reboost · Collaboration · Microsite",
    why:
      "Launch two new gamer-focused flavours through a digital touchpoint that feels like an entry into the Reboost gaming community, not just a product page.",
    concept:
      "A microsite that reveals the new flavours with playful interactions and speaks in a visual language familiar to gamers, while supporting a broader launch campaign.",
    process: [
      "Collaborated on the information architecture and microsite layout.",
      "Designed visuals that align with both the Reboost brand and gaming culture.",
      "Considered how the microsite supports other campaign elements, such as social content.",
      "Iterated with a collaborator over a focused 2-week sprint."
    ],
    timeline: "2 weeks · Collaborative project."
  }
};

// OUTPUT IMAGES (replace these with your real files)
const projectOutputs = {
  vaseline: {
    wireframe: {
      src: "assets /Screenshot 2025-11-17 at 19.05.52.png",
      alt: "Vaseline Glow wireframe"
    },
    layout: {
      src: "assets /Screenshot 2025-11-18 at 02.57.04.png",
      alt: "Vaseline Glow layout"
    },
    mobile: [
      { src: "assets /Screenshot 2025-11-18 at 03.10.00.png", alt: "Vaseline Glow mobile screen 1" },
      { src: "assets /Screenshot 2025-11-18 at 03.10.13.png", alt: "Vaseline Glow mobile screen 2" },
      { src: "assets /Screenshot 2025-11-18 at 03.10.25.png", alt: "Vaseline Glow mobile screen 3" },
      { src: "assets /Screenshot 2025-11-18 at 03.10.38.png", alt: "Vaseline Glow mobile screen 4" },
      { src: "assets /Screenshot 2025-11-18 at 03.10.53.png", alt: "Vaseline Glow mobile screen 5" },
      { src: "assets /Screenshot 2025-11-18 at 03.11.10.png", alt: "Vaseline Glow mobile screen 6" },
      { src: "assets /Screenshot 2025-11-18 at 03.11.23.png", alt: "Vaseline Glow mobile screen 7" },
      { src: "assets /Screenshot 2025-11-18 at 03.11.45.png", alt: "Vaseline Glow mobile screen 8" },
      { src: "assets /Screenshot 2025-11-18 at 03.11.58.png", alt: "Vaseline Glow mobile screen 9" },
      { src: "assets /Screenshot 2025-11-18 at 03.12.13.png", alt: "Vaseline Glow mobile screen 10" }

      
    ]
  },
  "blue-owl": {
    wireframe: {
      src: "assets /Screenshot 2025-11-17 at 19.07.16.png",
      alt: "Blue Owl wireframe"
    },
    layout: {
      src: "assets /Screenshot 2025-11-18 at 02.59.18.png",
      alt: "Blue Owl layout"
    },
    mobile: [
      { src: "assets /Screenshot 2025-11-18 at 03.12.43.png", alt: "Blue Owl mobile screen 1" },
      { src: "assets /Screenshot 2025-11-18 at 03.13.03.png", alt: "Blue Owl mobile screen 2" },
      { src: "assets /Screenshot 2025-11-18 at 03.13.26.png", alt: "Blue Owl mobile screen 3" },
      { src: "assets /Screenshot 2025-11-18 at 03.13.40.png", alt: "Blue Owl mobile screen 4" },
      { src: "assets /Screenshot 2025-11-18 at 03.13.54.png", alt: "Blue Owl mobile screen 5" }

    ]
  },
  recycling: {
    wireframe: {
      src: "assets /Screenshot 2025-11-18 at 02.46.55.png",
      alt: "Recycling League wireframe"
    },
    layout: {
      src: "assets /Screenshot 2025-11-18 at 02.59.53.png",
      alt: "Recycling League layout"
    },
    mobile: [
      { src: "assets /Screenshot 2025-11-18 at 03.18.40.png", alt: "Recycling League mobile screen 1" },
      { src: "assets /Screenshot 2025-11-18 at 03.19.00.png", alt: "Recycling League mobile screen 2" },
      { src: "assets /Screenshot 2025-11-18 at 03.19.12.png", alt: "Recycling League mobile screen 3" },
      { src: "assets /Screenshot 2025-11-18 at 03.19.24.png", alt: "Recycling League mobile screen 4" },
      { src: "assets /Screenshot 2025-11-18 at 03.19.37.png", alt: "Recycling League mobile screen 5" },
      { src: "assets /Screenshot 2025-11-18 at 03.19.54.png", alt: "Recycling League mobile screen 6" },
      { src: "assets /Screenshot 2025-11-18 at 03.20.07.png", alt: "Recycling League mobile screen 7" },
      { src: "assets /Screenshot 2025-11-18 at 03.20.19.png", alt: "Recycling League mobile screen 8" }
    ]
  },
  era: {
    wireframe: {
      src: "assets /Screenshot 2025-11-17 at 19.07.37.png",
      alt: "Era wireframe"
    },
    layout: {
      src: "assets /Screenshot 2025-11-18 at 02.57.28.png",
      alt: "Era layout"
    },
    mobile: [
      { src: "assets /Screenshot 2025-11-18 at 03.23.16.png", alt: "Era mobile screen 1" },
      { src: "assets /Screenshot 2025-11-18 at 03.23.26.png", alt: "Era mobile screen 2" },
      { src: "assets /Screenshot 2025-11-18 at 03.23.36.png", alt: "Era mobile screen 3" },
      { src: "assets /Screenshot 2025-11-18 at 03.23.48.png", alt: "Era mobile screen 4" },
      { src: "assets /Screenshot 2025-11-18 at 03.24.02.png", alt: "Era mobile screen 5" }
      
    ]
  },
  reboost: {
    wireframe: {
      src: "assets /Screenshot 2025-11-17 at 19.07.49.png",
      alt: "Reboost wireframe"
    },
    layout: {
      src: "assets /Screenshot 2025-11-18 at 02.58.12.png",
      alt: "Reboost layout"
    },
    mobile: [
      { src: "assets /Screenshot 2025-11-18 at 03.24.26.png", alt: "Reboost mobile screen 1" },
      { src: "assets /Screenshot 2025-11-18 at 03.24.40.png", alt: "Reboost mobile screen 2" },
      { src: "assets /Screenshot 2025-11-18 at 03.24.50.png", alt: "Reboost mobile screen 3" },
      { src: "assets /Screenshot 2025-11-18 at 03.25.01.png", alt: "Reboost mobile screen 4" },
      { src: "assets /Screenshot 2025-11-18 at 03.25.14.png", alt: "Reboost mobile screen 5" }
      
    ]
  }
};

// Theme classes for case-specific colours
const themeMap = {
  vaseline: "theme-vaseline",
  "blue-owl": "theme-blue-owl",
  recycling: "theme-recycling",
  era: "theme-era",
  reboost: "theme-reboost"
};
const themeClasses = Object.values(themeMap);

const backdrop = document.querySelector("[data-drawer-backdrop]");
const drawerCloseBtn = document.querySelector("[data-drawer-close]");
const drawerContentEl = document.getElementById("drawer-content");

// Build outputs section HTML per project
function buildOutputsSection(key) {
  const outputs = projectOutputs[key];
  if (!outputs) return "";

  const wireframe = outputs.wireframe;
  const layout = outputs.layout;
  const mobileArr = outputs.mobile || [];

  const groupWire = `${key}-wireframe`;
  const groupLayout = `${key}-layout`;
  const groupMobile = `${key}-mobile`;

  return `
    <div class="drawer-section-title">Outputs</div>
    <div class="outputs-wrapper">
      <div class="output-tabs">
        <button class="output-tab active" data-output-tab="wireframe">Wireframe</button>
        <button class="output-tab" data-output-tab="layout">Layout</button>
        <button class="output-tab" data-output-tab="mobile">Mobile dev</button>
      </div>
      <div class="output-panels">
        <div class="output-panel active" data-output-panel="wireframe">
          <div class="output-media-grid">
            <button class="media-thumb"
              data-lightbox-trigger
              data-group="${groupWire}"
              data-src="${wireframe.src}"
              data-alt="${wireframe.alt}">
              <div class="media-slot">
                <img src="${wireframe.src}" alt="${wireframe.alt}">
              </div>
            </button>
          </div>
        </div>
        <div class="output-panel" data-output-panel="layout">
          <div class="output-media-grid">
            <button class="media-thumb"
              data-lightbox-trigger
              data-group="${groupLayout}"
              data-src="${layout.src}"
              data-alt="${layout.alt}">
              <div class="media-slot">
                <img src="${layout.src}" alt="${layout.alt}">
              </div>
            </button>
          </div>
        </div>
        <div class="output-panel" data-output-panel="mobile">
          <div class="output-media-grid">
            ${mobileArr
              .map(
                (img) => `
              <button class="media-thumb"
                data-lightbox-trigger
                data-group="${groupMobile}"
                data-src="${img.src}"
                data-alt="${img.alt}">
                <div class="phone-frame">
                  <div class="phone-screen">
                    <img src="${img.src}" alt="${img.alt}">
                  </div>
                </div>
              </button>
            `
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  `;
}

// OPEN DRAWER
document.querySelectorAll("[data-open-drawer]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.openDrawer;
    const data = caseData[key];
    if (!data) return;

    // apply theme to body
    document.body.classList.remove(...themeClasses);
    if (themeMap[key]) {
      document.body.classList.add(themeMap[key]);
    }

    drawerContentEl.innerHTML = `
      <h2>${data.title}</h2>
      <p class="lab-card-meta">${data.meta}</p>

      <div class="drawer-section-title">Why</div>
      <p>${data.why}</p>

      <div class="drawer-section-title">Concept</div>
      <p>${data.concept}</p>

      <div class="drawer-section-title">Process</div>
      <ul>
        ${data.process.map((step) => `<li>${step}</li>`).join("")}
      </ul>

      <div class="drawer-section-title">Timeline</div>
      <p>${data.timeline}</p>

      ${buildOutputsSection(key)}
    `;

    backdrop.classList.add("open");

    setupOutputTabs();
    setupLightboxTriggers();
  });
});

// OUTPUT TABS
function setupOutputTabs() {
  const outputTabs = drawerContentEl.querySelectorAll(".output-tab");
  const panels = drawerContentEl.querySelectorAll(".output-panel");

  outputTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.outputTab;

      outputTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      panels.forEach((panel) => {
        panel.classList.toggle(
          "active",
          panel.dataset.outputPanel === target
        );
      });
    });
  });
}

// CLOSE DRAWER
function closeDrawer() {
  backdrop.classList.remove("open");
  document.body.classList.remove(...themeClasses);
}
drawerCloseBtn.addEventListener("click", closeDrawer);
backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) closeDrawer();
});

/* LIGHTBOX LOGIC */

const lightboxBackdrop = document.querySelector("[data-lightbox-backdrop]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxZoomLayer = document.querySelector("[data-zoom-layer]");
const lightboxCloseBtn = document.querySelector("[data-lightbox-close]");
const lightboxPrevBtn = document.querySelector("[data-lightbox-prev]");
const lightboxNextBtn = document.querySelector("[data-lightbox-next]");
const zoomInBtn = document.querySelector("[data-zoom-in]");
const zoomOutBtn = document.querySelector("[data-zoom-out]");
const zoomResetBtn = document.querySelector("[data-zoom-reset]");
const lightboxStage = document.querySelector(".lightbox-stage");

let currentGroup = "";
let currentIndex = 0;
let groupItems = [];

// pan + zoom state
let scale = 1;
const minScale = 1;
const maxScale = 4;
let translateX = 0;
let translateY = 0;

// dragging state (mouse / one-finger)
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let dragStartTranslateX = 0;
let dragStartTranslateY = 0;

// pinch state
let isPinching = false;
let pinchStartDist = 0;
let pinchStartScale = 1;

// Attach click handlers to thumbnails inside the drawer
function setupLightboxTriggers() {
  const triggers = drawerContentEl.querySelectorAll("[data-lightbox-trigger]");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const group = trigger.dataset.group;
      currentGroup = group;

      const groupNodes = Array.from(
        drawerContentEl.querySelectorAll(
          `[data-lightbox-trigger][data-group="${group}"]`
        )
      );

      groupItems = groupNodes.map((el) => ({
        src: el.dataset.src,
        alt: el.dataset.alt
      }));

      currentIndex = groupNodes.indexOf(trigger);

      openLightbox();
    });
  });
}

function openLightbox() {
  if (!groupItems.length) return;
  lightboxBackdrop.classList.add("open");
  resetTransform();
  renderLightboxImage();
}

function closeLightbox() {
  lightboxBackdrop.classList.remove("open");
}

function resetTransform() {
  scale = 1;
  translateX = 0;
  translateY = 0;
  applyTransform();
}

function renderLightboxImage() {
  const item = groupItems[currentIndex];
  if (!item) return;
  lightboxImage.src = item.src;
  lightboxImage.alt = item.alt || "";
  applyTransform();
}

function applyTransform() {
  lightboxZoomLayer.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`;
}

// Navigation
function showPrev() {
  if (!groupItems.length) return;
  currentIndex = (currentIndex - 1 + groupItems.length) % groupItems.length;
  renderLightboxImage();
}

function showNext() {
  if (!groupItems.length) return;
  currentIndex = (currentIndex + 1) % groupItems.length;
  renderLightboxImage();
}

// Wheel / trackpad zoom
function zoomAtPoint(deltaScale, clientX, clientY) {
  const rect = lightboxStage.getBoundingClientRect();
  const offsetX = clientX - rect.left;
  const offsetY = clientY - rect.top;

  const prevScale = scale;
  const newScale = Math.min(maxScale, Math.max(minScale, scale * deltaScale));
  const scaleRatio = newScale / prevScale;

  translateX = offsetX - (offsetX - translateX) * scaleRatio;
  translateY = offsetY - (offsetY - translateY) * scaleRatio;

  scale = newScale;
  applyTransform();
}

lightboxStage.addEventListener("wheel", (e) => {
  e.preventDefault();
  const direction = e.deltaY < 0 ? 1.1 : 0.9;
  zoomAtPoint(direction, e.clientX, e.clientY);
}, { passive: false });

// Mouse drag pan
lightboxStage.addEventListener("mousedown", (e) => {
  e.preventDefault();
  isDragging = true;
  dragStartX = e.clientX;
  dragStartY = e.clientY;
  dragStartTranslateX = translateX;
  dragStartTranslateY = translateY;
});

window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const dx = e.clientX - dragStartX;
  const dy = e.clientY - dragStartY;
  translateX = dragStartTranslateX + dx;
  translateY = dragStartTranslateY + dy;
  applyTransform();
});

window.addEventListener("mouseup", () => {
  isDragging = false;
});

// Touch: one-finger pan, two-finger pinch
lightboxStage.addEventListener("touchstart", (e) => {
  if (e.touches.length === 1) {
    isDragging = true;
    isPinching = false;
    dragStartX = e.touches[0].clientX;
    dragStartY = e.touches[0].clientY;
    dragStartTranslateX = translateX;
    dragStartTranslateY = translateY;
  } else if (e.touches.length === 2) {
    isDragging = false;
    isPinching = true;
    pinchStartDist = getTouchDistance(e.touches[0], e.touches[1]);
    pinchStartScale = scale;
  }
}, { passive: false });

lightboxStage.addEventListener("touchmove", (e) => {
  if (isDragging && e.touches.length === 1) {
    e.preventDefault();
    const dx = e.touches[0].clientX - dragStartX;
    const dy = e.touches[0].clientY - dragStartY;
    translateX = dragStartTranslateX + dx;
    translateY = dragStartTranslateY + dy;
    applyTransform();
  } else if (isPinching && e.touches.length === 2) {
    e.preventDefault();
    const newDist = getTouchDistance(e.touches[0], e.touches[1]);
    const factor = newDist / pinchStartDist;
    const newScale = Math.min(maxScale, Math.max(minScale, pinchStartScale * factor));
    scale = newScale;
    applyTransform();
  }
}, { passive: false });

lightboxStage.addEventListener("touchend", (e) => {
  if (e.touches.length === 0) {
    isDragging = false;
    isPinching = false;
  } else if (e.touches.length === 1) {
    isDragging = true;
    isPinching = false;
    dragStartX = e.touches[0].clientX;
    dragStartY = e.touches[0].clientY;
    dragStartTranslateX = translateX;
    dragStartTranslateY = translateY;
  }
});

function getTouchDistance(t1, t2) {
  const dx = t1.clientX - t2.clientX;
  const dy = t1.clientY - t2.clientY;
  return Math.hypot(dx, dy);
}

// Helper zoom functions for buttons
function zoomStep(factor) {
  const rect = lightboxStage.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  zoomAtPoint(factor, cx, cy);
}

function zoomIn() {
  zoomStep(1.1);
}

function zoomOut() {
  zoomStep(0.9);
}

function zoomReset() {
  resetTransform();
}

// Wire up lightbox buttons
lightboxCloseBtn.addEventListener("click", closeLightbox);
lightboxBackdrop.addEventListener("click", (e) => {
  if (e.target === lightboxBackdrop) closeLightbox();
});

lightboxPrevBtn.addEventListener("click", showPrev);
lightboxNextBtn.addEventListener("click", showNext);

zoomInBtn.addEventListener("click", zoomIn);
zoomOutBtn.addEventListener("click", zoomOut);
zoomResetBtn.addEventListener("click", zoomReset);

// Optional: keyboard controls
document.addEventListener("keydown", (e) => {
  if (!lightboxBackdrop.classList.contains("open")) return;

  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") showNext();
  if (e.key === "ArrowLeft") showPrev();
});
