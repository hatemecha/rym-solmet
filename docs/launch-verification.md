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

## Revisión visual posterior — footer, header y hero

- Footer centrado en 320, 768, 1024 y 1440px: centro de metadata a menos
  de 1px del centro disponible, sin overflow ni espacio debajo del footer.
- Eliminado padding móvil residual de la barra retirada y canal claro lateral.
- Header con superficie al 90%, blur de 10px y transiciones suaves. En móvil
  mantiene 68px de altura durante el desplazamiento del logo.
- Hero de seis fotos: avance automático comprobado de 01 a 02, pausa fuera de
  pantalla, inicio estático con movimiento reducido y controles manuales.
- La foto activa abre su proyecto correcto; Escape devuelve el foco.
- Check y build sin errores. Consola sin errores de JS durante el recorrido.
- Detector estático: tres avisos informativos de escala tipográfica existente;
  corresponden a extremos fluidos ya documentados en DESIGN.md. No se alteraron
  tamaños correctos para satisfacer esos avisos. No sustituye prueba de contraste.
- Capturas: `.artifacts/refine-{320,768,1024,1440}-{hero,footer}.png`.

Pendientes externos conservados: Safari/iPhone físico y Android real, medición
PageSpeed sobre HTTPS publicado, DNS/HTTPS y activación de Google. No quedan
cambios de esta solicitud aplazados por falta de tokens. No se hizo push.

## Suavizado de movimiento

- Header: color/contraste en 750ms y desplazamiento móvil con transform en 850ms.
  Eliminadas reglas móviles superpuestas; margen de cambio de sección para
  impedir oscilaciones. Altura estable medida durante la transición: 68,8px.
- Muestreo real a 100ms, 350ms y al finalizar: posiciones intermedias del logo
  y colores intermedios del fondo; no hay salto directo al estado final.
- Entradas de una sola vez (10px/700ms), legibles desde el inicio, sin máscaras
  dependientes del scroll. Parallax reducido a 1–1,5% en escritorio.
- 320/768/1024/1440: sin overflow, títulos a opacidad 1 y sin clip al terminar.
- Movimiento reducido: cero animaciones activas, transiciones del header en 0s
  y Lenis desactivado. Cero errores de JavaScript en el recorrido.
- Check y build correctos; detector conserva solo los tres avisos informativos
  sobre tamaños fluidos ya documentados. Capturas `.artifacts/motion-*.png`.
