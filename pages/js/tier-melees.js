const meleeTierData = [
    // TIER S
    { name: "Strongest Shinobi", raridade: "Mythical", tier: "S" },

    // TIER A
    { name: "Blessed Maiden", raridade: "Mythical", tier: "A" },
    { name: "King of Heroes", raridade: "Mythical", tier: "A" },
    { name: "Moon Slayer", raridade: "Mythical", tier: "A" },

    // TIER B
    { name: "Corrupted Excalibur", raridade: "Mythical", tier: "B" },
    { name: "Strongest of Today", raridade: "Mythical", tier: "B" },
    { name: "Demon King", raridade: "Mythical", tier: "B" },
    { name: "Love Maiden", raridade: "Mythical", tier: "B" },
    { name: "Cursed King", raridade: "Mythical", tier: "B" },

    // TIER C
    { name: "Limitless Sorcerer", raridade: "Mythical", tier: "C" },
    { name: "Qin Shi", raridade: "Mythical", tier: "C" },
    { name: "Cursed Vessel", raridade: "Legendary", tier: "C" },

    // TIER D
    { name: "Vampire King", raridade: "Mythical", tier: "D" },
    { name: "Combat", raridade: "Common", tier: "D" }
];

const tierOrder = ["S", "A", "B", "C", "D"];
const container = document.getElementById('tier-list-container');

function renderTierList() {
    container.innerHTML = tierOrder.map(tier => {
        const itemsInTier = meleeTierData.filter(item => item.tier === tier);

        return `
            <div class="tier-row tier-${tier.toLowerCase()}">
                <div class="tier-label">${tier}</div>
                <div class="tier-content">
                    ${itemsInTier.map(melee => `
                        <div class="race-badge rarity-${melee.raridade.toLowerCase()}">
                            <span class="name">${melee.name}</span>
                            <span class="rarity-text">${melee.raridade}</span>
                        </div>
                    `).join('')}
                    ${itemsInTier.length === 0 ? '<span style="color:rgba(255,255,255,0.2)">Sem dados</span>' : ''}
                </div>
            </div>
        `;
    }).join('');
}

renderTierList();
