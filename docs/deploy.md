# Publicación en rymsolmet.xyz

El sitio genera archivos estáticos en `dist/`, con canonical, Open Graph y sitemap
en `https://rymsolmet.xyz/`. La rama `main` se publica con GitHub Actions.
El build requiere Node 24 y `npm ci`; verificar `npm run check` y `npm run build`.

## Activación del dominio

1. Verificar el dominio en la configuración de Pages de la cuenta GitHub mediante
   el TXT que indique GitHub. En el repositorio, Settings → Pages → origen GitHub
   Actions; guardar `rymsolmet.xyz` en Custom domain antes de cambiar DNS.
2. En el proveedor DNS (Porkbun si se mantiene el proveedor previsto), configurar:

| Tipo | Nombre | Valor |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | hatemecha.github.io |

Reemplazar únicamente registros web en conflicto; conservar correo y TXT de
verificación. No usar wildcard. El CNAME de www no lleva `/rym-solmet`.
`public/CNAME` documenta el dominio, pero Actions requiere configurarlo también
en Settings → Pages: el archivo por sí solo no activa el dominio.

3. Subir los cambios revisados a `main` y comprobar que build y deploy finalicen.
4. Esperar la comprobación DNS y el certificado; activar Enforce HTTPS. DNS y
   disponibilidad del certificado pueden demorar hasta 24 horas.
5. Confirmar que `https://rymsolmet.xyz/` responde 200 y que HTTP y www redirigen
   al dominio HTTPS principal. Abrir una ruta inexistente y comprobar estado 404.
6. Probar en un teléfono real: fotos, cierre de galería, WhatsApp y correo.
   Revisar que WhatsApp abra el número correcto, sin necesidad de enviar nada.

Fuente: [GitHub Pages: dominio personalizado](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Cabeceras HTTP adicionales (opcional)

GitHub Pages no permite configurar CSP, HSTS ni `X-Frame-Options` en el origen.
El layout ya incluye CSP, referrer y Permissions-Policy vía `<meta>` (mitigación
parcial; `frame-ancestors` solo funciona como cabecera HTTP).

Si el dominio pasa por Cloudflare (u otro proxy), conviene añadir reglas de
respuesta con:

| Cabecera | Valor sugerido |
| --- | --- |
| Strict-Transport-Security | `max-age=31536000; includeSubDomains; preload` |
| X-Content-Type-Options | `nosniff` |
| X-Frame-Options | `DENY` |
| Referrer-Policy | `strict-origin-when-cross-origin` |
| Permissions-Policy | `camera=(), microphone=(), geolocation=()` |

Mantener la CSP del HTML alineada con scripts y estilos propios en `_astro/`.
Tras cambiar cabeceras, probar galería, scroll suave en escritorio y WhatsApp.

El repositorio incluye `public/.well-known/security.txt` y el workflow `CI`
ejecuta `npm run security:check`, `npm audit` y el build en cada push/PR.
Dependabot revisa npm y GitHub Actions semanalmente.

## Encontrar el negocio en Google

- Crear una propiedad de dominio `rymsolmet.xyz` en Google Search Console y
  verificarla con el TXT proporcionado por Google.
- Enviar `https://rymsolmet.xyz/sitemap-index.xml`. Inspeccionar la portada y
  solicitar indexación cuando la publicación y HTTPS estén funcionando.
- Crear o reclamar el Perfil de Empresa de RYM Solmet. Usar nombre, teléfono,
  web, categoría de herrería y área de servicio reales; si no se atiende público
  en el domicilio, configurarlo como negocio de área de servicio sin mostrar
  una dirección privada. Completar horarios solo cuando estén confirmados.
- Subir fotos reales del trabajo y mantener los datos consistentes. Pedir
  reseñas auténticas a clientes, sin inventarlas ni agregarlas al marcado.
- No publicar una dirección o coordenadas ficticias para completar validadores.
  El marcado actual describe el negocio y Bahía Blanca, sin domicilio confirmado;
  no se promete elegibilidad para resultados enriquecidos de LocalBusiness.

La indexación y la posición no son inmediatas ni están garantizadas. Revisar
Search Console después del lanzamiento para detectar errores y búsquedas reales.
Fuentes: [Google: aparecer en la búsqueda](https://developers.google.com/search/docs/fundamentals/get-on-google),
[sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap),
[datos de negocios locales](https://developers.google.com/search/docs/appearance/structured-data/local-business).

## Comprobaciones posteriores y recuperación

Abrir portada, robots.txt, sitemap-index.xml, sitemap-0.xml y una imagen compartida.
Comprobar canonical y og:url con el dominio final, ausencia de errores de consola,
fotos en AVIF/WebP, navegación por teclado y preferencia de movimiento reducido.
Medir PageSpeed sobre el dominio publicado: localhost no representa red móvil,
CDN ni métricas de usuarios reales. Las métricas de campo requieren tráfico.

Si una publicación falla, conservar el último deploy correcto. Para recuperar
una versión anterior, revertir el commit problemático mediante un nuevo commit
y ejecutar el workflow; no borrar el historial. No cambiar DNS por un fallo de build.

Pendiente externo: configuración de la cuenta GitHub, DNS, certificado, deploy
remoto y verificaciones de Google. Esta preparación local no acredita esos pasos.
