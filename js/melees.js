const meleesData = [
    {
        name: "Combat",
        image: "../assets/melees/combat.png",
        howToGet: "Default style (unlocked at start)"
    },
    {
        name: "Gojo",
        image: "../assets/melees/Gojo.png",
        howToGet: "<b>Location:</b> Shibuya Station<br><b>Items:</b> 750k Money, 4k Gems, 6x Void Fragment, 3x Limitless Ring, 1x Infinity Core.<br><b>Quests:</b> Kill 350 mobs, Use any melee ability 350 times, Kill Gojo Boss 15 times."
    },
    {
        name: "Sukuna",
        image: "../assets/melees/Sukuna.png",
        howToGet: "<b>Location:</b> Shibuya Station<br><b>Items:</b> 1.25M Money, 5k Gems, 6x Cursed Finger, 3x Dismantle Fang, 1x Crimson Heart.<br><b>Quests:</b> Deal 35M damage, Kill 25 players, Kill Sukuna Boss 15 times."
    },
    {
        name: "Qin Shi",
        image: "../assets/melees/Qin-shi.png",
        howToGet: "<b>Location:</b> Boss Island<br>1. Obtain from Boss Exchange NPC for 250 Boss Tickets.<br>2. Buy from Trainer for: 500k Money, 2.5k Gems, 7x Jade Tablet, 3x Imperial Seal."
    },
    {
        name: "Yuji",
        image: "../assets/melees/Yuji.png",
        howToGet: "<b>Location:</b> Shibuya Station<br><b>Items:</b> 7x Energy Core, 3x Flash Impact, 1x Divergent Pulse."
    },
    {
        name: "Alucard",
        image: "../assets/melees/alucard.png",
        howToGet: "<b>Location:</b> Sailor Island<br><b>Requirements:</b> Vampire Race, 'Vampire King' Title.<br><b>Items:</b> 6.5M Money, 10k Gems, 5x Soul Amulet, 1x Casull, 1x Blood Ring."
    },
    {
        name: "Strongest of Today",
        image: "../assets/melees/Strongest-of-Today.png",
        howToGet: "<b>Location:</b> Shinjuku Island<br><b>Requirements:</b> Consume 6x Six Eyes, 'Strongest Sorcerer' Title.<br><b>Items:</b> 9x Reversal Pulse, 3x Blue Singularity, 1x Infinity Essence."
    },
    {
        name: "Strongest in History",
        image: "../assets/melees/Strongest-in-History.png",
        howToGet: "<b>Location:</b> Shinjuku Island<br><b>Requirements:</b> Consume 20x Awakened Cursed Fingers, 'Disgraced One' Title.<br><b>Items:</b> 7x Vessel Ring, 3x Malevolent Soul, 1x Cursed Flesh."
    },
    {
        name: "Madoka",
        image: "../assets/melees/Madoka.png",
        howToGet: "<b>Location:</b> Valentine Island<br><b>Requirements:</b> 'Star Maiden' Title.<br><b>Items:</b> 20M Money, 15k Gems, 100x Heart, 8x Divine Fragment, 5x Sacred Bow, 3x Radiant Core, 1x Pink Gems."
    },
    {
        name: "Gilgamesh",
        image: "../assets/melees/Gilgamesh.png",
        howToGet: "<b>Location:</b> Boss Island<br><b>Requirements:</b> 'Golden King' Title.<br><b>Items:</b> 25M Money, 22.5k Gems, 12x Throne Remnant, 6x Ancient Shard, 3x Golden Essence, 1x Phantasm Core."
    },
    {
        name: "Anos",
        image: "../assets/melees/Anos.png",
        howToGet: "<b>Location:</b> Academy Island<br><b>Requirements:</b> Voldigoat (Clan), 'Demon King' Title.<br><b>Items:</b> 65x Calamity Seal, 12x Demonic Fragment, 6x Demonic Shard, 2x Destruction Eye, 1x Imperial Mark."
    },
    {
        name: "Blessed Maiden",
        image: "../assets/melees/Blessed-Maiden.png",
        howToGet: "<b>Location:</b> Boss Island<br><b>Requirements:</b> 'Astral Empress' Title.<br><b>Items:</b> 32.5k Gems, 1x Celestial Mark, 3x Aero Core, 8x Gale Essence, 14x Tide Remnant, 25x Tempest Relic."
    },
    {
        name: "Saber Alter",
        image: "../assets/melees/Saber-Alter.png",
        howToGet: "<b>Location:</b> Boss Island<br><b>Requirements:</b> 'Corrupt Tyrant' Title.<br><b>Items:</b> 25x Dark Grail, 15x Morgan Remnant, 8x Alter Essence, 3x Corruption Core, 1x Corrupt Crown."
    },
    {
        name: "Strongest Shinobi",
        image: "../assets/melees/Madara.png",
        howToGet: "<b>Location:</b> Ninja Island<br><b>Requirements:</b> 'Battlefield Warlord' Title.<br><b>Items:</b> 40k Gems, 1x Path Fragment, 3x Eternal Core, 8x Battle Sigil, 15x Power Remnant."
    },
    {
        name: "Moon Slayer",
        image: "../assets/melees/Kokushibo.png",
        howToGet: "<b>Location:</b> Moon Slayer Boss<br><b>Requirements:</b> 'Six Eyed Demon' Title.<br><b>Items:</b> 37.5k Gems, 1x Moon Crest, 4x Crescent Shard, 9x Lunar Essence, 16x Demon Remnant, 25x Upper Seal."
    }
];

const meleesContainer = document.getElementById('melees-container');
const meleeSearch = document.getElementById('melee-search');

function renderMelees(filter = "") {
    const filtered = meleesData.filter(m => 
        m.name.toLowerCase().includes(filter.toLowerCase()) ||
        m.howToGet.toLowerCase().includes(filter.toLowerCase())
    );

    meleesContainer.innerHTML = filtered.map(m => {
        const imgHtml = m.image 
            ? `<img src="${m.image}" alt="${m.name}" onerror="this.parentElement.classList.add('no-image'); this.remove();">`
            : ''; 

        const imgContainerClass = m.image 
            ? 'melee-img-container' 
            : 'melee-img-container no-image';

        return `
            <div class="melee-row">
                <div class="melee-info">
                    <div class="${imgContainerClass}">
                        ${imgHtml}
                    </div>
                    <span class="melee-name">${m.name}</span>
                </div>
                <div class="melee-method">
                    ${m.howToGet}
                </div>
            </div>
        `;
    }).join('');
}

meleeSearch.addEventListener('input', (e) => renderMelees(e.target.value));
renderMelees();