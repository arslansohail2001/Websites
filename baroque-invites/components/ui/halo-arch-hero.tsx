"use client"

import * as React from "react"
import * as THREE from "three"

export type HaloArchStat = { value: number; decimals?: number; suffix?: string; label: string }
export type HaloArchWord = { text: string; underline?: boolean }

export type HaloArchHeroProps = {
  /** Definite height of the hero. Defaults to 640px or small viewport height. */
  height?: string
  /** Short wordmark shown big while loading, then in the nav. */
  name?: string
  /** Written in after the short name once it reaches the nav. */
  nameSuffix?: string
  /** Portrait images for the arch. 20 to 32 work best; no picture repeats. */
  cards?: string[]
  /** Background shown once the arch closes. */
  sky?: string
  /** Nav links. */
  links?: { label: string; href?: string; onClick?: () => void }[]
  /** Two lines of headline; words marked `underline` get an animated underline. */
  headline?: HaloArchWord[][]
  /** Three figures that count up at the end of the intro. */
  stats?: HaloArchStat[]
  /** Label under the loading count. */
  loadingLabel?: string
  className?: string
  onClose?: () => void
}

const DEFAULT_CARDS = [
  "/assets/invites/sh-3.jpg",
  "/assets/invites/tri-1.jpg",
  "/assets/invites/40.jpg",
  "/assets/invites/1.jpg",
  "/assets/invites/sh-1.jpg",
  "/assets/invites/MAROON-BUTTER-2.jpg",
  "/assets/invites/asasas.jpg",
  "/assets/invites/b11.jpg",
  "/assets/invites/more-3.jpg",
  "/assets/invites/editdd.jpg",
  "/assets/invites/44.jpg",
  "/assets/invites/46.jpg",
  "/assets/invites/1-5.jpg",
  "/assets/invites/p-1.jpg",
  "/assets/invites/b2.jpg",
  "/assets/invites/MR-2.jpg",
  "/assets/invites/bb1.jpg",
  "/assets/invites/FLAP-2.jpg",
  "/assets/invites/butter-1.jpg",
  "/assets/invites/BIRD-1.jpg",
  "/assets/boxes/1.jpg",
  "/assets/boxes/1-1.jpg",
  "/assets/boxes/10.jpg",
  "/assets/boxes/11.jpg",
]

const DEFAULT_HEADLINE: HaloArchWord[][] = [
  [
    { text: "Bespoke wedding stationery for " },
    { text: "Barat & Valima", underline: true },
    { text: ", luxury suites for " },
    { text: "Nikkah & Mehendi", underline: true },
  ],
  [
    { text: "Handcrafted in velvet & gold for " },
    { text: "couples across Pakistan & UK", underline: true },
    { text: ". Pure " },
    { text: "timeless royalty", underline: true },
    { text: "." },
  ],
]

const DEFAULT_STATS: HaloArchStat[] = [
  { value: 100, suffix: "+", label: "Curated Designs" },
  { value: 4.9, decimals: 1, suffix: "★", label: "Couple Rating" },
  { value: 4, suffix: "-5 Days", label: "Express Delivery" },
]

const DEFAULT_LINKS = [
  { label: "View as Grid ↓", href: "#gallery-grid-view" },
  { label: "Bespoke Request", href: "#contact" },
]

// #region timeline
// Seconds from the moment the pictures are ready. Read off the reference at 60 fps.
const T = {
  markIn: [0.15, 0.65],
  count: [0, 1.15],
  build: [0, 1.75],
  fly: 0.5,
  sky: [2.08, 2.38],
  countOut: [2.2, 2.5],
  open: [2.2, 3.2],
  shrink: [2.3, 2.9],
  suffix: [3.0, 3.3],
  frame: [3.2, 3.6],
  links: [3.25, 3.5],
  line1: [3.2, 3.55],
  line2: [3.38, 3.73],
  stats: [3.6, 4.6],
  underline: [3.7, 4.2],
  end: 4.8,
}

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x)
const span = (t: number, ab: number[]) => clamp01((t - ab[0]) / (ab[1] - ab[0]))
const lerp = (a: number, b: number, k: number) => a + (b - a) * k
const easeOut3 = (x: number) => 1 - Math.pow(1 - x, 3)
const easeInOut3 = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2)
const TAU = Math.PI * 2

