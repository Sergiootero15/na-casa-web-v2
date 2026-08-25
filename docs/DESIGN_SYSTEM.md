# Sistema de diseño existente

## Fuente de verdad

La implementación completa reside en `css/styles.css`. Este documento resume patrones consolidados y no sustituye la revisión de la cascada antes de modificar un componente.

Referencias representativas:

- `index.html`: hero, tarjetas, proceso, carrusel y CTA.
- `proyecto.html`: composición editorial y geometría de marca.
- `quienes-somos.html`: perfiles y layouts de equipo.
- `planes.html`: catálogo, tarifas y familias de planes.
- `plan-bienvenida-diurno.html`: estructura de detalle de plan.
- `contacto.html`: formulario y decoración tangram.

## Tokens existentes

### Paleta

| Variable | Valor | Uso observado |
|---|---:|---|
| `--color-background` | `#fffdfc` | Fondo general cálido. |
| `--color-surface` | `#ffffff` | Tarjetas, controles y superficies elevadas. |
| `--color-surface-alt` | `#eef6f8` | Secciones alternas y fondos suaves. |
| `--color-card-blue` | `#d7eaf4` | Tarjetas y composiciones azules. |
| `--color-card-wellbeing` | `#e7f0ec` | Tarjetas y secciones de bienestar. |
| `--color-primary` | `#2b6f9f` | Acciones, etiquetas y acentos principales. |
| `--color-primary-hover` | `#245d86` | Estado hover principal. |
| `--color-primary-deep` | `#173b57` | Titulares, fondos profundos y texto destacado. |
| `--color-sage` | `#527d72` | Acentos de modalidad y bienestar. |
| `--color-sage-soft` | `#79a79a` | Decoración y texto sobre fondos profundos. |
| `--color-human` | `#c98267` | Acento humano y geometría decorativa. |
| `--color-text` | `#24343d` | Texto general. |
| `--color-text-heading` | `#173b57` | Encabezados y texto enfatizado. |
| `--color-text-inverse` | `#ffffff` | Contenido sobre fondos oscuros. |
| `--color-border` | `#bfd2da` | Bordes y separadores. |
| `--color-focus` | `#2b6f9f` | Foco de teclado. |

También existen tokens derivados para cabecera translúcida, anillo de foco y sombra del color principal.

### Tipografía

`--font-body` y `--font-heading` usan la misma pila local:

