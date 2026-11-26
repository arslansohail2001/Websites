const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'assets', 'ethnic-bg');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// 1. Mughal Palace Courtyard (Sunset / Crimson & Gold)
const mughalPalace = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 544" width="680" height="544">
  <defs>
    <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#21081A"/>
      <stop offset="35%" stop-color="#4E1228"/>
      <stop offset="65%" stop-color="#9C2742"/>
      <stop offset="85%" stop-color="#D97736"/>
      <stop offset="100%" stop-color="#FAD082"/>
    </linearGradient>
    <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3D1426"/>
      <stop offset="50%" stop-color="#240D1D"/>
      <stop offset="100%" stop-color="#140610"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#C9A84C"/>
      <stop offset="50%" stop-color="#F5DE94"/>
      <stop offset="100%" stop-color="#9E7D2E"/>
    </linearGradient>
    <linearGradient id="archGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3A0815"/>
      <stop offset="100%" stop-color="#1A0208"/>
    </linearGradient>
    <radialGradient id="sunGlow" cx="50%" cy="65%" r="40%">
      <stop offset="0%" stop-color="#FFE8A3" stop-opacity="0.9"/>
      <stop offset="40%" stop-color="#E8823A" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#A62B46" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Sky -->
  <rect width="680" height="544" fill="url(#skyGrad)"/>
  <circle cx="340" cy="310" r="140" fill="url(#sunGlow)"/>

  <!-- Sun -->
  <circle cx="340" cy="310" r="32" fill="#FFF2CF" opacity="0.95"/>

  <!-- Birds flocking -->
  <path d="M220 180 Q226 175 232 180 Q238 175 244 180 Q238 178 232 182 Q226 178 220 180 Z" fill="#240713" opacity="0.6"/>
  <path d="M250 160 Q255 156 260 160 Q265 156 270 160 Q265 158 260 162 Q255 158 250 160 Z" fill="#240713" opacity="0.5"/>
  <path d="M410 190 Q415 186 420 190 Q425 186 430 190 Q425 188 420 192 Q415 188 410 190 Z" fill="#240713" opacity="0.6"/>
  <path d="M435 175 Q439 171 443 175 Q447 171 451 175 Q447 173 443 177 Q439 173 435 175 Z" fill="#240713" opacity="0.5"/>

  <!-- Distant Mountains -->
  <path d="M0 340 Q160 290 320 330 T680 320 L680 400 L0 400 Z" fill="#5E162B" opacity="0.7"/>
  <path d="M0 350 Q200 310 400 350 T680 340 L680 410 L0 410 Z" fill="#440D1D" opacity="0.85"/>

  <!-- Mughal Palace Silhouette -->
  <!-- Central Grand Dome -->
  <path d="M340 220 C340 240 330 250 320 265 C310 280 310 295 310 320 L370 320 C370 295 370 280 360 265 C350 250 340 240 340 220 Z" fill="#260510"/>
  <path d="M340 205 L340 220" stroke="url(#goldGrad)" stroke-width="2.5"/>
  <circle cx="340" cy="204" r="3.5" fill="url(#goldGrad)"/>

  <!-- Left Secondary Dome -->
  <path d="M260 250 C260 265 252 272 245 282 C238 292 238 305 238 325 L282 325 C282 305 282 292 275 282 C268 272 260 265 260 250 Z" fill="#260510"/>
  <path d="M260 240 L260 250" stroke="url(#goldGrad)" stroke-width="2"/>

  <!-- Right Secondary Dome -->
  <path d="M420 250 C420 265 412 272 405 282 C398 292 398 305 398 325 L442 325 C442 305 442 292 435 282 C428 272 420 265 420 250 Z" fill="#260510"/>
  <path d="M420 240 L420 250" stroke="url(#goldGrad)" stroke-width="2"/>

  <!-- Side Minarets -->
  <rect x="175" y="240" width="16" height="85" fill="#260510"/>
  <path d="M183 222 C183 230 178 235 174 240 L192 240 C188 235 183 230 183 222 Z" fill="#260510"/>
  <line x1="183" y1="215" x2="183" y2="222" stroke="url(#goldGrad)" stroke-width="1.5"/>

  <rect x="489" y="240" width="16" height="85" fill="#260510"/>
  <path d="M497 222 C497 230 492 235 488 240 L506 240 C502 235 497 230 497 222 Z" fill="#260510"/>
  <line x1="497" y1="215" x2="497" y2="222" stroke="url(#goldGrad)" stroke-width="1.5"/>

  <!-- Palace Base & Colonnade Wall -->
  <rect x="150" y="320" width="380" height="40" fill="#260510"/>
  <!-- Arched Windows in Palace Base -->
  <g fill="#4A0D1F" opacity="0.8">
    <path d="M330 340 Q340 330 350 340 L350 360 L330 360 Z"/>
    <path d="M295 342 Q303 334 311 342 L311 360 L295 360 Z"/>
    <path d="M369 342 Q377 334 385 342 L385 360 L369 360 Z"/>
    <path d="M260 344 Q267 337 274 344 L274 360 L260 360 Z"/>
    <path d="M406 344 Q413 337 420 344 L420 360 L406 360 Z"/>
  </g>

  <!-- Cypress Trees -->
  <g fill="#1F040C">
    <path d="M140 360 Q130 320 140 280 Q150 320 140 360 Z"/>
    <path d="M160 360 Q152 330 160 295 Q168 330 160 360 Z"/>
    <path d="M520 360 Q512 330 520 295 Q528 330 520 360 Z"/>
    <path d="M540 360 Q530 320 540 280 Q550 320 540 360 Z"/>
  </g>

  <!-- Terrace / Water Reflecting Pool -->
  <rect x="0" y="360" width="680" height="184" fill="url(#waterGrad)"/>
  <!-- Gold Fountain / Lotus Pool in center -->
  <polygon points="260,360 420,360 480,544 200,544" fill="#1C0612" opacity="0.9"/>
  <!-- Water ripples and reflections -->
  <ellipse cx="340" cy="420" rx="100" ry="8" fill="#FAD082" opacity="0.12"/>
  <ellipse cx="340" cy="460" rx="130" ry="10" fill="#FAD082" opacity="0.1"/>
  <ellipse cx="340" cy="500" rx="160" ry="12" fill="#FAD082" opacity="0.08"/>

  <!-- Foreground Ornamental Jharokha Cusped Arch Frame -->
  <!-- Outer Arch Border -->
  <path d="M0 0 L680 0 L680 544 L600 544 L600 240 C600 130 510 50 400 50 C370 50 355 60 340 75 C325 60 310 50 280 50 C170 50 80 130 80 240 L80 544 L0 544 Z" fill="url(#archGrad)"/>

  <!-- Intricate Cusped Arch Inner Cutout with Gold Outline -->
  <path d="M80 544 L80 230 C80 180 110 140 150 110 C180 88 220 75 260 70 C280 67 300 75 315 88 C325 97 333 108 340 120 C347 108 355 97 365 88 C380 75 400 67 420 70 C460 75 500 88 530 110 C570 140 600 180 600 230 L600 544" fill="none" stroke="url(#goldGrad)" stroke-width="4.5"/>
  <path d="M72 544 L72 230 C72 175 104 133 145 102 C176 79 218 65 260 60 C282 57 304 65 320 80 C329 88 335 97 340 108 C345 97 351 88 360 80 C376 65 398 57 420 60 C462 65 504 79 535 102 C576 133 608 175 608 230 L608 544" fill="none" stroke="url(#goldGrad)" stroke-width="1.5" stroke-dasharray="3,3"/>

  <!-- Hanging Ornate Gold Lantern -->
  <line x1="340" y1="0" x2="340" y2="120" stroke="url(#goldGrad)" stroke-width="2"/>
  <circle cx="340" cy="120" r="3" fill="url(#goldGrad)"/>
  <!-- Lantern Cage -->
  <path d="M333 125 L347 125 L352 145 L340 162 L328 145 Z" fill="#240712" stroke="url(#goldGrad)" stroke-width="2"/>
  <circle cx="340" cy="144" r="7" fill="#FFEAA7" opacity="0.95"/>
  <circle cx="340" cy="144" r="18" fill="#FFEAA7" opacity="0.3"/>
  <path d="M340 162 L340 178" stroke="url(#goldGrad)" stroke-width="1.5"/>
  <circle cx="340" cy="180" r="2.5" fill="url(#goldGrad)"/>

  <!-- Left & Right Hanging Chandeliers -->
  <g transform="translate(190, 80)">
    <line x1="0" y1="-80" x2="0" y2="40" stroke="url(#goldGrad)" stroke-width="1.2"/>
    <path d="-6 42 L6 42 L9 58 L0 70 L-9 58 Z" fill="#240712" stroke="url(#goldGrad)" stroke-width="1.5"/>
    <circle cx="0" cy="56" r="5" fill="#FFEAA7" opacity="0.9"/>
  </g>
  <g transform="translate(490, 80)">
    <line x1="0" y1="-80" x2="0" y2="40" stroke="url(#goldGrad)" stroke-width="1.2"/>
    <path d="-6 42 L6 42 L9 58 L0 70 L-9 58 Z" fill="#240712" stroke="url(#goldGrad)" stroke-width="1.5"/>
    <circle cx="0" cy="56" r="5" fill="#FFEAA7" opacity="0.9"/>
  </g>

  <!-- Ornate corner flourishes -->
  <g stroke="url(#goldGrad)" stroke-width="1.5" fill="none">
    <path d="M20 20 Q50 20 60 50 Q60 20 90 20"/>
    <circle cx="20" cy="20" r="4" fill="url(#goldGrad)"/>
    <path d="M660 20 Q630 20 620 50 Q620 20 590 20"/>
    <circle cx="660" cy="20" r="4" fill="url(#goldGrad)"/>
  </g>
