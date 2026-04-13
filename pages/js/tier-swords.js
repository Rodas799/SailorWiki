const swordTierData = [
    // TIER S
    { name: "Ice Queen", raridade: "Mythical", tier: "S" },
    { name: "Abyssal Empress", raridade: "Mythical", tier: "S" },
    { name: "Atomic", raridade: "Mythical", tier: "S" },
    { name: "True Manipulator", raridade: "Mythical", tier: "S" },
    // TIER A
    { name: "Yamato", raridade: "Mythical", tier: "A" },
    { name: "Shadow Monarch", raridade: "Mythical", tier: "A" },
    { name: "Slime", raridade: "Mythical", tier: "A" },
    { name: "Dragon Slayer", raridade: "Mythical", tier: "A" },
    { name: "Slime", raridade: "Mythical", tier: "A" },

    // TIER B
    { name: "Soul Reaper", raridade: "Mythical", tier: "B" },
    { name: "Manipulator", raridade: "Mythical", tier: "B" },
    { name: "Shadow", raridade: "Mythical", tier: "B" },
    { name: "Solo Hunter", raridade: "Mythical", tier: "B" },
    { name: "Gryphon", raridade: "Legendary", tier: "B" },

    // TIER C
    { name: "Excalibur", raridade: "Legendary", tier: "C" },
    { name: "Dark Blade", raridade: "Epic", tier: "C" },

    // TIER D
    { name: "Katana", raridade: "Rare", tier: "D" }
];

const tierOrder = ["S", "A", "B", "C", "D"];
const container = document.getElementById('tier-list-container');

function renderTierList() {
    container.innerHTML = tierOrder.map(tier => {
        const swordsInTier = swordTierData.filter(item => item.tier === tier);

        return `
            <div class="tier-row tier-${tier.toLowerCase()}">
                <div class="tier-label">${tier}</div>
                <div class="tier-content">
                    ${swordsInTier.map(sword => `
                        <div class="race-badge rarity-${sword.raridade.toLowerCase()}">
                            <span class="name">${sword.name}</span>
                            <span class="rarity-text">${sword.raridade}</span>
                        </div>
                    `).join('')}
                    ${swordsInTier.length === 0 ? '<span style="color:rgba(255,255,255,0.2)">Sem dados</span>' : ''}
                </div>
            </div>
        `;
    }).join('');
}

renderTierList();