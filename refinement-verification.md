# Refinamiento de RYM Solmet

Base: `6f550b8`, sincronizada desde origin/main por fast-forward; el checkout local
estaba en `995126e` y no tenía cambios. No se publicó ni se hizo push.

Se conservaron las fotografías, el contenido de proyectos, Oxanium + Archivo,
el hero y los slots asimétricos. El header sigue la superficie bajo su borde
inferior; en teléfonos pasa a logo + Consultar después del hero. Contacto y footer
comparten ink. La retícula usa curvas Bézier sobre columnas CSS y sólo ocupa dos
bandas de espacio negativo del portfolio. No tiene simulación ni dependencia.

Lenis importa su CSS, habilita anchors y stopInertiaOnNavigate. El offset medido
compensa el scroll-padding que Lenis 1.3 ya considera, para evitar aplicarlo dos
veces. GSAP mantiene su ticker y usa matchMedia con limpieza al cambiar viewport
o movimiento reducido. Touch conserva scroll nativo; los reveals móviles no
animan clip-path ni tienen parallax continuo.

PhotoSwipe y su CSS principal se solicitan sólo al abrir la primera fotografía.
Los 17 enlaces visibles usan galerías, dimensiones, srcset y captions derivados
de projects.ts. El fondo queda inerte durante la ampliación, Lenis se detiene y
el cierre restaura scroll y foco. Piezas conserva las tres fotos en el flujo
móvil, sin controles de carousel ni contenido oculto si falla JavaScript.

Canonical, OG, Twitter y LocalBusiness usan la URL actual de GitHub Pages y datos
confirmados. OG usa la foto real del hero, exportada como JPEG de 1200 × 630.
Sitemap genera una única URL canónica con barra final. SITE_URL y BASE_PATH
permiten pasar al dominio final sin inventarlo. No se añadieron dirección,
horarios, experiencia, clientes ni métricas comerciales.

## Verificación

`npm run check` y `npm run build`: 0 errores, 0 warnings, 0 hints.
Chrome headless sobre el build servido por Astro preview; touch emulado por CDP.

| Ancho | Overflow / imágenes rotas / errores de consola | CLS observado |
| --- | --- | --- |
| 320 | Ninguno | 0.01108 |
| 360 | Ninguno | 0.01312 |
| 390 | Ninguno | 0.01408 |
| 430 | Ninguno | 0.01555 |
| 768 | Ninguno | 0.00051 |
| 1024 | Ninguno | 0.00042 |
| 1440 | Ninguno | 0.00019 |

- PhotoSwipe: cero solicitudes iniciales de core o CSS en los siete tamaños.
- Apertura por teclado de los 17 enlaces; captions y agrupación por proyecto.
- Flechas, Escape, foco contenido en el diálogo y restitución al enlace original.
- Swipe, zoom y scroll nativo con eventos táctiles emulados.
- Retorno al mismo píxel vertical al cerrar en los siete tamaños.
- Anchors desktop: aproximadamente 85px bajo un header de 77px; deep links y
  salto al contenido funcionando. Anchors móviles quedan visibles bajo el header.
- Cambio desktop → mobile → desktop destruye y vuelve a crear Lenis.
- Movimiento reducido, al iniciar y al cambiar la preferencia: sin Lenis,
  animaciones activas ni máscaras residuales.
- JavaScript deshabilitado: 17 enlaces y tres piezas disponibles, apertura directa
  del JPEG. Core de PhotoSwipe bloqueado: funciona el mismo fallback.
- Revisión visual desktop/mobile y ajuste del título del portfolio en tablet.
- Detector Impeccable ejecutado una sola vez: cuatro avisos por los aliases de
  fuente `Archivo Variable` y `Oxanium Variable` en los @font-face existentes.
  Corresponden a las familias documentadas; no se agregaron fuentes ni ignores.

El CLS es una medición local durante carga y recorrido, no un dato de campo.
No se probaron teléfonos físicos ni Safari/iOS. Evidencias y scripts temporales
están en `.artifacts/`, excluidos de Git.

## Pasada de layout

- Hero de escritorio en cinco columnas de texto y siete de fotografía, con
  24px de separación real; CTA contenido dentro de su columna.
- Pares de fotos con columnas derivadas de las proporciones originales: misma
  altura sin huecos bajo la imagen corta. En móvil conservan el apilado vertical.
- Captions en una columna cuando su contenedor mide hasta 384px. Piezas usa
  tres columnas iguales en tablet y vuelve al escalonado desde 1100px.
- Espacio compartido de 32–64px entre encabezados y galerías, una sola línea
  divisoria y titulares proporcionados al ancho de tablet.

Validación del build en Chromium a 320, 768, 1024, 1100 y 1440px: sin overflow
horizontal de página ni textos, imágenes cargadas, todos los alt presentes y
enlaces con destino. Un H1 y cuatro H2 en orden. Apertura de fotografía con
Enter, cierre con Escape y restitución de foco verificados; navegación interna
y preferencia de movimiento reducido comprobadas. Sin errores de JavaScript.
`npm run check` y `npm run build`: cero errores, warnings o hints.

