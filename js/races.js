const racesData = [
    {
        name: "Human",
        rarity: "Common",
        stats: { "Buffs": "None" },
    },
    {
        name: "Skypea",
        rarity: "Uncommon",
        stats: { "Jumps": "+2" },
    },
    {
        name: "Fishman",
        rarity: "Uncommon",
        stats: { "XP Gain": "+15%", "Cash Gain": "+15%" },
    },
    {
        name: "Mink",
        rarity: "Rare",
        stats: { "Sprint Speed": "+20%", "Jump Height": "+20%" },
    },
    {
        name: "Orc",
        rarity: "Rare",
        stats: { "Max HP": "+15%", "Damage": "+15%" },
    },
    {
        name: "Demon",
        rarity: "Epic",
        stats: { "Max HP": "+35%", "Sprint Speed": "+20%", "Damage": "+30%" },
    },
    {
        name: "Vampire",
        rarity: "Epic",
        stats: { "Max HP": "+30%", "Damage": "+25%", "Lifesteal": "+5%" },
    },
    {
        name: "Vessel",
        rarity: "Legendary",
        stats: { "Sukuna DMG": "+20%", "Total DMG": "+35%", "HP": "+40%" },
    },
    {
        name: "Limitless",
        rarity: "Legendary",
        stats: { "Gojo DMG": "+25%", "Total DMG": "+30%", "Max HP": "+40%" },
    },
    {
        name: "Player",
        rarity: "Legendary",
        stats: { "Jinwoo DMG": "+20%", "Total DMG": "+40%", "Max HP": "+45%" },
    },
    {
        name: "Shinigami",
        rarity: "Legendary",
        stats: { "Aizen DMG": "+20%", "Total DMG": "+45%", "Max HP": "+50%" },
    },
    {
        name: "Shadowborn",
        rarity: "Legendary",
        stats: { "Shadow DMG": "+20%", "Total DMG": "+50%", "Max HP": "+55%" },
    },
    {
        name: "Hollow",
        rarity: "Legendary",
        stats: { "Ichigo DMG": "+20%", "Total DMG": "+50%", "Max HP": "+60%" },
    },
    {
        name: "Oni",
        rarity: "Mythical",
        stats: { "Total DMG": "+55%", "Melee DMG": "+20%", "Max HP": "+65%", "DMG Reduction": "10%" },
    },
    {
        name: "Kitsune",
        rarity: "Mythical",
        stats: { "Melee/Sword": "+10%", "Total DMG": "+50%", "Max HP": "+60%", "Luck Multi": "+25%" },
    },
    {
        name: "Leviathan",
        rarity: "Mythical",
        stats: { "Sword DMG": "+17%", "Total DMG": "+60%", "Max HP": "+65%", "Lifesteal": "+5%" },
    },
    {
        name: "Slime",
        rarity: "Mythical",
        stats: { "Sword DMG": "+17%", "Total DMG": "+65%", "Max HP": "+70%", "DMG Reduction": "10%", "Lifesteal": "+3%" },
    },
    {
        name: "Servant",
        rarity: "Mythical",
        stats: { "Melee DMG": "+18%", "Total DMG": "+67%", "Max HP": "+75%", "DMG Reduction": "10%", "Lifesteal": "+4%" },
    },
    {
        name: "Galevorn",
        rarity: "Mythical",
        stats: { "Max HP": "+80%", "Damage": "+75%", "Melee Multi": "+20%", "DMG Reduction": "10%", "Lifesteal": "+3%" },
    },
    {
        name: "Swordblessed",
        rarity: "Mythical",
        stats: { "Max HP": "+80%", "Damage": "+75%", "Sword Multi": "+20%", "DMG Reduction": "10%", "Lifesteal": "+3%" },
    },
    {
        name: "Sunborn",
        rarity: "Mythical",
        stats: { "Max HP": "+80%", "Damage": "+70%", "Sword Multi": "+20%", "DMG Reduction": "10%", "Lifesteal": "+3%" },
    },
    {
        name: "Warlord",
        rarity: "Mythical",
        stats: { "Max HP": "+85%", "Damage": "+80%", "Melee Multi": "+22%", "DMG Reduction": "10%", "Lifesteal": "+2%" },
    },
    {
        name: "Luckborn",
        rarity: "Mythical",
        stats: { "Max HP": "+90%", "Damage": "+80%", "Luck": "+35%", "Sword Multi": "+20%", "Melee Multi": "+15%" },
    }
];

function renderRaces() {
    const container = document.getElementById('races-container');
    
    container.innerHTML = racesData.map(race => {
        // Gera o HTML das stats dinamicamente apenas para as que existem
        const statsHTML = Object.entries(race.stats).map(([key, value]) => `
            <div class="stat-badge">
                <span class="stat-label">${key}</span>
                <span class="stat-value">${value}</span>
            </div>
        `).join('');

        return `
            <div class="race-row ${race.rarity.toLowerCase()}">
                <div class="race-info">
                    <span class="rarity-indicator"></span>
                    <div>
                        <h3 class="race-name">${race.name}</h3>
                        <p class="race-rarity-text">${race.rarity}</p>
                    </div>
                </div>
            

                <div class="race-stats-list">
                    ${statsHTML}
                </div>
            </div>
        `;
    }).join('');
}
// Elementos
const searchInput = document.getElementById('race-search');
const racesContainer = document.getElementById('races-container');

// Função de renderização (certifica-te que a tua função principal se chama renderRaces)
function renderRaces(filterText = "") {
    const filteredRaces = racesData.filter(race => {
        const nameMatch = race.name.toLowerCase().includes(filterText.toLowerCase());
        const rarityMatch = race.rarity.toLowerCase().includes(filterText.toLowerCase());
        // Também pesquisa dentro dos stats
        const statsMatch = Object.keys(race.stats).some(stat => 
            stat.toLowerCase().includes(filterText.toLowerCase())
        );
        
        return nameMatch || rarityMatch || statsMatch;
    });

    if (filteredRaces.length === 0) {
        racesContainer.innerHTML = `<div class="loading-state">Nenhuma raça encontrada com "${filterText}"</div>`;
        return;
    }

    // Aqui vai o teu código original que gera o HTML da lista
    // Exemplo simplificado:
    racesContainer.innerHTML = filteredRaces.map(race => `
        <div class="race-row ${race.rarity.toLowerCase()}">
            <div class="race-info">
                <div class="rarity-indicator"></div>
                <div>
                    <span class="race-name">${race.name}</span>
                    <span class="race-rarity-text">${race.rarity}</span>
                </div>
            </div>
            <div class="race-stats-list">
                ${Object.entries(race.stats).map(([label, value]) => `
                    <div class="stat-badge">
                        <span class="stat-label">${label}</span>
                        <span class="stat-value">${value}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Listener para a pesquisa
searchInput.addEventListener('input', (e) => {
    renderRaces(e.target.value);
});

// Inicialização
renderRaces();
document.addEventListener('DOMContentLoaded', () => {
    renderRaces();
    
    // Efeito Scrolled para a Navbar (Pegando do Global)
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });
});