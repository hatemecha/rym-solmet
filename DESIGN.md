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

Los degradados se limitan a bordes monocromáticos con grano en apertura
y contacto. Evitar efectos metálicos digitales y paletas
"industrial amarillo + negro".

## Typography

El sistema tipográfico proviene del logo en `src/assets/brand/logosolmet-clean.png`:

- **Oxanium** — titulares (`h1`, `h2`) y cualquier display grande. Es la voz de “RYM”.
- **Archivo** — cuerpo, navegación, etiquetas, CTAs, captions y metadata. Aporta una lectura más sobria y editorial.

Oxanium solo en titulares. Archivo cubre el resto del sistema; las etiquetas
pueden mantenerse compactas y en mayúsculas cuando ayudan a jerarquizar.

Los titulares son grandes, compactos y de peso medio-alto (600). No usar bold excesivamente grueso.

Los labels pueden aparecer en mayúsculas:

PROJECT 03
ESTRUCTURAS
BAHÍA BLANCA — 2026

El cuerpo siempre prioriza claridad.

La implementación de producción usa una escala fluida documentada en
`production-responsive`. Los extremos no son tamaños nuevos elegidos por
componente: son límites responsivos compartidos para conservar la jerarquía
entre 320px y 1440px. `ink-muted` se reserva para cuerpo secundario sobre
`canvas`; es más oscuro que `steel` para sostener contraste AA en texto pequeño.

Las fuentes se cargan en subconjunto `latin` + `latin-ext` desde
`src/styles/archivo-latin.css` y `src/styles/oxanium-latin.css`.

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

Evitar grids de cards repetitivas.

El hero de escritorio separa texto y fotografía en cinco y siete columnas,
con el gutter estructural entre ambos. En tablet la foto precede a un bloque
de título y consulta; los titulares se ajustan al ancho disponible.

Las fotos de un mismo proyecto comparten altura en desktop y tablet: el ancho
de cada una se deriva de su proporción original en `src/data/projects.ts`.
En mobile se apilan a ancho completo. Los captions pasan a título y material
en líneas separadas cuando su contenedor mide 384px o menos.

Piezas a medida usa tres columnas de igual ancho en tablet y recupera su
composición asimétrica desde 1100px. Los encabezados de ambas galerías comparten
una separación fluida de 32–64px hasta las fotos, menor que el espacio entre
capítulos; foto y caption siempre forman una sola unidad.

Usar una única fotografía estática en el hero, sin filtros ni rotación. El
scroll usa Lenis sólo con puntero fino; dispositivos táctiles conservan scroll
nativo. GSAP /
ScrollTrigger para acompañar el recorrido: máscaras breves en titulares e
imágenes, captions negros y opacos sin animación, construcción de líneas y parallax muy
leve en pocas fotografías estructurales. Nunca debe impedir la navegación,
forzar la inercia en touch ni aplicarse por igual a toda la página. Todo debe
respetar la preferencia de movimiento reducido.

## Elevation & Depth

El diseño es plano.

La jerarquía se construye con:

- escala;
- espacio;
- contraste;
- fotografía;
- líneas divisorias.

No usar sombras salvo que una interacción funcional lo requiera.

No usar glassmorphism.

## Texture

El grano base es sutil. GrainField usa ruido monocromático más notorio sobre
todo el fondo de apertura y contacto: tile de 200px, contraste de 450 %,
opacidad de 48 % y mezcla overlay. Overlay conserva el valor medio de `ink` en
lugar de aclararlo como screen. El degradado conserva su atenuación en el borde
superior derecho de apertura y los bordes de contacto con 24 % de opacidad y
mezcla soft-light; el ruido tiene su propia capa para seguir visible sin
extender manchas grises. No se superponen otras capas de ruido en esas bandas.
Capacidades, piezas y footer mantienen superficies lisas de descanso.
No aplicar grano sobre fotografías, galerías, texto ni captions.

