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

- apertura: `ink` con retícula;
- trabajos seleccionados: `canvas` con retícula estructural tenue;
- qué hacemos: `steel-surface` liso;
- piezas a medida: `canvas-raised` liso;
- contacto: `ink` con retícula;
- footer: `canvas-raised` liso.

El sitio usa una única dirección clara: papel cálido, tinta carbón y
fotografías reales sin filtros. El negro se reserva para bandas de contraste,
texto y captions, no como modo alternativo ni como fondo dominante.

No introducir un color de marca fuerte hasta que exista una razón real
derivada del logo o de la identidad final.

Evitar degradados, efectos metálicos digitales y paletas
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

Usar una única fotografía estática en el hero, sin filtros ni rotación. El
scroll usa Lenis sólo con puntero fino; dispositivos táctiles conservan scroll
nativo. GSAP /
ScrollTrigger para acompañar el recorrido: máscaras breves en titulares e
imágenes, captions apenas posteriores, construcción de líneas y parallax muy
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

Un grain monocromático muy sutil puede aportar materialidad a superficies
planas sin competir con las fotografías.

Usarlo con criterio:

- sí en `canvas`, `canvas-raised` y bandas `panel` (header, craft, capacidades,
  contacto y footer);
- no sobre fotografías, hero, galerías ni captions de proyecto;
- opacidad baja (3–5 %), tile pequeño y `mix-blend-mode` suave;
- puede ganar apenas presencia en bandas oscuras para sostener superficies planas.

El grain nunca debe leerse como textura de acero digital, papel reciclado
decorativo ni filtro vintage. Debe sentirse como una superficie mate real,
casi imperceptible de un vistazo.

El sistema gráfico secundario es una retícula estructural regular que en zonas
puntuales se deforma, curva o abre. Se implementa como composiciones SVG
diseñadas (`WarpedGrid`) únicamente en apertura, portfolio y contacto. “Qué
hacemos”, piezas a medida y footer son superficies lisas para que la retícula
marque capítulos en lugar de convertirse en ruido continuo. Cada variante usa
deformación visible y hairlines de contraste bajo.

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
