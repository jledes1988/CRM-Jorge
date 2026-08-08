# CRM-Jorge — Publicar esta entrega (arregla la pantalla negra del mapa)

## Por qué se puso negra la pantalla del mapa de Gira

Tu `app.js` y tu `index.html` en GitHub quedaron de versiones distintas: subiste
el `app.js` nuevo pero el `index.html` viejo (le falta el bloque del mapa que
`app.js` necesita). No es nada roto — solo hay que subir los 3 archivos de
esta carpeta **juntos**, en la misma subida, para que queden sincronizados.

## Paso 0 · Limpiar el repo (una sola vez)

En GitHub, entrá a cada uno de estos dos archivos y borralos (ícono de tacho
arriba a la derecha del archivo → Commit):

- `INDEX~1.HTM`
- `estilos_1.css`

Son copias duplicadas que no usa la app — no van a faltar.

## Paso 1 · Subir los 3 archivos

1. Antes de descargar estos 3 archivos, revisá tu carpeta de Descargas y
   borrá cualquier `app.js`, `index.html` o `estilos.css` viejo que tengas
   ahí (así el navegador no te guarda el nuevo como "app (1).js").
2. Descargá los 3 de esta entrega.
3. En `https://github.com/jledes1988/CRM-Jorge` → **Add file → Upload files**.
4. Arrastrá los 3 archivos **juntos, sueltos** (no una carpeta): `app.js`,
   `index.html`, `estilos.css`.
5. GitHub te va a avisar que esos 3 nombres ya existen y se van a reemplazar
   — es lo que tiene que pasar.
6. Commit changes.

## Paso 2 · Verificar

Refrescá `https://jledes1988.github.io/CRM-Jorge` con Ctrl+Shift+R (o
desinstalá y reinstalá el acceso directo en el celular). En el login o en
Config → Debug tiene que decir **versión 6.2**. Probá el botón "🗺 Mapa" en
Gira — ya no debería ponerse negro.

## Qué trae esta versión (6.2)

- Fuentes de prospección editables (Config → Administrador de catálogos).
  "Instagram" pasó a llamarse "Redes Sociales"; se sumó "Franquicia".
- Redes Sociales / WhatsApp ya no piden confirmar GPS al terminar la visita.
- Mensaje para franquiciados (Config) — tiene un texto de arranque, editalo.
- Auditoría de contactos (Config): elegís un filtro y te muestra quién no
  tiene ese dato cargado, o tiene un valor que ya no existe en la lista.
- "Sin gestión" → botón "+ Gira" con selector de fecha.
- Puntos dorados en el mapa para clientes que acordaron freezer pero
  todavía no está activo.
- Recorrido: un punto cada 2.5 minutos (antes 5).
- Mapa de Gira en la pestaña Gira (vendedor) y en Mapa (admin/gerente),
  hasta 8 días para adelante.

## Pendiente de tu lado

- Mensajes de WhatsApp por etapa (Config): reescribilos, quedaron en blanco.
- Texto final del mensaje de franquiciados.
