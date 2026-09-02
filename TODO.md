# Pendientes

## Pendientes Actuales

- [x] Lighthouse público, móvil y almacenamiento reiniciado — 2026-09-02: 92/100, FCP 1.7 s, LCP 2.8 s, TBT 100 ms, CLS 0 y 714 KiB transferidos. INP requiere datos de campo y no se infiere de esta corrida de laboratorio.
- [x] Decisión de `content-visibility`: no reintroducirlo en esta página. La ganancia no compensa el riesgo de que secciones con ScrollTrigger aparezcan tarde o no pinten; las imágenes lazy y la carga condicional de motion cubren el objetivo de rendimiento sin esa incompatibilidad.
- [x] Revisión visual local: 320, 768, 1024 y 1440 px sin desbordamiento; composición del hero, CTA móvil y jerarquía correctos. La variante de movimiento reducido conserva contenido estático y el foco visible sigue definido globalmente.
- [x] Optimización de rendimiento del hero (2026-09-02): el LCP es el campo de la malla (`surface-pattern__field`), no la foto. Eliminado el preload del hero sobredimensionado; `warped-mesh.svg` regenerado (308K→157K raw, 119K→62K gz, overscan 288→200, step 6→8, spacing 24→26) y ahora con preload propio hash-eado. Local: desktop LCP 0.8 s / score 0.99 / CLS 0; mobile LCP sigue siendo el mesh y depende del throttling de red (bottleneck preexistente, no es regresión de este trabajo: no se suman bytes ni recursos bloqueantes).
- [x] Deformación local de la malla (prototipo): la malla base queda estática y una capa `--focus` (variant grid) con mask radial que sigue el puntero tensa una región concreta del hero (transform/opacity composited vía `gsap.quickTo`; Tweakpane regula desplazamiento/radio/presencia, dev-only). Verificado: build OK, sin errores de consola, sin colisión con el contenido. Pendiente validar el resultado visual en un navegador con puntero real (no reproducible en headless) y descartar si se ve como duplicación en vez de tensión limpia o si penaliza el rendimiento.
- [x] Momento tipográfico Oxanium (uno solo): anotación vertical `hero__scribe` en el borde derecho de la foto del hero (marginalia de obra con los términos reales de capacidades), desktop-only (≥68.75rem), OFFCROP por el overflow. No se repite en el resto del sitio.
- [x] Interacción tipográfica expresiva (un punto, hero): entrada `hero-title-taut` del H1 (scaleY + opacity, sin layout shift, respeta `prefers-reduced-motion`). No es un stagger genérico ni se repite.
- [ ] Evaluar GSAP Flip y Astro View Transitions al incorporar fichas individuales de proyectos.
- [x] Panel Tweakpane de desarrollo para la malla del hero: permitía regular tensión horizontal, vertical y retorno sin cargar la dependencia en producción. Reemplazado por la deformación local: ahora regula desplazamiento, radio y presencia de la región en tensión (dev-only). El movimiento de campo completo se retiró (malla base estática).
- [ ] Considerar OGL sólo si una interacción concreta demuestra requerir GPU; no sumar WebGL por decoración.



## Pendientes antes de subir a dominio

Esto es un listado de pendientes que tengo que tener antes de subir el sitio, muy a futuro. 

1. **Dominio propio.** Hoy vive en `hatemecha.github.io/rym-solmet`. Hay que comprar un dominio decente pero barato y prepararlo,
2. **Datos estructurados (JSON-LD LocalBusiness).** Completado: `BaseLayout.astro` publica `LocalBusiness` con nombre, URL, descripción, imagen, teléfono, correo y área servida confirmada.
3. **Google Business Profile.** Más importante que el sitio mismo para conseguir clientes locales (reseñas, mapa, horarios). El sitio web y el perfil de Google deberían reforzarse mutuamente.
4. **Confirmar que las fotos usan AVIF/WebP con fallback JPEG.** Completado: el build genera `<picture>` con AVIF, WebP y JPEG para hero y galerías; los previews LQIP son datos embebidos y no agregan solicitudes.
5.
