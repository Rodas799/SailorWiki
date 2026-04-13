const fruitTierData = [
    // TIER S
    { name: "Light", raridade: "Legendary", tier: "S" },

    // TIER A
    { name: "Quake", raridade: "Epic", tier: "A" },

    // TIER B
    { name: "Flame", raridade: "Epic", tier: "B" },


    // TIER C
    { name: "Bomb", raridade: "Rare", tier: "C" },


    // TIER D
    { name: "Invisible", raridade: "Common", tier: "D" },

];

const tierOrder = ["S", "A", "B", "C", "D"];
const container = document.getElementById('tier-list-container');

function renderTierList() {
    container.innerHTML = tierOrder.map(tier => {
        const fruitsInTier = fruitTierData.filter(item => item.tier === tier);

        return `
            <div class="tier-row tier-${tier.toLowerCase()}">
                <div class="tier-label">${tier}</div>
                <div class="tier-content">
                    ${fruitsInTier.map(fruit => `
                        <div class="race-badge rarity-${fruit.raridade.toLowerCase()}">
                            <span class="name">${fruit.name}</span>
                            <span class="rarity-text">${fruit.raridade}</span>
                        </div>
                    `).join('')}
                    ${fruitsInTier.length === 0 ? '<span style="color:rgba(255,255,255,0.2)">Sem dados</span>' : ''}
                </div>
            </div>
        `;
    }).join('');
}

renderTierList();