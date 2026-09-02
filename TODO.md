# Pendientes

## Pendientes Actuales

- [x] Lighthouse público, móvil y almacenamiento reiniciado — 2026-09-02: 92/100, FCP 1.7 s, LCP 2.8 s, TBT 100 ms, CLS 0 y 714 KiB transferidos. INP requiere datos de campo y no se infiere de esta corrida de laboratorio.
- [x] Decisión de `content-visibility`: no reintroducirlo en esta página. La ganancia no compensa el riesgo de que secciones con ScrollTrigger aparezcan tarde o no pinten; las imágenes lazy y la carga condicional de motion cubren el objetivo de rendimiento sin esa incompatibilidad.
- [x] Revisión visual local: 320, 768, 1024 y 1440 px sin desbordamiento; composición del hero, CTA móvil y jerarquía correctos. La variante de movimiento reducido conserva contenido estático y el foco visible sigue definido globalmente.
- [ ] Evaluar GSAP Flip y Astro View Transitions al incorporar fichas individuales de proyectos.
- [x] Panel Tweakpane de desarrollo para la malla del hero: permite regular tensión horizontal, vertical y retorno sin cargar la dependencia en producción. Los valores de producción conservados son 7 px, 5 px y 0.7 s.
- [ ] Considerar OGL sólo si una interacción concreta demuestra requerir GPU; no sumar WebGL por decoración.



## Pendientes antes de subir a dominio

Esto es un listado de pendientes que tengo que tener antes de subir el sitio, muy a futuro. 

1. **Dominio propio.** Hoy vive en `hatemecha.github.io/rym-solmet`. Hay que comprar un dominio decente pero barato y prepararlo,
2. **Datos estructurados (JSON-LD LocalBusiness).** Completado: `BaseLayout.astro` publica `LocalBusiness` con nombre, URL, descripción, imagen, teléfono, correo y área servida confirmada.
3. **Google Business Profile.** Más importante que el sitio mismo para conseguir clientes locales (reseñas, mapa, horarios). El sitio web y el perfil de Google deberían reforzarse mutuamente.
4. **Confirmar que las fotos usan AVIF/WebP con fallback JPEG.** Completado: el build genera `<picture>` con AVIF, WebP y JPEG para hero y galerías; los previews LQIP son datos embebidos y no agregan solicitudes.
5.
