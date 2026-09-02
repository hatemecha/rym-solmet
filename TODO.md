# Plan para mañana — RYM Solmet

Sesión prevista: 3 de septiembre de 2026. Estado: pendiente.

## Objetivo

Dar más vida al sitio conservando la dirección actual: fotografías reales,
tipografía de marca y mallas muy deformadas, pero discretas. Recuperar el negro
en las zonas con ruido y explorar unas pocas mejoras de movimiento y diseño
apoyadas en referencias profesionales.

## Punto de partida

- La forma actual de las mallas gustó. Conservar su cobertura completa y sus curvas.
- Opacidad actual: 13 % en inicio/contacto y 16 % en portfolio.
- El ruido se pidió más notorio, pero ahora aclara demasiado las superficies oscuras.
- No recuperar los recuadros negros ni los bordes punteados detrás de los textos.
- GSAP, ScrollTrigger y Lenis ya están integrados; PhotoSwipe resuelve las galerías.
- Mover el grid es una exploración opcional: conservarlo estático si empeora la lectura o el rendimiento.

## 1. Preparar la sesión

- [ ] Leer `AGENTS.md`, `PRODUCT.md`, `DESIGN.md` y `.agents/skills/rym-solmet/SKILL.md`; aplicar Impeccable al trabajo visual.
- [ ] Revisar el estado de Git y los cambios existentes antes de editar.
- [ ] Abrir la versión local actual y guardar una referencia de inicio, portfolio y contacto en escritorio y móvil.
- [ ] Confirmar qué servidor muestra los cambios: la última vista usada fue `http://127.0.0.1:4322/rym-solmet/`.

## 2. Recuperar el negro sin perder el ruido — prioridad alta

- [ ] Revisar `src/components/GrainField.astro`. El ruido actual usa `screen`, opacidad 20 %, contraste 450 % y tile de 200px; esta mezcla aclara la base.
- [ ] Separar el contraste del grano del brillo medio del fondo. Probar una mezcla que preserve los negros y ajustar su intensidad, sin limitarse a bajar todo el ruido.
- [ ] Revisar también el aporte del degradado gris en `::before` para que los bordes no parezcan manchas claras.
- [ ] Comparar inicio y contacto con el negro del header/footer y comprobar la transición entre secciones.

**Terminado cuando:** las superficies vuelven a leerse negras, el ruido se distingue
a escala normal y la malla sigue en segundo plano. Fotografías, captions y texto
permanecen libres de filtros o capas de ruido superpuestas.

## 3. Investigar referencias antes de sumar efectos

- [ ] Buscar 3–5 sitios de estudios de arquitectura, fabricación, diseño o portfolios fotográficos con buena ejecución visual. Usar galerías de diseño como punto de búsqueda y visitar los sitios reales.
- [ ] Evaluar jerarquía, ritmo entre secciones, tratamiento de fotografías, navegación, movimiento y versión móvil; no elegir sólo por premios o por una captura atractiva.
- [ ] Registrar aquí el enlace, el detalle observado y su posible aplicación a RYM. Las referencias todavía no están investigadas.
- [ ] Seleccionar como máximo dos cambios concretos que aporten al recorrido o a la consulta por WhatsApp. Evitar una nueva dirección completa.

| Referencia verificada | Detalle observado | Aplicación propuesta | Decisión |
| --- | --- | --- | --- |
| Pendiente | — | — | — |
| Pendiente | — | — | — |
| Pendiente | — | — | — |

## 4. Probar movimiento mínimo en la malla — exploración

- [ ] Revisar `src/components/SurfacePattern.astro` y `src/components/MotionController.astro`.
- [ ] Prototipar primero en una sola sección: desplazamiento lento de pocos píxeles, sin mover el contenido ni aumentar la opacidad. Como punto de prueba, 6–12px en un ciclo de 20–30 segundos; ajustar por percepción.
- [ ] Mantener la atenuación detrás del texto estable. Si se mueve una capa, dar margen de sobra para que nunca descubra bordes vacíos ni cortes del tile.
- [ ] Usar la infraestructura GSAP existente; evitar recalcular la geometría SVG en cada frame o animar filtros costosos.
- [ ] Detener la animación fuera de pantalla y con la pestaña oculta. Desactivarla con `prefers-reduced-motion`; evaluar una versión estática en móvil.
- [ ] Comparar con la versión estática y decidir si conservar, ajustar o descartar. Registrar la decisión.

**Terminado cuando:** el fondo se siente vivo sin atraer la mirada por encima
de fotografías y titulares, sin saltos al repetir ni pérdida de fluidez.

## 5. Añadir movimiento selectivo con las librerías existentes

- [ ] Auditar los reveals, el parallax, el header y los estados de interacción actuales para evitar duplicarlos.
- [ ] Elegir una o dos intervenciones a partir de las referencias: por ejemplo, una transición entre capítulos o una respuesta más cuidada al interactuar con las galerías y CTAs.
- [ ] Resolverlas con GSAP/ScrollTrigger y CSS donde corresponda. Considerar otra librería sólo si cubre una necesidad concreta que las actuales no resuelven; revisar documentación oficial, peso y mantenimiento antes de incorporarla.
- [ ] Mantener texto legible durante las entradas, captions siempre negros y opacos, teclado funcional y consulta por WhatsApp inmediata.
- [ ] Conservar scroll nativo en táctil y una versión completa sin movimiento.

## 6. Verificación y cierre

- [ ] Ejecutar `npm run check` y `npm run build`.
- [ ] Revisar 320, 768, 1024 y 1440px; añadir 1920px para confirmar que los fondos siguen cubriendo todo el ancho.
- [ ] Comprobar contraste, foco, teclado, enlaces, galerías, encabezados, textos alternativos y consola.
- [ ] Revisar movimiento normal/reducido, pausas fuera de pantalla y fluidez durante el scroll. El ruido debe permanecer estático.
- [ ] Hacer una ronda visual conjunta; corregir los problemas encontrados en un lote y confirmar con una segunda ronda como máximo.
- [ ] Ejecutar una sola pasada final del detector de Impeccable y documentar los hallazgos pertinentes.
- [ ] Actualizar `DESIGN.md` con las decisiones aceptadas y `refinement-verification.md` con las comprobaciones y sus límites.
- [ ] Marcar las tareas realizadas y anotar qué exploraciones se conservaron o descartaron.

## Resultado y pendientes de la sesión

- Negro y ruido: pendiente.
- Referencias seleccionadas: pendiente.
- Movimiento del grid: pendiente de prueba; no es requisito conservarlo.
- Otras mejoras elegidas: pendiente.
- Validación y limitaciones: pendiente.

## Instrucción para retomar

> Continuá el plan de TODO.md en orden. Empezá por recuperar el negro manteniendo
> el ruido visible; luego investigá referencias y probá el movimiento de forma
> selectiva. Conservá la identidad y las fotografías actuales. Marcá el progreso
> y registrá las decisiones, incluyendo cualquier experimento descartado.
