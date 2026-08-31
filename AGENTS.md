# AGENTS.md

## Alcance del repositorio

Este repositorio contiene una web estática multipágina ya existente. El código actual es la fuente principal de verdad. Las modificaciones deben ser incrementales y preservar la arquitectura, el comportamiento y la identidad visual vigentes. Conserva el contenido y los estados editoriales que queden fuera del alcance explícito de cada tarea.

## Estructura relevante

- `*.html`: páginas activas y detalles de planes.
- `css/styles.css`: variables, estilos globales, componentes y estilos específicos de página.
- `js/main.js`: sombra de la cabecera y controles del carrusel de experiencias.
- `img/`: imágenes, logotipos y recursos visuales locales.
- `deprecated/`: páginas históricas conservadas; no son páginas activas ni una referencia normativa.
- `references/` y `outputs/`: material auxiliar ignorado por Git. No modificarlo salvo petición expresa.
- `CONTENT-MAP.md`: mapa editorial parcial de una fase anterior; no prevalece sobre el código actual.

No hay framework, proceso de build, gestor de paquetes ni dependencias externas instaladas.

## Documentación del proyecto

- Consultar `docs/PROJECT_CONTEXT.md` antes de proponer o implementar cambios.
- Consultar `docs/DESIGN_SYSTEM.md` para cambios visuales.
- Consultar `docs/DECISIONS.md` antes de tomar decisiones de arquitectura, contenido, navegación o comportamiento.
- Actualizar `docs/DECISIONS.md` únicamente cuando se adopte una decisión duradera dentro del alcance solicitado.

## Ejecución local

Desde la raíz:

`py -m http.server 5500`

Abrir `http://127.0.0.1:5500/`.

En Windows también puede utilizarse `start-local.bat`.

## Convenciones existentes

### HTML

- Mantener páginas HTML independientes y enlaces relativos entre ellas.
- Conservar la estructura compartida de cabecera, navegación, pie y acceso a WhatsApp.
- Mantener `lang="es"`, metadatos, un título principal claro y la jerarquía semántica existente.
- Reutilizar `container`, `section`, variantes de sección, botones, tarjetas y patrones específicos ya presentes.
- Preservar skip links, atributos ARIA, textos alternativos y elementos decorativos ocultos a tecnologías de asistencia.
- No normalizar diferencias aisladas de formato entre páginas si la tarea no lo exige.

### CSS

- Reutilizar primero las variables declaradas en `:root` y las clases existentes.
- Respetar el orden de la cascada de `css/styles.css`; contiene capas globales, históricas y específicas de página.
- Seguir los prefijos de componente existentes, normalmente con estructura tipo BEM.
- No convertir selectores heredados o excepciones locales en convenciones nuevas.
- Mantener el comportamiento responsive existente y comprobar las reglas que afectan al componente antes de añadir estilos.

### JavaScript

- Mantener JavaScript nativo, sin librerías.
- Seguir el patrón actual de inicialización con `DOMContentLoaded`, comprobaciones defensivas y salida temprana cuando el componente no existe.
- Utilizar atributos `data-*` como hooks de comportamiento cuando corresponda.
- Preservar la mejora progresiva y el tratamiento de movimiento reducido.

## Reglas de trabajo

- Inspeccionar `git status` y el diff existente antes de modificar.
- Conservar todos los cambios del usuario y evitar operaciones destructivas de Git.
- No añadir dependencias, framework, build, generación de código o gestor de paquetes sin autorización explícita.
- No reorganizar carpetas, renombrar archivos ni efectuar refactorizaciones generales sin autorización.
- No eliminar ni publicar contenido marcado con `hidden` por iniciativa propia.
- No restaurar como activas las páginas de `deprecated/`.
- No editar archivos ignorados salvo que la tarea los incluya expresamente.
- Limitar cada cambio a la petición recibida.

## Validación mínima

Antes de terminar una tarea:

1. Servir la web localmente y abrir todas las páginas afectadas.
2. Comprobar enlaces relativos, fragmentos, recursos y ausencia de errores de consola.
3. Revisar el resultado en escritorio y en anchos representativos de 820, 640 y 480 píxeles cuando haya cambios visuales.
4. Verificar navegación por teclado, foco visible, etiquetas accesibles y movimiento reducido cuando corresponda.
5. Ejecutar `git diff --check`.
6. Revisar el diff completo y confirmar que solo contiene cambios solicitados.