SurfacePattern usa una malla vectorial propia fuertemente deformada, siguiendo
la referencia visual aportada por el usuario. Tres desplazamientos sinusoidales
periódicos comprimen y expanden las celdas sin romper sus intersecciones.
El SVG se genera con scripts/generate-warped-grid.mjs; no requiere JavaScript
cliente, animación, filtros de desplazamiento ni dependencias.

La malla cubre el ancho y alto completos de las secciones exteriores, incluso
más allá de 1440px. El tile empalma sus bordes y conserva su proporción:

- Apertura: tile de 900px, opacidad de 13 %, atenuado hacia la columna de lectura.
- Portfolio: tile de 1050px, tinta tenue sobre canvas y cabecera más tranquila.
- Contacto: tile de 800px, opacidad de 13 %, más visible en los márgenes superior e inferior.
- Móvil: tiles de 620px y 740px para conservar curvas reconocibles.

No hay paneles negros ni bordes punteados alrededor de los textos. La lectura
se protege bajando el contraste de la trama en áreas amplias, con transiciones
continuas y sin recortes rectangulares. Los CTAs y captions mantienen su fondo
opaco; los captions permanecen negros durante las animaciones. Las fotografías
se muestran limpias sobre la capa decorativa.

Los valores negros con alfa en mask-image representan cobertura, no colores
visibles ni una ampliación de la paleta. El blanco del SVG se invierte para
la superficie clara; su opacidad determina el contraste final.

La iteración anterior usó patrones de PatternCraft; su atribución se conserva
en THIRD_PARTY_NOTICES.md. La malla actual es geometría generada en el proyecto.

El movimiento se configura con `gsap.matchMedia`: desktop conserva máscaras,
parallax selectivo y Lenis; mobile usa reveals cortos por transform, sin parallax
continuo. La única malla móvil es la de contacto en desktop con puntero fino:
su tile interior recorre 8px × −6px con ida y vuelta en 26 segundos, mientras
la máscara exterior permanece fija. Tiene 12px de sobrecobertura, se pausa fuera
de pantalla o con la pestaña oculta y no mueve el ruido. Mobile y movimiento
reducido conservan la malla estática. PhotoSwipe carga al abrir una imagen,
agrupa por proyecto y conserva scroll y foco al cerrar.

## Shapes

La geometría debe ser recta y estructural.

- imágenes: 0px radius;
- bloques: 0px radius;
- botones: 0–2px;
- líneas: 1px.

Los componentes deben recordar indirectamente la precisión de perfiles,
chapas y estructuras, sin imitarlos literalmente.

## Components

### Header

Mínimo y silencioso.

Usar el asset limpio del logo a la izquierda, sin recortes ni desplazamientos
CSS. Su tinta negra se conserva sobre superficies claras y puede invertirse a
blanco únicamente dentro de bandas `ink`, como header y contacto.
Navegación a la derecha.

El header sigue el capítulo: tinta en apertura/contacto y la superficie clara
correspondiente en portfolio, capacidades y piezas. Transición de 180ms sin blur.
En mobile conserva la entrada centrada y, al salir del hero, se compacta a logo
a la izquierda y Consultar a la derecha.

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
repetibles (`project--slot-1` a `project--slot-8`) derivados del orden de
`src/data/projects.ts`, de modo que sumar proyectos preserve el ritmo responsive.

### Buttons

Preferir texto simple con dirección:

Ver proyecto →
Contacto →

Los CTA principales pueden usar fondo `ink` y texto `white`.

Sin gradientes, sombras ni botones tipo píldora.

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

## Do's and Don'ts

Do:
- dejar que las fotografías construyan la identidad;
- usar mucho espacio negativo;
- mostrar escala y estructura;
- escribir descripciones concretas;
- usar composiciones editoriales;
- mantener una jerarquía visual fuerte y sencilla.

Don't:
- usar fotografías de stock;
- decorar con chispas, engranajes o texturas de acero;
- llenar cada sección con cards;
- utilizar slogans genéricos;
- inventar cifras, clientes o capacidades;
- abusar de negro como fondo por ser una empresa metalúrgica;
- introducir elementos visuales sin una función;
- convertir el sitio en una plantilla SaaS.
