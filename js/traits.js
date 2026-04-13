const traitsData = [
    { name: "Strong", rarity: "Common", stats: { damage: "1.15x", defense: "1.05x" } },
    { name: "Tough", rarity: "Common", stats: { damage: "1.10x", defense: "1.15x" } },
    { name: "Agile", rarity: "Common", stats: { cdr: "10%" } },
    { name: "Balanced", rarity: "Uncommon", stats: { damage: "1.20x", defense: "1.20x" } },
    { name: "Steady", rarity: "Uncommon", stats: { damage: "1.25x", defense: "1.15x" } },
    { name: "Driven", rarity: "Uncommon", stats: { damage: "1.15x", defense: "1.10x", cdr: "5%" } },
    { name: "Predator", rarity: "Rare", stats: { damage: "1.30x", defense: "1.15x" } },
    { name: "Vicious", rarity: "Rare", stats: { damage: "1.25x", defense: "1.15x", cdr: "5%" } },
    { name: "Sharpened", rarity: "Rare", stats: { damage: "1.35x", defense: "1.10x" } },
    { name: "Overdrive", rarity: "Epic", stats: { damage: "1.30x", defense: "1.35x", cdr: "10%" } },
    { name: "Ascended", rarity: "Epic", stats: { damage: "1.40x", defense: "1.35x" } },
    { name: "Breaker", rarity: "Epic", stats: { damage: "1.30x", defense: "1.55x" } },
    { name: "Unstoppable", rarity: "Legendary", stats: { damage: "1.45x", defense: "1.70x" } },
    { name: "Genesis", rarity: "Legendary", stats: { damage: "1.40x", defense: "1.40x", cdr: "15%" } },
    { name: "Dominator", rarity: "Legendary", stats: { damage: "1.50x", defense: "1.45x", cdr: "10%" } },
    { name: "Godspeed", rarity: "Mythical", stats: { damage: "1.55x", defense: "1.50x", cdr: "25%" } },
    { name: "Sovereign", rarity: "Mythical", stats: { damage: "1.65x", defense: "1.85x", cdr: "15%" } },
    { name: "Transcendant", rarity: "Mythical", stats: { damage: "1.75x", defense: "1.65x", cdr: "20%" } },
    { name: "Malevolent", rarity: "Mythical", stats: { damage: "1.80x", defense: "1.50x", cdr: "20%" } },
    { name: "Infinity", rarity: "Mythical", stats: { damage: "1.70x", defense: "1.60x", cdr: "20%" } },
    { name: "Overlord", rarity: "Secret", stats: { damage: "1.90x", defense: "2.00x", cdr: "25%" } },
    { name: "Cataclysm", rarity: "Secret", stats: { damage: "2.00x", defense: "1.70x", cdr: "30%" } },
    { name: "Singularity", rarity: "Secret", stats: { damage: "2.10x", defense: "1.75x", cdr: "30%" } },
    { name: "Celestial", rarity: "Secret", stats: { damage: "2.20x", defense: "1.65x", cdr: "30%" } },
    { name: "Emperor", rarity: "Secret", stats: { damage: "2.30x", defense: "1.60x", cdr: "30%" } }
];

const container = document.getElementById('traits-container');
const search = document.getElementById('trait-search');

function render(filter = "") {
    const filtered = traitsData.filter(t => t.name.toLowerCase().includes(filter.toLowerCase()));
    
    container.innerHTML = filtered.map(t => {
        let statsHtml = "";
        if(t.stats.damage) statsHtml += `<div class="trait-badge"><span class="trait-label">DMG</span><span class="trait-value">${t.stats.damage}</span></div>`;
        if(t.stats.defense) statsHtml += `<div class="trait-badge"><span class="trait-label">DEF</span><span class="trait-value">${t.stats.defense}</span></div>`;
        if(t.stats.cdr) statsHtml += `<div class="trait-badge"><span class="trait-label">CDR</span><span class="trait-value">-${t.stats.cdr}</span></div>`;

        return `
            <div class="trait-row ${t.rarity.toLowerCase()}">
                <div class="trait-info">
                    <div class="trait-rank-icon"></div>
                    <div>
                        <div class="trait-name">${t.name}</div>
                        <div class="trait-rarity">${t.rarity}</div>
                    </div>
                </div>
                <div class="trait-stats-list">
                    ${statsHtml}
                </div>
            </div>
        `;
    }).join('');
}

search.addEventListener('input', (e) => render(e.target.value));
render();