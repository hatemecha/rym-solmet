---
version: alpha
name: RYM Solmet

colors:
  ink: "#111210"
  ink-muted: "#4F5250"
  canvas: "#F2F0EB"
  steel: "#747878"
  steel-light: "#C9CCCA"
  white: "#FFFFFF"

darkColors:
  ink: "#F2EFE8"
  ink-muted: "#B7BBB5"
  canvas: "#111310"
  steel: "#777C76"
  steel-light: "#30352F"
  panel: "#E8E5DE"

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
    fontFamily: "Inter"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.55

  label:
    fontFamily: "Inter Tight"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.08em

  production-responsive:
    logo-width: "clamp(116px, 30vw, 152px)"
    hero: "clamp(44px, 7vw, 92px)"
    hero-mobile: "clamp(43.2px, 12vw, 73.6px)"
    section: "clamp(35.2px, 10.5vw, 72px)"
    section-dark: "clamp(40px, 12vw, 80px)"
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
- `steel` y `steel-light` se usan para metadata, líneas y elementos secundarios.
- `white` se reserva para contraste puntual.

Las fotografías aportan el color.

El sitio ofrece tema claro y oscuro. El claro conserva el papel cálido; el
oscuro usa carbón y grises de acero, sin teñir ni filtrar las fotografías.
Las secciones invertidas cambian junto con el tema para mantener contraste y
ritmo, no para imitar una interfaz técnica.

No introducir un color de marca fuerte hasta que exista una razón real
derivada del logo o de la identidad final.

Evitar degradados, efectos metálicos digitales y paletas
"industrial amarillo + negro".

## Typography

El sistema tipográfico proviene del logo en `src/assets/brand/logosolmet.png`:

- **Oxanium** — titulares (`h1`, `h2`) y cualquier display grande. Es la voz de “RYM”.
- **Inter Tight** — etiquetas, navegación, CTAs, captions y metadata en mayúsculas. Es la voz de “SOLUCIONES METÁLICAS”.
- **Inter** — cuerpo, párrafos introductorios y datos de contacto legibles.

Oxanium solo en titulares. Inter Tight solo en texto corto, denso y en mayúsculas. Inter en todo lo que se lee en bloque.

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
`src/styles/inter-latin.css`, `src/styles/inter-tight-latin.css` y
`src/styles/oxanium-latin.css`.

No agregar tipografías decorativas fuera del par Oxanium + Inter Tight + Inter.
No usar stencil ni estética mecánica literal.

## Layout

El layout debe sentirse editorial y arquitectónico.

Desktop:
- grid de 12 columnas;
- ancho máximo aproximado de 1440px;
- gutters generosos;
- grandes espacios entre secciones.

Mobile:
- grid simple;
- fotografías casi a ancho completo;
- mantener espacio negativo;
- no intentar conservar composiciones complejas de desktop.
- CTA de consulta fijo dentro de la zona del pulgar;
- cierre artesanal horizontal con scroll snap, sin carrusel con JavaScript.

Las fotografías no tienen que compartir siempre el mismo tamaño o ratio.

Combinar:
- imágenes panorámicas;
- fotografías verticales;
- detalles;
- espacios vacíos;
- texto breve.

La geometría de las estructuras fotografiadas puede influir en la
composición general del sitio.

Evitar grids de cards repetitivas.

Usar un solo gesto editorial de entrada en el hero. El resto del movimiento
se limita a estados interactivos breves: cambio de tema, flechas y escala
contenida de fotografías con puntero fino. Todo debe respetar la preferencia
de movimiento reducido.

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
  contacto, footer, barra mobile);
- no sobre fotografías, hero, galerías ni captions de proyecto;
- opacidad baja (3–5 %), tile pequeño y `mix-blend-mode` suave;
- un poco más presente en tema oscuro para compensar fondos más planos.

El grain nunca debe leerse como textura de acero digital, papel reciclado
decorativo ni filtro vintage. Debe sentirse como una superficie mate real,
casi imperceptible de un vistazo.

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

Usar `src/assets/brand/logosolmet.png` como logo a la izquierda. Su tinta negra
puede invertirse únicamente para sostener contraste en fondos oscuros.
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
