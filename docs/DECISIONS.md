# Registro de decisiones

Baseline documental aprobada el 25 de agosto de 2026. Esta fecha representa la aprobación del registro actual y no necesariamente la fecha histórica en la que se tomó cada decisión.

Este registro recoge únicamente decisiones o restricciones consolidadas que condicionan el mantenimiento del proyecto. Describe lo que puede observarse en el repositorio y evita atribuir motivaciones históricas no documentadas.

Estados utilizados:

- **Consolidada**: aplicada de manera consistente y relevante en la implementación actual.
- **Confirmada para mantenimiento**: además de estar reflejada en el código, debe preservarse durante futuras modificaciones.
- **Temporal documentada**: estado explícitamente conservado, pendiente de una decisión editorial posterior.

## DEC-001 — Arquitectura estática sin build

**Estado:** Confirmada para mantenimiento.

**Decisión observable:**
La web se implementa mediante documentos HTML independientes, una hoja CSS compartida y JavaScript nativo. No utiliza framework, proceso de build ni gestor de paquetes.

**Evidencia en el repositorio:**

- Páginas `*.html` en la raíz.
- `css/styles.css`.
- `js/main.js`.
- `start-local.bat`.
- Ausencia de manifiestos de paquetes y configuración de build.

**Consecuencia práctica:**
Los cambios deben realizarse directamente sobre HTML, CSS y JavaScript. No debe incorporarse un framework, compilador, generador, gestor de paquetes o nueva capa arquitectónica sin autorización explícita.

**Razonamiento histórico:** no documentado.

## DEC-002 — Recursos locales y ausencia de dependencias frontend

**Estado:** Confirmada para mantenimiento.

**Decisión observable:**
Los estilos, scripts, imágenes, logotipos y tipografías utilizados por la web se resuelven localmente o mediante capacidades nativas del navegador. Los iconos funcionales se representan con SVG inline.

**Evidencia en el repositorio:**

- Referencias a `css/styles.css`, `js/main.js` e `img/` desde los HTML.
- Pila tipográfica del sistema en `css/styles.css`.
- SVG inline en CTA, proceso, carrusel y acceso a WhatsApp.
- Ausencia de CDN, imports de paquetes o librerías externas.

**Consecuencia práctica:**
Deben reutilizarse los recursos y capacidades existentes. No se añadirán dependencias, fuentes remotas, librerías de iconos o servicios frontend sin autorización explícita.

**Razonamiento histórico:** no documentado.

## DEC-003 — Navegación multipágina mediante rutas relativas

**Estado:** Consolidada.

**Decisión observable:**
Cada área principal y cada detalle de plan dispone de su propio documento HTML. La navegación se realiza con rutas relativas y fragmentos.

**Evidencia en el repositorio:**

- Cabecera repetida en los HTML activos.
- Enlaces entre `index.html`, `quienes-somos.html`, `planes.html` y `contacto.html`; las páginas `proyecto.html` y `cero-a-seis-meses.html` se retiraron definitivamente de la V1.
- Enlaces desde `planes.html` a los cuatro documentos `plan-*.html`.
- Regreso desde cada detalle a `planes.html#planes-disponibles`.

**Consecuencia práctica:**
Debe preservarse la validez de las URL actuales. Los cambios en elementos compartidos de navegación deben aplicarse de forma coherente a todas las páginas afectadas.

**Razonamiento histórico:** no documentado.

## DEC-004 — Responsive basado en la cascada CSS existente

**Estado:** Confirmada para mantenimiento.

**Decisión observable:**
El diseño adapta grids, cabecera, navegación, CTA, tarjetas y contenidos mediante múltiples media queries dentro de `css/styles.css`.

**Evidencia en el repositorio:**

- Uso extendido de `clamp()`, grids flexibles y anchos máximos.
- Media queries entre 360 y 1.100 píxeles.
- Navegación horizontal desplazable hasta 820 píxeles.
- Navegación en dos columnas hasta 480 píxeles.
- Variantes móviles específicas para tarjetas, planes, perfiles y CTA.

**Consecuencia práctica:**
Toda modificación visual debe conservar el comportamiento actual en escritorio, tableta y móvil. No deben consolidarse o reemplazarse los breakpoints como parte de tareas no relacionadas.

**Razonamiento histórico:** no documentado.

## DEC-005 — Accesibilidad y movimiento reducido como parte del comportamiento

**Estado:** Consolidada.

**Decisión observable:**
La implementación incorpora navegación al contenido, foco visible, semántica HTML, etiquetas ARIA y adaptación a preferencias de movimiento reducido.

**Evidencia en el repositorio:**

- `.skip-link` en las páginas activas.
- Reglas `:focus-visible` en `css/styles.css`.
- `aria-labelledby`, `aria-label`, `aria-current` y `aria-hidden` en los HTML.
- `@media (prefers-reduced-motion: reduce)` en `css/styles.css`.
- Consulta de `prefers-reduced-motion` en `js/main.js`.

**Consecuencia práctica:**
Los componentes nuevos o modificados deben mantener navegación por teclado, foco perceptible, nombres accesibles, semántica adecuada y una alternativa sin movimiento.

**Razonamiento histórico:** no documentado.

## DEC-006 — Conservación del contenido editorial oculto

**Estado:** Temporal documentada.

**Decisión observable:**
Determinados enlaces y secciones permanecen en el código, pero están fuera de la experiencia visible mediante `hidden` o reglas CSS específicas.

**Evidencia en el repositorio:**

- Regla global `[hidden]` en `css/styles.css`.
- Secciones con `hidden` en `index.html` y `planes.html`.

**Consecuencia práctica:**
El contenido oculto no debe eliminarse, publicarse ni utilizarse como patrón general sin una petición editorial explícita. Las modificaciones cercanas deben preservar su estado de visibilidad.

**Razonamiento:**
El carácter temporal de la ocultación está documentado. El criterio editorial concreto y la condición para volver a publicar el contenido son TBD.

## DEC-007 — Separación entre implementación activa y material auxiliar

**Estado:** Consolidada.

**Decisión observable:**
El repositorio diferencia páginas activas, código histórico y documentación auxiliar.

**Evidencia en el repositorio:**

- Páginas vigentes en la raíz.
- Documentos históricos en `deprecated/`.
- `references/` y `outputs/` excluidos mediante `.gitignore`.
- `CONTENT-MAP.md` como mapa editorial separado del código.

**Consecuencia práctica:**
`deprecated/` no debe utilizarse como definición del comportamiento vigente. Los archivos ignorados no se modificarán salvo petición expresa. Ante discrepancias, prevalece la implementación activa.

**Razonamiento histórico:** no documentado.