Detector ejecutado una sola vez sobre los dos archivos de interfaz modificados:
tres avisos por escalas fluidas de titulares. Se documentaron sus valores exactos
en `DESIGN.md` como `hero-split`, `hero-tablet` y `section-tablet`; no se agregaron
exclusiones. Capturas en `.artifacts/layout/`. Revisión en navegador emulado,
sin validación nueva en dispositivos físicos ni Safari.

## Ajuste de retículas y fondos

Retícula del inicio trasladada al section completo; portfolio con una sola
retícula continua de 24 columnas (8 en móvil) y tramos repetidos, reemplazando
las dos bandas aisladas. Contacto cubre también todo el ancho. Se retiró el
desplazamiento de las retículas por scroll para evitar descubrir los bordes.
Hero y contacto tienen fondos ink detrás de los bloques de texto y consulta.
Los captions conservan su fondo ink y opacidad 1, sin reveal propio.

Build y check correctos. En Chromium a 320, 768, 1024 y 1440px, las tres
retículas coinciden exactamente en ancho y alto con sus contenedores y no hay
overflow horizontal. Captions negros comprobados con movimiento reducido y
con animaciones activas durante el scroll. Apertura por teclado y retorno de
foco al cerrar la galería comprobados. Detector ejecutado una vez: los mismos
tres avisos de escalas tipográficas ya documentadas, sin nuevos hallazgos.
Capturas `.artifacts/grid-*.png`; sin pruebas en dispositivos físicos.

## Variante de contacto con franja limpia

La retícula de contacto se limita a una banda superior de 96–160px con un
separador horizontal. Título y datos comparten el fondo ink inferior, sin
máscaras individuales. Se ajustó el espacio superior para compensar la banda.
Check y build correctos. Revisión visual a 320, 768, 1024 y 1440px: sin
desbordamiento, grid fuera del área de lectura, enlaces conservados y foco
visible en WhatsApp; sin errores de JavaScript. Detector: los tres avisos
tipográficos previos, sin nuevos hallazgos. Capturas en
`.artifacts/contact-band-*.png`; no se probaron dispositivos físicos.

## Referencias de implementación

