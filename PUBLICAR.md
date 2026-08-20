# CRM-Jorge — Publicar versión 6.8

Esta entrega **sí pasó todos los controles** (la anterior no había podido, por
la caída de la herramienta). Sintaxis correcta, ningún botón ni pantalla
faltante, y además probé la corrección de clientes **simulándola sobre tu
backup real** antes de entregártela.

## Subir a GitHub

Borrá de Descargas los `app.js` / `index.html` / `estilos.css` viejos.
Repo → **Add file → Upload files** → los 3 archivos sueltos → Commit.
Ctrl+Shift+R y verificá que diga **versión 6.8**.

---

## Lo nuevo de esta versión

### Los 39 contactos que estaban descolgados

Tenías 39 contactos con la etapa **"Cliente Activo"** en el embudo que por
dentro seguían marcados como prospecto. Por eso el dashboard te mostraba 17
clientes en vez de 56, y la exportación para facturación te iba a traer 14.

**Encontré por dónde se colaban:** cuando en la visita a un prospecto se
elegía "Cliente Activo" en el desplegable de etapa, se cambiaba la etapa pero
no se lo convertía en cliente. La conversión solo pasaba si además se tildaba
el casillero de "convertir". Casi todos los descolgados son de Pablo, así que
seguramente usó el desplegable sin tildar el casillero — un camino que la app
le dejaba usar mal.

Hice las dos cosas:

1. **Se corrigen los 39 automáticamente** la primera vez que entres como
   admin. Vas a ver un aviso "39 contactos pasaron a Cliente". Corre una sola
   vez y no toca a nadie más (los otros 198 prospectos quedan intactos).
2. **Se cerró la vía.** De ahora en más, elegir "Cliente Activo" por cualquier
   camino lo convierte en cliente, sin depender de que alguien se acuerde de
   tildar un casillero.

> Después de esto, tu tablero va a pasar de 17 a **56 clientes**. No es que
> aparecieron clientes nuevos: son los que ya tenías, contados bien.

### Lo que traía la 6.7 (va incluido acá)

- **Candado anti-pisada de configuración** — el arreglo grande del que
  hablamos: ninguna escritura de configuración sale hasta que la tuya haya
  bajado de la base, las rutinas internas escriben solo el campo que cambian,
  y te avisa si intentás guardar antes de tiempo.
- **Flecha ▶ en la Gira** para pasar una parada al día siguiente (probado:
  si cae viernes, salta solo al lunes).
- **"Ver en el mapa"** en la ficha, con la dirección en grande y mini-mapa,
  sin sacarte de donde estabas.
- **Sucursales desde el "+"**: elegís "Local nuevo" o "Sucursal", y en ese
  caso solo cargás negocio principal, dirección y GPS.

---

## Lo que vi en tu backup (para que lo tengas presente)

- **Mensajes y links**: los mensajes por etapa están en el texto de fábrica y
  los links de catálogo vacíos — eso es lo que se había perdido. El mensaje de
  franquiciados que escribiste **sí sobrevivió**. Cargá los otros una última
  vez; con el candado nuevo ya no se vuelven a borrar.
- **Catálogos sanos**: los 11 tipos de negocio, 4 marcas y 5 productos que
  dejaste están correctos. No los toqué.
- **Ubicaciones**: 108 de 254 contactos están en el mapa. Quedan **146 sin
  ubicación confirmada**, y 31 sin dirección cargada. Si querés apoyarte más
  en el mapa para armar las giras, ahí hay trabajo pendiente de campo.
- **Freezers**: 15 comodatos, ninguno entregado todavía (14 por firmar + 1 por
  entregar). Me confirmaste que es correcto. Tené en cuenta que hasta que no
  haya alguno en "activo", la barra sigue en 0 de 80 y el punto celeste de
  "cliente con freezer" no se ve en el mapa — no es un error.
- **Sin duplicados de teléfono.** La base está limpia en ese aspecto.

## Pendiente de tu lado

- Cargar mensajes por etapa y links de catálogo (última vez).
- Horarios / CUIT / condición impositiva de los clientes, para el export de
  facturación (hoy 0 de 56 lo tienen).
- Asignar Mañana/Tarde a las paradas de la Gira.