</svg>`;

// 2. Pichwai Lotus Garden (Emerald & Blush Pink Lotus)
const pichwaiGarden = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 544" width="680" height="544">
  <defs>
    <linearGradient id="pichSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#05170E"/>
      <stop offset="40%" stop-color="#0D2E1F"/>
      <stop offset="70%" stop-color="#1B4D35"/>
      <stop offset="100%" stop-color="#3A6B4E"/>
    </linearGradient>
    <linearGradient id="pichWater" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#092015"/>
      <stop offset="50%" stop-color="#04120C"/>
      <stop offset="100%" stop-color="#020805"/>
    </linearGradient>
    <linearGradient id="pichGold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#D4AF37"/>
      <stop offset="50%" stop-color="#FCEBA7"/>
      <stop offset="100%" stop-color="#AA8222"/>
    </linearGradient>
    <linearGradient id="lotusPink" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#E25B7B"/>
      <stop offset="60%" stop-color="#F7A8B8"/>
      <stop offset="100%" stop-color="#FFF2F5"/>
    </linearGradient>
    <linearGradient id="leafGreen" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1E5C38"/>
      <stop offset="100%" stop-color="#0D331D"/>
    </linearGradient>
  </defs>

  <rect width="680" height="544" fill="url(#pichSky)"/>

  <!-- Golden Moon / Pichwai Sun -->
  <circle cx="340" cy="170" r="48" fill="#FCEBA7" opacity="0.85"/>
  <circle cx="340" cy="170" r="62" stroke="url(#pichGold)" stroke-width="1" stroke-dasharray="4,4" fill="none" opacity="0.6"/>

  <!-- Stylized Pichwai Banyan / Banana Trees -->
  <!-- Left Tree -->
  <g transform="translate(110, 240)">
    <!-- Palm fronds / Banana leaves -->
    <path d="M0 0 Q-70 -60 -120 -30 Q-70 -10 0 0 Z" fill="url(#leafGreen)" stroke="url(#pichGold)" stroke-width="1.2"/>
    <path d="M0 0 Q-60 -90 -90 -80 Q-40 -40 0 0 Z" fill="url(#leafGreen)" stroke="url(#pichGold)" stroke-width="1.2"/>
    <path d="M0 0 Q-30 -110 -40 -120 Q-10 -60 0 0 Z" fill="url(#leafGreen)" stroke="url(#pichGold)" stroke-width="1.2"/>
    <path d="M0 0 Q20 -110 30 -120 Q10 -60 0 0 Z" fill="url(#leafGreen)" stroke="url(#pichGold)" stroke-width="1.2"/>
    <path d="M0 0 Q50 -90 80 -70 Q30 -30 0 0 Z" fill="url(#leafGreen)" stroke="url(#pichGold)" stroke-width="1.2"/>
    <!-- Trunk -->
    <path d="M-6 0 C-10 60 -16 110 -24 140 L16 140 C10 110 6 60 6 0 Z" fill="#0A2416" stroke="url(#pichGold)" stroke-width="1"/>
  </g>

  <!-- Right Tree -->
  <g transform="translate(570, 240)">
    <path d="M0 0 Q70 -60 120 -30 Q70 -10 0 0 Z" fill="url(#leafGreen)" stroke="url(#pichGold)" stroke-width="1.2"/>
    <path d="M0 0 Q60 -90 90 -80 Q40 -40 0 0 Z" fill="url(#leafGreen)" stroke="url(#pichGold)" stroke-width="1.2"/>
    <path d="M0 0 Q30 -110 40 -120 Q10 -60 0 0 Z" fill="url(#leafGreen)" stroke="url(#pichGold)" stroke-width="1.2"/>
    <path d="M0 0 Q-20 -110 -30 -120 Q-10 -60 0 0 Z" fill="url(#leafGreen)" stroke="url(#pichGold)" stroke-width="1.2"/>
    <path d="M0 0 Q-50 -90 -80 -70 Q-30 -30 0 0 Z" fill="url(#leafGreen)" stroke="url(#pichGold)" stroke-width="1.2"/>
    <path d="M6 0 C10 60 16 110 24 140 L-16 140 C-10 110 -6 60 -6 0 Z" fill="#0A2416" stroke="url(#pichGold)" stroke-width="1"/>
  </g>

  <!-- Pichwai Peacock Silhouette on Terrace -->
  <g transform="translate(240, 310) scale(0.7)" fill="url(#pichGold)">
    <path d="M30 40 C30 25 35 15 42 10 C46 7 50 12 48 18 C46 25 40 32 38 42 C38 52 48 65 55 80 C65 100 80 140 100 170 C70 165 45 140 35 120 C25 100 25 80 28 60 Z"/>
    <!-- Crest on head -->
    <circle cx="45" cy="5" r="2.5"/>
    <line x1="43" y1="8" x2="45" y2="5" stroke="url(#pichGold)" stroke-width="1"/>
  </g>

  <!-- Right facing peacock -->
  <g transform="translate(440, 310) scale(-0.7, 0.7)" fill="url(#pichGold)">
    <path d="M30 40 C30 25 35 15 42 10 C46 7 50 12 48 18 C46 25 40 32 38 42 C38 52 48 65 55 80 C65 100 80 140 100 170 C70 165 45 140 35 120 C25 100 25 80 28 60 Z"/>
    <circle cx="45" cy="5" r="2.5"/>
    <line x1="43" y1="8" x2="45" y2="5" stroke="url(#pichGold)" stroke-width="1"/>
  </g>

  <!-- Lotus Pond Water Surface -->
  <rect x="0" y="370" width="680" height="174" fill="url(#pichWater)"/>
  <line x1="0" y1="370" x2="680" y2="370" stroke="url(#pichGold)" stroke-width="2.5"/>

  <!-- Ripples -->
  <path d="M0 385 Q170 395 340 385 T680 385" stroke="url(#pichGold)" stroke-width="0.8" fill="none" opacity="0.3"/>
  <path d="M0 420 Q170 430 340 420 T680 420" stroke="url(#pichGold)" stroke-width="0.8" fill="none" opacity="0.25"/>
  <path d="M0 460 Q170 470 340 460 T680 460" stroke="url(#pichGold)" stroke-width="0.8" fill="none" opacity="0.2"/>

  <!-- Lotus Leaves (Padmini) -->
  <g fill="#0B2B1B" stroke="url(#pichGold)" stroke-width="1">
    <ellipse cx="140" cy="440" rx="42" ry="16"/>
    <ellipse cx="270" cy="480" rx="55" ry="20"/>
    <ellipse cx="410" cy="485" rx="50" ry="18"/>
    <ellipse cx="540" cy="445" rx="45" ry="17"/>
    <ellipse cx="340" cy="410" rx="38" ry="14"/>
  </g>

  <!-- Blooming Lotus Flowers (Kamal) -->
  <!-- Center Large Lotus -->
  <g transform="translate(340, 440)">
    <!-- Base Petals -->
    <path d="M-35 5 C-45 -25 0 -45 0 -45 C0 -45 45 -25 35 5 Z" fill="url(#lotusPink)" stroke="url(#pichGold)" stroke-width="1"/>
    <!-- Outer petals -->
    <path d="M-30 8 C-55 -10 -35 -35 -20 -30 Z" fill="url(#lotusPink)" stroke="url(#pichGold)" stroke-width="0.8"/>
    <path d="M30 8 C55 -10 35 -35 20 -30 Z" fill="url(#lotusPink)" stroke="url(#pichGold)" stroke-width="0.8"/>
    <!-- Core bud -->
    <path d="M-15 10 C-20 -20 0 -40 0 -40 C0 -40 20 -20 15 10 Z" fill="#FFE3EA" stroke="url(#pichGold)" stroke-width="1"/>
    <circle cx="0" cy="-2" r="3" fill="url(#pichGold)"/>
  </g>

  <!-- Left Lotus -->
  <g transform="translate(180, 420) scale(0.7)">
    <path d="M-35 5 C-45 -25 0 -45 0 -45 C0 -45 45 -25 35 5 Z" fill="url(#lotusPink)" stroke="url(#pichGold)" stroke-width="1"/>
    <path d="M-15 10 C-20 -20 0 -40 0 -40 C0 -40 20 -20 15 10 Z" fill="#FFE3EA" stroke="url(#pichGold)" stroke-width="1"/>
  </g>

  <!-- Right Lotus -->
  <g transform="translate(500, 425) scale(0.7)">
    <path d="M-35 5 C-45 -25 0 -45 0 -45 C0 -45 45 -25 35 5 Z" fill="url(#lotusPink)" stroke="url(#pichGold)" stroke-width="1"/>
    <path d="M-15 10 C-20 -20 0 -40 0 -40 C0 -40 20 -20 15 10 Z" fill="#FFE3EA" stroke="url(#pichGold)" stroke-width="1"/>
  </g>

  <!-- Traditional Pichwai Border with Lotus Motifs around edge -->
  <rect x="12" y="12" width="656" height="520" fill="none" stroke="url(#pichGold)" stroke-width="2"/>
  <rect x="20" y="20" width="640" height="504" fill="none" stroke="url(#pichGold)" stroke-width="1" stroke-dasharray="6,4"/>
</svg>`;

