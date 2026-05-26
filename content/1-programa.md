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
