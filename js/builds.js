const buildsData = [
    {
        title: "Absolute DMG Meta",
        type: "DMG",
        cardClass: "card-dmg",
        // Agrupamos os itens em categorias lógicas
        categories: [
            {
                name: "Equipamento Principal",
                icon: "fas fa-shield-alt", // Ícone opcional
                items: {
                    "Race": "LuckBorn",
                    "Clan": "FrostBane",
                    "Sword": "Ice Queen Sword (B10)",
                    "Melee": "Moon Slayer",
                    "Accessory": "Ice Queen Outfit (E10)",
                    "Artifacts": "Abyssal Crown Set"
                }
            },
            {
                name: "Poder & Status",
                icon: "fas fa-bolt",
                items: {
                    "Power": "Colossus",
                    "Spec Passive": "Rampage",
                    "Trait": "Emperor",
                    "Title": "Frost Empress",
                    "Stats": "SSS/Z",
                    "All Haki": "Max level"
                }
            },
            {
                name: "Progresso & Upgrades",
                icon: "fas fa-chart-line",
                items: {
                    "Skill Tree": "Complete",
                    "Boss Rush": "Complete",
                    "Tower Upgrades": "Complete",
                    "Ascension": "MAX"
                }
            }
        ]
    },
    {
        title: "Ultimate Lucky Farmer",
        type: "LUCKY",
        cardClass: "card-lucky",
        categories: [
            {
                name: "Equipamento Principal",
                icon: "fas fa-shield-alt",
                items: {
                    "Race": "LuckBorn",
                    "Clan": "Eminence",
                    "Sword": "Ice Queen Sword (B10)",
                    "Melee": "Moon Slayer",
                    "Accessory": "Ice Queen Outfit (E10)",
                    "Artifacts": "Abyssal Crown Set"
                }
            },
            {
                name: "Poder & Status",
                icon: "fas fa-clover",
                items: {
                    "Power": "Colossus",
                    "Spec Passive": "Luck V",
                    "Trait": "Emperor",
                    "Title": "Celestial Favor",
                    "Stats": "SSS/Z",
                    "All Haki": "Max level"
                }
            },
            {
                name: "Progresso & Upgrades",
                icon: "fas fa-chart-line",
                items: {
                    "Skill Tree": "Complete",
                    "Boss Rush": "Complete",
                    "Tower Upgrades": "Complete",
                    "Ascension": "MAX"
                }
            }
        ]
    }
];

function renderBuilds() {
    const container = document.getElementById('builds-container');
    
    container.innerHTML = buildsData.map(build => `
        <div class="build-card ${build.cardClass}">
            <div class="build-header">
                <h2 class="build-title">${build.title}</h2>
                <div class="build-type-badge">${build.type}</div>
            </div>
            
            <div class="build-grid-content">
                ${build.categories.map(category => `
                    <div class="build-category-column">
                        <div class="category-header">
                            <i class="${category.icon}"></i>
                            <h3>${category.name}</h3>
                        </div>
                        <div class="category-items">
                            ${Object.entries(category.items).map(([label, value]) => `
                                <div class="build-item">
                                    <span class="item-label">${label}</span>
                                    <span class="item-name">${value}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

renderBuilds();