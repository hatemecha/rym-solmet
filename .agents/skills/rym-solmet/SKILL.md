---
name: rym-solmet
description: Mantiene y amplía el sitio web de RYM Solmet respetando su producto, sistema visual, fotografía real, contenido verificable y controles de calidad. Se aplica al trabajar en páginas, componentes, estilos, proyectos, imágenes, copy o despliegue de este repositorio.
---

# RYM Solmet

## Antes de editar

1. Lee completos `PRODUCT.md` y `DESIGN.md` desde la raíz.
2. Revisa `src/data/projects.ts` y la superficie afectada.
3. Conserva el contrato: sitio fotográfico, contacto directo y cero afirmaciones inventadas.

## Reglas

- Trata `DESIGN.md` como autoridad visual y `PRODUCT.md` como autoridad factual.
- Usa solamente fotografías reales de `src/assets/projects/`.
- Usa `src/assets/brand/logosolmet-clean.png` como asset de interfaz y conserva `logosolmet.png` como original provisto; no reemplaces la marca por texto ni la redibujes.
- Conserva la única dirección clara documentada en `DESIGN.md`; no agregues selector de tema ni un modo oscuro paralelo sin redefinir antes el sistema visual.
- Respeta el sistema tipográfico del logo: Oxanium en titulares y Archivo en cuerpo, navegación, etiquetas, CTAs, captions y metadata.
- Mantén los assets agrupados por trabajo, con nombres descriptivos y numeración de dos dígitos.
- Al sumar proyectos destacados, deja que `ProjectGallery.astro` asigne el ciclo de ocho slots; no agregues selectores CSS por índice absoluto.
- Edita títulos, orden, estado destacado y textos alternativos únicamente en `src/data/projects.ts`.
- Prefiere HTML semántico, CSS propio y componentes Astro sin hidratación.
- No agregues dependencias, abstracciones ni estado cliente sin un beneficio concreto.
- No uses cards repetitivas, sombras decorativas, gradientes, glassmorphism, bordes redondeados amplios ni estética industrial literal.
- Escribe copy breve y verificable. No inventes clientes, años, ubicaciones, cifras, testimonios o procesos.
- Mantén WhatsApp como CTA principal y correo como alternativa.

## Verificación

1. Ejecuta `npm run check`.
2. Ejecuta `npm run build`.
3. Prueba 320, 768, 1024 y 1440 px en la dirección clara, sin desbordamiento horizontal.
4. Revisa teclado, foco, jerarquía de encabezados, textos alternativos, enlaces y consola.
5. En cambios visuales finales, ejecuta una sola pasada del detector de Impeccable y documenta cualquier límite de verificación.
