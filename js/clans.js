const clansData = [
    {
        name: "Sasaki",
        rarity: "Common",
        stats: { "Damage": "+7%", "Max HP": "+10%", "EXP Gain": "+10%", "Passive": "None" }
    },
    {
        name: "Raikage",
        rarity: "Uncommon",
        stats: { "Damage": "+10%", "Max HP": "+15%", "Jump Height": "+10%", "Money Gain": "+10%", "Gems Gain": "+10%" }
    },
    {
        name: "Zoldyck",
        rarity: "Rare",
        stats: { "Damage": "+15%", "Max HP": "+20%", "Sprint Speed": "+20%", "Gems Gain": "+15%" }
    },
    {
        name: "Mugetsu",
        rarity: "Epic",
        stats: { "Damage": "20%", "Max HP": "25%", "DMG Reduction": "5%", "Lifesteal": "2%" }
    },
    {
        name: "Yamato",
        rarity: "Epic",
        stats: { "Damage": "17%", "Max HP": "27%", "Melee DMG": "2%", "Gems Gain": "20%" }
    },
    {
        name: "Voldigoat",
        rarity: "Legendary",
        stats: { "Damage": "25%", "Max HP": "35%", "Melee DMG": "7%", "DMG Reduction": "10%", "Execute": "25% DMG < 50% HP" }
    },
    {
        name: "Monarch",
        rarity: "Legendary",
        stats: { "Damage": "27%", "Max HP": "40%", "Sword DMG": "7%", "Luck": "10%", "Extra Drop": "20% Chance" }
    },
    {
        name: "Pride",
        rarity: "Legendary",
        stats: { "Damage": "30%", "Max HP": "45%", "Sword DMG": "10%", "Luck": "10%" }
    },
    {
        name: "Espada",
        rarity: "Legendary",
        stats: { "Damage": "32%", "Max HP": "50%", "Sword DMG": "10%", "Luck": "10%", "Buff": "+20% After 10 Skills" }
    },
    {
        name: "Alter",
        rarity: "Legendary",
        stats: { "Damage": "35%", "Max HP": "50%", "Melee DMG": "10%", "Luck": "12%", "Passive": "1.5x DMG on 6th Hit" }
    },
    {
        name: "Eminence",
        rarity: "Legendary",
        stats: { "Damage": "35%", "Max HP": "55%", "Sword DMG": "12%", "Luck": "12%", "Extra Drop": "25% Chance" }
    },
    {
        name: "Upper",
        rarity: "Legendary",
        stats: { "Damage": "40%", "Max HP": "50%", "Melee DMG": "12%", "Luck": "12%", "Burst": "20% Chance for +25% DMG" }
    },
    {
        name: "Frostbane",
        rarity: "Legendary",
        stats: { "Damage": "40%", "Max HP": "47%", "Sword DMG": "10%", "Luck": "10%" }
    }
];

// O resto da tua lógica de renderClans e EventListeners continua igual...
const clansContainer = document.getElementById('clans-container');
const clanSearch = document.getElementById('clan-search');

function renderClans(filter = "") {
    const filtered = clansData.filter(clan => 
        clan.name.toLowerCase().includes(filter.toLowerCase()) ||
        clan.rarity.toLowerCase().includes(filter.toLowerCase())
    );

    clansContainer.innerHTML = filtered.map(clan => `
        <div class="clan-row ${clan.rarity.toLowerCase()}">
            <div class="clan-info">
                <div class="clan-rank-icon"></div>
                <div>
                    <div class="clan-name">${clan.name}</div>
                    <div class="clan-rarity">${clan.rarity}</div>
                </div>
            </div>
            <div class="clan-stats-list">
                ${Object.entries(clan.stats).map(([label, value]) => `
                    <div class="clan-badge">
                        <span class="clan-label">${label}</span>
                        <span class="clan-value">${value}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

clanSearch.addEventListener('input', (e) => renderClans(e.target.value));

// Inicializar
renderClans();