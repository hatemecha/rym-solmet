# Verificación previa a publicación — 13 de septiembre de 2026

Entorno: Node 24.15.0, build estático de producción y Chromium mediante
Playwright en `http://127.0.0.1:4322/`. Se conservaron los cambios locales
preexistentes en fotografías, contenido y componentes.

## Correcciones

- Malla: período 768 divisible por separación 24 y muestreo 8; regeneración del
  SVG y cobertura CSS sin escalado. Máscara elíptica válida para el cursor.
- Lenis: su CSS pasa al stylesheet principal; se elimina el request a un chunk
  inexistente que abortaba la inicialización de movimiento en producción.
- GSAP/Lenis se limpian al activar movimiento reducido o salir de escritorio.
- Retirada la barra fija inferior de WhatsApp que cubría contenido en móvil;
  permanecen los accesos de portada, encabezado y contacto.
- Destino del enlace de salto al contenido enfocable por teclado.
- Dominio y raíz actualizados en Astro, workflow y robots. Descripción local
  incluye metal y madera; JSON-LD conserva identificador estable del negocio.
- La página 404 existente recibe noindex y no duplica el marcado del negocio.

## Evidencia local

- `npm run check` y `npm run build`: sin errores ni warnings.
- `npm audit --omit=dev --audit-level=high`: cero vulnerabilidades reportadas.
- 320, 768, 1024 y 1440px: sin overflow horizontal; un h1; canonical correcto.
- Capturas revisadas de apertura, contacto y recorrido completo de escritorio.
  Archivos locales en `.artifacts/launch-*.png`.
- Recorrido completo: todas las imágenes cargadas, sin fotografías rotas.
- Galería: apertura, flecha derecha (2 de 2), Escape después de la transición,
  cierre y devolución del foco al enlace de origen.
- Cambio en vivo a movimiento reducido: Lenis desactivado y máscaras revertidas.
- Sin JavaScript: el enlace de ampliación entrega JPEG con respuesta 200.
- WhatsApp y correo apuntan a los datos de `src/data/site.ts`. No se enviaron
  mensajes; apertura en aplicaciones reales pendiente de teléfono físico.
- Ruta inexistente: HTTP 404, página propia y `noindex, follow`.
- Sitemap contiene únicamente `https://rymsolmet.xyz/`.
- Portada de producción sin errores de JavaScript después de corregir Lenis.
- PhotoSwipe no se descarga antes de abrir una fotografía. AVIF/WebP y carga
  diferida se mantienen; el hero tiene prioridad alta.

## Límites y siguiente responsable

- Impeccable: intento de análisis URL bloqueado por Puppeteer ausente. La pasada
  alternativa sobre HTML generó `[]`, pero fue degradada a regex por ausencia de
  htmlparser2/css-select/css-tree/domutils: no acredita contraste calculado ni
  accesibilidad completa. Se complementó con inspección real mediante Playwright.
- Responsive verificado en Chromium emulado, no en Safari/iPhone físico.
- No se acredita puntuación Lighthouse ni Core Web Vitals de campo: medir el
  dominio publicado con PageSpeed y dispositivos reales.
- Publicación, DNS, HTTPS, redirecciones, Search Console y Perfil de Empresa:
  pendientes del propietario al activar las cuentas y el dominio. Seguir
  `docs/deploy.md`. No se ejecutó push ni se modificaron servicios externos.