// 3. Rajasthani Sunset Fort & Jali (Maroon & Saffron Ochre)
const rajasthaniSunset = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 544" width="680" height="544">
  <defs>
    <linearGradient id="rajSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#300714"/>
      <stop offset="35%" stop-color="#6B1426"/>
      <stop offset="65%" stop-color="#B83D1B"/>
      <stop offset="85%" stop-color="#E87A2A"/>
      <stop offset="100%" stop-color="#FFC966"/>
    </linearGradient>
    <linearGradient id="fortGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#26040C"/>
      <stop offset="100%" stop-color="#140105"/>
    </linearGradient>
    <linearGradient id="rajGold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#E5C158"/>
      <stop offset="50%" stop-color="#FFF0BA"/>
      <stop offset="100%" stop-color="#A87A1E"/>
    </linearGradient>
  </defs>

  <rect width="680" height="544" fill="url(#rajSky)"/>

  <!-- Big Glowing Rajasthani Sunset Sun -->
  <circle cx="340" cy="300" r="85" fill="#FFEAA7" opacity="0.85"/>
  <circle cx="340" cy="300" r="130" fill="#E87A2A" opacity="0.3"/>

  <!-- Layered Sandstone Hill Ridges -->
  <path d="M0 360 Q180 320 360 355 T680 340 L680 544 L0 544 Z" fill="#420B19" opacity="0.85"/>
  <path d="M0 390 Q220 350 440 395 T680 380 L680 544 L0 544 Z" fill="#2E0610"/>

  <!-- Fort Bastions & Ramparts Silhouette -->
  <!-- Left Watchtower / Chhatri -->
  <rect x="80" y="270" width="40" height="90" fill="url(#fortGrad)"/>
  <path d="M70 270 L130 270 L125 255 L75 255 Z" fill="url(#fortGrad)" stroke="url(#rajGold)" stroke-width="1"/>
  <!-- Chhatri Dome on top -->
  <path d="M100 230 C100 242 85 248 80 255 L120 255 C115 248 100 242 100 230 Z" fill="url(#fortGrad)" stroke="url(#rajGold)" stroke-width="1.5"/>
  <line x1="100" y1="220" x2="100" y2="230" stroke="url(#rajGold)" stroke-width="1.5"/>

  <!-- Right Chhatri -->
  <rect x="560" y="270" width="40" height="90" fill="url(#fortGrad)"/>
  <path d="M550 270 L610 270 L605 255 L555 255 Z" fill="url(#fortGrad)" stroke="url(#rajGold)" stroke-width="1"/>
  <path d="M580 230 C580 242 565 248 560 255 L600 255 C595 248 580 242 580 230 Z" fill="url(#fortGrad)" stroke="url(#rajGold)" stroke-width="1.5"/>
  <line x1="580" y1="220" x2="580" y2="230" stroke="url(#rajGold)" stroke-width="1.5"/>

  <!-- Main Fort Walls with Battlements -->
  <path d="M120 330 L560 330 L560 410 L120 410 Z" fill="url(#fortGrad)"/>
  <!-- Stepped Battlements -->
  <g fill="url(#fortGrad)">
    <rect x="140" y="320" width="16" height="15"/>
    <rect x="170" y="320" width="16" height="15"/>
    <rect x="200" y="320" width="16" height="15"/>
    <rect x="230" y="320" width="16" height="15"/>
    <rect x="430" y="320" width="16" height="15"/>
    <rect x="460" y="320" width="16" height="15"/>
    <rect x="490" y="320" width="16" height="15"/>
    <rect x="520" y="320" width="16" height="15"/>
  </g>

  <!-- Central Grand Palace Domes -->
  <path d="M340 240 C340 260 325 270 315 285 L365 285 C355 270 340 260 340 240 Z" fill="url(#fortGrad)" stroke="url(#rajGold)" stroke-width="1.8"/>
  <line x1="340" y1="228" x2="340" y2="240" stroke="url(#rajGold)" stroke-width="2"/>

  <!-- Elephant Procession Silhouette (Carrying Royal Howdah) -->
  <g transform="translate(290, 360) scale(0.6)" fill="#140105">
    <!-- Elephant body -->
    <path d="M50 40 C30 40 15 55 10 75 C8 85 8 100 12 110 L12 140 L26 140 L28 115 L44 115 L46 140 L60 140 L62 105 C75 105 85 110 92 120 L96 140 L110 140 L108 110 L118 140 L132 140 L128 95 C125 70 110 50 85 45 Z"/>
    <!-- Trunk & Tusk -->
    <path d="M12 75 C5 85 0 100 2 115 C5 125 14 125 15 118 C12 105 18 90 25 85 Z"/>
    <path d="M22 92 L34 98" stroke="url(#rajGold)" stroke-width="2"/>
    <!-- Royal Howdah canopy on back -->
    <path d="M52 40 L98 40 L94 20 L56 20 Z" fill="url(#rajGold)"/>
    <path d="M50 20 Q75 5 100 20 Z" fill="url(#rajGold)"/>
  </g>

  <!-- Intricate Jali Screen Arch Overlay along borders -->
  <g stroke="url(#rajGold)" stroke-width="1.5" fill="none">
    <!-- Top Decorative Arch Header -->
    <path d="M0 60 Q170 30 340 50 Q510 30 680 60"/>
    <path d="M0 72 Q170 42 340 62 Q510 42 680 72"/>
    <!-- Jali Diamond Patterns at top corners -->
    <polygon points="40,20 60,40 40,60 20,40"/>
    <polygon points="640,20 660,40 640,60 620,40"/>
    <polygon points="80,30 95,45 80,60 65,45"/>
    <polygon points="600,30 615,45 600,60 585,45"/>
  </g>
