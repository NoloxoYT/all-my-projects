        const projects = [
            {
                title: "E-Commerce Platform",
                description: "Plateforme de vente en ligne complète avec système de paiement intégré, gestion des stocks et tableau de bord administrateur.",
                tech: ["React", "Node.js", "MongoDB", "Stripe"],
                details: `
                    <h3>À propos du projet</h3>
                    <p>Ce projet a été développé pour offrir une expérience d'achat en ligne fluide et sécurisée. La plateforme comprend un système de gestion des produits, un panier d'achat dynamique et un processus de paiement sécurisé via Stripe.</p>
                    
                    <h3>Fonctionnalités principales</h3>
                    <p>• Catalogue de produits avec recherche et filtres avancés<br>
                    • Panier d'achat avec calcul en temps réel<br>
                    • Système de paiement sécurisé<br>
                    • Dashboard administrateur pour gérer les commandes<br>
                    • Notifications par email automatiques</p>
                    
                    <h3>Technologies utilisées</h3>
                    <p>Le frontend est développé en React pour une interface utilisateur réactive. Le backend utilise Node.js avec Express, et MongoDB pour la base de données. L'intégration Stripe assure des paiements sécurisés.</p>
                `
            },
            {
                title: "Task Manager App",
                description: "Application de gestion de tâches collaborative avec notifications en temps réel et synchronisation cloud.",
                tech: ["Vue.js", "Firebase", "PWA"],
                details: `
                    <h3>À propos du projet</h3>
                    <p>Application moderne de gestion de tâches permettant aux équipes de collaborer efficacement. L'application fonctionne hors ligne grâce à la technologie PWA et synchronise automatiquement les données.</p>
                    
                    <h3>Fonctionnalités principales</h3>
                    <p>• Création et gestion de tâches avec priorités<br>
                    • Collaboration en temps réel entre utilisateurs<br>
                    • Notifications push pour les deadlines<br>
                    • Mode hors ligne avec synchronisation automatique<br>
                    • Statistiques de productivité</p>
                    
                    <h3>Technologies utilisées</h3>
                    <p>Vue.js pour l'interface, Firebase pour le backend en temps réel et l'authentification. L'application est une PWA installable sur tous les appareils.</p>
                `
            },
            {
                title: "Analytics Dashboard",
                description: "Tableau de bord analytics avec visualisations de données interactives et rapports personnalisables.",
                tech: ["React", "D3.js", "Python", "PostgreSQL"],
                details: `
                    <h3>À propos du projet</h3>
                    <p>Dashboard complet d'analyse de données permettant de visualiser et d'analyser des métriques complexes. Les graphiques interactifs offrent une exploration approfondie des données.</p>
                    
                    <h3>Fonctionnalités principales</h3>
                    <p>• Graphiques interactifs et personnalisables<br>
                    • Export de rapports en PDF et Excel<br>
                    • Filtres dynamiques et segmentation de données<br>
                    • Alertes automatiques sur les métriques clés<br>
                    • API REST pour intégration externe</p>
                    
                    <h3>Technologies utilisées</h3>
                    <p>React et D3.js pour les visualisations, Python pour le traitement des données, PostgreSQL pour le stockage. Architecture scalable pour traiter de grands volumes de données.</p>
                `
            },
            {
                title: "Social Network",
                description: "Réseau social avec système de posts, commentaires, likes et messagerie instantanée.",
                tech: ["Next.js", "GraphQL", "Redis", "WebSocket"],
                details: `
                    <h3>À propos du projet</h3>
                    <p>Plateforme sociale moderne permettant aux utilisateurs de partager du contenu, d'interagir et de communiquer en temps réel. L'architecture est optimisée pour supporter un grand nombre d'utilisateurs simultanés.</p>
                    
                    <h3>Fonctionnalités principales</h3>
                    <p>• Fil d'actualité personnalisé<br>
                    • Messagerie instantanée avec WebSocket<br>
                    • Système de likes, commentaires et partages<br>
                    • Notifications en temps réel<br>
                    • Profils utilisateurs personnalisables</p>
                    
                    <h3>Technologies utilisées</h3>
                    <p>Next.js pour le SSR et les performances, GraphQL pour l'API flexible, Redis pour le cache, et WebSocket pour la communication en temps réel.</p>
                `
            }
        ];

        function displayProjects() {
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
            const project = projects[index];
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

        document.getElementById('modal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        function toggleTheme() {
            document.body.classList.toggle('light-mode');
            localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
        }

        if (localStorage.getItem('theme') === 'light') {
            document.body.classList.add('light-mode');
        }

        displayProjects();
