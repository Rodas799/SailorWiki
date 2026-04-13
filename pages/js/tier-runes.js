const runeTierData = [
    // TIER S
    { name: "Primordial Rune", raridade: "Secret", tier: "S" },
    { name: "Radiant Rune", raridade: "Secret", tier: "S" },

    // TIER A
    { name: "Havoc Rune", raridade: "Mythical", tier: "A" },
    { name: "Fortune Rune", raridade: "Mythical", tier: "A" },

    // TIER B
    { name: "Wrath Rune", raridade: "Mythical", tier: "B" },
    { name: "Destruction Rune", raridade: "Legendary", tier: "B" },

    // TIER C
    { name: "Inferno Rune", raridade: "Mythical", tier: "C" },
    { name: "Blood Rune", raridade: "Mythical", tier: "C" },
    { name: "Frost Rune", raridade: "Legendary", tier: "C" },
    { name: "Guardian Rune", raridade: "Epic", tier: "C" },

    // TIER D
    { name: "Suppression Rune", raridade: "Rare", tier: "D" }
];

const tierOrder = ["S", "A", "B", "C", "D"];
const container = document.getElementById('tier-list-container');

function renderTierList() {
    container.innerHTML = tierOrder.map(tier => {
        const runesInTier = runeTierData.filter(item => item.tier === tier);

        return `
            <div class="tier-row tier-${tier.toLowerCase()}">
                <div class="tier-label">${tier}</div>
                <div class="tier-content">
                    ${runesInTier.map(rune => `
                        <div class="race-badge rarity-${rune.raridade.toLowerCase()}">
                            <span class="name">${rune.name}</span>
                            <span class="rarity-text">${rune.raridade}</span>
                        </div>
                    `).join('')}
                    ${runesInTier.length === 0 ? '<span style="color:rgba(255,255,255,0.2)">Sem dados</span>' : ''}
                </div>
            </div>
        `;
    }).join('');
}

renderTierList();