</svg>`;

// 4. White Marble Mughal Pavilion & Fountains (Nikkah / Crystal Acrylic)
const marblePavilion = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 544" width="680" height="544">
  <defs>
    <linearGradient id="marbSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1B263B"/>
      <stop offset="40%" stop-color="#415A77"/>
      <stop offset="70%" stop-color="#8E9AAF"/>
      <stop offset="100%" stop-color="#E0E1DD"/>
    </linearGradient>
    <linearGradient id="marbStone" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#F2EDE4"/>
      <stop offset="100%" stop-color="#D9D2C5"/>
    </linearGradient>
    <linearGradient id="marbGold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#C9A84C"/>
      <stop offset="50%" stop-color="#F7E7A6"/>
      <stop offset="100%" stop-color="#9C7A28"/>
    </linearGradient>
  </defs>

  <rect width="680" height="544" fill="url(#marbSky)"/>

  <!-- Soft Ethereal Moon -->
  <circle cx="340" cy="150" r="50" fill="#FFFBF2" opacity="0.9"/>
  <circle cx="340" cy="150" r="85" fill="#FFFBF2" opacity="0.2"/>

  <!-- Distant Palace Domes in Mist -->
  <path d="M120 330 C120 290 140 270 160 250 C180 270 200 290 200 330 Z" fill="#CCD3DB" opacity="0.5"/>
  <path d="M480 330 C480 290 500 270 520 250 C540 270 560 290 560 330 Z" fill="#CCD3DB" opacity="0.5"/>

  <!-- Symmetrical Classical White Marble Pavilion -->
  <!-- Pavilion Base Terrace -->
  <rect x="140" y="320" width="400" height="60" fill="url(#marbStone)" stroke="url(#marbGold)" stroke-width="2"/>

  <!-- Grand Central Onion Dome -->
  <path d="M340 120 C340 150 310 180 290 220 L390 220 C370 180 340 150 340 120 Z" fill="url(#marbStone)" stroke="url(#marbGold)" stroke-width="2.5"/>
  <line x1="340" y1="95" x2="340" y2="120" stroke="url(#marbGold)" stroke-width="3"/>
  <circle cx="340" cy="94" r="5" fill="url(#marbGold)"/>

  <!-- Side Domes -->
  <path d="M220 180 C220 200 205 220 190 245 L250 245 C235 220 220 200 220 180 Z" fill="url(#marbStone)" stroke="url(#marbGold)" stroke-width="2"/>
  <line x1="220" y1="165" x2="220" y2="180" stroke="url(#marbGold)" stroke-width="2"/>

  <path d="M460 180 C460 200 445 220 430 245 L490 245 C475 220 460 200 460 180 Z" fill="url(#marbStone)" stroke="url(#marbGold)" stroke-width="2"/>
  <line x1="460" y1="165" x2="460" y2="180" stroke="url(#marbGold)" stroke-width="2"/>

  <!-- Marble Pillars & Cusped Arches -->
  <rect x="170" y="245" width="340" height="75" fill="url(#marbStone)" stroke="url(#marbGold)" stroke-width="1.5"/>
  <!-- Cutout Archways inside pavilion -->
  <g fill="#1F2E45">
    <path d="M200 320 L200 280 Q215 260 230 280 L230 320 Z"/>
    <path d="M260 320 L260 275 Q285 250 310 275 L310 320 Z"/>
    <path d="M370 320 L370 275 Q395 250 420 275 L420 320 Z"/>
    <path d="M450 320 L450 280 Q465 260 480 280 L480 320 Z"/>
    <!-- Grand Center Archway -->
    <path d="M315 320 L315 265 Q340 235 365 265 L365 320 Z" fill="#142033" stroke="url(#marbGold)" stroke-width="1.5"/>
  </g>

  <!-- Charbagh Geometric Water Channel & Fountain -->
  <polygon points="280,380 400,380 470,544 210,544" fill="#20334D" stroke="url(#marbGold)" stroke-width="2"/>
  <!-- Fountain Jet -->
  <g stroke="#FFFFFF" opacity="0.85">
    <path d="M340 430 Q330 390 320 410" fill="none" stroke-width="1.8"/>
    <path d="M340 430 Q350 390 360 410" fill="none" stroke-width="1.8"/>
    <path d="M340 430 Q335 375 340 400" fill="none" stroke-width="2"/>
  </g>
  <circle cx="340" cy="430" r="10" fill="url(#marbGold)"/>

  <!-- Inlaid Pietre Dure Gold Floral Tracery on Marble Borders -->
  <path d="M20 20 L660 20 L660 524 L20 524 Z" fill="none" stroke="url(#marbGold)" stroke-width="2"/>
  <path d="M30 30 L650 30 L650 514 L30 514 Z" fill="none" stroke="url(#marbGold)" stroke-width="1" stroke-dasharray="4,4"/>
</svg>`;

