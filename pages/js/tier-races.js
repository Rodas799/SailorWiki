const raceTierData = [
    { name: "Luckborn", raridade: "Mythical", tier: "S" },
    { name: "Warlord", raridade: "Mythical", tier: "S" },
    { name: "Galevorn", raridade: "Mythical", tier: "S" },
    { name: "Swordblessed", raridade: "Mythical", tier: "S" },
    { name: "Kitsune", raridade: "Mythical", tier: "S" },
    { name: "Sunborn", raridade: "Mythical", tier: "S" },
    { name: "Servant", raridade: "Mythical", tier: "S" },
    { name: "Slime", raridade: "Mythical", tier: "A" },
    { name: "Leviathan", raridade: "Mythical", tier: "A" },
    { name: "Oni", raridade: "Mythical", tier: "A" },
    { name: "Hollow", raridade: "Legendary", tier: "A" },
    { name: "Shadowborn", raridade: "Legendary", tier: "B" },
    { name: "Shinigami", raridade: "Legendary", tier: "B" },
    { name: "Player", raridade: "Legendary", tier: "B" },
    { name: "Vessel", raridade: "Legendary", tier: "B" },
    { name: "Limitless", raridade: "Legendary", tier: "B" },
    { name: "Vampire", raridade: "Epic", tier: "C" },
    { name: "Demon", raridade: "Epic", tier: "C" },
    { name: "Orc", raridade: "Rare", tier: "C" },
    { name: "Fishman", raridade: "Uncommon", tier: "C" },
    { name: "Mink", raridade: "Rare", tier: "D" },
    { name: "Skypea", raridade: "Uncommon", tier: "D" },
    { name: "Human", raridade: "Common", tier: "D" }
];

const tierOrder = ["S", "A", "B", "C", "D"];
const container = document.getElementById('tier-list-container');

function renderTierList() {
    container.innerHTML = tierOrder.map(tier => {
        const racesInTier = raceTierData.filter(r => r.tier === tier);

        return `
            <div class="tier-row tier-${tier.toLowerCase()}">
                <div class="tier-label">${tier}</div>
                <div class="tier-content">
                    ${racesInTier.map(race => `
                        <div class="race-badge rarity-${race.raridade.toLowerCase()}">
                            <span class="name">${race.name}</span>
                            <span class="rarity-text">${race.raridade}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');
}

renderTierList();