---
version: alpha
name: RYM Solmet

colors:
  ink: "#111210"
  ink-muted: "#4F5250"
  canvas: "#F2F0EB"
  canvas-raised: "#EBE8E2"
  steel: "#747878"
  steel-light: "#C9CCCA"
  steel-surface: "#D8D9D4"
  white: "#FFFFFF"

typography:
  display:
    fontFamily: "Oxanium"
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -0.02em

  heading:
    fontFamily: "Oxanium"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.02em

  body:
    fontFamily: "Archivo"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.55

  label:
    fontFamily: "Archivo"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.08em

  production-responsive:
    logo-width: "clamp(116px, 30vw, 152px)"
    hero: "clamp(44px, 7vw, 92px)"
    hero-mobile: "clamp(43.2px, 12vw, 73.6px)"
    hero-split: "clamp(40px, 5.4vw, 80px)"
    hero-tablet: "clamp(44px, 6.25vw, 64px)"
    section-tablet: "clamp(40px, 6.25vw, 64px)"
    section: "clamp(35.2px, 10.5vw, 72px)"
    section-inverse: "clamp(40px, 12vw, 80px)"
    contact: "clamp(48px, 13vw, 96px)"
    body-mobile: "16px"
    body: "17px"
    metadata: "15.2px"
    label: "12px"
    label-compact: "12.8px"
    caption: "11.2px"

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: 120px
  gutter: 24px
  heading-gallery: "clamp(32px, 5vw, 64px)"

rounded:
  none: 0px
  sm: 2px
---

# RYM Solmet

## Overview

RYM Solmet es una marca de herrería, estructuras y fabricación a medida.

La identidad debe surgir del trabajo real: material, escala, estructura,
precisión y oficio.

El lenguaje visual es industrial pero no "industrial decorativo".
Debe acercarse más a un estudio de fabricación o arquitectura que a
la estética tradicional de una herrería.

Referencias principales:

- Temper & Grit — estructura, tipografía, espacio y sobriedad.
- Zahner — fotografía, materialidad y presentación de proyectos.

La marca debe sentirse:

- precisa;
- sólida;
- sobria;
- técnica;
- contemporánea;
- humana.

Nunca corporativa por obligación ni artificialmente lujosa.

El metal es el núcleo de la identidad, no una restricción del catálogo.
Trabajos combinados con madera u otros materiales siguen perteneciendo
a RYM cuando forman parte de una solución fabricada a medida.

La consistencia debe surgir del lenguaje compartido, no de repetir componentes.

## Visual Resources

### Prefer

Recursos naturalmente compatibles con RYM:

- fotografía real;
- composiciones asimétricas;
- líneas y estructuras;
- warped grids;
- tipografía fuerte;
- superficies neutras;
- contrastes ink/canvas;
- motion ligado al scroll;
- textura;
- escalas amplias;
- interacción discreta.

### Explore freely

Recursos permitidos cuando exista una idea detrás:

- gradients;
- sombras;
- transparencias;
- blend modes;
- masks;
- sticky/pinning;
- parallax;
- type animation;
- cursor interactions;
- composiciones full-bleed;
- deformaciones;
- filtros SVG;
- canvas;
- patrones generativos;
- inversión de color;
- overlays.

### Avoid by default

No porque estén "prohibidos", sino porque normalmente conducen a un resultado
genérico:

- iconos ilustrativos para explicar servicios obvios;
- cards SaaS repetidas;
- estadísticas inventadas;
- stock photography;
- clichés de herrería;
- efectos sin relación con el contenido;
- animación repetida idénticamente en cada sección;
- decoración usada solo porque había espacio vacío.

## Experimental Freedom

RYM debe conservar una identidad reconocible, pero el sistema no debe impedir
la experimentación visual.

Una solución nueva puede apartarse de componentes, proporciones, motion o
tratamientos existentes cuando:

1. utiliza contenido real;
2. mantiene legibilidad y accesibilidad;
3. mejora la composición o el recorrido;
4. puede explicarse mediante un criterio visual concreto;
5. no convierte al sitio en una colección de tendencias inconexas.

No es necesario que cada página o sección use exactamente los mismos recursos.

## Colors

La interfaz es esencialmente monocromática.

- `ink` es el color principal de texto y elementos oscuros.
- `canvas` es el fondo predominante: cálido, nunca blanco digital puro.
- `canvas-raised` separa capítulos fotográficos secundarios sin simular elevación.
- `steel` y `steel-light` se usan para metadata, líneas y elementos secundarios.
- `steel-surface` es una superficie clara de transición para capítulos sin fotografía;
  evita que el recorrido dependa sólo de canvas e ink.
- `white` se reserva para contraste puntual.

Las fotografías aportan el color.

Las superficies forman una escala neutral propia, inspirada en la disciplina de
escalas como Radix pero mantenida como tokens locales sin dependencia externa.
La secuencia de producción es deliberada:

- apertura: `ink` con malla ondulada y grano en el borde superior derecho;
- trabajos seleccionados: `canvas` con malla ondulada de contraste tenue;
- qué hacemos: `steel-surface` liso;
- piezas a medida: `canvas-raised` liso;
- contacto: `ink` con malla ondulada y grano en los bordes;
- footer: `ink` liso, en continuidad con contacto.

El sitio usa una única dirección clara: papel cálido, tinta carbón y
fotografías reales sin filtros. El negro se reserva para bandas de contraste,
texto y captions, no como modo alternativo ni como fondo dominante.

No introducir un color de marca fuerte hasta que exista una razón real
derivada del logo o de la identidad final.

Los gradientes no constituyen por sí mismos un elemento de marca. Pueden
utilizarse como iluminación, máscara, transición o profundidad cuando
permanezcan dentro de la paleta y no dominen la composición.

