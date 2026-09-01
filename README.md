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
git clone <url-del-repositorio>
cd rym-solmet
npm install
npm run dev
```

La aplicación queda disponible en `http://localhost:4321`.

Si el dev server falla al cargar estilos o fuentes, reinicialo:

```sh
npx astro dev stop
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

El logo vive en `src/assets/brand/logosolmet.png`. La interfaz incluye temas claro y oscuro; sus tokens y reglas están documentados en `DESIGN.md`.

Tipografías del logo: Oxanium (titulares), Inter Tight (etiquetas) e Inter (cuerpo). Se cargan desde `src/styles/*.css`.

## Contexto del proyecto

- `PRODUCT.md`: hechos, público, alcance y restricciones.
- `DESIGN.md`: sistema visual.
- `AGENTS.md`: entrada rápida para agentes de desarrollo.
- `.agents/skills/rym-solmet/SKILL.md`: flujo portable para mantener el proyecto en otra PC.

## Subir a GitHub

Desde la carpeta del proyecto, con el repositorio ya creado en GitHub:

```sh
git add .
git commit -m "Sitio inicial RYM Solmet"
git branch -M main
git remote add origin https://github.com/<usuario>/<repositorio>.git
git push -u origin main
```

Incluye en el commit las fotos de `src/assets/` y el `package-lock.json`. No subas `node_modules/`, `dist/` ni `.astro/`.

## Publicación

El workflow `.github/workflows/deploy.yml` publica la rama `main` en GitHub Pages. Después del primer push:

1. En el repositorio, abre **Settings → Pages**.
2. En **Build and deployment**, elige **GitHub Actions** como origen.

El workflow calcula automáticamente la URL y el subdirectorio desde el repositorio. Cuando se conecte un dominio propio, cambia `SITE_URL` al dominio y deja `BASE_PATH` vacío; luego configura el DNS en Porkbun y el dominio personalizado en GitHub Pages.
