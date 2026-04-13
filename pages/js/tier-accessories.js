const accessoryTierData = [
    // TIER S
    { name: "Ice Queen Outfit", raridade: "Mythical", tier: "S" },
    { name: "Moon Outfit", raridade: "Mythical", tier: "S" },
    { name: "Atomic Outfit", raridade: "Mythical", tier: "S" },
    { name: "Abyssal Outfit", raridade: "Mythical", tier: "S" },
    { name: "Alter Armor", raridade: "Mythical", tier: "S" },
    { name: "Maiden Outfit", raridade: "Mythical", tier: "S" },
    { name: "Imperial Outfit", raridade: "Mythical", tier: "S" },
    { name: "Monarch Armor", raridade: "Mythical", tier: "S" },

    // TIER A
    { name: "Demon King Outfit", raridade: "Mythical", tier: "A" },
    { name: "Golden Armor", raridade: "Mythical", tier: "A" },
    { name: "Sun Armor", raridade: "Mythical", tier: "A" },
    { name: "Slime Wings", raridade: "Mythical", tier: "A" },
    { name: "Divine Wheel", raridade: "Mythical", tier: "A" },
    { name: "Limitless Haori", raridade: "Mythical", tier: "A" },

    // TIER B
    { name: "Ultimate Wings", raridade: "Mythical", tier: "B" },
    { name: "Shadow Cloak", raridade: "Mythical", tier: "B" },
    { name: "Hollow Mask", raridade: "Mythical", tier: "B" },
    { name: "Manipulator Haori", raridade: "Mythical", tier: "B" },
    { name: "Vampier Coat", raridade: "Mythical", tier: "B" },
    { name: "Ragna Sigil", raridade: "Mythical", tier: "B" },
    { name: "Hunter Cape", raridade: "Mythical", tier: "B" },
    // TIER C
    { name: "Qin Shi Blindfold", raridade: "Mythical", tier: "C" },
    { name: "Cursed King Collar", raridade: "Mythical", tier: "C" },
    { name: "Valentine Heart", raridade: "Mythical", tier: "C" },
    { name: "Heart Wings", raridade: "Mythical", tier: "C" },

    // TIER D
    { name: "Sorcerer Blindfold", raridade: "Legendary", tier: "D" },
    { name: "Vessel Hair", raridade: "Legendary", tier: "D" },
    { name: "Holy Armor", raridade: "Legendary", tier: "D" },
    { name: "Santa Hat", raridade: "Mythical", tier: "D" }

];

const tierOrder = ["S", "A", "B", "C", "D"];
const container = document.getElementById('tier-list-container');

function renderTierList() {
    container.innerHTML = tierOrder.map(tier => {
        const itemsInTier = accessoryTierData.filter(item => item.tier === tier);

        return `
            <div class="tier-row tier-${tier.toLowerCase()}">
                <div class="tier-label">${tier}</div>
                <div class="tier-content">
                    ${itemsInTier.map(acc => `
                        <div class="race-badge rarity-${acc.raridade.toLowerCase()}">
                            <span class="name">${acc.name}</span>
                            <span class="rarity-text">${acc.raridade}</span>
                        </div>
                    `).join('')}
                    ${itemsInTier.length === 0 ? '<span style="color:rgba(255,255,255,0.2)">Sem dados</span>' : ''}
                </div>
            </div>
        `;
    }).join('');
}

renderTierList();