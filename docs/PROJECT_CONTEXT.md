# Contexto del proyecto

## Propósito observable

NA CASA presenta un servicio de acompañamiento profesional a familias durante la crianza y el desarrollo infantil. El contenido pone el foco en la observación de la vida cotidiana, el trabajo dentro del hogar y la construcción de estrategias adaptadas a cada familia.

El sitio busca:

- Explicar el enfoque y la identidad de NA CASA.
- Presentar a las personas que están detrás del proyecto.
- Exponer modalidades, planes, horarios y tarifas.
- Facilitar el contacto mediante formulario y WhatsApp.
- Generar confianza mediante contenido explicativo y experiencias de familias.

## Naturaleza y alcance

La implementación es una web estática multipágina en español. Cada página es un documento HTML independiente que carga `css/styles.css` y `js/main.js`.

No existen:

- Framework de frontend.
- Sistema de plantillas.
- Router del lado del cliente.
- Proceso de build.
- Gestor de paquetes.
- CMS o capa de datos.
- API o backend incluidos en el repositorio.
- Suite automatizada de pruebas.

La cabecera, la navegación, el pie y el acceso flotante a WhatsApp están repetidos en los documentos HTML.

## Publicación conocida

- URL pública confirmada: [https://sergiootero15.github.io/na-casa-web-v2/](https://sergiootero15.github.io/na-casa-web-v2/)
- La web se publica mediante GitHub Pages.
- La rama, configuración o mecanismo exacto que origina el despliegue no está documentado dentro del repositorio y permanece como TBD.

## Mapa de páginas activas

| Ruta | Función actual |
|---|---|
| `index.html` | Inicio: propuesta de valor, origen, diferenciación, proceso, experiencias y CTA. |
| `quienes-somos.html` | Presentación del equipo, perfiles y enfoque profesional compartido. |
| `proyecto.html` | Origen, principios, metodología, identidad y presentación general del proyecto. |
| `planes.html` | Catálogo de planes, modalidades, contenido incluido y tarifas. |
| `plan-bienvenida-diurno.html` | Detalle del Plan Bienvenida Diurno. |
| `plan-bienvenida-nocturno.html` | Detalle del Plan Bienvenida Nocturno. |
| `plan-creciendo-diurno.html` | Detalle del Plan Creciendo Diurno. |
| `plan-creciendo-nocturno.html` | Detalle del Plan Creciendo Nocturno. |
| `cero-a-seis-meses.html` | Página de acompañamiento presentada actualmente como “6 meses a 6 años”. |
| `contacto.html` | Información de contacto, formulario y acceso a WhatsApp. |

En este documento, “activa” significa que la página existe en la raíz y carga los recursos compartidos. No implica que esté visible actualmente en la navegación principal.

## Navegación y flujos

### Navegación principal

Todas las páginas contienen enlaces a:

- Inicio.
- Quiénes somos.
- Proyecto.
- Planes.
- 6 meses a 6 años.
- Contacto.

`css/styles.css` oculta actualmente los enlaces de Proyecto y “6 meses a 6 años”. El HTML y sus estados activos se conservan.

Las páginas de detalle de planes mantienen Planes como ubicación activa mediante `aria-current="location"` y ofrecen un enlace de regreso a `planes.html#planes-disponibles`.

### Flujos principales

1. Inicio → Quiénes somos, Planes o Contacto.
2. Planes → selección de etapa y modalidad → detalle del plan.
3. Detalle del plan → Contacto o WhatsApp.
4. CTA editoriales → Contacto, Planes o WhatsApp.
5. Índice interno de Inicio → secciones de la misma página.

Algunas secciones y enlaces permanecen en el código con `hidden`. No forman parte del recorrido visible actual, aunque se conservan como contenido editorial.

## Contenido y funcionalidades existentes

### Contenido

- Presentación del enfoque de acompañamiento familiar.
- Explicación del hogar como contexto de observación y trabajo.
- Perfiles de dos integrantes del equipo.
- Cuatro planes agrupados por etapa y modalidad diurna/nocturna.
- Horarios, objetivos, contenido incluido y precios.
- Servicios y bloques editoriales adicionales conservados ocultos.
- Carrusel de cinco experiencias en Inicio.
- Formulario de contacto.
- CTA y acceso flotante a WhatsApp.

### Funcionalidad JavaScript

`js/main.js` contiene únicamente:

- Activación de la clase `is-scrolled` en la cabecera al superar 20 píxeles de desplazamiento.
- Controles anterior/siguiente del carrusel de experiencias.
- Ocultación de los controles cuando no existe desbordamiento horizontal.
- Respeto a `prefers-reduced-motion` al desplazar el carrusel.

El contenido principal, la navegación y los enlaces siguen disponibles sin JavaScript.

## Estado editorial conocido

Los siguientes estados están documentados directamente mediante comentarios, atributos o contenido visible:

- Parte de la navegación y varias secciones están ocultas temporalmente.
- Las experiencias de Inicio están marcadas como contenido de mockup pendiente de validación.
- Los perfiles, nombres, trayectoria y fotografía del equipo contienen marcadores de validación.
- `img/equipo-na-casa-placeholder.svg` es un recurso provisional.
- Parte del posicionamiento profesional y de la información comercial está pendiente de confirmar.
- Algunas páginas contienen un número concreto de WhatsApp y otras conservan `34XXXXXXXXX`; el dato oficial no puede deducirse con certeza.
- `cero-a-seis-meses.html` mantiene diferencias entre su nombre, metadescripción y presentación visible.
- `CONTENT-MAP.md` refleja un mapa editorial parcial anterior y no describe por completo la estructura actual.
- `deprecated/` conserva seis documentos históricos con una navegación ya sustituida.

Estos puntos describen el estado observado. No constituyen autorización para corregir, eliminar, publicar u homogeneizar contenido.

## Recursos y documentación auxiliar

- `img/hero.jpg`: imagen principal de Inicio.
- `img/NA CASA LOGO_LOGO POSITIVO.png`: cabecera, favicon e identidad visual.
- `img/NA CASA LOGO_LOGO NEGATIVO.png`: recurso disponible sin uso observado en las páginas activas.
- `img/equipo-na-casa-placeholder.svg`: imagen provisional de Quiénes somos.
- Las capturas PNG de `img/` no tienen uso observado en las páginas activas.
- `references/`: documentos Word y PDF de apoyo editorial, ignorados por Git.
- `outputs/`: resultados auxiliares, ignorados por Git.
- `deprecated/`: código histórico rastreado por Git, fuera de la navegación activa.

## Límites técnicos actuales

- Los cambios comunes deben repetirse en las páginas afectadas porque no hay plantillas.
- Toda la presentación depende de una única hoja CSS y del orden de su cascada.
- No existe validación o automatización propia del proyecto.
- El formulario usa `method="post"` y `action="#"`; no existe procesamiento implementado en este repositorio.
- El mecanismo de despliegue no está documentado en los archivos actuales.

## TBD

- Rama, configuración y mecanismo exacto utilizado para publicar en GitHub Pages.
- Tratamiento real del formulario en el entorno desplegado.
- Número oficial y texto definitivo de WhatsApp.
- Perfiles, fotografía y testimonios autorizados para publicación.
- Ámbito geográfico, desplazamientos y condiciones comerciales pendientes.
- Responsable de validar y aprobar el contenido editorial.
- Navegadores y dispositivos que forman la matriz oficial de soporte.
