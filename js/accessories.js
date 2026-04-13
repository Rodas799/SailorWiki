const accessoriesData = [
    { name: "Sorcerer Blindfold", rarity: "Legendary", stats: "40% DEF, 25% DMG", method: "Limitless Sorcerer boss (5%)", location: "Shibuya", image: "../assets/accessories/sorcerer.png" },
    { name: "Holy Armor", rarity: "Legendary", stats: "35% DEF, 20% DMG, 15% DMG Reduction", method: "Knight boss (5%)", location: "Drum Island", image: "../assets/accessories/holy.png" },
    { name: "Vessel Hair", rarity: "Legendary", stats: "30% DEF, 22% DMG, 12% DMG Reduction", method: "Cursed Vessel boss (5%)", location: "Shibuya", image: "../assets/accessories/vessel.png" },
    { name: "Manipulator Haori", rarity: "Mythical", stats: "50% DEF, 40% DMG, 15% DMG Reduction", method: "Manipulator boss (4%)", location: "Hueco Mundo", image: "../assets/accessories/manipulator.png" },
    { name: "Vampier Coat", rarity: "Mythical", stats: "40% DEF, 37% DMG, 15% DMG Reduction", method: "Vampier King boss (3%)", location: "Sailor Island", image: "../assets/accessories/vampire.png" },
    { name: "Demon King Outfit", rarity: "Mythical", stats: "85% DEF, 62% DMG, 10% DMG Reduction", method: "Demon King boss (0.75% – 1.25%)", location: "Academy Island", image: "../assets/accessories/demonking.png" },
    { name: "Divine Wheel", rarity: "Mythical", stats: "70% DEF, 50% DMG, 15% DMG Reduction", method: "Strongest in History boss (1.25% – 2%)", location: "Shinjuku", image: "../assets/accessories/divinewheel.png" },
    { name: "Gilgamesh Armor", rarity: "Mythical", stats: "80% DEF, 60% DMG, 15% DMG Reduction", method: "Gilgamesh boss (1.5% – 1.8%)", location: "Boss Island", image: "../assets/accessories/golden.png" },
    { name: "Limitless Haori", rarity: "Mythical", stats: "65% DEF, 47% DMG, 15% DMG Reduction", method: "Strongest of Today boss (1.25% – 2%)", location: "Shinjuku", image: "../assets/accessories/limitless.png" },
    { name: "Hollow Mask", rarity: "Mythical", stats: "50% DEF, 40% DMG, 15% DMG Reduction", method: "Soul Reaper boss (2%)", location: "Hueco Mundo", image: "../assets/accessories/hollow.png" },
    { name: "Imperial Outfit", rarity: "Mythical", stats: "90% DEF, 65% DMG, 15% DMG Reduction", method: "Yamato boss (0.90%)", location: "Onigashima", image: "../assets/accessories/Imperial.png" },
    { name: "Hunter Cape", rarity: "Mythical", stats: "40% DEF, 30% DMG, 15% DMG Reduction", method: "Solo Hunter boss (3%)", location: "Jeju Island", image: "../assets/accessories/hunter.png" },
    { name: "Maiden Outfit", rarity: "Mythical", stats: "95% DEF, 70% DMG, 15% DMG Reduction", method: "Blessed Maiden boss (1.64%)", location: "Boss Island", image: "../assets/accessories/Maiden.png" },
    { name: "Manipulator Outfit", rarity: "Mythical", stats: "100% DEF, 72% DMG, 15% DMG Reduction", method: "True Manipulator boss (2% – 3.81%)", location: "Boss Island", image: "../assets/accessories/manipulator2.png" },
    { name: "Monarch Armor", rarity: "Mythical", stats: "90% DEF, 65% DMG, 15% DMG Reduction", method: "Shadow Monarch boss (0.75% – 1.5%)", location: "Jeju Island", image: "../assets/accessories/monarch.png" },
    { name: "Qin Shi Blindfold", rarity: "Mythical", stats: "30% DEF, 35% DMG, 17% DMG Reduction", method: "Qin Shi boss (2.50%)", location: "Boss Island", image: "../assets/accessories/qinshin.png" },
    { name: "[EVENT]Ragna Sigil", rarity: "Mythical", stats: "45% DEF, 40% DMG, 15% DMG Reduction", method: "Ragna boss (2%)", location: "Event Island", image: "../assets/accessories/ragnasigil.png" },
    { name: "Shadow Cloak", rarity: "Mythical", stats: "60% DEF, 45% DMG, 15% DMG Reduction", method: "Shadow boss (0.85% – 2.5%)", location: "Garden of Shadows", image: "../assets/accessories/shadowcloak.png" },
    { name: "Slime Wings", rarity: "Mythical", stats: "75% DEF, 55% DMG, 15% DMG Reduction", method: "Slime boss (1.25% – 2%)", location: "Jura Forest", image: "../assets/accessories/slime.png" },
    { name: "Curse King Collar", rarity: "Mythical", stats: "45% DEF, 30% DMG", method: "Cursed King boss (4%)", location: "Shibuya", image: "../assets/accessories/curseking.png" },
    { name: "Sun Armor", rarity: "Mythical", stats: "75% DEF, 55% DMG, 20% DMG Reduction", method: "Boss Rush shop", location: "Lobby", image: "../assets/accessories/sun.png" },
    { name: "[EVENT]Ultimate Wings", rarity: "Mythical", stats: "65% DEF, 50% DMG, 15% DMG Reduction", method: "Madoka boss (1.50%)", location: "Valentine Island", image: "../assets/accessories/ultimatewings.png" },
    { name: "[EVENT]Valentine Heart", rarity: "Mythical", stats: "35% DEF, 25% DMG, 10% DMG Reduction", method: "Cupid trial quest", location: "Valentine Island", image: "../assets/accessories/valentineheart.png" },
    { name: "[EVENT]Heart Wings", rarity: "Mythical", stats: "55% DEF, 42% DMG, 15% DMG Reduction", method: "Trade with Valentine Merchant", location: "Valentine Island", image: "../assets/accessories/heartwings.png" },
    { name: "[EVENT]Santa Hat", rarity: "Mythical", stats: "30% DEF, 20% DMG, 5% DMG Reduction", method: "Santa quest reward", location: "Christmas Island", image: "../assets/accessories/santahat.png" },
    { name: "Alter Armor", rarity: "Mythical", stats: "75% DMG, 2x DEF, 15% DMG Reduction", method: "Corrupted Knight (3%)", location: "Boss Island", image: "../assets/accessories/Alter.png" },
    { name: "Atomic Outfit", rarity: "Mythical", stats: "105% DEF, 82% DMG, 15% DMG Reduction", method: "Atomic boss (2%)", location: "Garden of Shadows", image: "../assets/accessories/Atomic.png" },
    { name: "Abyssal Outfit", rarity: "Mythical", stats: "105% DEF, 80% DMG, 15% DMG Reduction", method: "Infinite Tower", location: "Lobby", image: "../assets/accessories/Abyssal.png" },
    { name: "Moon Outfit", rarity: "Mythical", stats: "107% DEF, 85% DMG, 15% DMG Reduction", method: "Moon Slayer (0.8%)", location: "Infinity Castle", image: "../assets/accessories/moon.png" },
    { name: "Ice Queen Outfit", rarity: "Mythical", stats: "110% DEF, 87% DMG, 15% DMG Reduction", method: "Ice Queen (1.42%)", location: "Empire Island", image: "../assets/accessories/icequeen.png" }
];