// 5. Kashmiri Chinar & Rose Garden (Floral Suites)
const kashmirFloral = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 544" width="680" height="544">
  <defs>
    <linearGradient id="kashSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#260C22"/>
      <stop offset="40%" stop-color="#5E183F"/>
      <stop offset="70%" stop-color="#9C2D5C"/>
      <stop offset="90%" stop-color="#DE7382"/>
      <stop offset="100%" stop-color="#FCD2C7"/>
    </linearGradient>
    <linearGradient id="kashGold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#D4AF37"/>
      <stop offset="50%" stop-color="#FFEFA8"/>
      <stop offset="100%" stop-color="#997722"/>
    </linearGradient>
    <linearGradient id="roseGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#C2185B"/>
      <stop offset="100%" stop-color="#E91E63"/>
    </linearGradient>
  </defs>

  <rect width="680" height="544" fill="url(#kashSky)"/>

  <!-- Himalayan Snowcaps Silhouette in Distance -->
  <polygon points="0,320 80,260 140,290 220,240 300,300 380,250 460,310 540,245 610,285 680,250 680,360 0,360" fill="#360F25" opacity="0.6"/>
  <polygon points="0,340 120,285 240,335 360,280 480,330 600,285 680,330 680,380 0,380" fill="#240718" opacity="0.8"/>

  <!-- Dal Lake Water -->
  <rect x="0" y="360" width="680" height="184" fill="#1C0615"/>
  <ellipse cx="340" cy="430" rx="200" ry="25" fill="#FCD2C7" opacity="0.15"/>

  <!-- Shikara Boat Silhouette with Floral Canopy -->
  <g transform="translate(260, 390) scale(0.85)">
    <!-- Wooden boat hull -->
    <path d="M-80 20 Q-30 35 60 30 Q120 25 150 10 Q110 22 40 22 Q-30 20 -80 20 Z" fill="#0A0207" stroke="url(#kashGold)" stroke-width="1.2"/>
    <!-- Canopy roof -->
    <path d="M-10 -5 L80 -5 L70 -25 L0 -25 Z" fill="#6B133A" stroke="url(#kashGold)" stroke-width="1.5"/>
    <!-- Canopy poles -->
    <line x1="-5" y1="-5" x2="-5" y2="20" stroke="url(#kashGold)" stroke-width="1.5"/>
    <line x1="75" y1="-5" x2="75" y2="20" stroke="url(#kashGold)" stroke-width="1.5"/>
    <!-- Kashmiri Chinar leaf motif on canopy -->
    <circle cx="35" cy="-15" r="4" fill="url(#kashGold)"/>
  </g>

  <!-- Cascading Kashmiri Chinar Leaves & Rose Garlands Arch (Foreground) -->
  <!-- Left Cascading Garland -->
  <g stroke="url(#kashGold)" stroke-width="1.5" fill="none">
    <path d="M-20 -20 Q120 40 100 240 Q90 340 40 460"/>
    <path d="M700 -20 Q560 40 580 240 Q590 340 640 460"/>
  </g>

  <!-- Roses and Chinar leaves on the garland -->
  <g fill="url(#roseGrad)" stroke="url(#kashGold)" stroke-width="1.2">
    <circle cx="80" cy="90" r="14"/>
    <circle cx="105" cy="160" r="16"/>
    <circle cx="95" cy="240" r="15"/>
    <circle cx="65" cy="330" r="14"/>

    <circle cx="600" cy="90" r="14"/>
    <circle cx="575" cy="160" r="16"/>
    <circle cx="585" cy="240" r="15"/>
    <circle cx="615" cy="330" r="14"/>
  </g>

  <!-- Ornate Arch Top Framing -->
  <path d="M0 0 L680 0 L680 80 Q340 130 0 80 Z" fill="#1C0615" stroke="url(#kashGold)" stroke-width="2"/>
  <circle cx="340" cy="55" r="12" fill="none" stroke="url(#kashGold)" stroke-width="2"/>
  <circle cx="340" cy="55" r="5" fill="url(#kashGold)"/>
