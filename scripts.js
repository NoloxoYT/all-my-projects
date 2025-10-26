async function loadProjects() {
    try {
        const res = await fetch('Projects/Plist.json');
        if (!res.ok) throw new Error(`Erreur HTTP ${res.status}`);
        const projects = await res.json();

        displayProjects(projects);
        window.projects = projects; // ✅ on garde en global pour openModal()
    } catch (err) {
        console.error('❌ Erreur de chargement de Plist.json :', err);
        document.getElementById('projects').innerHTML = `<p class="error">Impossible de charger les projets.</p>`;
    }
}

function displayProjects(projects) {
    const container = document.getElementById('projects');
    container.innerHTML = projects.map((project, index) => `
        <div class="project" onclick="openModal(${index})">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <div class="tech">
                ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function openModal(index) {
    const project = window.projects[index];
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalTech').innerHTML = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
    document.getElementById('modalDetails').innerHTML = project.details;
    document.getElementById('modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.getElementById('modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
}

if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
}

loadProjects();
