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

- URL pública canónica confirmada: [https://www.somosnacasa.es](https://www.somosnacasa.es).
- El dominio raíz `https://somosnacasa.es` redirige a la variante canónica con `www`.
- La web se publica mediante GitHub Pages.
- La rama, configuración o mecanismo exacto que origina el despliegue no está documentado dentro del repositorio y permanece como TBD.

## Mapa de páginas activas

| Ruta | Función actual |
|---|---|
| `index.html` | Inicio: propuesta de valor, origen, diferenciación, proceso, experiencias y CTA. |
| `quienes-somos.html` | Presentación del equipo, perfiles y enfoque profesional compartido. |
| `planes.html` | Catálogo de planes, modalidades, contenido incluido y tarifas. |
| `plan-bienvenida-diurno.html` | Detalle del Plan Bienvenida Diurno. |
| `plan-bienvenida-nocturno.html` | Detalle del Plan Bienvenida Nocturno. |
| `plan-creciendo-diurno.html` | Detalle del Plan Creciendo Diurno. |
| `plan-creciendo-nocturno.html` | Detalle del Plan Creciendo Nocturno. |
| `contacto.html` | Información de contacto, formulario y acceso a WhatsApp. |

`proyecto.html` y `cero-a-seis-meses.html` se han retirado definitivamente y no forman parte de la V1.

## Navegación y flujos

### Navegación principal

Todas las páginas contienen enlaces a:

- Inicio.
- Quiénes somos.
- Planes.
- Contacto.

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
- Bloques editoriales adicionales conservados ocultos en Inicio.
- Carrusel de ocho experiencias reales de familias que han confiado en Marta a lo largo de su trayectoria profesional en Inicio.
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

- Varias secciones editoriales están ocultas temporalmente.
- Las ocho experiencias reales de familias que han confiado en Marta a lo largo de su trayectoria profesional están confirmadas para la V1.
- Los perfiles, nombres, trayectoria y fotografías del equipo están confirmados para la V1.
- Parte del posicionamiento profesional y de la información comercial está pendiente de confirmar.
- El número oficial de WhatsApp es `+34 686 826 958` (`34686826958` en los enlaces `wa.me`).
- `CONTENT-MAP.md` refleja un mapa editorial parcial anterior y no describe por completo la estructura actual.
- `deprecated/` conserva seis documentos históricos con una navegación ya sustituida.

Estos puntos describen el estado observado. No constituyen autorización para corregir, eliminar, publicar u homogeneizar contenido.

## Recursos y documentación auxiliar

- `img/hero.jpg`: imagen principal de Inicio.
- `img/NA CASA LOGO_LOGO POSITIVO.png`: cabecera, favicon e identidad visual.
- `img/NA CASA LOGO_LOGO NEGATIVO.png`: recurso disponible sin uso observado en las páginas activas.
- Las capturas PNG de `img/` no tienen uso observado en las páginas activas.
- `references/`: documentos Word y PDF de apoyo editorial, ignorados por Git.
- `outputs/`: resultados auxiliares, ignorados por Git.
- `deprecated/`: código histórico rastreado por Git, fuera de la navegación activa.

## Límites técnicos actuales

- Los cambios comunes deben repetirse en las páginas afectadas porque no hay plantillas.
- Toda la presentación depende de una única hoja CSS y del orden de su cascada.
- No existe validación o automatización propia del proyecto.
- El formulario usa `method="POST"` y un endpoint externo de Formspree confirmado y operativo; no existe backend propio en este repositorio.
- El mecanismo de despliegue no está documentado en los archivos actuales.

## TBD

- Rama, configuración y mecanismo exacto utilizado para publicar en GitHub Pages.
- Ámbito geográfico, desplazamientos y condiciones comerciales pendientes.
- Responsable de validar y aprobar el contenido editorial.
- Navegadores y dispositivos que forman la matriz oficial de soporte.