</svg>`;

// 6. Royal Valima Night / Starlit Mughal Fort (Box Keepsakes)
const valimaNight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 544" width="680" height="544">
  <defs>
    <linearGradient id="valSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#040814"/>
      <stop offset="35%" stop-color="#0B1530"/>
      <stop offset="70%" stop-color="#142654"/>
      <stop offset="100%" stop-color="#233E78"/>
    </linearGradient>
    <linearGradient id="valGold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#E5C158"/>
      <stop offset="50%" stop-color="#FFF2CE"/>
      <stop offset="100%" stop-color="#A87A1E"/>
    </linearGradient>
    <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFF7DC" stop-opacity="1"/>
      <stop offset="100%" stop-color="#FFF7DC" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="680" height="544" fill="url(#valSky)"/>

  <!-- Golden Stars in Night Sky -->
  <g fill="#FFF9E6">
    <circle cx="80" cy="60" r="1.5"/>
    <circle cx="140" cy="95" r="1"/>
    <circle cx="210" cy="45" r="2" fill="url(#starGlow)"/>
    <circle cx="290" cy="80" r="1.2"/>
    <circle cx="380" cy="50" r="1.8" fill="url(#starGlow)"/>
    <circle cx="450" cy="90" r="1.5"/>
    <circle cx="530" cy="40" r="2" fill="url(#starGlow)"/>
    <circle cx="610" cy="75" r="1.2"/>
    <circle cx="170" cy="140" r="1.5"/>
    <circle cx="490" cy="130" r="1.5"/>
  </g>

  <!-- Golden Crescent Moon (Chand) -->
  <path d="M520 80 A28 28 0 1 0 540 125 A32 32 0 1 1 520 80 Z" fill="url(#valGold)"/>

  <!-- Grand Illuminated Palace Silhouette at Midnight -->
  <path d="M340 200 C340 225 320 240 310 260 L370 260 C360 240 340 225 340 200 Z" fill="#04091A" stroke="url(#valGold)" stroke-width="2"/>
  <line x1="340" y1="185" x2="340" y2="200" stroke="url(#valGold)" stroke-width="2"/>
  <circle cx="340" cy="184" r="3" fill="url(#valGold)"/>

  <path d="M220 230 C220 250 205 262 195 280 L245 280 C235 262 220 250 220 230 Z" fill="#04091A" stroke="url(#valGold)" stroke-width="1.5"/>
  <path d="M460 230 C460 250 445 262 435 280 L485 280 C475 262 460 250 460 230 Z" fill="#04091A" stroke="url(#valGold)" stroke-width="1.5"/>

  <!-- Palace Balcony Walls -->
  <rect x="150" y="280" width="380" height="80" fill="#04091A" stroke="url(#valGold)" stroke-width="1.5"/>

  <!-- Glowing Diya / Candle Lights on the Palace Terrace -->
  <g fill="#FFAA00">
    <ellipse cx="200" cy="280" rx="3" ry="5"/>
    <ellipse cx="250" cy="280" rx="3" ry="5"/>
    <ellipse cx="300" cy="280" rx="3" ry="5"/>
    <ellipse cx="340" cy="280" rx="4" ry="6" fill="#FFF2CE"/>
    <ellipse cx="380" cy="280" rx="3" ry="5"/>
    <ellipse cx="430" cy="280" rx="3" ry="5"/>
    <ellipse cx="480" cy="280" rx="3" ry="5"/>
  </g>

  <!-- Glowing Reflecting Pool at Night -->
  <rect x="0" y="360" width="680" height="184" fill="#030612"/>
  <ellipse cx="340" cy="440" rx="160" ry="18" fill="url(#valGold)" opacity="0.15"/>

  <!-- Grand Valima Mughal Archway Frame (Foreground) -->
  <path d="M0 0 L680 0 L680 544 L610 544 L610 230 C610 130 520 60 410 60 C380 60 360 70 340 85 C320 70 300 60 270 60 C160 60 70 130 70 230 L70 544 L0 544 Z" fill="#060C1F" stroke="url(#valGold)" stroke-width="2.5"/>

  <!-- Hanging Moroccan / Mughal Brass Lanterns -->
  <g transform="translate(160, 40)">
    <line x1="0" y1="-40" x2="0" y2="80" stroke="url(#valGold)" stroke-width="1.5"/>
    <path d="-10 80 L10 80 L15 110 L0 130 L-15 110 Z" fill="#04091A" stroke="url(#valGold)" stroke-width="2"/>
    <circle cx="0" cy="105" r="9" fill="#FFDA73" opacity="0.9"/>
    <circle cx="0" cy="105" r="22" fill="#FFDA73" opacity="0.25"/>
  </g>

  <g transform="translate(520, 40)">
    <line x1="0" y1="-40" x2="0" y2="80" stroke="url(#valGold)" stroke-width="1.5"/>
    <path d="-10 80 L10 80 L15 110 L0 130 L-15 110 Z" fill="#04091A" stroke="url(#valGold)" stroke-width="2"/>
    <circle cx="0" cy="105" r="9" fill="#FFDA73" opacity="0.9"/>
    <circle cx="0" cy="105" r="22" fill="#FFDA73" opacity="0.25"/>
  </g>
</svg>`;

