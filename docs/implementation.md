# RYM Solmet — Notas de implementación

Valores concretos, tokens responsivos y comportamiento de componentes. Para
principios visuales y criterio de marca, ver `DESIGN.md`.

## Tokens (frontmatter de DESIGN.md)

Los tokens de color, tipografía, espaciado y radios viven en el frontmatter YAML
de `DESIGN.md`. Los componentes y estilos deben consumirlos desde ahí o desde
variables CSS derivadas, no redefinirlos ad hoc.

## Tipografía responsiva

Escala fluida `production-responsive` en `DESIGN.md`:

| Token | Valor |
|-------|-------|
| logo-width | `clamp(116px, 30vw, 152px)` |
| hero | `clamp(44px, 7vw, 92px)` |
| hero-mobile | `clamp(43.2px, 12vw, 73.6px)` |
| hero-split | `clamp(40px, 5.4vw, 80px)` |
| hero-tablet | `clamp(44px, 6.25vw, 64px)` |
| section-tablet | `clamp(40px, 6.25vw, 64px)` |
| section | `clamp(35.2px, 10.5vw, 72px)` |
| section-inverse | `clamp(40px, 12vw, 80px)` |
| contact | `clamp(48px, 13vw, 96px)` |
| body-mobile | `16px` |
| body | `17px` |
| metadata | `15.2px` |
| label | `12px` |
| label-compact | `12.8px` |
| caption | `11.2px` |

`ink-muted` se reserva para cuerpo secundario sobre `canvas`; es más oscuro que
`steel` para sostener contraste AA en texto pequeño.

Fuentes: subconjunto `latin` + `latin-ext` en `src/styles/archivo-latin.css` y
`src/styles/oxanium-latin.css`.

## Layout

- Grid desktop: 12 columnas, ancho máximo ~1440px.
- Hero escritorio: texto en 5 columnas, fotografía en 7, con gutter estructural.
- Tablet: foto precede a bloque de título y consulta.
- Portfolio: ciclo editorial de ocho posiciones (`project--slot-1` a
  `project--slot-8`) derivado del orden en `src/data/projects.ts`.
- Fotos de un proyecto comparten altura en desktop y tablet; el ancho se deriva
  de la proporción en `projects.ts`. En mobile se apilan a ancho completo.
- Captions: título y material en líneas separadas cuando el contenedor ≤ 384px.
- Piezas a medida: tres columnas iguales en tablet; composición asimétrica desde
  1100px.
- Separación encabezado–galería: fluida 32–64px (menor que el espacio entre
  capítulos).

## Header

- Transición de superficie: 750ms, opacidad de superficie 90% y backdrop blur de
  10px; fondo opaco como fallback. Texto, logo y CTA cambian en 750ms.
- Mobile: altura constante de 68px; logo centrado que se desplaza a la izquierda
  en 850ms al salir del hero, usando únicamente transform. Consultar aparece sin cambiar la altura.
- Footer: centrado vertical en móvil; tres columnas simétricas en tablet y
  escritorio. Sin padding residual inferior; scrollbar y lienzo raíz en tinta.

## Secuencia del hero

Selección curada en `heroProjects` de `src/data/projects.ts`, sin duplicar títulos
ni textos alternativos. Seis fotografías reales; avance cada 6,5 segundos y
fundido de 900ms. Solo la primera imagen carga con prioridad alta; las siguientes
se solicitan al avanzar y se decodifican antes del fundido. Controles de 44px para
anterior, siguiente y pausa. Pausa fuera de pantalla, pestaña oculta, galería
abierta o foco de teclado. Avanzar manualmente deja la secuencia en pausa.
Movimiento reducido inicia la secuencia estática. Sin JS se muestra la primera
foto y su enlace sigue funcionando. La ampliación corresponde a la foto activa.

## GrainField

Ruido monocromático sobre fondos `ink` en apertura y contacto:

| Parámetro | Valor |
|-----------|-------|
| tile | 200px |
| contraste | 450% |
| opacidad | 48% |
| blend mode | overlay |

Overlay conserva el valor medio de `ink` (no aclara como screen). Degradado de
atenuación en bordes: 24% opacidad, blend `soft-light`. El ruido tiene capa
propia para seguir visible sin extender manchas grises.

Capacidades, piezas y footer: superficies lisas, sin grano. No aplicar grano
sobre fotografías, galerías, texto ni captions.

## SurfacePattern (malla ondulada)

SVG generado con `scripts/generate-warped-grid.mjs`. Tres desplazamientos
sinusoidales periódicos; sin JavaScript cliente, animación, filtros de
desplazamiento ni dependencias.

Cubre ancho y alto completos de secciones exteriores, incluso más allá de 1440px.
El tile empalma bordes y conserva proporción:

Período vectorial: 768px, con 32 celdas de 24px y muestreo cada 8px.
Ambos pasos dividen el período para evitar saltos entre repeticiones.
Sobrecobertura del generador: 240px; la capa CSS usa 12px sin escalado.
El efecto local del cursor usa una máscara elíptica válida, sin bordes duros.

| Sección | Tile | Opacidad | Notas |
|---------|------|----------|-------|
| Apertura | 900px | 13% | atenuado hacia columna de lectura |
| Portfolio | 1050px | tenue | tinta sobre canvas, cabecera tranquila |
| Contacto | 800px | 13% | más visible en márgenes superior e inferior |
| Móvil apertura | 620px | — | conserva curvas reconocibles |
| Móvil contacto | 740px | — | conserva curvas reconocibles |

Los valores negros con alfa en `mask-image` representan cobertura, no colores
visibles. El blanco del SVG se invierte para superficie clara; su opacidad
determina el contraste final.

No hay paneles negros ni bordes punteados alrededor de textos. La lectura se
protege bajando contraste de la trama en áreas amplias, con transiciones
continuas y sin recortes rectangulares. CTAs y captions mantienen fondo opaco.

Atribución PatternCraft anterior: `THIRD_PARTY_NOTICES.md`.

## Motion

Scroll con Lenis solo en puntero fino; touch conserva scroll nativo.
Su CSS se incluye en el stylesheet principal para evitar un chunk dinámico
inexistente. Al cambiar a movimiento reducido o salir del breakpoint de
escritorio, se revierten las animaciones y se destruye Lenis.

Entradas con IntersectionObserver y Web Animations en móvil y escritorio:

- Una sola vez por elemento, 700ms, desplazamiento vertical de 10px y opacidad
  inicial de 82%. Sin máscaras, pinning ni revelado condicionado a seguir bajando.
- No ocultan contenido antes de cargar JavaScript. Captions permanecen estáticos.
- Movimiento reducido omite y cancela las entradas activas.
- GSAP conserva solo parallax mínimo en escritorio: hero 1,5%, fotos elegidas 1%.
- El header conserva su estado alrededor de los límites para evitar oscilaciones
  por scroll pequeño: margen de 16px para superficie y 32px al volver al hero.

Malla animada de contacto (solo desktop, puntero fino):

- Recorrido del tile interior: 8px × −6px, ida y vuelta en 26s.
- Máscara exterior fija; 12px de sobrecobertura.
- Pausa fuera de pantalla o con pestaña oculta; no mueve el ruido.
- Mobile y movimiento reducido: malla estática.

PhotoSwipe: carga al abrir imagen, agrupa por proyecto, conserva scroll y foco
al cerrar.

## Shapes

| Elemento | Radius |
|----------|--------|
| imágenes | 0px |
| bloques | 0px |
| botones | 0–2px |
| líneas | 1px |
