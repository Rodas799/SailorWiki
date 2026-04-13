const traitTierData = [
    // TIER S
    { name: "Emperor", raridade: "Secret", tier: "S" },
    { name: "Celestial", raridade: "Secret", tier: "S" },
    { name: "Singularity", raridade: "Secret", tier: "S" },
    { name: "Cataclysm", raridade: "Secret", tier: "S" },
    { name: "Overlord", raridade: "Secret", tier: "S" },

    // TIER A
    { name: "Malevolent", raridade: "Mythical", tier: "A" },
    { name: "Transcendant", raridade: "Mythical", tier: "A" },
    { name: "Infinity", raridade: "Mythical", tier: "A" },
    { name: "Sovereign", raridade: "Mythical", tier: "A" },

    // TIER B
    { name: "Godspeed", raridade: "Mythical", tier: "B" },
    { name: "Dominator", raridade: "Legendary", tier: "B" },
    { name: "Genesis", raridade: "Legendary", tier: "B" },
    { name: "Unstoppable", raridade: "Legendary", tier: "B" },

    // TIER C
    { name: "Ascended", raridade: "Epic", tier: "C" },
    { name: "Overdrive", raridade: "Epic", tier: "C" },
    { name: "Breaker", raridade: "Epic", tier: "C" },
    { name: "Sharpened", raridade: "Rare", tier: "C" },

    // TIER D
    { name: "Vicious", raridade: "Rare", tier: "D" },
    { name: "Predator", raridade: "Rare", tier: "D" },
    { name: "Steady", raridade: "Uncommon", tier: "D" },
    { name: "Balanced", raridade: "Uncommon", tier: "D" },
    { name: "Driven", raridade: "Uncommon", tier: "D" },
    { name: "Strong", raridade: "Common", tier: "D" },
    { name: "Tough", raridade: "Common", tier: "D" },
    { name: "Agile", raridade: "Common", tier: "D" }
];

const tierOrder = ["S", "A", "B", "C", "D"];
const container = document.getElementById('tier-list-container');

function renderTierList() {
    container.innerHTML = tierOrder.map(tier => {
        const traitsInTier = traitTierData.filter(item => item.tier === tier);

        return `
            <div class="tier-row tier-${tier.toLowerCase()}">
                <div class="tier-label">${tier}</div>
                <div class="tier-content">
                    ${traitsInTier.map(trait => `
                        <div class="race-badge rarity-${trait.raridade.toLowerCase()}">
                            <span class="name">${trait.name}</span>
                            <span class="rarity-text">${trait.raridade}</span>
                        </div>
                    `).join('')}
                    ${traitsInTier.length === 0 ? '<span style="color:rgba(255,255,255,0.2)">Sem dados</span>' : ''}
                </div>
            </div>
        `;
    }).join('');
}

renderTierList();