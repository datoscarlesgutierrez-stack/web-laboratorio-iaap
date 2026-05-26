<div class="timeline">
    <div class="timeline-event">
        <div class="event-date">28 MAY 2026</div>
        <div class="event-details">
            <h3>Sesión 1: Fundamentos Digitales y Cocreación</h3>
            <p>Sesión práctica de 3 horas centrada en la integración de dinámicas colaborativas y herramientas clave (WhatsApp, Google Workspace e IA) como insumos semilla para activar y estructurar las primeras etapas de la comunidad.</p>
            <span class="badge">Próximamente</span>
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
     style="display:none; position:fixed; inset:0; z-index:1000; background:rgba(0,0,0,0.75); backdrop-filter:blur(4px); align-items:center; justify-content:center; padding:1rem;"
     onclick="if(event.target===this)this.style.display='none'">
    <div style="position:relative; max-width:min(95vw,960px); max-height:90dvh; overflow:auto; border-radius:16px; background:#fff; box-shadow:0 25px 60px rgba(0,0,0,0.4);">
        <button
            onclick="document.getElementById('modal-infografia').style.display='none'"
            style="position:sticky; top:0.75rem; left:calc(100% - 3rem); float:right; margin:0.75rem 0.75rem 0 0; background:rgba(0,0,0,0.6); color:#fff; border:none; border-radius:50%; width:36px; height:36px; font-size:1.1rem; cursor:pointer; display:flex; align-items:center; justify-content:center; flex-shrink:0;"
            aria-label="Cerrar">✕</button>
        <img src="infografia-resultados-form.png"
             alt="Herramientas digitales e IA: necesidades y apoyos del grupo — síntesis del formulario previo al taller"
             style="width:100%; height:auto; display:block; border-radius:16px;" />
    </div>
</div>
