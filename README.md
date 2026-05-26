# Laboratorio de Herramientas Digitales IAAP 2026

Sitio web del Laboratorio de Herramientas Digitales e IA de las Comunidades de Práctica IAAP.

---

## 🚀 Cómo ejecutar en local

```bash
npx serve
```

Abre `http://localhost:3000` en el navegador.

> Se requiere un servidor local (no `file://`) porque los contenidos se cargan dinámicamente con `fetch()`.

---

## 🗂 Arquitectura de contenidos

Los contenidos de cada pestaña se almacenan como archivos **Markdown** en la carpeta `content/`. El fichero `script.js` los carga de forma asíncrona y los renderiza con [marked.js](https://marked.js.org/).

| Archivo | Pestaña |
|---------|---------|
| `content/0-inicio.md` | 0. Inicio |
| `content/1-programa.md` | 1. Programa de Talleres |
| `content/2-microtalleres.md` | 2. Microtalleres y JAMs |
| `content/3-itinerario.md` | 3. Itinerario de Cápsulas |
| `content/4-soporte.md` | 4. Soporte e IA |
| `content/5-herramientas.md` | 5. Caja de Herramientas |
| `content/6-aniversario.md` | 6. 10º Aniversario *(oculto en nav)* |
| `content/7-archivo.md` | 7. Archivo Histórico |
| `content/8-guia.md` | 8. Guía del taller y resultados *(full-bleed)* |

### Reglas de los archivos `.md`

- Puedes usar **HTML nativo** dentro del Markdown (clases CSS del diseño, `<div>`, `<iframe>`, etc.).
- Los cambios son inmediatos: basta con editar el `.md` y recargar el navegador.
- Para añadir un nuevo archivo simplemente:
  1. Crea `content/N-nombre.md`.
  2. Añade la `<section id="tab-N">` correspondiente en `index.html`.
  3. Añade el `<button class="tab-btn" data-target="tab-N">` en la barra lateral **y** en el `<nav class="bottom-nav">`.

---

## 🎨 Clases CSS disponibles

| Clase | Uso |
|-------|-----|
| `.info-card` | Tarjeta con borde de color (por defecto verde). Variantes: `.border-blue` |
| `.grid-2-cols` / `.grid-3-cols` | Rejillas responsivas (colapsan a 1 columna en móvil) |
| `.video-card` | Tarjeta con miniatura de color y hover |
| `.action-btn` | Botón redondeado (color `--color-blue`). Admite estilos inline para gradientes |
| `.timeline` / `.timeline-event` | Línea de tiempo vertical |
| `.badge` | Etiqueta pequeña "Próximamente" o similar |
| `.placeholder-box` | Caja punteada para contenido pendiente |
| `.resource-list` | Lista estilizada sin bullets |
| `.bg-gradient-pink/blue/orange` | Gradientes para miniaturas de vídeo |

### Colores de la paleta

```css
--color-orange:  #f4a81c
--color-green:   #8fc73e
--color-blue:    #1b5b97
--color-pink:    #d91a72
--color-purple:  #7d268a
```

---

## 🔄 Cómo activar/desactivar secciones

### Reactivar "Gemelo Digital" (en `content/4-soporte.md`)
Elimina el wrapper `<div style="filter: blur...">` y el overlay `Próximamente`, dejando solo el contenido interno de la tarjeta `.info-card.border-blue`.

### Mostrar "10º Aniversario" en el menú (en `index.html`)
Descomenta el bloque comentado en la barra lateral (busca `6. 10º Aniversario`) y añade el botón correspondiente al `<nav class="bottom-nav">`.

### Añadir un vídeo a Itinerario de Cápsulas (en `content/3-itinerario.md`)
Añade un `<div class="video-card">` con un `<iframe>` o `<video>` dentro del `.grid-3-cols`.

---

## 📦 Subir cambios a GitHub

```bash
git add -A
git commit -m "descripción del cambio"
git push
```

> Usa `CHANGELOG_PENDIENTE.md` para registrar cambios antes de hacer push si trabajas en local sin publicar inmediatamente.

---

## 📱 Diseño responsive

- **≥ 1024 px**: sidebar lateral fija + contenido principal.
- **768–1024 px**: sidebar fija, padding reducido.
- **≤ 768 px**: hamburger menu (esquina superior izquierda), sidebar off-canvas, barra de navegación inferior fija.

---

*Última actualización: mayo 2026*
