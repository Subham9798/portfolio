const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "public", "frames");
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// 60 SVG images generate karenge jo alag-alag angle par ghoomti hain
for (let i = 1; i <= 60; i++) {
  const angle = ((i - 1) / 60) * 360;
  const rad = (angle * Math.PI) / 180;
  
  // 3D projection math
  const rx = Math.abs(Math.cos(rad)) * 140 + 20;
  const ry = 140;
  const coreX = Math.sin(rad) * 60;

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
    <defs>
      <radialGradient id="glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#050505" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#10b981"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="#050505"/>
    <circle cx="250" cy="250" r="180" fill="url(#glow)"/>
    
    <!-- Outer Orbit Ring -->
    <ellipse cx="250" cy="250" rx="${rx.toFixed(1)}" ry="${ry}" 
             stroke="url(#grad)" stroke-width="3" fill="none" 
             transform="rotate(${angle.toFixed(1)} 250 250)"/>
             
    <!-- Inner Core Orb -->
    <ellipse cx="250" cy="250" rx="90" ry="${Math.abs(Math.sin(rad) * 90 + 10).toFixed(1)}" 
             stroke="#10b981" stroke-width="4" fill="none" 
             transform="rotate(${(-angle).toFixed(1)} 250 250)"/>

    <!-- Central Floating Core Matrix -->
    <circle cx="${(250 + coreX).toFixed(1)}" cy="250" r="12" fill="#10b981"/>
    <circle cx="${(250 - coreX).toFixed(1)}" cy="250" r="8" fill="#ffffff" opacity="0.8"/>
  </svg>`;

  const filename = `frame_${String(i).padStart(3, "0")}.svg`;
  fs.writeFileSync(path.join(dir, filename), svgContent);
}

console.log("Successfully generated 60 high-definition frames in public/frames!");