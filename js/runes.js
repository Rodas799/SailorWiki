const runesData = [
    {
        name: "Suppression Rune",
        rarity: "Rare",
        image: "../assets/runes/suppression.png",
        base: "10% DMG Reduction",
        max: "15% DMG Reduction",
        location: "Rune Dungeon"
    },
    {
        name: "Guardian Rune",
        rarity: "Epic",
        image: "../assets/runes/guardian.png",
        base: "+39% Max HP",
        max: "+59% Max HP",
        location: "Rune Dungeon"
    },
    {
        name: "Frost Rune",
        rarity: "Legendary",
        image: "../assets/runes/frost.png",
        base: "Freeze 2s + 30% DMG",
        max: "Freeze 3s + 44% DMG",
        location: "Rune Dungeon"
    },
    {
        name: "Destruction Rune",
        rarity: "Legendary",
        image: "../assets/runes/destruction.png",
        base: "+25% DMG",
        max: "+37% DMG",
        location: "Rune Dungeon"
    },
    {
        name: "Inferno Rune",
        rarity: "Mythical",
        image: "../assets/runes/inferno.png",
        base: "Burn 70% DMG (4s)",
        max: "Burn 104% DMG (4s)",
        location: "Rune Dungeon"
    },
    {
        name: "Blood Rune",
        rarity: "Mythical",
        image: "../assets/runes/blood.png",
        base: "Bleed 65% DMG (5s)",
        max: "Bleed 97% DMG (5s)",
        location: "Rune Dungeon"
    },
    {
        name: "Wrath Rune",
        rarity: "Mythical",
        image: "../assets/runes/wrath.png",
        base: "+40% DMG",
        max: "+59% DMG",
        location: "Rune Dungeon"
    },
    {
        name: "Fortune Rune",
        rarity: "Mythical",
        image: "../assets/runes/fortune.png",
        base: "+10% Luck",
        max: "+15% Luck",
        location: "Rune Dungeon"
    },
    {
        name: "Havoc Rune",
        rarity: "Mythical",
        image: "../assets/runes/havoc.png",
        base: "+55% DMG",
        max: "+82% DMG",
        location: "Rune Dungeon"
    },
    {
        name: "Primordial Rune",
        rarity: "Secret",
        image: "../assets/runes/Primordial.png",
        base: "+84% DMG",
        max: "+120% DMG",
        location: "Infinite Tower (0.002%-0.013%)"
    },
    {
        name: "Radiant Rune",
        rarity: "Secret",
        image: "../assets/runes/Radiant.png",
        base: "+16 Luck",
        max: "+28% Luck",
        location: "Infinite Tower (0.0025%-0.0135%)"
    }
];

const runesContainer = document.getElementById('runes-container');
const runeSearch = document.getElementById('rune-search');

function renderRunes(filter = "") {
    const filtered = runesData.filter(r => 
        r.name.toLowerCase().includes(filter.toLowerCase()) ||
        r.rarity.toLowerCase().includes(filter.toLowerCase())
    );

    runesContainer.innerHTML = filtered.map(r => {
        const imgHtml = r.image 
            ? `<img src="${r.image}" alt="${r.name}" onerror="this.parentElement.classList.add('no-image'); this.remove();">`
            : ''; 

        const imgContainerClass = r.image ? 'rune-img-container' : 'rune-img-container no-image';

        return `
            <div class="rune-row ${r.rarity.toLowerCase()}">
                <div class="rune-info">
                    <div class="${imgContainerClass}">
                        ${imgHtml}
                    </div>
                    <div>
                        <span class="rune-name">${r.name}</span>
                        <span class="rune-rarity">${r.rarity}</span>
                    </div>
                </div>
                <div class="rune-stats-box">
                    <div class="rune-badge">
                        <span class="badge-label">BASE</span>
                        <span class="badge-val">${r.base}</span>
                    </div>
                    <div class="rune-badge">
                        <span class="badge-label">MAX</span>
                        <span class="badge-val">${r.max}</span>
                    </div>
                </div>
                <div class="rune-location">
                    <i class="fas fa-map-marker-alt"></i> ${r.location}
                </div>
            </div>
        `;
    }).join('');
}

runeSearch.addEventListener('input', (e) => renderRunes(e.target.value));
renderRunes();