const setupData = {
    "Hardware": [
        "CPU: AMD Ryzen 7 3700X",
        "GPU: NVIDIA GeForce GTX 1650",
        "RAM: 8GB DDR4 3200MHz",
        "Motherboard: HP Erica",
        "Storage: 256GB NVMe SSD + 1TB HDD",
    ],
    "Peripherals": [
        "Monitor: A Samsung TV",
        "Keyboard: epomaker SK61",
        "Mouse: A cheap no-brand mouse",
    ],
    "Software": [
        "OS: Windows 11 Pro ( Mass gravel )",
        "Editor: Visual Studio Code",
        "Browser: perplexoty Comet",
        "Terminal: Powershell"
    ],
    "Development Tools": [
        "Node.js",
        "Git",
        "Docker",
        "Postman"
    ],
    "Game": [
        "Warzone",
        "Minecraft",
        "Valorant",
        "No mans sky"
    ]
};

function displaySetup(setup) {
    const container = document.getElementById('setup');
    container.innerHTML = Object.keys(setup).map(category => `
        <div class="category">
            <h2>${category}</h2>
            <ul>
                ${setup[category].map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
}

if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
}

displaySetup(setupData);
