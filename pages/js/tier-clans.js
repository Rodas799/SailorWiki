const clanTierData = [
    // TIER S
    { name: "Frostbane", raridade: "Legendary", tier: "S" },
    { name: "Pride", raridade: "Legendary", tier: "S" },
    { name: "Monarch", raridade: "Legendary", tier: "S" },
    { name: "Voldigoat", raridade: "Legendary", tier: "S" },

    // TIER A
    { name: "Eminence", raridade: "Legendary", tier: "A" },
    { name: "Upper", raridade: "Legendary", tier: "A" },
    { name: "Alter", raridade: "Legendary", tier: "A" },
    // TIER B
    { name: "Mugetsu", raridade: "Epic", tier: "B" },
    { name: "Yamato", raridade: "Epic", tier: "B" },
    { name: "Zoldyck", raridade: "Rare", tier: "B" },
    { name: "Espada", raridade: "Legendary", tier: "B" },

    // TIER C
    { name: "Raikage", raridade: "Uncommon", tier: "C" },

    // TIER D
    { name: "Sasaki", raridade: "Common", tier: "D" }
];

const tierOrder = ["S", "A", "B", "C", "D"];
const container = document.getElementById('tier-list-container');

function renderTierList() {
    container.innerHTML = tierOrder.map(tier => {
        const itemsInTier = clanTierData.filter(item => item.tier === tier);

        return `
            <div class="tier-row tier-${tier.toLowerCase()}">
                <div class="tier-label">${tier}</div>
                <div class="tier-content">
                    ${itemsInTier.map(clan => `
                        <div class="race-badge rarity-${clan.raridade.toLowerCase()}">
                            <span class="name">${clan.name}</span>
                            <span class="rarity-text">${clan.raridade}</span>
                        </div>
                    `).join('')}
                    ${itemsInTier.length === 0 ? '<span style="color:rgba(255,255,255,0.2)">Sem dados</span>' : ''}
                </div>
            </div>
        `;
    }).join('');
}

renderTierList();