- [N4: retícula de Webflow Developers](https://www.n4.studio/feed/building-the-developer-platform-hero-animation-for-webflow)
- [Lenis: CSS, anchors e integración GSAP](https://github.com/darkroomengineering/lenis)
- [PhotoSwipe: carga progresiva](https://photoswipe.com/getting-started/)
- [GSAP matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/)
- [Astro sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)

## Patrones de PatternCraft

Se reemplazaron las retículas Bézier por Dark Basic Grid, White Grid with Dots
 y Cross Diagonal Lines, adaptados a la paleta RYM en SurfacePattern.astro.
Fondos anclados a las secciones exteriores, sin límite de 1440px, sin parches
negros ni franja superior de contacto. Fotografías y captions opacos por encima.
La atribución y licencia MIT están en THIRD_PARTY_NOTICES.md.

Check y build correctos. Chromium a 320, 768, 1024, 1440 y 1920px: sin overflow
de página ni textos, captions negros y foco visible. Los patrones cubren de
borde a borde sus secciones; el único borde superior es la línea de 1px ya
existente del portfolio. Sin errores de JavaScript. Capturas en
.artifacts/patterns-*.png. No se probaron dispositivos físicos.

Detector ejecutado una vez: tres avisos tipográficos preexistentes y un aviso
por cuadrícula decorativa. Esta última responde al pedido explícito de usar
PatternCraft; sus tres variantes y límites se documentaron en DESIGN.md.
No se agregaron ignores ni dependencias. La versión retirada de WarpedGrid
se conserva localmente en .artifacts/ para poder comparar.

## Paneles punteados y degradados con grano

Se agruparon título y consulta del hero en un panel negro con borde punteado.
El encabezado del portfolio y los dos bloques de contacto usan el mismo
tratamiento. Los fondos negros permanecen opacos durante las animaciones.
GrainField agrega degradados monocromáticos con grano visible en apertura,
capacidades y contacto. El ruido se mezcla dentro del fondo aislado, nunca
sobre las fotografías, textos o captions. Los patrones conservan su cobertura
completa de las secciones.

Check y build correctos. Revisión en Chromium a 320, 768, 1024 y 1440px:
sin desbordamiento horizontal de página o textos; cuatro paneles negros con
borde punteado y tres campos de grano. Capturas en .artifacts/grain-*.png.
No se probaron dispositivos físicos.

Detector ejecutado una vez: tres avisos tipográficos preexistentes sobre
extremos fluidos ya documentados en production-responsive; sin nuevos
hallazgos. No se agregaron ignores ni dependencias.

## Malla intensamente deformada

Se sustituyeron las tramas rectas por una malla SVG propia con tres deformaciones
sinusoidales periódicas, siguiendo la imagen aportada. El tile mantiene las
intersecciones y empalma sus bordes; cambia escala y posición entre secciones.
Se retiraron los paneles negros punteados y el degradado de capacidades. El
grano queda en bordes de apertura y contacto y se desvanece junto a su fondo.
Las máscaras atenúan áreas amplias sin cortes ni vacíos rectangulares.

Check y build correctos. Chromium a 320, 768, 1024, 1440 y 1920px: cobertura
completa de los fondos, sin desbordamientos de página o texto; cero paneles
opacos de lectura, sin errores JavaScript, un h1, todas las imágenes con alt
y foco visible en el enlace principal de contacto. Fotografías sin textura.
Capturas .artifacts/warp-*.png. Sin pruebas en dispositivos físicos.

Detector ejecutado una vez: tres avisos tipográficos preexistentes y diez
avisos sobre negros con alfa usados exclusivamente en máscaras. Esos valores
controlan cobertura y no son colores visibles; se documentó en DESIGN.md.
No se agregaron ignores ni dependencias.

## Mallas oscuras más tenues y grano visible

Opacidad de las mallas de apertura y contacto reducida de 28 % a 13 %.
Portfolio conserva 16 %. El ruido tiene ahora una capa independiente del
atenuado del degradado: tile de 200px, contraste de 450 %, opacidad de 20 %
y mezcla screen. Se mantiene debajo de texto y fotografías.

Check y build correctos. Capturas a 320, 768, 1024 y 1440px en
.artifacts/quiet-grid-*.png: sin overflow, curvas conservadas y grano visible.
Detector ejecutado una vez en ambos componentes: diez avisos preexistentes
sobre valores alfa de máscaras, documentados en DESIGN.md; sin ignores.
Cambio exclusivo de capas decorativas; sin pruebas en dispositivos físicos.

## Negro recuperado y movimiento selectivo

Se reemplazó la mezcla `screen` del GrainField por `overlay`: el tile sigue en
200px y el contraste en 450 %, con opacidad de 48 %. La base visible vuelve a
`#111210`; el borde tonal usa `soft-light` al 24 % y ya no forma una mancha gris.
Se retiraron las capas duplicadas de ruido de apertura, contacto, capacidades,
piezas y footer. Sólo apertura y contacto conservan GrainField; capacidades,
piezas y footer vuelven a ser superficies lisas. Fotografías, captions y copy no
cambiaron y no reciben filtros ni textura.

Se investigaron cinco sitios reales: Temper & Grit, Zahner, Herzog & de Meuron,
Snøhetta y Caliper Studio. La decisión común fue mantener evidencia fotográfica,
navegación directa y una interfaz retirada. Los enlaces, observaciones y
decisiones particulares quedaron en `TODO.md`. Se descartaron filtros y vistas
alternativas por el volumen actual, overlays sobre fotos, más copy y una nueva
secuencia animada en el hero.

La única intervención nueva es la malla de contacto en desktop con puntero fino.
La máscara permanece inmóvil y un tile interior con 12px de sobrecobertura se
traslada 8px × −6px, ida y vuelta en 26 segundos. GSAP pausa el tween fuera de
pantalla y quita `will-change`; `visibilitychange` cubre la pestaña oculta. En
móvil y con movimiento reducido no se crea el tween. El ruido permanece estático.
Se descartó mover la malla de apertura porque el hero ya tiene entrada de foto y
parallax selectivo.

### Verificación de esta sesión

- `npm run check`: 0 errores, 0 warnings, 0 hints.
- `npm run build`: build estático completo, sitemap generado y 221 variantes de
  imagen resueltas desde caché.
- Chromium local en 320, 768, 1024, 1440 y 1920px: sin overflow horizontal; un
  H1 y cuatro H2 en orden; todos los `alt` presentes. El primer render de 768px
  se capturó antes de cargar la foto y se repitió: imagen completa de 768px
  naturales, sin fallo de recurso.
- A 1920px, apertura, portfolio y contacto midieron el ancho completo del
  viewport útil. Apertura, contacto y footer conservaron `rgb(17, 18, 16)`.
- Movimiento: en contacto el transform pasó de aproximadamente 0.13px a 2.67px
  en cuatro segundos; fuera de pantalla permaneció idéntico durante dos segundos
  y `will-change` volvió a `auto`. Carga inicial a 320px: transform `none`.
- Build de producción: PhotoSwipe abrió por click, mostró “Puerta corrediza ·
  Hierro y vidrio”, cerró con Escape y devolvió foco al enlace original. Los 17
  enlaces fotográficos, cinco enlaces de WhatsApp y dos de correo conservaron
  destino. Cero errores o warnings de consola en la comprobación final.
- La automatización disponible no logró sintetizar Enter sobre el enlace en esta
  ronda, aunque sí confirmó el foco y el fallback nativo; no se modificó el
  manejador de galería. Tampoco pudo forzar `visibilityState: hidden`, porque las
  pestañas del navegador integrado siguieron reportándose visibles. No se
  probaron dispositivos físicos ni Safari/iOS.

Detector Impeccable ejecutado una sola vez sobre los cuatro archivos visuales:
diez avisos por negros con alfa usados exclusivamente como cobertura de máscaras
y tres avisos tipográficos preexistentes. Ambos casos están documentados en
`DESIGN.md`; no se añadieron ignores ni dependencias.
