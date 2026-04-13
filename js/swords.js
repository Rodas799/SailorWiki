const swordsData = [
    {
        name: "Katana",
        rarity: "Common",
        image: "../assets/swords/katana.png",
        location: "Starter Island",
        howToGet: "Buy from Sword Dealer (1,000 Cash)"
    },
    {
        name: "Dark Blade",
        rarity: "Epic",
        image: "../assets/swords/dark-blade.png",
        location: "Snow Island",
        howToGet: "Buy from the Dark Blade Seller for 250,000 money or 150 gems"
    },
    {
        name: "Gryphon",
        rarity: "Legendary",
        image: "../assets/swords/gryphon.png",
        location: "Shibuya Station",
        howToGet: "Buy from the Gryphon Seller NPC for 650k money or 650 gems"
    },
    {
        name: "Excalibur Sword",
        rarity: "Legendary",
        image: "../assets/swords/excalibur.png",
        location: "Boss Island",
        howToGet: "2% Drop from Saber boss or Exchange for 65 boss tickets"
    },
    {
        name: "Jinwoo",
        rarity: "Mythical",
        image: "../assets/swords/jinwoo.png",
        location: "Sailor Island",
        howToGet: "Complete Jinwoo trainer quests and buy for 2.5M money"
    },
    {
        name: "Rimuru",
        rarity: "Mythical",
        image: "../assets/swords/rimuru.png",
        location: "Slime Island",
        howToGet: "Demon Lord Title, 30M Money, 20k Gems, 9x Sage Pulse, 6x Tempest Seal, 3x Slime Remnant, 1x Slime Core"
    },
    {
        name: "Manipulator Sword",
        rarity: "Mythical",
        image: "../assets/swords/manipulator.png",
        location: "Hollow Island",
        howToGet: "6M Money, 10k Gems, 10x Mirage Pendants, 6x Illusion Prisms, 3x Reiatsu Cores, 1x Ayoku Fragment"
    },
    {
        name: "True Manipulator",
        rarity: "Mythical",
        image: "../assets/swords/trueaizen.png",
        location: "Soul Dominion",
        howToGet: "Transcendent Being Title, Aizen Sword, 1x Evolution Fragment, 3x Transcendent Core, 8x Divinity Essence, 15x Fusion Ring, 35k Gems"
    },
    {
        name: "Yamato",
        rarity: "Mythical",
        image: "../assets/swords/yamato.png",
        location: "Judgement Island",
        howToGet: "Blade Sovereign Title, Soul Bless Race, 1x Azure Heart, 3x Silent Storms, 7x Yamato Essence, 14x Frozen Will, 30k Gems"
    },
    {
        name: "Escanor",
        rarity: "Mythical",
        image: "../assets/swords/escanor.png",
        location: "Sailor Island",
        howToGet: "Defeat Escanor in Boss Rush (Low Chance)"
    },
    {
        name: "Ragna Sword",
        rarity: "Mythical",
        image: "../assets/swords/ragna.png",
        location: "Snow Island",
        howToGet: "1M Money, 4500 Gems, 7x Wyrm Brand, 3x Black Forest, 1x Silver Requiem"
    },
    {
        name: "Soul Reaper Sword",
        rarity: "Mythical", // Raridade ajustada com base no contexto de Boss Island
        image: "../assets/swords/soulreaper.png",
        location: "Boss Island",
        howToGet: "Exchange with NPC for 500 boss tickets"
    },
    {
        name: "Shadow Sword",
        rarity: "Mythical",
        image: "../assets/swords/shadow.png",
        location: "Dungeon Island",
        howToGet: "10M Money, 15k Gems, 1x Atomic Core, 4x Shadow Essence, 8x Void Seed, 20x Umbral Capsule"
    },
    {
        name: "Shadow Monarch",
        rarity: "Mythical",
        image: "../assets/swords/shadow-monarch.png",
        location: "Dungeon Island",
        howToGet: "King of Shadows Title, Jinwoo Sword, 10x Monarch Core, 5x Monarch Essence, 2x Kamish Dagger, 1x Shadow Crystal"
    },
    {
        name: "Atomic",
        rarity: "Mythical",
        image: "../assets/swords/atomic.png",
        location: "Lawless Island",
        howToGet: "Eminence Incarnate Title, Shadow Sword, 45k Gems, 1x Atomic Omen, 3x Eminence Essence, 9x Shadow Remnant, 16x Magic Shard, 80x Abyss Sigil"
    },
    {
        name: "Abyssal Empress",
        rarity: "Mythical",
        image: "../assets/swords/abyssal_empress.png",
        location: "Tower Island",
        howToGet: "Infinite Tower Drop or Tower Shop"
    },
    {
        name: "Ice Queen",
        rarity: "Mythical",
        image: "../assets/swords/icequeen.png",
        location: "Boss Island",
        howToGet: "Frost Empress Title, 40k Gems, 1x Ice Core, 4x Frozen Band, 9x Glacier Remnant, 17x Battle Shard, 25x Frost Relic"
    }
];

const swordsContainer = document.getElementById('swords-container');
const swordSearch = document.getElementById('sword-search');

function renderSwords(filter = "") {
    const filtered = swordsData.filter(s => 
        s.name.toLowerCase().includes(filter.toLowerCase()) ||
        s.location.toLowerCase().includes(filter.toLowerCase()) ||
        s.howToGet.toLowerCase().includes(filter.toLowerCase())
    );

    swordsContainer.innerHTML = filtered.map(s => {
        const imgHtml = s.image 
            ? `<img src="${s.image}" alt="${s.name}" onerror="this.parentElement.classList.add('no-image'); this.remove();">`
            : ''; 

        const imgContainerClass = s.image 
            ? 'sword-img-container' 
            : 'sword-img-container no-image';

        return `
            <div class="sword-row ${s.rarity.toLowerCase()}">
                <div class="sword-info">
                    <div class="${imgContainerClass}">
                        ${imgHtml}
                    </div>
                    <div class="sword-name-box">
                        <span class="sword-name">${s.name}</span>
                        <span class="sword-rarity">${s.rarity}</span>
                    </div>
                </div>
                <div class="sword-location">
                    <i class="fas fa-map-marker-alt"></i> ${s.location}
                </div>
                <div class="sword-method">
                    ${s.howToGet}
                </div>
            </div>
        `;
    }).join('');
}

swordSearch.addEventListener('input', (e) => renderSwords(e.target.value));
renderSwords();