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

- [x] Leer `AGENTS.md`, `PRODUCT.md`, `DESIGN.md` y `.agents/skills/rym-solmet/SKILL.md`; aplicar Impeccable al trabajo visual.
- [x] Revisar el estado de Git y los cambios existentes antes de editar.
- [x] Abrir la versión local actual y guardar una referencia de inicio, portfolio y contacto en escritorio y móvil.
- [x] Confirmar qué servidor muestra los cambios: la referencia inicial quedó en `http://127.0.0.1:4322/rym-solmet/` y la implementación actual en `http://127.0.0.1:4323/rym-solmet/`.

## 2. Recuperar el negro sin perder el ruido — prioridad alta

- [x] Revisar `src/components/GrainField.astro`. El ruido usaba `screen`, opacidad 20 %, contraste 450 % y tile de 200px; esta mezcla aclaraba la base.
- [x] Separar el contraste del grano del brillo medio del fondo. Se conserva contraste 450 % y tile de 200px, con `overlay` al 48 % para mantener el valor medio de `ink`.
- [x] Revisar también el aporte del degradado gris en `::before`: queda al 24 % con `soft-light`, amplio y sin mancha clara.
- [x] Comparar inicio y contacto con el negro del header/footer y comprobar la transición entre secciones. Se retiraron las capas de ruido duplicadas de apertura, contacto, superficies de descanso y footer; GrainField es la única textura fuerte de las bandas oscuras.

**Terminado cuando:** las superficies vuelven a leerse negras, el ruido se distingue
a escala normal y la malla sigue en segundo plano. Fotografías, captions y texto
permanecen libres de filtros o capas de ruido superpuestas.

## 3. Investigar referencias antes de sumar efectos

- [x] Buscar 3–5 sitios de estudios de arquitectura, fabricación, diseño o portfolios fotográficos con buena ejecución visual. Se usaron recopilaciones sólo para descubrir candidatos y se visitaron los sitios reales.
- [x] Evaluar jerarquía, ritmo entre secciones, tratamiento de fotografías, navegación, movimiento y versión móvil; no elegir sólo por premios o por una captura atractiva.
- [x] Registrar aquí el enlace, el detalle observado y su posible aplicación a RYM.
- [x] Seleccionar como máximo dos cambios concretos que aporten al recorrido o a la consulta por WhatsApp. Se eligió una sola intervención nueva: movimiento mínimo de la malla de contacto.

