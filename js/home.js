// CONFIGURAÇÃO DAS ATUALIZAÇÕES
const updateData = {
    next: {
        version: "🌊Sea 2 Update🦑",
        content: [
            "New sea: Sea 2",
            "4 new islands in Sea 2",
            "New island in sea 1: Sea Traveler to travel to sea 2",
            "New questlines",
            "Easter event",
            "Guilds",
            "Guild leaderboards",
            "Sea beasts",
            "World bosses",
            "New shops",
            "Bloodlines feature",
            "Relics feature",
            "New bosses and npcs",
            "And way more!"
        ]
    },
    last: {
        version: "❄️Ice Update🧊",
        content: [
            "New Sword: Ice Queen",
            "New boss located in Boss Island",
            "New clan",
            "New race",
            "New accessory",
            "New items",
            "New bundle and stuff in shop",
            "New codes"
        ]
    }
};

function loadUpdates() {
    const nextBox = document.getElementById('next-update');
    const lastBox = document.getElementById('last-update');

    // Renderiza Próxima Update
    nextBox.innerHTML = `
        <span class="update-tag tag-next">Apr 16,11:30 PM</span>
        <h2>${updateData.next.version}</h2>
        <ul class="update-list">
            ${updateData.next.content.map(item => `<li><i class="fas fa-plus"></i> ${item}</li>`).join('')}
        </ul>
    `;

    // Renderiza Última Update
    lastBox.innerHTML = `
        <span class="update-tag tag-last">Última Atualização</span>
        <h2>${updateData.last.version}</h2>
        <ul class="update-list">
            ${updateData.last.content.map(item => `<li><i class="fas fa-check"></i> ${item}</li>`).join('')}
        </ul>
    `;
}

// Chamar a função ao carregar
window.onload = loadUpdates;