`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

No se cargan fuentes web. Los encabezados se distinguen mediante escala, peso, interlineado y espaciado, no mediante otra familia.

Escalas principales:

- `h1`: `clamp(2.6rem, 6vw, 5rem)`, con ajustes específicos por hero.
- `h2`: `clamp(2rem, 4vw, 3.2rem)`.
- `h3`: base de `1.2rem`, con variantes de componente.
- Texto general: interlineado `1.65`.
- Etiquetas de sección: mayúsculas, peso alto y espaciado amplio entre letras.

### Espaciado y dimensiones

| Variable | Valor |
|---|---|
| `--container-max` | `1200px` |
| `--space-section` | `clamp(4rem, 8vw, 6rem)` |
| `--space-section-compact` | `clamp(2.5rem, 5vw, 4rem)` |
| `--space-card` | `clamp(1.25rem, 3vw, 1.75rem)` |
| `--gap-layout` | `clamp(1.25rem, 3vw, 2.625rem)` |
| `--control-height` | `50px` |
| `--header-height` | `76px` |

`.container` utiliza un ancho máximo de 1.200 píxeles y deja un margen lateral total mínimo de 2 rem.

### Radios y sombras

- `--radius-small`: `8px`.
- `--radius-medium`: `14px`.
- `--radius-large`: `20px`.
- `--radius-pill`: `999px`.
- `--shadow-small`: elevación suave para tarjetas y botones.
- `--shadow-medium`: elevación de hover, cabecera y elementos destacados.
- `--transition-fast`: `180ms ease`.

## Patrones visuales

### Secciones

La base es `.section`, acompañada cuando corresponde por:

- `.section--alternate`: fondo azul grisáceo suave.
- `.section--wellbeing`: fondo verde suave.
- `.section--deep`: fondo azul profundo y texto inverso.
- `.section--compact`: menor espaciado vertical.

Los heroes utilizan componentes propios por página, como `.home-hero`, `.project-hero`, `.about-hero`, `.plans-hero` y `.plan-detail-hero`. Comparten grandes titulares, composición responsive y acentos geométricos, pero no son intercambiables automáticamente.

### Encabezados editoriales

`.section-heading` controla ancho y separación. `.section-label` introduce la categoría editorial en mayúsculas. Algunos encabezados incorporan una línea azul con remate coral.

El contenido combina titulares breves, párrafos de ancho limitado y bloques editoriales en dos columnas.

### Tarjetas

Existen una base compartida y varias familias especializadas:

- `.card`: superficie, borde, radio, sombra y elevación en hover.
- `.difference-card`: diferencias del proyecto.
- `.service-card`: servicios y datos comerciales.
- `.plan-card`: catálogo de planes.
- `.experience-card`: testimonios en carrusel.
- `.about-profile`: perfiles del equipo.
- `.project-principle`: principios del proyecto.

Las variantes azules y verdes refuerzan agrupaciones o modalidades. Debe reutilizarse la familia correspondiente antes de crear una tarjeta nueva.

### Botones y enlaces

La base más extendida es `.button`, con variantes:

- `.button--primary`.
- `.button--secondary`.
- `.button--light`.
- `.button--outline-light`.
- `.button--sage`.

También permanece la familia `.btn`, utilizada por el formulario. La coexistencia de ambas denominaciones es una característica observada, no una invitación a crear una tercera familia ni a unificarlas sin autorización.

`.text-link` se utiliza para acciones editoriales menos prominentes. Los CTA suelen agruparse mediante `.home-actions`.

### CTA

Los CTA finales usan fondos profundos, contenido centrado y combinaciones de botón claro y botón contorneado. Las clases específicas incluyen `.home-final-cta`, `.project-final-cta` y `.plans-final-cta`.

El acceso flotante a WhatsApp utiliza verde propio del servicio, texto visible en escritorio y presentación circular solo con icono en pantallas menores.

### Elementos gráficos

La identidad visual utiliza:

- Formas geométricas inspiradas en tangram.
- Triángulos, rombos, cuadrados y círculos construidos con CSS.
- SVG inline para iconos funcionales o decorativos.
- Acentos azul, salvia y coral.
- Gradientes geométricos en heroes.
- Fotografía principal con formas superpuestas.

No existe una librería de iconos externa.

## Convenciones de clases

Se combinan:

- Utilidades globales: `.container`, `.section`, `.section-label`, `.button`.
- Variantes con `--`: `.section--deep`, `.card--blue`.
- Elementos con `__`: `.plan-card__pricing`, `.home-hero__content`.
- Namespaces por página o componente: `home-`, `project-`, `about-`, `plans-`, `plan-detail-`, `first-months-`.
- Estados JavaScript: `.is-scrolled`.
- Hooks de comportamiento mediante atributos `data-*`.

Esta convención es mayoritariamente tipo BEM, pero no es uniforme en todo el archivo. Las diferencias históricas no deben normalizarse durante cambios no relacionados.

Las clases `review-*`, selectores dirigidos a rutas concretas y reglas comentadas como temporales describen estados editoriales, no componentes reutilizables.

## Responsive design

La hoja utiliza múltiples breakpoints acumulados. No existe un único sistema de breakpoints que deba imponerse retroactivamente.

Comportamientos principales:

- Hasta 1.100/1.050/1.024 px: reducción de columnas en grids amplios.
- Hasta 900/820 px: layouts principales pasan a una columna.
- Hasta 820 px: la navegación se mantiene en una fila con desplazamiento horizontal; WhatsApp se convierte en botón circular.
- Hasta 700/640 px: tarjetas, procesos y contenidos comerciales pasan a una columna.
- Hasta 480 px: la cabecera apila logotipo y navegación; la navegación usa dos columnas.
- Existen ajustes puntuales en 767/768, 560, 420 y 360 px.
- Algunos componentes aplican reglas de escritorio desde 821 o 1.024 px.

Al modificar un componente deben revisarse todas sus apariciones dentro de media queries, no solo su regla base.

## Accesibilidad y movimiento

Patrones que deben preservarse:

- Skip link al contenido principal.
- Foco visible en enlaces, botones, inputs y textareas.
- Uso de `aria-labelledby` en secciones.
- `aria-label` en controles cuyo propósito no depende de texto visible.
- `aria-hidden="true"` en formas e iconos decorativos.
- Texto alternativo en imágenes con contenido.
- Imágenes decorativas con `alt=""`.
- Botones reales para controles interactivos.
- Carrusel identificable mediante roles, etiquetas y `aria-controls`.
- Elementos ocultos mediante el atributo `hidden`.
- Desactivación de animaciones y transiciones con `prefers-reduced-motion: reduce`.

## Principios de mantenimiento

1. Reutilizar tokens y componentes existentes antes de introducir nuevos valores.
2. Mantener la paleta, escala tipográfica, geometría y densidad visual actuales.
3. Añadir estilos dentro del bloque del componente o página correspondiente respetando la cascada.
4. No reorganizar `css/styles.css` como parte de una modificación funcional pequeña.
5. No tratar selectores aparentemente sin uso como eliminables sin comprobar `deprecated/` y estados ocultos.
6. Conservar las adaptaciones responsive y comprobar escritorio, tableta y móvil.
7. Mantener estructura semántica, navegación por teclado, foco y movimiento reducido.
8. No introducir fuentes, librerías de iconos ni recursos externos sin autorización.
9. No usar una inconsistencia aislada como precedente para componentes nuevos.
