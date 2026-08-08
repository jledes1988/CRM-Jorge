# CRM-Jorge — Versión 6.2, cómo subirla

## Paso 1 · Subir los 3 archivos a GitHub

1. Entrá a `https://github.com/jledes1988/CRM-Jorge`
2. **Add file → Upload files**
3. Arrastrá `app.js`, `index.html` y `estilos.css` (los 3 juntos, de esta misma carpeta)
4. Abajo, en el mensaje de commit, poné algo como `v6.2`
5. **Commit changes**

GitHub Pages se actualiza solo en 1-2 minutos. No hace falta ningún otro paso.

## Paso 2 · Verificar que se publicó

1. Abrí `https://jledes1988.github.io/CRM-Jorge` (o refrescá si ya la tenías abierta — a veces conviene forzar recarga con Ctrl+Shift+R)
2. En la pantalla de login, o en Config → Debug, tiene que decir **versión 6.2**

## Qué trae esta versión

- **Fuentes de prospección editables** — Config → Administrador de catálogos → ahí podés agregar, renombrar o borrar las formas en que llega un contacto. "Instagram" pasó a llamarse "Redes Sociales" (los contactos viejos se migran solos, no perdés nada). Sumé "Franquicia" como opción nueva.
- **Redes Sociales / WhatsApp sin pedir GPS** — si cargás un prospecto con esa fuente, ya no aparece el cartel de "confirmá tu ubicación parado en el local".
- **Mensaje para franquiciados** — nuevo campo en Config con un texto de arranque. Se manda solo al tocar "Enviar WhatsApp" en un contacto con fuente Franquicia y etapa Contactado. Editalo con el texto final que quieras.
- **Auditoría de contactos (Config)** — elegís cualquier filtro (tipo de negocio, productos, competencia, freezer, ubicación, tránsito, fuente) y te muestra los contactos sin ese dato cargado, más los que quedaron con un valor que ya no existe en la lista.
- **"Sin gestión" → Gira** — cada contacto de ese panel ahora tiene un botón "+ Gira" con selector de fecha.
- **Puntos dorados en el mapa** — los clientes que acordaron freezer pero todavía no está activo (por firmar / por entregar) se ven en dorado, distinto del resto de las etapas.
- **Recorrido más fiel** — pasa de tomar un punto cada 5 minutos a cada 2.5 minutos (con más margen diario para que no se corte a media tarde).
- **Mapa de Gira** — en la pestaña Gira del vendedor, botón "🗺 Mapa" (solo si el día tiene paradas cargadas y está dentro de los próximos 8 días): muestra los puntos numerados en el orden de la ruta con una línea punteada. Admin y Gerente tienen lo mismo en la pestaña Mapa, eligiendo vendedor y fecha.
- **Filtros de Contactos (admin)** y **lista a ancho completo (vendedor)** — de la entrega anterior (6.1), ya publicadas.

## Pendiente de tu lado

- **Mensajes de WhatsApp por etapa** (Config): quedaron en blanco/default después de que se borraran los tuyos — entrá y volvé a escribir el texto de cada etapa.
- **Mensaje de franquiciados**: tiene un texto de arranque, reemplazalo por el definitivo cuando lo tengas.
