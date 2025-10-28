// ============================
// scripts.js (version redirection directe)
// ============================

async function loadProjects() {
    const url = "sitemap.json";
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Erreur HTTP ${res.status}`);
        const projects = await res.json();

        displayProjects(projects);
    } catch (err) {
        console.error('❌ Erreur de chargement de sitemap.json :', err);
        document.getElementById('projects').innerHTML = `<p class="error">Impossible de charger les projets.</p>`;
    }
}

function displayProjects(projects) {
    const container = document.getElementById('projects');
    container.innerHTML = projects.map((project) => `
        <div class="project" onclick="window.location.href='${project.url}'">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
        </div>
    `).join('');
}

// ============================
// Gestion du thème clair/sombre
// ============================

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
}

if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
}

// Charger les projets au démarrage
loadProjects();
