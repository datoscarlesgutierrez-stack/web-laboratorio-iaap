<div class="timeline">
    <div class="timeline-event">
        <div class="event-date">28 MAY 2026</div>
        <div class="event-details">
            <h3>Sesión 1: Fundamentos Digitales y Cocreación</h3>
            <p>Sesión práctica de 3 horas centrada en la integración de dinámicas colaborativas y herramientas clave (WhatsApp, Google Workspace e IA) como insumos semilla para activar y estructurar las primeras etapas de la comunidad.</p>
            <div data-show-before="2026-05-28T14:00:00+02:00" data-display="flex" style="display: flex; align-items: center; gap: 1rem; margin-top: 1rem; flex-wrap: wrap;">
                <a href="https://us06web.zoom.us/j/81839135227?pwd=weccp1T8EeaS68AL61EJnXromUefEO.1&jst=3" target="_blank" class="action-btn" style="background: linear-gradient(135deg, #2D8CFF, #1565C0); display: inline-flex; align-items: center; gap: 0.5rem; border: none; box-shadow: 0 4px 12px rgba(45, 140, 255, 0.3);">
                    🎥 Entrar a la Sesión (Zoom)
                </a>
                <span style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; font-weight: bold; color: #d91a72; background: rgba(217, 26, 114, 0.1); padding: 0.35rem 0.75rem; border-radius: 999px; animation: pulse 1.5s infinite ease-in-out;">
                    <span style="width: 8px; height: 8px; background-color: #d91a72; border-radius: 50%; display: inline-block;"></span>
                    ¡EN DIRECTO AHORA!
                </span>
            </div>
            <div data-show-after="2026-05-28T14:00:00+02:00" data-display="flex" style="display: none; align-items: center; gap: 1rem; margin-top: 1rem; flex-wrap: wrap;">
                <span class="badge" style="background-color: var(--color-bg-sidebar); border-color: var(--color-border); color: var(--color-text-muted); display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; font-size: 0.9rem; border-radius: 8px; margin: 0;">
                    🔴 Sesión finalizada
                </span>
                <span style="font-size: 0.9rem; color: var(--color-text-muted); font-weight: 600;">
                    El vídeo de la sesión estará disponible próximamente en esta web.
                </span>
            </div>
        </div>
    </div>
    <div class="timeline-event">
        <div class="event-date">11 JUN 2026</div>
        <div class="event-details">
            <h3>Sesión 2: Herramientas de Generación y Curación con IA</h3>
            <p>Sesión de 3 horas centrada en el diseño visual y audiovisual de impacto, y en la profundización de herramientas inteligentes como NotebookLM para la comunidad.</p>
            <span class="badge">Próximamente</span>
        </div>
    </div>
</div>

<h3>Formulario previo al taller</h3>

<div class="info-card" style="border-left-color: var(--color-orange);">
    <p>Antes del inicio del laboratorio recogimos las <strong>necesidades y apoyos del grupo</strong> mediante un formulario de diagnóstico. Aquí puedes consultar la síntesis de los resultados.</p>
    <button
        class="action-btn"
        id="btn-resultado-form"
        onclick="document.getElementById('modal-infografia').style.display='flex'"
        style="margin-top: 1rem; background: linear-gradient(135deg, var(--color-orange), var(--color-pink)); border: none; display: inline-flex; align-items: center; gap: 0.5rem;">
        📊 Resultado del formulario
    </button>
</div>

<!-- Modal infografía -->
<div id="modal-infografia"
     style="display:none; position:fixed; inset:0; z-index:1000; background:rgba(0,0,0,0.82); backdrop-filter:blur(6px); align-items:center; justify-content:center; padding:0.75rem;"
     onclick="if(event.target===this)this.style.display='none'">
    <div style="position:relative; width:min(98vw,1280px); max-height:95dvh; overflow-y:auto; border-radius:14px; background:#fff; box-shadow:0 30px 80px rgba(0,0,0,0.5);">
        <!-- Botón cerrar flotante -->
        <button
            onclick="document.getElementById('modal-infografia').style.display='none'"
            style="position:absolute; top:0.6rem; right:0.6rem; z-index:10; background:rgba(0,0,0,0.65); color:#fff; border:none; border-radius:50%; width:38px; height:38px; font-size:1.2rem; cursor:pointer; display:flex; align-items:center; justify-content:center; backdrop-filter:blur(4px); transition:background 0.2s;"
            onmouseover="this.style.background='rgba(0,0,0,0.9)'"
            onmouseout="this.style.background='rgba(0,0,0,0.65)'"
            aria-label="Cerrar">✕</button>
        <img src="infografia-resultados-form.png"
             alt="Herramientas digitales e IA: necesidades y apoyos del grupo — síntesis del formulario previo al taller"
             style="width:100%; height:auto; display:block; border-radius:14px;" />
    </div>
</div>
