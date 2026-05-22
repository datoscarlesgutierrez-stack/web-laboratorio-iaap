# Registro de Cambios Pendientes de Subir (CHANGELOG)

Este archivo contiene el registro detallado de las mejoras y modificaciones realizadas en el Laboratorio de Herramientas Digitales localmente. Se utilizará como guía para redactar los commits cuando se solicite la subida final a GitHub.

---

### [Listo en local] Refactorización: Arquitectura de Contenidos Dinámicos en Markdown (.md)
- Creación de la carpeta `content/` para almacenar las páginas en formato Markdown.
- Migración de las 9 secciones de contenido de la web a archivos `.md` independientes.
- Integración de `marked.js` en `index.html` para el renderizado en tiempo de ejecución.
- Adaptación de `script.js` para cargar, procesar y renderizar de forma asíncrona todos los archivos Markdown de manera transparente.
- Adición de un indicador de carga (`.loading-placeholder`) con animación pulsante para suavizar la carga de los contenidos.

---

### [Listo en local] Interacción del Logo como Botón HOME
- Se añadió un disparador interactivo en el logo de la cabecera lateral para poder navegar a la pestaña **0. Inicio** desde cualquier parte.
- Se implementaron micro-interacciones avanzadas en CSS: el logo se eleva (`translateY(-2px)`), escala levemente (`scale(1.02)`) y proyecta una sombra suave (`box-shadow`) al pasar el cursor, ofreciendo un feedback táctil y premium.

### [Listo en local] Nueva Sección "8. Guía del Taller y Resultados"
- Creación del nuevo módulo interactivo con el Genially embebido mediante `iframe`.
- Reestructuración adaptativa de `.main-content` y `.tab-content` utilizando el selector moderno `:has()` en CSS para que la pestaña del Genially sea **completamente a pantalla completa (full bleed)** sin interferir con el formato y alineación izquierda del resto de pestañas.
- Soporte responsive en móviles (`70vh` con un mínimo de `450px`) para garantizar que la presentación no se corte y sea usable en cualquier dispositivo.

---

### [Listo en local] Ocultar "Gemelo Digital" en pestaña Soporte
- Aplicado el mismo tratamiento visual de "Próximamente" (blur + overlay) a la tarjeta del Gemelo Digital en `content/4-soporte.md`, igualando el estilo ya usado en `content/0-inicio.md`.