const container = document.getElementById('acc-container');
const searchInput = document.getElementById('acc-search');

function render(filter = "") {
    const filtered = accessoriesData.filter(a => 
        a.name.toLowerCase().includes(filter.toLowerCase()) || 
        a.method.toLowerCase().includes(filter.toLowerCase()) ||
        a.location.toLowerCase().includes(filter.toLowerCase())
    );

    container.innerHTML = filtered.map(a => {
        const statsArray = a.stats.split(',').map(s => `<span class="stat-badge">${s.trim()}</span>`).join('');
        const imgHtml = a.image ? `<img src="${a.image}" alt="${a.name}">` : '';
        const imgClass = a.image ? 'acc-img-container' : 'acc-img-container no-image';

        return `
            <div class="acc-row ${a.rarity.toLowerCase()}">
                <div class="acc-info">
                    <div class="${imgClass}">${imgHtml}</div>
                    <div>
                        <span class="acc-name">${a.name}</span>
                        <span class="acc-rarity">${a.rarity}</span>
                    </div>
                </div>
                <div class="acc-stats-list">${statsArray}</div>
                <div class="acc-method">${a.method}</div>
                <div class="acc-location">
                    <i class="fas fa-map-marker-alt"></i> ${a.location}
                </div>
            </div>
        `;
    }).join('');
}

searchInput.addEventListener('input', (e) => render(e.target.value));
render();