| Referencia verificada | Detalle observado | Aplicación propuesta | Decisión |
| --- | --- | --- | --- |
| [Temper & Grit](https://temperandgrit.com/) | Jerarquía directa, casos como evidencia y acción de inicio de proyecto sin esconderse. | Mantener fotos reales y WhatsApp como prueba y salida principal. | Conservar la estructura actual; no sumar una secuencia animada al hero. |
| [Zahner](https://azahner.com/projects/) | Archivo fotográfico amplio con búsqueda, orden y filtros para un volumen grande. | Confirmar que el portfolio RYM puede seguir editorial y sin controles con ocho destacados. | Descartar filtros, carruseles y movimiento uniforme en todas las fotos. |
| [Herzog & de Meuron](https://www.herzogdemeuron.com/projects/) | Navegación mínima y una interfaz que se retira alrededor de los proyectos. | Conservar captions breves, negros y estables; dejar que la fotografía domine. | No agregar overlays ni transiciones decorativas sobre las imágenes. |
| [Snøhetta](https://www.snohetta.com/projects) | Grid, lista, mapa y filtros responden a un archivo de muchas disciplinas y estados. | Tomar la claridad de navegación, no la complejidad de controles que RYM no necesita. | Descartar nuevas vistas; movimiento sólo en una capa ambiental no interactiva. |
| [Caliper Studio](https://www.caliperstudio.com/) | El trabajo y la fabricación son la entrada principal, con contacto separado y claro. | Mantener “Qué hacemos” conciso y la consulta inmediata, sin inventar proceso. | No ampliar copy ni sumar una nueva sección. |

## 4. Probar movimiento mínimo en la malla — exploración

- [x] Revisar `src/components/SurfacePattern.astro` y `src/components/MotionController.astro`.
- [x] Prototipar primero en una sola sección: la malla de contacto recorre 8px × −6px, con ida y vuelta en 26 segundos, sin mover contenido ni aumentar opacidad.
- [x] Mantener la atenuación detrás del texto estable. La máscara queda en el contenedor inmóvil y el tile interior tiene 12px de sobrecobertura para evitar bordes vacíos.
- [x] Usar la infraestructura GSAP existente; el prototipo sólo transforma el tile SVG ya generado.
- [x] Detener la animación fuera de pantalla y con la pestaña oculta. Sólo corre en desktop con puntero fino; móvil y `prefers-reduced-motion` conservan la malla estática.
- [x] Comparar con la versión estática y decidir si conservar, ajustar o descartar. Se conserva en contacto; se descartó mover la malla del hero porque allí ya existen entrada de foto y parallax selectivo.

**Terminado cuando:** el fondo se siente vivo sin atraer la mirada por encima
de fotografías y titulares, sin saltos al repetir ni pérdida de fluidez.

## 5. Añadir movimiento selectivo con las librerías existentes

- [x] Auditar los reveals, el parallax, el header y los estados de interacción actuales para evitar duplicarlos.
- [x] Elegir una o dos intervenciones a partir de las referencias. Se eligió sólo la respiración de la malla de contacto; hover de fotos, flechas de CTA, header, reveals y PhotoSwipe ya cubren continuidad y feedback.
- [x] Resolverla con GSAP/ScrollTrigger y CSS. No se añadió otra librería ni se recalcula la geometría SVG.
- [x] Mantener texto legible durante las entradas, captions siempre negros y opacos, teclado funcional y consulta por WhatsApp inmediata.
- [x] Conservar scroll nativo en táctil y una versión completa sin movimiento.

## 6. Verificación y cierre

- [x] Ejecutar `npm run check` y `npm run build`.
- [x] Revisar 320, 768, 1024 y 1440px; añadir 1920px para confirmar que los fondos siguen cubriendo todo el ancho.
- [x] Comprobar contraste, foco, teclado, enlaces, galerías, encabezados, textos alternativos y consola. La síntesis de Enter del navegador automatizado no activó PhotoSwipe y queda documentada como límite; click, cierre con Escape y restitución de foco sí se verificaron en producción.
- [x] Revisar movimiento normal/reducido, pausas fuera de pantalla y fluidez durante el scroll. El ruido permanece estático. La pestaña automatizada no expuso `visibilityState: hidden`; el listener y la pausa fuera de pantalla sí quedaron comprobados.
- [x] Hacer una ronda visual conjunta; corregir los problemas encontrados en un lote y confirmar con una segunda ronda como máximo.
- [x] Ejecutar una sola pasada final del detector de Impeccable y documentar los hallazgos pertinentes.
- [x] Actualizar `DESIGN.md` con las decisiones aceptadas y `refinement-verification.md` con las comprobaciones y sus límites.
- [x] Marcar las tareas realizadas y anotar qué exploraciones se conservaron o descartaron.

## Resultado y pendientes de la sesión

- Negro y ruido: recuperados; `overlay` mantiene el negro y el grano visible sin doble textura.
- Referencias seleccionadas: cinco sitios reales registrados; la conclusión común fue priorizar evidencia, navegación clara y restricción.
- Movimiento del grid: se conserva sólo en la malla de contacto, 8px × −6px en 26s; hero, portfolio y móvil quedan estáticos.
- Otras mejoras elegidas: ninguna; se descartaron filtros, overlays, carruseles y animaciones redundantes.
- Validación y limitaciones: completadas y registradas en `refinement-verification.md`.

## Instrucción para retomar

> Continuá el plan de TODO.md en orden. Empezá por recuperar el negro manteniendo
> el ruido visible; luego investigá referencias y probá el movimiento de forma
> selectiva. Conservá la identidad y las fotografías actuales. Marcá el progreso
> y registrá las decisiones, incluyendo cualquier experimento descartado.
