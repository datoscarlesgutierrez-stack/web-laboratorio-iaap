document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const bottomNavBtns = document.querySelectorAll('.bottom-nav-btn');

    // ── Hamburger / off-canvas sidebar ──────────────────────────
    const hamburger = document.getElementById('hamburger-btn');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    function openSidebar() {
        sidebar.classList.add('open');
        overlay.classList.add('visible');
        hamburger.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
        sidebar.classList.remove('open');
        overlay.classList.remove('visible');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', () => {
        sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
    });
    overlay.addEventListener('click', closeSidebar);

    // ── Shared tab switcher ──────────────────────────────────────
    function switchTab(targetId) {
        // Hide all tabs
        tabContents.forEach(c => c.classList.remove('active'));
        // Show target
        const target = document.getElementById(targetId);
        if (target) target.classList.add('active');

        // Update sidebar buttons
        tabBtns.forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-target') === targetId);
        });

        // Update bottom nav buttons
        bottomNavBtns.forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-target') === targetId);
        });

        // Scroll to top on mobile
        if (window.innerWidth <= 768) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // ── Wire up sidebar tab buttons ──────────────────────────────
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            switchTab(targetId);
            // Close sidebar on mobile after selection
            if (window.innerWidth <= 768) closeSidebar();
        });
    });

    // ── Wire up bottom nav buttons ───────────────────────────────
    bottomNavBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            switchTab(targetId);
        });
    });

    // ── Dynamic Markdown loader ──────────────────────────────────
    const loadMarkdownContents = () => {
        const containers = document.querySelectorAll('[data-markdown]');
        containers.forEach(container => {
            const url = container.getAttribute('data-markdown');
            if (!url) return;

            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error al acceder a ${url}: ${response.statusText}`);
                    }
                    return response.text();
                })
                .then(markdown => {
                    container.innerHTML = marked.parse(markdown);
                })
                .catch(error => {
                    console.error('Error cargando markdown:', error);
                    container.innerHTML = `
                        <div class="info-card" style="border-left-color: var(--color-pink); margin-top: 1.5rem;">
                            <h3 style="color: var(--color-pink);">⚠️ Error de carga</h3>
                            <p>No se pudo cargar dinámicamente el contenido desde <strong>${url}</strong>.</p>
                            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-top: 0.5rem; font-style: italic;">Detalles: ${error.message}</p>
                        </div>
                    `;
                });
        });
    };

    loadMarkdownContents();
});