/** Rest angle of card k of n (radians, 0 = right, PI/2 = top). One card sits at the top. */
function cardAngle(k: number, n: number) {
  return Math.PI / 2 + (TAU * k) / n
}

/**
 * When card k starts its flight. Cards fly in from the crown outwards,
 * alternating sides, so the arch fills from its crown down to both feet by the
 * end of the build.
 */
const UPPER = 0.55
function flightStart(k: number, n: number) {
  const a = cardAngle(k, n)
  const d = Math.abs(Math.atan2(Math.cos(a), Math.sin(a))) / Math.PI
  const last = T.build[1] - T.fly
  if (d <= UPPER) return T.build[0] + Math.pow(d / UPPER, 0.85) * (last - T.build[0])
  return last + ((d - UPPER) / (1 - UPPER)) * (T.open[0] - T.fly - last)
}

/** 0..1 flight progress of card k at time t (1 = at rest in its slot). */
function flight(t: number, k: number, n: number) {
  return clamp01((t - flightStart(k, n)) / T.fly)
}

/** Loading count, continuous 0..100. */
function countAt(t: number) {
  return 100 * easeOut3(span(t, T.count))
}

function odometer(c: number, place: number) {
  const unit = Math.pow(10, place)
  const whole = Math.floor(c / unit)
  const carry = Math.max(0, (c % unit) - (unit - 1))
  const v = (whole % 10) + carry
  return c >= 100 && place === 2 ? 1 : v
}

const SPIN_FROM = 1.1
const SPIN_RAMP = [T.open[0], T.open[1] + 0.3]
function spinSpeed(t: number, slot: number) {
  if (t <= SPIN_FROM) return 0
  const start = easeOut3(clamp01((t - SPIN_FROM) / 0.8))
  return start * lerp(0.035, slot / 2.6, easeInOut3(span(t, SPIN_RAMP)))
}
function spinAt(t: number, slot: number) {
  const end = Math.min(t, SPIN_RAMP[1])
  let a = 0
  if (end > SPIN_FROM) {
    const steps = 48
    const h = (end - SPIN_FROM) / steps
    let acc = spinSpeed(SPIN_FROM, slot) + spinSpeed(end, slot)
    for (let i = 1; i < steps; i++) acc += spinSpeed(SPIN_FROM + i * h, slot) * (i % 2 ? 4 : 2)
    a = (acc * h) / 3
  }
  if (t > SPIN_RAMP[1]) a += (slot / 2.6) * (t - SPIN_RAMP[1])
  return a
}

type Pose = { cy: number; r: number; tilt: number; lean: number; card: number }

function poseAt(t: number, arch: Pose, open: Pose): Pose {
  const k = easeInOut3(span(t, T.open))
  return {
    cy: lerp(arch.cy, open.cy, k),
    r: lerp(arch.r, open.r, k),
    tilt: lerp(arch.tilt, open.tilt, k),
    lean: lerp(arch.lean, open.lean, k),
    card: lerp(arch.card, open.card, k),
  }
}
// #endregion

