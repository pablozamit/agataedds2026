
const characterTemplates = [
    // Template 1: Tall, arms wide
    (color, skin, hair, heightScale = 1) => `
    <svg class="character" viewBox="0 0 100 160" style="transform: scale(${heightScale})" xmlns="http://www.w3.org/2000/svg">
        <path fill="${hair}" d="M30,50 Q50,15 70,50 L70,70 L30,70 Z" />
        <circle fill="${skin}" cx="50" cy="50" r="22" />
        <!-- Arms reaching for line -->
        <line x1="50" y1="90" x2="50" y2="20" stroke="rgba(102, 36, 131, 0.3)" stroke-width="4" />
        <line x1="50" y1="130" x2="50" y2="190" stroke="rgba(102, 36, 131, 0.3)" stroke-width="4" />
        <path fill="${color}" d="M30,75 Q50,70 70,75 L75,150 L25,150 Z" />
        <circle cx="43" cy="48" r="2" fill="#333" />
        <circle cx="57" cy="48" r="2" fill="#333" />
        <path d="M43,58 Q50,65 57,58" stroke="#333" stroke-width="1.5" fill="none" stroke-linecap="round" />
    </svg>`,

    // Template 2: Different body, arms visible
    (color, skin, hair, heightScale = 1) => `
    <svg class="character" viewBox="0 0 100 160" style="transform: scale(${heightScale})" xmlns="http://www.w3.org/2000/svg">
        <circle fill="${skin}" cx="50" cy="45" r="22" />
        <path fill="${hair}" d="M30,30 Q50,5 70,30" stroke="${hair}" stroke-width="8" fill="none" />
        <!-- Arms reaching -->
        <path d="M50,70 L50,10" stroke="rgba(102, 36, 131, 0.3)" stroke-width="4" />
        <path d="M50,130 L50,195" stroke="rgba(102, 36, 131, 0.3)" stroke-width="4" />
        <rect fill="${color}" x="25" y="65" width="50" height="85" rx="20" />
        <path d="M40,45 L44,45" stroke="#333" stroke-width="2" />
        <path d="M56,45 L60,45" stroke="#333" stroke-width="2" />
        <path d="M45,58 Q50,62 55,58" stroke="#333" stroke-width="2" fill="none" />
    </svg>`,

    // Template 3: Robust, holding hands
    (color, skin, hair, heightScale = 1) => `
    <svg class="character" viewBox="0 0 100 160" style="transform: scale(${heightScale})" xmlns="http://www.w3.org/2000/svg">
        <circle fill="${skin}" cx="50" cy="55" r="26" />
        <path fill="${hair}" d="M25,50 Q50,20 75,50" stroke="${hair}" stroke-width="10" fill="none" />
        <!-- Arms reaching -->
        <line x1="50" y1="80" x2="50" y2="10" stroke="rgba(102, 36, 131, 0.3)" stroke-width="4" />
        <line x1="50" y1="140" x2="50" y2="200" stroke="rgba(102, 36, 131, 0.3)" stroke-width="4" />
        <rect fill="${color}" x="18" y="85" width="64" height="65" rx="28" />
        <circle cx="43" cy="55" r="3" fill="#333" />
        <circle cx="57" cy="55" r="3" fill="#333" />
        <path d="M42,68 Q50,76 58,68" stroke="#333" stroke-width="2" fill="none" />
    </svg>`
];

const skins = ["#ffdbac", "#f1c27d", "#e0ac69", "#8d5524", "#c68642"];
const hairs = ["#4b2c20", "#241c11", "#d6b672", "#9a3300", "#cccccc", "#4a4a4a"];
const colors = ["#662483", "#8a36b0", "#f6a000", "#ffcc33", "#4b5563"];
