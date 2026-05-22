document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Manejo de cambio de pestañas (Tabs)
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Eliminar clase active de todos los botones y contenidos
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Añadir clase active al botón clicado
            btn.classList.add('active');

            // Mostrar el contenido correspondiente
            const targetId = btn.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            
            if (targetContent) {
                targetContent.classList.add('active');
                // Opcional: hacer scroll suave hacia arriba en móvil
                if (window.innerWidth <= 768) {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }
        });
    });

    // Cargador dinámico de archivos Markdown (.md)
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
                    // Renderizar con marked.js (soporta HTML nativo para componentes premium)
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

    // Iniciar la carga de contenidos al arrancar la web
    loadMarkdownContents();
});
