const bosses = [
    "Atomic", "Blessed Maiden", "Corrupted Knight", "Cursed Vessel", 
    "Curse King", "Demon King", "Excalibur", "Gilgamesh", 
    "IceQueen", "Limitless Sorcerer", "Manipulator", "Moon Slayer", 
    "Qin Shi", "Slime", "Solo Hunter", "Vampire King", 
    "Soul Reaper", "Strongest in History", "Strongest of Today", 
    "Strongest Shinobi", "True Manipulator", "Yamato"
];

const grid = document.getElementById('bosses-grid');
const searchInput = document.getElementById('bossSearch');

function renderBosses(filter = "") {
    // Filtra os bosses com base no texto da pesquisa
    const filteredBosses = bosses.filter(boss => 
        boss.toLowerCase().includes(filter.toLowerCase())
    );

    // Gera o HTML
    grid.innerHTML = filteredBosses.map(boss => {
        // AJUSTE AQUI: Adicionado o caminho da pasta "Bosses/" antes do nome do ficheiro
// Remove espaços e coloca em minúsculas para criar um ID limpo
const bossId = boss.toLowerCase().replace(/\s+/g, ''); 
const bossLink = `Bosses/boss-template.html?boss=${bossId}`;
        
        // Caminho da imagem (mantido conforme estavas a usar)
        const bossImg = `../assets/Bosses/${boss.replace(/\s+/g, '')}.png`;

        return `
            <a href="${bossLink}" class="boss-card">
                <div class="boss-img-container">
                    <img src="${bossImg}" alt="${boss}" onerror="this.src='../assets/bosses/placeholder.png'">
                    <div class="boss-overlay">
                        <span class="view-btn">
                            <i class="fas fa-eye" style="margin-right: 8px;"></i>
                        </span>
                    </div>
                </div>
                <div class="boss-info">
                    <h2 class="boss-name">${boss}</h2>
                </div>
            </a>
        `;
    }).join('');
}

// Escuta a barra de pesquisa e renderiza novamente a cada letra digitada
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        renderBosses(e.target.value);
    });
}

// Inicializa a página com todos os bosses
renderBosses();