const CSS = `
.hah-root {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #FAF7F2;
  color: #1A1A1A;
  border: 1px solid rgba(201, 168, 76, 0.25);
  border-radius: 20px;
  container-type: size;
  isolation: isolate;
  --hah-g: clamp(14px, 2.2cqw, 28px);
}
.hah-root * { box-sizing: border-box; }
.hah-scene {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  touch-action: pan-y;
  cursor: default;
}
.hah-scene[data-live] { cursor: grab; }
.hah-scene[data-drag] { cursor: grabbing; }
.hah-sky {
  display: none !important;
}
.hah-cover {
  display: none !important;
}
.hah-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}
.hah-ui {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
}
.hah-ui a, .hah-ui button { pointer-events: auto; }
.hah-mark {
  position: absolute;
  left: var(--hah-g);
  top: 0;
  margin: 0;
  font-family: var(--font-cormorant), "Cormorant Garamond", Georgia, serif;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 1;
  white-space: nowrap;
  color: #1A1A1A;
}
.hah-mark span { display: inline-block; overflow: hidden; vertical-align: top; padding: .04em 0 .12em; }
.hah-mark span i { display: inline-block; font-style: normal; will-change: transform; }
.hah-count {
  position: absolute;
  right: var(--hah-g);
  top: var(--hah-g);
  text-align: right;
  font-family: var(--font-poppins), "Poppins", sans-serif;
  line-height: 1;
  color: #1A1A1A;
}
.hah-count small {
  display: block;
  font-size: 9px;
  letter-spacing: .18em;
  text-transform: uppercase;
  opacity: .75;
  margin-top: 8px;
  color: #6B6B6B;
}
.hah-digits {
  display: inline-flex;
  align-items: flex-start;
  font-size: clamp(38px, 7.8cqw, 100px);
  letter-spacing: -.04em;
  font-weight: 500;
}
.hah-col { display: inline-block; height: 1em; overflow: hidden; position: relative; }
.hah-col b { display: block; font-weight: 500; will-change: transform; }
.hah-col b i { display: block; height: 1em; font-style: normal; }
.hah-pct { font-size: 11px; margin-left: 4px; opacity: .7; align-self: flex-start; padding-top: .1em; color: #C9A84C; }
.hah-nav {
  display: none !important;
}
.hah-bar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: var(--hah-bar);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 0 var(--hah-g);
  background: linear-gradient(0deg, #ffffff 0%, rgba(255, 255, 255, 0.92) 60%, rgba(255, 255, 255, 0) 100%);
}
.hah-head {
  margin: 0;
  font-family: var(--font-cormorant), "Cormorant Garamond", Georgia, serif;
  font-weight: 500;
  font-size: clamp(16px, 1.8cqw, 24px);
  line-height: 1.25;
  letter-spacing: .01em;
  min-width: 0;
  color: #1A1A1A;
}
.hah-line { display: block; overflow: hidden; padding-bottom: .08em; white-space: nowrap; }
.hah-line > span { display: block; will-change: transform; }
.hah-u {
  color: #C9A84C;
  background-image: linear-gradient(currentColor, currentColor);
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: 0 1px;
  padding-bottom: 1px;
}
.hah-u sup {
  font-size: .55em;
  margin-left: .15em;
  opacity: 0;
  font-family: var(--font-poppins), sans-serif;
}
.hah-stats { display: flex; gap: clamp(16px, 3cqw, 40px); flex: none; font-family: var(--font-poppins), "Poppins", sans-serif; }
.hah-stat { text-align: right; }
.hah-stat b {
  display: block;
  font-weight: 600;
  font-family: var(--font-cormorant), "Cormorant Garamond", Georgia, serif;
  font-size: clamp(20px, 2.4cqw, 32px);
  letter-spacing: -.02em;
  font-variant-numeric: tabular-nums;
  line-height: 1;
  color: #1A1A1A;
}
.hah-stat small {
  display: block;
  margin-top: 6px;
  font-size: 9px;
  letter-spacing: .16em;
  text-transform: uppercase;
  opacity: .75;
  color: #6B6B6B;
}
@container (max-width: 720px) {
  .hah-line { white-space: normal; }
  .hah-bar { flex-direction: column; align-items: flex-start; justify-content: center; gap: 12px; }
  .hah-stats { width: 100%; justify-content: space-between; }
  .hah-stat { text-align: left; }
}
@container (max-width: 420px) {
  .hah-head { font-size: 15px; }
}
.hah-sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
`

