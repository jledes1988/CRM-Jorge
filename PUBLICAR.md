# CRM-Jorge — Publicar versión 6.6

## Antes de subir

Borrá de tu carpeta de Descargas cualquier `app.js`, `index.html` o `estilos.css` viejo.

## Subir a GitHub

1. `https://github.com/jledes1988/CRM-Jorge` → **Add file → Upload files**
2. Arrastrá los 3 archivos de esta carpeta **sueltos**: `app.js`, `index.html`, `estilos.css`
3. Confirmá el reemplazo → Commit changes

## Verificar

Ctrl+Shift+R en `https://jledes1988.github.io/CRM-Jorge`. Login o Config → Debug tiene que decir **versión 6.6**.

## Qué trae esta versión (6.6)

- **Recorrido GPS: punto al abrir la app.** Además del punto periódico, ahora
  cada vez que el vendedor vuelve a abrir o mirar la app se marca un punto al
  toque — antes, si abría recién al llegar al local, todo el trayecto del medio
  quedaba sin registrar.
- **Sucursales de un mismo negocio.** En el formulario de editar contacto hay
  un campo nuevo "Es sucursal de": buscás por nombre entre los contactos ya
  cargados y elegís cuál es la casa central. En la ficha de cada uno aparece
  el vínculo (sucursal de / lista de sucursales) con links directos. En el
  mapa, la sucursal se ve con un punto más chico del color de la casa central
  (salvo que tenga su propio estado de freezer, que manda primero).

## De la entrega anterior (6.5), ya corregido

- Orden de la Gira (▲▼) sin abrir ventanas de más.
- "Sin gestión" ya no cierra el panel al agregar a la gira — cartel de confirmación y listo.
- Filtro "Freezer pendiente" en el mapa.
- Cliente con freezer distinguido (celeste con borde verde).

## Pendiente de siempre

- Mensajes de WhatsApp por etapa y mensaje de franquiciados (Config): texto final.
- Cargar horarios/CUIT/condición impositiva en cada cliente antes de exportar para facturación.
- Ir asignando Mañana/Tarde a las paradas de la Gira.