// 7. Desert Sandstone Heritage Fort (Dunes, Camel & Palm Silhouette)
const heritageFort = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 544" width="680" height="544">
  <defs>
    <linearGradient id="fortSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2E0E08"/>
      <stop offset="40%" stop-color="#6E2614"/>
      <stop offset="70%" stop-color="#B84F25"/>
      <stop offset="100%" stop-color="#F2A45C"/>
    </linearGradient>
    <linearGradient id="sandGold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#D4AF37"/>
      <stop offset="50%" stop-color="#FFE899"/>
      <stop offset="100%" stop-color="#A37E22"/>
    </linearGradient>
  </defs>

  <rect width="680" height="544" fill="url(#fortSky)"/>

  <!-- Desert Sun -->
  <circle cx="340" cy="270" r="70" fill="#FFF1C2" opacity="0.9"/>
  <circle cx="340" cy="270" r="110" fill="#F2A45C" opacity="0.35"/>

  <!-- Rolling Sand Dunes -->
  <path d="M0 340 Q160 300 320 345 T680 320 L680 544 L0 544 Z" fill="#521B0D" opacity="0.8"/>
  <path d="M0 370 Q240 330 480 380 T680 350 L680 544 L0 544 Z" fill="#381007"/>

  <!-- Distant Desert Fort & Minarets -->
  <rect x="220" y="270" width="240" height="70" fill="#240A04" stroke="url(#sandGold)" stroke-width="1.2"/>
  <path d="M340 230 C340 245 325 255 315 270 L365 270 C355 255 340 245 340 230 Z" fill="#240A04" stroke="url(#sandGold)" stroke-width="1.5"/>
  <path d="M240 250 C240 260 230 265 225 270 L255 270 C250 265 240 260 240 250 Z" fill="#240A04"/>
  <path d="M440 250 C440 260 430 265 425 270 L455 270 C450 265 440 260 440 250 Z" fill="#240A04"/>

  <!-- Camel Caravan Silhouette -->
  <g transform="translate(140, 340) scale(0.65)" fill="#1A0602">
    <!-- Camel 1 -->
    <path d="M30 40 C35 30 42 22 45 15 C47 10 52 14 50 18 C48 24 42 30 40 40 C50 35 65 30 75 35 C80 30 90 28 95 38 C100 45 98 60 95 70 L98 95 L88 95 L86 75 L74 75 L72 95 L62 95 L65 70 C55 70 45 75 40 85 L38 95 L28 95 L30 75 L20 75 L18 95 L8 95 L12 60 C15 48 22 42 30 40 Z"/>
    <!-- Camel 2 (Following) -->
    <g transform="translate(80, 5) scale(0.85)">
      <path d="M30 40 C35 30 42 22 45 15 C47 10 52 14 50 18 C48 24 42 30 40 40 C50 35 65 30 75 35 C80 30 90 28 95 38 C100 45 98 60 95 70 L98 95 L88 95 L86 75 L74 75 L72 95 L62 95 L65 70 C55 70 45 75 40 85 L38 95 L28 95 L30 75 L20 75 L18 95 L8 95 L12 60 C15 48 22 42 30 40 Z"/>
    </g>
  </g>

  <!-- Palm Trees Silhouette -->
  <g transform="translate(540, 290)">
    <path d="M0 0 Q-30 -30 -50 -15 Q-30 -5 0 0 Z" fill="#1A0602"/>
    <path d="M0 0 Q-20 -40 -35 -35 Q-15 -15 0 0 Z" fill="#1A0602"/>
    <path d="M0 0 Q0 -50 5 -55 Q5 -25 0 0 Z" fill="#1A0602"/>
    <path d="M0 0 Q25 -40 40 -30 Q20 -15 0 0 Z" fill="#1A0602"/>
    <path d="M0 0 Q40 -25 55 -10 Q30 -5 0 0 Z" fill="#1A0602"/>
    <path d="M-4 0 C-6 30 -8 60 -12 80 L12 80 C8 60 6 30 4 0 Z" fill="#1A0602"/>
  </g>

  <!-- Scalloped Colonial / Haveli Arched Frame -->
  <path d="M0 0 L680 0 L680 544 L620 544 L620 200 C620 110 530 50 410 50 C380 50 360 60 340 75 C320 60 300 50 270 50 C150 50 60 110 60 200 L60 544 L0 544 Z" fill="#210804" stroke="url(#sandGold)" stroke-width="2.5"/>
</svg>`;

const svgs = {
  'mughal-palace.svg': mughalPalace,
  'pichwai-garden.svg': pichwaiGarden,
  'rajasthani-sunset.svg': rajasthaniSunset,
  'marble-pavilion.svg': marblePavilion,
  'kashmir-floral.svg': kashmirFloral,
  'valima-night.svg': valimaNight,
  'heritage-fort.svg': heritageFort,
};

for (const [filename, content] of Object.entries(svgs)) {
  const filePath = path.join(outDir, filename);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Saved ethnic background:', filename);
}

console.log('All 7 ethnic wedding landscape backgrounds successfully generated!');