/** Draw a picture into a rounded 9:16 canvas (object-fit: cover). */
function cardCanvas(img: HTMLImageElement | null) {
  const W = 432
  const H = 768
  const c = document.createElement("canvas")
  c.width = W
  c.height = H
  const x = c.getContext("2d")
  if (!x) return c
  const r = 32
  x.beginPath()
  x.moveTo(r, 0)
  x.arcTo(W, 0, W, H, r)
  x.arcTo(W, H, 0, H, r)
  x.arcTo(0, H, 0, 0, r)
  x.arcTo(0, 0, W, 0, r)
  x.closePath()
  x.clip()
  x.fillStyle = "#FAF7F2"
  x.fillRect(0, 0, W, H)
  if (img && img.naturalWidth) {
    const s = Math.max(W / img.naturalWidth, H / img.naturalHeight)
    const dw = img.naturalWidth * s
    const dh = img.naturalHeight * s
    x.drawImage(img, (W - dw) / 2, (H - dh) / 2, dw, dh)
  }
  x.strokeStyle = "rgba(201, 168, 76, 0.45)"
  x.lineWidth = 4
  x.stroke()
  // Subtle gold bevel border
  x.strokeStyle = "rgba(201, 168, 76, 0.45)"
  x.lineWidth = 4
  x.stroke()
  return c
}

function loadImage(src: string) {
  return new Promise<HTMLImageElement | null>((resolve) => {
    const im = new Image()
    im.crossOrigin = "anonymous"
    im.decoding = "async"
    im.onload = () => resolve(im)
    im.onerror = () => resolve(null)
    im.src = src
  })
}

const reducedMotion = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
const DEG = Math.PI / 180