Evitar efectos metálicos digitales y paletas "industrial amarillo + negro".

## Typography

El sistema tipográfico proviene del logo en `src/assets/brand/logosolmet-clean.png`:

- **Oxanium** — titulares (`h1`, `h2`) y cualquier display grande. Es la voz de "RYM".
- **Archivo** — cuerpo, navegación, etiquetas, CTAs, captions y metadata. Aporta una lectura más sobria y editorial.

Oxanium solo en titulares. Archivo cubre el resto del sistema; las etiquetas
pueden mantenerse compactas y en mayúsculas cuando ayudan a jerarquizar.

Los titulares son grandes, compactos y de peso medio-alto (600). No usar bold excesivamente grueso.

Los labels pueden aparecer en mayúsculas:

PROJECT 03
ESTRUCTURAS
BAHÍA BLANCA — 2026

El cuerpo siempre prioriza claridad.

La escala responsiva de producción y los extremos fluidos entre 320px y 1440px
están documentados en `docs/implementation.md`.

No agregar tipografías decorativas fuera del par Oxanium + Archivo.
No usar stencil ni estética mecánica literal.

## Layout

El layout debe sentirse editorial y arquitectónico.

Desktop:
- grid de 12 columnas;
- ancho máximo aproximado de 1440px;
- gutters generosos;
- contraste tonal inequívoco entre capítulos consecutivos;
- el portfolio repite un ciclo editorial de ocho posiciones. Los proyectos
  nuevos heredan ese ciclo automáticamente y nunca caen en un ancho completo
  genérico por falta de una regla individual.

Mobile:
- grid simple;
- fotografías casi a ancho completo;
- mantener espacio negativo;
- no intentar conservar composiciones complejas de desktop.
- mantener acciones de consulta dentro del flujo de lectura;
- cierre artesanal vertical o con navegación explícita simple, sin scroll horizontal.

Las fotografías no tienen que compartir siempre el mismo tamaño o ratio.

Combinar:
- imágenes panorámicas;
- fotografías verticales;
- detalles;
- espacios vacíos;
- texto breve.

La geometría de las estructuras fotografiadas puede influir en la composición
general del sitio. El espacio negativo debe ser intencional: en pares de alturas
desiguales, la pieza corta se alinea para sostener el ritmo de la fila y la
retícula del portfolio ocupa los vacíos sin convertirse en decoración dominante.

El hero de escritorio separa texto y fotografía; en tablet la foto precede al
bloque de título y consulta. Los titulares se ajustan al ancho disponible.

Foto y caption siempre forman una sola unidad.

Usar una única fotografía estática en el hero, sin filtros ni rotación.

El motion acompaña el recorrido sin impedir la navegación ni forzar inercia en
touch. Debe respetar la preferencia de movimiento reducido. Los detalles de
implementación viven en `docs/implementation.md`.

## Elevation & Depth

La profundidad debe ser deliberada.

Por defecto, la jerarquía surge de escala, espacio, fotografía, contraste y
líneas. Sombras, transparencias, perspectiva o capas pueden utilizarse cuando
refuercen una composición concreta.

Las transparencias pueden utilizarse como capas espaciales. Evitar convertirlas
en un sistema de cards decorativas.

## Texture

El grano base es sutil. GrainField puede ser más visible en capítulos oscuros
y desaparecer completamente en superficies de descanso. No aplicar grano sobre
fotografías, galerías, texto ni captions.

SurfacePattern usa una malla vectorial propia fuertemente deformada. El SVG se
genera en el proyecto; no requiere dependencias externas ni animación por
defecto. La malla cubre secciones exteriores y se atenúa hacia las áreas de
lectura para proteger el contraste sin recortes rectangulares.

Los CTAs y captions mantienen fondo opaco. Las fotografías se muestran limpias
sobre la capa decorativa.

Valores concretos de tiles, opacidades, blend modes y motion de la malla:
`docs/implementation.md`.

## Shapes

La geometría debe ser recta y estructural.

Los componentes deben recordar indirectamente la precisión de perfiles,
chapas y estructuras, sin imitarlos literalmente.

Radios y medidas de línea: `docs/implementation.md`.

## Components

### Header

Mínimo y silencioso.

Usar el asset limpio del logo a la izquierda, sin recortes ni desplazamientos
CSS. Su tinta negra se conserva sobre superficies claras y puede invertirse a
blanco únicamente dentro de bandas `ink`, como header y contacto.
Navegación a la derecha.

El header sigue el capítulo: tinta en apertura/contacto y la superficie clara
correspondiente en portfolio, capacidades y piezas.

Sin barras promocionales ni elementos decorativos.

### Project

Los proyectos son el componente principal de la marca.

Una entrada de proyecto contiene únicamente lo necesario:

- fotografía;
- nombre o tipo de trabajo;
- ubicación si aporta;
- año si se conoce.

La fotografía domina sobre el texto.

La composición no depende de selectores por índice absoluto. Usa slots
repetibles derivados del orden de `src/data/projects.ts`, de modo que sumar
proyectos preserve el ritmo responsive.

### Buttons

Preferir texto simple con dirección:

Ver proyecto →
Contacto →

Los CTA principales pueden usar fondo `ink` y texto `white`.

### Photography

Solo fotografías reales de trabajos de RYM.

Prioridad:

1. trabajos terminados;
2. estructuras completas;
3. detalles constructivos;
4. fabricación e instalación;
5. proceso.

Las imágenes deben conservar textura y contexto.
No aplicar filtros que pretendan hacerlas "cinematográficas".

Las fotografías imperfectas pueden utilizarse cuando documenten bien
un trabajo, pero no todas deben tener protagonismo equivalente.
