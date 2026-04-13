const bossData = {
    "atomic": {
        name: "Atomic",
        hp: "2,000,000,000",
        location: "Lawless Island",
        image: "../../assets/bosses/Atomic.png",
        drops: [
            { name: "Atomic Omen", chance: "0.8%", rarity: "mythical" },
            { name: "Eminence Essence", chance: "1.7%", rarity: "mythical" },
            { name: "Atomic Outfit", chance: "1.9%", rarity: "mythical" },
            { name: "Shadow Remnant", chance: "7%", rarity: "legendary" },
            { name: "Magic Shard", chance: "19%", rarity: "epic" }
        ]
    },
    "blessedmaiden": {
        name: "Blessed Maiden",
        hp: "650,000,000",
        location: "Boss Island",
        image: "../../assets/bosses/BlessedMaiden.png",
        drops: [
            { name: "Celestial Mark", chance: "0.8%", rarity: "mythical" },
            { name: "Aero Core", chance: "1.7%", rarity: "mythical" },
            { name: "Maiden Outfit", chance: "1.9%", rarity: "mythical" },
            { name: "Tide Remnant", chance: "7%", rarity: "legendary" },
            { name: "Tide Remnant", chance: "19%", rarity: "epic" }
        ]
    },
    "corruptedknight": {
        name: "Corrupted Knight",
        hp: "750,000,000",
        location: "Forgotten Castle",
        image: "../../assets/bosses/CorruptedKnight.png",
        drops: [
            { name: "Corrupt Crown", chance: "0.7%", rarity: "mythical" },
            { name: "Corruptiopn Core", chance: "1.6%", rarity: "mythical" },
            { name: "Alter Armor", chance: "1.7%", rarity: "mythical" },
            { name: "Alter Essence", chance: "6.5%", rarity: "legendary" },
            { name: "Morgan Remnant", chance: "18%", rarity: "epic" }
        ]
    },
    "cursedvessel": {
        name: "Cursed Vessel",
        hp: "3,750,000",
        location: "Shibuya Station",
        image: "../../assets/bosses/CursedVessel.png",
        drops: [
            { name: "Divergent Pulse", chance: "8%", rarity: "legendary" },
            { name: "Cursed Vessel Hair", chance: "10%", rarity: "legendary" },
            { name: "Flash Impact", chance: "18%", rarity: "epic" },
            { name: "Dungeon Key", chance: "30%", rarity: "epic" },
            { name: "Boss Ticket", chance: "40%", rarity: "epic" },
            { name: "Artifact:Void Reaver", chance: "40%", rarity: "common" },
            { name: "Energy Core", chance: "50%", rarity: "rare" },
            { name: "Trait Reroll", chance: "64%", rarity: "epic" },
            { name: "Race Reroll", chance: "90%", rarity: "epic" },
            { name: "Haki Color Reroll", chance: "90%", rarity: "rare" }
            
        ]
    },
    "curseking": {
        name: "Curse King",
        hp: "5,000,000",
        location: "Shibuya Station",
        image: "../../assets/bosses/CurseKing.png",
        drops: [
            { name: "Divergent Pulse", chance: "5%", rarity: "mythical" },
            { name: "Cursed King Collar", chance: "8%", rarity: "mythical" },
            { name: "Dismantle Fang", chance: "16%", rarity: "legendary" },
            { name: "Flash Impact", chance: "40%", rarity: "epic" },
            { name: "Dungeon Key", chance: "48%", rarity: "epic" },
            { name: "Artifact:Void Reaver", chance: "50%", rarity: "common" },
            { name: "Malevolent Key", chance: "60%", rarity: "epic" },
            { name: "Boss Ticket", chance: "60%", rarity: "epic" },
            { name: "Trait Reroll", chance: "100%", rarity: "epic" },
            { name: "Race Reroll", chance: "100%", rarity: "epic" }
        ]
    },
    "demonking": {
        name: "Demon King",
        hp: "150,000,000",
        location: "Hell's Gate",
        image: "../../assets/bosses/DemonKing.png",
        drops: [
            { name: "Imperial Mask", chance: "1%", rarity: "mythical" },
            { name: "Demon King Outfit", chance: "1.5%", rarity: "mythical" },
            { name: "Destruction Eye", chance: "2%", rarity: "mythical" },
            { name: "Demonic Shard", chance: "9%", rarity: "legendary" },
            { name: "Demonic Fragment", chance: "23%", rarity: "epic" }
        ]
    },
    "excalibur": {
        name: "Excalibur/Knight",
        hp: "2,500,000",
        location: "Boss Island",
        image: "../../assets/bosses/Excalibur.png",
        drops: [
            { name: "Excalibur", chance: "4%", rarity: "legendary" },
            { name: "Holy Armor", chance: "10%", rarity: "legendary" },
            { name: "Dungeon Key", chance: "24%", rarity: "epic" },
            { name: "Trait Reroll", chance: "30%", rarity: "epic" },
            { name: "Haki Color Reroll", chance: "58%", rarity: "rare" },
            { name: "Race Reroll", chance: "78%", rarity: "epic" },
            { name: "Boss Ticket", chance: "80%", rarity: "epic" },
            { name: "Artifact:Void Reaver", chance: "100%", rarity: "common" }
        ]
    },
    "gilgamesh": {
        name: "Gilgamesh/King of Heroes",
        hp: "300,000,000",
        location: "Boss Island",
        image: "../../assets/bosses/Gilgamesh.png",
        drops: [
            { name: "Phantasm Core", chance: "1%", rarity: "mythical" },
            { name: "King of Heroes Armor", chance: "2.3%", rarity: "mythical" },
            { name: "Golden Essence", chance: "3%", rarity: "mythical" },
            { name: "Ancient Shard", chance: "9%", rarity: "legendary" },
            { name: "Throne Remnant", chance: "23%", rarity: "epic" }
        ]
    },
    "icequeen": {
        name: "Ice Queen",
        hp: "1,650,000,000",
        location: "Boss Island",
        image: "../../assets/bosses/IceQueen.png",
        drops: [
            { name: "Ice Core", chance: "0.52%", rarity: "mythical" },
            { name: "Glacier Remnant", chance: "1.2%", rarity: "mythical" },
            { name: "Ice Queen Outfit", chance: "1.4%", rarity: "mythical" },
            { name: "Frozen Brand", chance: "5.3%", rarity: "legendary" },
            { name: "Battle Shard", chance: "16%", rarity: "epic" }
        ]
    },
    "limitlesssorcerer": {
        name: "Limitless Sorcerer",
        hp: "4,000,000",
        location: "Shibuya Station",
        image: "../../assets/bosses/LimitlessSorcerer.png",
        drops: [
            { name: "Infinity Core", chance: "6%", rarity: "legendary" },
            { name: "Limitless Sorcerer Blindflod", chance: "10%", rarity: "legendary" },
            { name: "Limitless Ring", chance: "16%", rarity: "epic" },
            { name: "Dungeon Key", chance: "36%", rarity: "epic" },
            { name: "Void Fragment", chance: "40%", rarity: "epic" },
            { name: "Artifact:Void Reaver", chance: "45%", rarity: "common" },
            { name: "Boss Ticket", chance: "50%", rarity: "epic" },
            { name: "Limitless Key", chance: "60%", rarity: "epic" },
            { name: "Trait Reroll", chance: "84%", rarity: "epic" },
            { name: "Race Reroll", chance: "100%", rarity: "epic" }
        ]
    },
    "manipulator": {
        name: "Manipulator",
        hp: "25,000,000",
        location: "Hollow Island",
        image: "../../assets/bosses/Manipulator.png",
        drops: [
            { name: "Transmutation Shard", chance: "2%", rarity: "mythical" },
            { name: "Hogyoku Fragment", chance: "2,4%", rarity: "mythical" },
            { name: "Manipulator Haori", chance: "4%", rarity: "mythical" },
            { name: "Reiatsu Core", chance: "6%", rarity: "legendary" },
            { name: "Illusion Prism", chance: "16%", rarity: "epic" },
            { name: "Mirage Pendant", chance: "40%", rarity: "epic" },
            { name: "Dungeon Key", chance: "72%", rarity: "epic" },
            { name: "Artifact:Void Reaver", chance: "80%", rarity: "common" },
            { name: "Boss Ticket", chance: "90%", rarity: "epic" },
            { name: "Trait Reroll", chance: "100%", rarity: "epic" },
            { name: "Race Reroll", chance: "100%", rarity: "epic" }
        ]
    },
    "moonslayer": {
        name: "Moon Slayer",
        hp: "1,250,000,000",
        location: "Lunar Peak",
        image: "../../assets/bosses/MoonSlayer.png",
        drops: [
            { name: "Moon Crest", chance: "0.55%", rarity: "mythical" },
            { name: "Crescent Shard", chance: "1.3%", rarity: "mythical" },
            { name: "Moon Outfit", chance: "1.5%", rarity: "mythical" },
            { name: "Lunar Essence", chance: "5.7%", rarity: "legendary" },
            { name: "Demon Remnant", chance: "16.5%", rarity: "epic" }
        ]
    },
    "qinshi": {
        name: "Qin Shi",
        hp: "10,000,000",
        location: "Boss Island",
        image: "../../assets/bosses/QinShi.png",
        drops: [
            { name: "Qin Shin BlindFlold", chance: "5%", rarity: "mythical" },
            { name: "Imperial Seal", chance: "5%", rarity: "mythical" },
            { name: "Jade Tablet", chance: "12%", rarity: "legendary" },
            { name: "Dungeon Key", chance: "36%", rarity: "epic" },
            { name: "Artifact:Void Reaver", chance: "40%", rarity: "common" },
            { name: "Trait Reroll", chance: "100%", rarity: "epic" },
            { name: "Haki Color Reroll", chance: "100%", rarity: "rare" },
            { name: "Race Reroll", chance: "100%", rarity: "epic" },
            { name: "Boss Ticket", chance: "100%", rarity: "epic" }

        ]
    },
    "slime": {
        name: "Slime",
        hp: "200,000,000",
        location: "Green Plains",
        image: "../../assets/bosses/Slime.png",
        drops: [
            { name: "Slime Core", chance: "5%", rarity: "mythical" },
            { name: "Slime Wings", chance: "5%", rarity: "mythical" },
            { name: "Slime Remnant", chance: "12%", rarity: "legendary" },
            { name: "Tempest Seal", chance: "36%", rarity: "legendary" },
            { name: "Sage Pulse", chance: "100%", rarity: "epic" }
        ]
    },
    "solohunter": {
        name: "Solo Hunter",
        hp: "6,000,000",
        location: "Sailor Island",
        image: "../../assets/bosses/SoloHunter.png",
        drops: [
            { name: "Shadow Heart", chance: "4%", rarity: "mythical" },
            { name: "Solo Hunter Cape", chance: "6%", rarity: "mythical" },
            { name: "Dark Ring", chance: "14%", rarity: "mythical" },
            { name: "Abyss Edge", chance: "35%", rarity: "legendary" },
            { name: "Dungeon Key", chance: "60%", rarity: "epic" },
            { name: "Artifact:Void Reaver", chance: "70%", rarity: "common" },
            { name: "Boss Ticket", chance: "70%", rarity: "epic" },
            { name: "Trait Reroll", chance: "100%", rarity: "epic" },
            { name: "Race Reroll", chance: "100%", rarity: "epic" }
        ]
    },
    "vampierking": {
        name: "Vampire King",
        hp: "20,000,000",
        location: "Sailor Island",
        image: "../../assets/bosses/VampireKing.png",
        drops: [
            { name: "Casull", chance: "4%", rarity: "mythical" },
            { name: "Blood Ring", chance: "4%", rarity: "mythical" },
            { name: "Vampire King Coat", chance: "6%", rarity: "mythical" },
            { name: "Soul Amulet", chance: "16%", rarity: "legendary" },
            { name: "Dungeon Key", chance: "66%", rarity: "epic" },
            { name: "Artifact:Void Reaver", chance: "75%", rarity: "common" },
            { name: "Boss Ticket", chance: "80%", rarity: "epic" },
            { name: "Trait Reroll", chance: "100%", rarity: "epic" },
            { name: "Race Reroll", chance: "100%", rarity: "epic" }
        ]
    },
    "soulreaper": {
        name: "Soul Reaper",
        hp: "65,000,000",
        location: "Boss Island",
        image: "../../assets/bosses/SoulReaper.png",
        drops: [
            { name: "Soul Flame", chance: "1.4%", rarity: "mythical" },
            { name: "Spiritual Core", chance: "3.5%", rarity: "mythical" },
            { name: "Hollow Mask", chance: "4%", rarity: "legendary" },
            { name: "Soul Fragment", chance: "12%", rarity: "epic" },
            { name: "Dungeon Key", chance: "40%", rarity: "epic" },
            { name: "Race Reroll", chance: "100%", rarity: "epic" },
            { name: "Boss Ticket", chance: "100%", rarity: "epic" },
            { name: "Trait Reroll", chance: "100%", rarity: "epic" },
            { name: "Haki Color Reroll", chance: "100%", rarity: "rare" }
        ]
    },
    "strongestinhistory": {
        name: "Strongest in History",
        hp: "125,000,000",
        location: "Shinjuku Island",
        image: "../../assets/bosses/StrongestInHistory.png",
        drops: [
            { name: "Cursed Flesh", chance: "1.3%", rarity: "mythical" },
            { name: "Divine Wheel", chance: "2.5%", rarity: "mythical" },
            { name: "Malevolent Soul", chance: "4%", rarity: "legendary" },
            { name: "Vessel Ring", chance: "12%", rarity: "legendary" },
            { name: "Awakened Cursed Finger", chance: "30%", rarity: "epic" }
        ]
    },
    "strongestoftoday": {
        name: "Strongest of Today",
        hp: "180,000,000",
        location: "Shinjuku Island",
        image: "../../assets/bosses/StrongestOfToday.png",
        drops: [
            { name: "Infinity Essence", chance: "1.3%", rarity: "mythical" },
            { name: "Limitless Sorcerer Haori", chance: "2.5%", rarity: "mythical" },
            { name: "Blue Singularity", chance: "4%", rarity: "legendary" },
            { name: "Six Eye", chance: "12%", rarity: "legendary" },
            { name: "Reversal Pulse", chance: "30%", rarity: "epic"}
        ]
    },
    "strongestshinobi": {
        name: "Ninja Island",
        hp: "2,000,000,000",
        location: "Hidden Leaf Ruins",
        image: "../../assets/bosses/StrongestShinobi.png",
        drops: [
            { name: "Path Fragment", chance: "0.88%", rarity: "mythical" },
            { name: "Eternal Core", chance: "2%", rarity: "mythical" },
            { name: "Battle Sigil", chance: "4.2%", rarity: "mythical" },
            { name: "Power Remnat", chance: "7.3%", rarity: "legendary" },
            { name: "Trait Reroll", chance: "100%", rarity: "epic" },
            { name: "Dungeon Key", chance: "36%", rarity: "epic" },
            { name: "Race Reroll", chance: "100%", rarity: "epic" },
            { name: "Boss Ticket", chance: "100%", rarity: "epic" },
            { name: "Artifact:Void Reaver", chance: "100%", rarity: "common" }
        ]
    },
    "truemanipulator": {
        name: "True Manipulator",
        hp: "130,000,000",
        location: "Master's Void",
        image: "../../assets/bosses/TrueManipulator.png",
        drops: [
            { name: "Evolution Fragment", chance: "32.77%", rarity: "mythical" },
            { name: "Tarnscendent Core", chance: "11.21%", rarity: "mythical" },
            { name: "Manipulator Outfit", chance: "2.93%", rarity: "mythical" },
            { name: "Divinity Essence", chance: "2.76%", rarity: "legendary" },
            { name: "Fusion Ring", chance: "1.38%", rarity: "legendary"}
        ]
    },
    "yamato": {
        name: "Yamato",
        hp: "95,000,000",
        location: "Onigashima Roof",
        image: "../../assets/bosses/Yamato.png",
        drops: [
            { name: "Azure Heart", chance: "1%", rarity: "mythical" },
            { name: "Imperial Outfit", chance: "1.8%", rarity: "mythical" },
            { name: "Silent Storm", chance: "2.3%", rarity: "legendary" },
            { name: "Yamato Essence", chance: "5%", rarity: "legendary" },
            { name: "Frozen Will", chance: "8.5%", rarity: "epic" },
            { name: "Trait Reroll", chance: "100%", rarity: "epic" },
            { name: "Dungeon Key", chance: "100%", rarity: "epic" },
            { name: "Race Reroll", chance: "100%", rarity: "epic" },
            { name: "Boss Ticket", chance: "100%", rarity: "epic" },
            { name: "Artifact:Void Reaver", chance: "100%", rarity: "common" }
        ]
    }
};