export function HaloArchHero({
  height = "640px",
  name = "BAROQUE",
  nameSuffix = " INVITES",
  cards = DEFAULT_CARDS,
  sky = "",
  links = [],
  headline = [],
  stats = [],
  loadingLabel = "Loading Collection",
  className,
  onClose,
}: HaloArchHeroProps) {
  const rootRef = React.useRef<HTMLDivElement | null>(null)
  const sceneRef = React.useRef<HTMLDivElement | null>(null)
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)
  const skyRef = React.useRef<HTMLDivElement | null>(null)
  const coverRef = React.useRef<HTMLDivElement | null>(null)
  const markRef = React.useRef<HTMLHeadingElement | null>(null)
  const countRef = React.useRef<HTMLDivElement | null>(null)
  const navRef = React.useRef<HTMLDivElement | null>(null)
  const barRef = React.useRef<HTMLDivElement | null>(null)
  const startRef = React.useRef(-1)
  const [replays, setReplays] = React.useState(0)

  const hasBar = (headline && headline.length > 0) || (stats && stats.length > 0)

  const mark = name.split("")
  const suffix = nameSuffix.split("")
  const effectiveCards = cards.length >= 8 ? cards : [...cards, ...DEFAULT_CARDS].slice(0, 24)
  const n = Math.min(36, Math.max(12, effectiveCards.length))

  React.useEffect(() => {
    const root = rootRef.current
    const sceneEl = sceneRef.current
    const canvas = canvasRef.current
    if (!root || !sceneEl || !canvas) return
    const reduced = reducedMotion()

    // ---- 3D: one flat card per picture, all children of one ring ----
    let renderer: THREE.WebGLRenderer | null = null
    let camera: THREE.PerspectiveCamera | null = null
    let scene: THREE.Scene | null = null
    let ring: THREE.Group | null = null
    const meshes: THREE.Mesh[] = []
    const mats: THREE.MeshBasicMaterial[] = []
    const geo = new THREE.PlaneGeometry(1, 1)

    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" })
      renderer.setClearColor(0x000000, 0)
      renderer.outputColorSpace = THREE.SRGBColorSpace
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(30, 2, 1, 40000)
      ring = new THREE.Group()
      scene.add(ring)
      for (let k = 0; k < n; k++) {
        const mat = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, transparent: true, opacity: 0, color: 0xffffff })
        const m = new THREE.Mesh(geo, mat)
        m.rotation.order = "ZXY"
        m.visible = false
        ring.add(m)
        meshes.push(m)
        mats.push(mat)
      }
    } catch {
      renderer = null
    }

    // ---- layout ----
    let W = 1
    let H = 1
    let navH = 56
    let barH = 120
    let unit = 1
    let arch: Pose = { cy: 0, r: 0, tilt: 0, lean: 0, card: 1 }
    let open: Pose = { cy: 0, r: 0, tilt: 0, lean: 0, card: 1 }

    const measure = () => {
      const r = root.getBoundingClientRect()
      W = Math.max(1, r.width)
      H = Math.max(1, r.height)
      navH = Math.round(Math.min(64, Math.max(46, H * 0.08)))
      const narrow = W <= 720
      barH = hasBar ? Math.round(narrow ? Math.min(220, Math.max(160, H * 0.25)) : Math.min(170, Math.max(104, H * 0.18))) : 0
      root.style.setProperty("--hah-nav", navH + "px")
      root.style.setProperty("--hah-bar", barH + "px")

      unit = Math.max(W / 1342, Math.min(W, H) / 700)
      const chArch = 149 * unit
      const rArch = Math.min(336 * unit, W * 0.4)
      arch = { cy: H * 0.962, r: rArch, tilt: 0, lean: 20 * DEG, card: Math.min(chArch, rArch * 0.44) }

      const panelTop = navH
      const panelH = Math.max(1, H - navH - barH)
      const tiltOpen = 26 * DEG
      const chOpen = Math.min(262 * unit, panelH * 0.54)
      const rOpen = (((chOpen * 9) / 16) * 1.14 * n) / TAU
      const crownMid = panelTop + panelH * (hasBar ? 0.25 : 0.38)
      open = { cy: crownMid + rOpen * Math.cos(tiltOpen), r: rOpen, tilt: tiltOpen, lean: 30 * DEG, card: chOpen }

      if (renderer && camera) {
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
        renderer.setSize(W, H, false)
        camera.aspect = W / H
        camera.position.set(0, 0, H / 2 / Math.tan(15 * DEG))
        camera.lookAt(0, 0, 0)
        camera.updateProjectionMatrix()
      }
    }
    measure()

    // ---- load pictures, then start clock ----
    let alive = true
    let ready = false
    const skyImg = loadImage(sky)
    const cardImgs = effectiveCards.map(loadImage)
    const cap = new Promise<null>((r) => setTimeout(() => r(null), 5000))

    Promise.race([Promise.all([skyImg, ...cardImgs]), cap]).then(async () => {
      if (!alive) return
      const s = await Promise.race([skyImg, Promise.resolve(null)])
      if (s && skyRef.current) skyRef.current.style.backgroundImage = "url(" + JSON.stringify(s.src) + ")"
      if (renderer) {
        const maxAniso = renderer.capabilities.getMaxAnisotropy()
        for (let k = 0; k < n; k++) {
          const img = await Promise.race([cardImgs[k % cardImgs.length], Promise.resolve(null)])
          const tex = new THREE.CanvasTexture(cardCanvas(img))
          tex.colorSpace = THREE.SRGBColorSpace
          tex.anisotropy = Math.min(8, maxAniso)
          mats[k].map = tex
          mats[k].needsUpdate = true
        }
      }
      ready = true
      startRef.current = performance.now()
    })

    const clock = () => {
      if (!ready) return 0
      if (reduced) return T.end + 2
      return (performance.now() - startRef.current) / 1000
    }

    // ---- drag to spin ----
    let drag = 0
    let vel = 0
    let dragging = false
    let lastX = 0
    let lastT = 0
    const onDown = (e: PointerEvent) => {
      if (reduced || clock() < T.open[1]) return
      dragging = true
      lastX = e.clientX
      lastT = performance.now()
      vel = 0
      sceneEl.setPointerCapture(e.pointerId)
      sceneEl.setAttribute("data-drag", "")
    }
    const onMove = (e: PointerEvent) => {
      if (!dragging) return
      const now = performance.now()
      const d = (-(e.clientX - lastX) / Math.max(320, W)) * 2.2
      drag += d
      vel = d / Math.max(8, now - lastT)
      lastX = e.clientX
      lastT = now
    }
    const onUp = (e: PointerEvent) => {
      if (!dragging) return
      dragging = false
      sceneEl.removeAttribute("data-drag")
      if (sceneEl.hasPointerCapture(e.pointerId)) sceneEl.releasePointerCapture(e.pointerId)
    }
    sceneEl.addEventListener("pointerdown", onDown)
    sceneEl.addEventListener("pointermove", onMove)
    sceneEl.addEventListener("pointerup", onUp)
    sceneEl.addEventListener("pointercancel", onUp)

    const markEl = markRef.current
    const letters = markEl ? (Array.from(markEl.querySelectorAll("[data-l]")) as HTMLElement[]) : []
    const extras = markEl ? (Array.from(markEl.querySelectorAll("[data-x]")) as HTMLElement[]) : []
    const countEl = countRef.current
    const cols = countEl ? (Array.from(countEl.querySelectorAll("[data-c]")) as HTMLElement[]) : []
    const navEl = navRef.current
    const navItems = navEl ? (Array.from(navEl.querySelectorAll("[data-n]")) as HTMLElement[]) : []
    const barEl = barRef.current
    const lines = barEl ? (Array.from(barEl.querySelectorAll("[data-line]")) as HTMLElement[]) : []
    const unders = barEl ? (Array.from(barEl.querySelectorAll("[data-u]")) as HTMLElement[]) : []
    const statEls = barEl ? (Array.from(barEl.querySelectorAll("[data-s]")) as HTMLElement[]) : []
    const slot = TAU / n

    let raf = 0
    let visible = true
    let lastFrame = performance.now()

    const draw = () => {
      raf = 0
      const now = performance.now()
      const dt = Math.min(0.05, (now - lastFrame) / 1000)
      lastFrame = now
      const t = clock()

      // wordmark: letters rise, shrink into nav
      if (markEl) {
        const big = Math.min(84, Math.max(32, W * 0.058))
        const small = W < 480 ? 14 : 16
        const k = easeInOut3(span(t, T.shrink))
        const fs = lerp(big, small, k)
        markEl.style.fontSize = fs.toFixed(2) + "px"
        const topBig = Math.round(Math.max(14, H * 0.04))
        const topNav = (navH - small) / 2 - small * 0.06
        markEl.style.top = lerp(topBig, topNav, k).toFixed(2) + "px"
        letters.forEach((el, i) => {
          const p = easeOut3(clamp01((t - T.markIn[0] - i * 0.08) / 0.4))
          el.style.transform = "translateY(" + ((1 - p) * 110).toFixed(1) + "%)"
        })
        extras.forEach((el, i) => {
          const p = easeOut3(clamp01((t - T.suffix[0] - i * 0.035) / 0.28))
          el.style.transform = "translateY(" + ((1 - p) * 110).toFixed(1) + "%)"
          const box = el.parentElement
          if (box) box.style.maxWidth = p >= 1 ? "none" : (p * 1.1).toFixed(3) + "em"
        })
        root.style.setProperty("--hah-markw", Math.round(markEl.offsetWidth) + "px")
      }

      // odometer counter
      if (countEl) {
        const c = countAt(t)
        const out = span(t, T.countOut)
        countEl.style.opacity = (ready ? 1 - out : 0).toFixed(3)
        countEl.style.transform = "translateY(" + (out * -10).toFixed(1) + "px)"
        countEl.style.visibility = out >= 1 || !ready ? "hidden" : "visible"
        cols.forEach((el, i) => {
          el.style.transform = "translateY(" + (-odometer(c, 2 - i) * (100 / 11)).toFixed(3) + "%)"
        })
      }

      const skyK = easeOut3(span(t, T.sky))
      if (skyRef.current) skyRef.current.style.opacity = skyK.toFixed(3)
      if (coverRef.current) coverRef.current.style.opacity = (1 - skyK).toFixed(3)

      const fk = easeOut3(span(t, T.frame))
      const side = Math.round(lerp(0, W <= 720 ? 6 : 10, fk))
      sceneEl.style.clipPath =
        "inset(" + lerp(0, navH, fk).toFixed(1) + "px " + side + "px " + lerp(0, barH, fk).toFixed(1) + "px " + side + "px round " + lerp(0, 16, fk).toFixed(1) + "px)"
      if (t >= T.open[1] && !reduced) sceneEl.setAttribute("data-live", "")
      else sceneEl.removeAttribute("data-live")

      navItems.forEach((el, i) => {
        const p = easeOut3(clamp01((t - T.links[0] - i * 0.05) / 0.3))
        if (p >= 1) {
          el.style.opacity = ""
          el.style.transform = ""
          el.style.visibility = ""
          el.setAttribute("data-done", "")
          return
        }
        el.removeAttribute("data-done")
        el.style.opacity = (p * 0.75).toFixed(3)
        el.style.transform = "translateY(" + ((1 - p) * 8).toFixed(1) + "px)"
        el.style.visibility = p > 0 ? "visible" : "hidden"
      })

      lines.forEach((el, i) => {
        const p = easeOut3(span(t, i === 0 ? T.line1 : T.line2))
        el.style.transform = "translateY(" + ((1 - p) * 105).toFixed(1) + "%)"
      })

      unders.forEach((el, i) => {
        const p = easeInOut3(clamp01((t - T.underline[0] - i * 0.08) / 0.4))
        el.style.backgroundSize = (p * 100).toFixed(1) + "% 1px"
        const sup = el.firstElementChild as HTMLElement | null
        if (sup) sup.style.opacity = (p * 0.75).toFixed(3)
      })

      statEls.forEach((el, i) => {
        const st = stats[i]
        if (!st) return
        const p = easeOut3(span(t, T.stats))
        const shown = span(t, [T.stats[0] - 0.12, T.stats[0] + 0.1])
        const num = el.querySelector("b")
        if (num) num.textContent = (st.value * p).toFixed(st.decimals || 0) + (st.suffix || "")
        el.style.opacity = shown.toFixed(3)
        el.style.transform = "translateY(" + ((1 - shown) * 8).toFixed(1) + "px)"
      })

      // ---- 3D Arch ----
      if (renderer && camera && scene && ring) {
        if (!dragging) {
          drag += vel * dt * 1000
          vel *= Math.pow(0.0025, dt)
        }
        const pose = poseAt(t, arch, open)
        ring.position.set(0, H / 2 - pose.cy, 0)
        ring.rotation.x = -pose.tilt
        const spin = (reduced ? 0 : spinAt(t, slot)) + drag
        const ch = pose.card
        const cw = (ch * 9) / 16
        const fromY = -H / 2 - ch * 0.6 - (H / 2 - pose.cy)
        for (let k = 0; k < n; k++) {
          const m = meshes[k]
          const p = flight(t, k, n)
          m.visible = p > 0
          if (!m.visible) continue
          const a = cardAngle(k, n) - spin
          const e = easeOut3(p)
          const tx = pose.r * Math.cos(a)
          const ty = pose.r * Math.sin(a)
          m.position.set(lerp(0, tx, e), lerp(fromY, ty, e), 0)
          m.rotation.z = lerp(0, a - Math.PI / 2, e)
          m.rotation.x = lerp(0.2, pose.lean, e)
          const s = lerp(0.55, 1, e)
          m.scale.set(cw * s, ch * s, 1)
          mats[k].opacity = Math.min(1, p * 5)
        }
        renderer.render(scene, camera)
      }

      const moving = !reduced
      if (visible && (moving || !ready)) raf = requestAnimationFrame(draw)
    }

    const kick = () => {
      if (!raf && visible) {
        lastFrame = performance.now()
        raf = requestAnimationFrame(draw)
      }
    }
    kick()

    const ro = new ResizeObserver(() => {
      measure()
      if (!raf) draw()
    })
    ro.observe(root)
    const io = new IntersectionObserver((es) => {
      visible = es.some((e) => e.isIntersecting)
      if (visible) kick()
    })
    io.observe(root)

    return () => {
      alive = false
      if (raf) cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      sceneEl.removeEventListener("pointerdown", onDown)
      sceneEl.removeEventListener("pointermove", onMove)
      sceneEl.removeEventListener("pointerup", onUp)
      sceneEl.removeEventListener("pointercancel", onUp)
      geo.dispose()
      mats.forEach((m) => {
        m.map?.dispose()
        m.dispose()
      })
      renderer?.dispose()
    }
  }, [replays, n, sky, height])

  const digitStack = (key: string) => (
    <span className="hah-col" key={key}>
      <b data-c="">
        {Array.from({ length: 11 }, (_, i) => (
          <i key={i}>{i % 10}</i>
        ))}
      </b>
    </span>
  )

  return (
    <div ref={rootRef} className={"hah-root shadow-2xl " + (className ? " " + className : "")} style={{ height }}>
      <style>{CSS}</style>
      <div ref={sceneRef} className="hah-scene" aria-hidden="true">
        <div ref={skyRef} className="hah-sky" />
        <div ref={coverRef} className="hah-cover" />
        <canvas ref={canvasRef} className="hah-canvas" />
      </div>

      <div className="hah-ui">
        <h1 ref={markRef} className="hah-mark" aria-label={name + nameSuffix}>
          {mark.map((ch, i) => (
            <span key={"m" + i} aria-hidden="true">
              <i data-l="" style={{ transform: "translateY(110%)" }}>
                {ch === " " ? " " : ch}
              </i>
            </span>
          ))}
          {suffix.map((ch, i) => (
            <span key={"x" + i} aria-hidden="true" style={{ maxWidth: 0 }}>
              <i data-x="" style={{ transform: "translateY(110%)" }}>
                {ch === " " ? " " : ch}
              </i>
            </span>
          ))}
          <span aria-hidden="true">
            <i data-l="" style={{ transform: "translateY(110%)" }}>
              .
            </i>
          </span>
        </h1>

        <div ref={countRef} className="hah-count" aria-hidden="true" style={{ opacity: 0 }}>
          <span className="hah-digits">
            {digitStack("h")}
            {digitStack("t")}
            {digitStack("o")}
            <span className="hah-pct">%</span>
          </span>
          <small>{loadingLabel}</small>
        </div>

        {/* UI Nav removed per user request - only Back button on page */}

        {hasBar && (
          <div ref={barRef} className="hah-bar">
            <p className="hah-head">
              {headline.map((line, li) => (
                <span className="hah-line" key={li}>
                  <span data-line="" style={{ transform: "translateY(105%)" }}>
                    {line.map((wd, wi) =>
                      wd.underline ? (
                        <span className="hah-u" data-u="" key={wi}>
                          {wd.text}
                          <sup>↗</sup>
                        </span>
                      ) : (
                        <React.Fragment key={wi}>{wd.text}</React.Fragment>
                      ),
                    )}
                  </span>
                </span>
              ))}
            </p>
            <div className="hah-stats">
              {stats.map((s) => (
                <div className="hah-stat" data-s="" key={s.label} style={{ opacity: 0 }}>
                  <b>{"0" + (s.suffix || "")}</b>
                  <small>{s.label}</small>
                </div>
              ))}
            </div>
          </div>
        )}
        <span className="hah-sr">
          {stats.map((s) => s.value.toFixed(s.decimals || 0) + (s.suffix || "") + " " + s.label).join(", ")}
        </span>
      </div>
    </div>
  )
}

export default HaloArchHero
