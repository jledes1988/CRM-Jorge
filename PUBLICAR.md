# CRM-Jorge — Publicar versión 6.4

## Antes de subir

Borrá de tu carpeta de Descargas cualquier `app.js`, `index.html` o
`estilos.css` viejo, así no se guardan como "app (1).js" y subís el que no es.

## Subir a GitHub

1. `https://github.com/jledes1988/CRM-Jorge` → **Add file → Upload files**
2. Arrastrá los 3 archivos de esta carpeta **sueltos**: `app.js`, `index.html`, `estilos.css`
3. GitHub avisa que ya existen y se van a reemplazar — correcto
4. Commit changes

## Verificar

Ctrl+Shift+R en `https://jledes1988.github.io/CRM-Jorge`. Login o Config → Debug tiene que decir **versión 6.4**.

## Qué trae esta versión (6.4)

- **Exportar clientes para facturación** (Config → nueva tarjeta arriba de
  Auditoría): baja un Excel con negocio, dirección, localidad, provincia,
  teléfono, horarios, nombre y apellido del cliente, CUIT y condición
  impositiva. Los últimos 3 son campos nuevos — se cargan editando cada
  contacto (aparecen en una sección nueva "DATOS DE FACTURACIÓN" al
  final del formulario de edición). Como son datos nuevos, van a estar
  vacíos hasta que los cargues contacto por contacto.
- **Se sacó la leyenda "(solo lectura)"** que aparecía junto al nombre del
  Gerente en el panel lateral.
- **Auditoría de contactos: Barrio separado de Ciudad.** Antes "Barrio/Ciudad"
  tiraba prácticamente todos los contactos como "sin dato" porque el barrio
  solo se carga para los que están en Córdoba Capital — era normal que el
  resto no lo tuviera. Ahora son dos filtros separados: "Ciudad / Localidad"
  (aplica a todos) y "Barrio" (solo audita a los contactos de Córdoba Capital).
- **Variable `{vendedor}`** sumada en Config → Mensajes de WhatsApp, junto a
  `{nombre}`, `{negocio}`, `{ciudad}` y `{etapa}`. Se reemplaza por el nombre
  del vendedor asignado al contacto.
- **Vista semanal de Gira: división Mañana/Tarde siempre visible.** Antes
  las secciones solo aparecían si ya había algo etiquetado — ahora se ven
  siempre (con "— sin visitas —" si están vacías) para que sepas que tenés
  que ir tocando el botón AM/PM de cada tarjeta.

## De la entrega anterior (6.3), ya corregido

- Mapa de Gira con botón para cerrar.
- Color de etapa en las tarjetas de Gira.
- Color de "Acordó freezer" cambiado a rosa/magenta (ya no se confunde con "Contactado").

## Pendiente de tu lado

- Mensajes de WhatsApp por etapa y mensaje de franquiciados (Config): texto final.
- Cargar horarios/CUIT/condición impositiva en cada cliente antes de exportar para facturación.
- Ir asignando Mañana/Tarde a las paradas de la Gira (botón AM/PM en cada tarjeta).
