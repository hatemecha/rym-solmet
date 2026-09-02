# RYM Solmet

Sitio fotográfico de RYM Solmet, un emprendimiento de herrería y fabricación a medida de Bahía Blanca.

## Requisitos

- Node.js 24 (ver `.nvmrc`)
- npm 11 o posterior

Con nvm:

```sh
nvm use
```

## Empezar en otra PC

```sh
git clone https://github.com/hatemecha/rym-solmet.git
cd rym-solmet
npm ci
npm run dev
```

La aplicación queda disponible en `http://localhost:4321/rym-solmet/`.

Si el dev server falla al cargar estilos o fuentes, detenelo con `Ctrl+C`
en su terminal y volvé a iniciarlo:

```sh
npm run dev
```

## Desarrollo

```sh
npm install
npm run dev
```

## Verificación

```sh
npm run check
npm run build
npm run preview
```

## Editar trabajos

Las fotografías originales viven en `src/assets/projects/<proyecto>/`. Los títulos, el orden, los textos alternativos y los trabajos destacados se editan exclusivamente en `src/data/projects.ts`.

Cada proyecto usa un slug descriptivo y fotografías numeradas como `01.jpeg`, `02.jpeg`, etc. Las imágenes se conservan en su resolución original; Astro produce las variantes optimizadas durante el build.

El logo original vive en `src/assets/brand/logosolmet.png`; la interfaz usa el derivado limpio `src/assets/brand/logosolmet-clean.png`. El sitio mantiene una única dirección clara: criterio visual en `DESIGN.md`, valores concretos en `docs/implementation.md`.

Tipografías de interfaz: Oxanium en titulares y Archivo en cuerpo, navegación, etiquetas y CTAs. Se cargan desde `src/styles/*.css`.

Los proyectos destacados reciben automáticamente uno de ocho slots editoriales repetibles. Para sumar fotografías o cambiar el orden, editá sólo `src/data/projects.ts`; no hace falta agregar reglas CSS por proyecto.

## Contexto del proyecto

- `PRODUCT.md`: hechos, público, alcance y restricciones.
- `DESIGN.md`: dirección visual y criterio de marca.
- `docs/implementation.md`: tokens, medidas y comportamiento de componentes.
- `AGENTS.md`: entrada rápida para agentes de desarrollo.
- `.agents/skills/rym-solmet/SKILL.md`: flujo portable para mantener el proyecto en otra PC.
- `TODO.md`: plan de la próxima sesión, prioridades y criterios de aceptación.
- `refinement-verification.md`: registro de revisiones realizadas y sus límites.

## Retomar el trabajo

En la misma PC, revisá primero `git status` y abrí `TODO.md`. Si el árbol está
limpio, podés actualizarlo con `git pull --ff-only`. No descartes cambios locales
para actualizar. En otra PC, seguí los pasos de clonación e instalación de arriba.

Usá `npm run dev` para trabajar con recarga automática. Para comprobar el build:

```sh
npm run build
npm run preview -- --port 4322
```

La vista de producción estará en `http://localhost:4322/rym-solmet/` si el puerto
está libre; consultá la URL indicada en la terminal. Preview requiere reconstruir
el sitio después de editar. Las capturas y logs locales de `.artifacts/` no se
versionan; se pueden regenerar siguiendo el registro de verificación.

La malla estática se guarda en `src/assets/patterns/warped-mesh.svg`. Si cambiás
su geometría, regenerala con `node scripts/generate-warped-grid.mjs` e incluí
tanto el generador como el SVG actualizado en el commit.

## Subir a GitHub

El remoto `origin` apunta a `https://github.com/hatemecha/rym-solmet.git`.
Desde la rama `main`, revisá y verificá los cambios antes de subirlos:

```sh
git status
npm run check
npm run build
git add -A
git diff --cached --check
git diff --cached --stat
git commit -m "Refina las superficies, galerias y movimiento del sitio"
git push origin main
```

Incluí las fotos de `src/assets/`, el `package-lock.json` y el plan `TODO.md`.
No subas `node_modules/`, `dist/`, `.astro/`, `.artifacts/` ni archivos `.env`.
Adaptá el mensaje del commit a los cambios de cada sesión. Si Git rechaza el push
por cambios remotos, revisalos e integralos antes de reintentar; no fuerces el push.

## Publicación

El workflow `.github/workflows/deploy.yml` publica la rama `main` en GitHub Pages. Después del primer push:

1. En el repositorio, abre **Settings → Pages**.
2. En **Build and deployment**, elige **GitHub Actions** como origen.

El workflow calcula automáticamente la URL y el subdirectorio desde el repositorio. Cuando se conecte un dominio propio, cambia `SITE_URL` al dominio y deja `BASE_PATH` vacío; luego configura el DNS en Porkbun y el dominio personalizado en GitHub Pages.

Canonical, Open Graph, Twitter, JSON-LD y sitemap usan `SITE_URL` y `BASE_PATH`.
El valor por defecto apunta a GitHub Pages (`https://hatemecha.github.io/rym-solmet/`).
Para el dominio final, configurar `SITE_URL` al dominio confirmado y `BASE_PATH=/`
en el workflow; no hay dominio propio supuesto en los datos del negocio.
La portada social se genera a partir de la fotografía real del hero.

Las fotografías enlazan a un JPEG optimizado incluso sin JavaScript. PhotoSwipe y
sus estilos se cargan al abrir la primera foto; las galerías, captions y variantes
responsive se derivan exclusivamente de `src/data/projects.ts`.
