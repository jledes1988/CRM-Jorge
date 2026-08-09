# CRM-Jorge — Publicar versión 6.3

## Antes de subir

Revisá tu carpeta de Descargas y borrá cualquier `app.js`, `index.html` o
`estilos.css` viejo que tengas ahí, así el navegador no te guarda los
nuevos como "app (1).js" y terminás subiendo el que no es.

## Subir a GitHub

1. `https://github.com/jledes1988/CRM-Jorge` → **Add file → Upload files**
2. Arrastrá los 3 archivos de esta carpeta **sueltos** (no la carpeta entera):
   `app.js`, `index.html`, `estilos.css`
3. GitHub va a avisar que esos 3 nombres ya existen y se reemplazan — es lo
   que tiene que pasar
4. Commit changes

## Verificar

Ctrl+Shift+R en `https://jledes1988.github.io/CRM-Jorge` (o reinstalar el
acceso directo en el celular). Login o Config → Debug tiene que decir
**versión 6.3**.

## Qué trae esta versión (6.3)

- **Mapa de Gira: botón para cerrar.** Antes quedaba atrapado sin poder
  volver a la lista — ya tiene un botón "✕ Cerrar mapa" siempre visible
  arriba del mapa.
- **Tarjetas y renglones de Gira con color de etapa.** Cada parada tiene
  ahora un borde de color a la izquierda con el color de su etapa del
  embudo (el mismo que usás en el resto de la app), para que puedas
  reordenar de un vistazo poniendo primero lo más importante.
- **Vista semanal de Gira.** Botón "📅 Ver semana completa" arriba de la
  grilla de días: muestra Lunes a Viernes uno al lado del otro, cada uno
  con sus paradas separadas en Mañana / Tarde / Sin horario. Las tarjetas
  son mínimas (nombre + local) a propósito, para chequear de un vistazo
  toda la semana. Tocando el botón "AM/PM/—" de cada tarjeta vas rotando
  el horario asignado (sin horario → mañana → tarde → sin horario).
- **Color de "Acordó freezer" corregido.** Antes era el mismo dorado que
  la etapa "Contactado" y no se distinguían en el mapa. Ahora es rosa/magenta
  y está agregado a la referencia de colores debajo del mapa.

## Pendiente de tu lado

- Mensajes de WhatsApp por etapa (Config): reescribilos si todavía no lo
  hiciste.
- Texto final del mensaje de franquiciados (Config).
- Para que la vista semanal sea útil, andá tocando el botón AM/PM de cada
  parada para asignarle mañana o tarde — es manual, no se adivina solo.
