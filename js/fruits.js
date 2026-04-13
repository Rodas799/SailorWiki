const fruitsData = [
    { name: "Invisible", rarity: "Common", image: "../assets/fruits/invisible.png" },
    { name: "Bomb", rarity: "Uncommon", image: "../assets/fruits/bomb.png" },
    { name: "Flame", rarity: "Rare", image: "../assets/fruits/flame.png" },
    { name: "Quake", rarity: "Epic", image: "../assets/fruits/quake.png" },
    { name: "Light", rarity: "Legendary", image: "../assets/fruits/light.png" }
];

const fruitsContainer = document.getElementById('fruits-grid'); // Podes manter o ID ou mudar para fruits-container
const fruitSearch = document.getElementById('fruit-search');

function renderFruits(filter = "") {
    const filtered = fruitsData.filter(fruit => 
        fruit.name.toLowerCase().includes(filter.toLowerCase()) ||
        fruit.rarity.toLowerCase().includes(filter.toLowerCase())
    );

    fruitsContainer.innerHTML = filtered.map(fruit => `
        <div class="fruit-row ${fruit.rarity.toLowerCase()}">
            <div class="fruit-info">
                <div class="fruit-icon-container">
                    <img src="${fruit.image}" alt="${fruit.name}">
                </div>
                <span class="fruit-name">${fruit.name}</span>
            </div>
            <div class="rarity-tag">${fruit.rarity}</div>
        </div>
    `).join('');
}

fruitSearch.addEventListener('input', (e) => renderFruits(e.target.value));
renderFruits();