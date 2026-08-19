# CRM-Jorge — Publicar versión 6.7

## ⚠️ Importante: probá esta versión antes de darla por buena

Se me cayó la herramienta con la que normalmente verifico el código antes de
entregártelo, así que esta entrega no pasó ese control automático (sí la
revisé a mano). Cuando la subas, entrá y probá estas 4 cosas antes de seguir
trabajando: que la app abra y aparezca el login, el botón "+", la pestaña
Gira, y la ficha de un cliente. Si algo no abre, avisame y lo corrijo.

Solo por las dudas: **antes de subir, en Config → Exportar backup**, guardate
un respaldo. Es un minuto y te deja tranquilo.

## Subir a GitHub

Borrá de Descargas los `app.js` / `index.html` / `estilos.css` viejos.
Después: repo → **Add file → Upload files** → arrastrá los 3 archivos sueltos
→ confirmá el reemplazo → Commit changes. Ctrl+Shift+R para verificar que
diga **versión 6.7**.

---

## 4. Por qué se te borraba la configuración (lo importante)

**Lo encontré, y no era casualidad.** El problema no es "la actualización":
es una condición que se dispara justo cuando recargás la app con caché nuevo
(o sea, después de cada actualización) y encima la conexión viene lenta.

Lo que pasaba, en criollo: al abrir, la app arranca con la configuración de
fábrica escrita en el código, y enseguida se la reemplaza por la tuya cuando
baja de la base de datos. Pero había un temporizador de seguridad: si en 8
segundos no bajó todo, arranca igual. Si tu configuración no llegó a bajar en
esos 8 segundos, la app quedaba con la de fábrica en memoria — y entonces
corrían unas rutinas de mantenimiento que **guardaban esa configuración de
fábrica en la base, encima de la tuya**. Ahí perdías los mensajes, los links
de catálogo, los tipos de negocio que habías borrado y las marcas de freezer.

Tenías razón en preocuparte: era exactamente el tipo de falla que podía
escalar a algo más grave.

**Lo que hice (tres capas, no una):**

1. **Un candado**: ahora la app marca explícitamente cuándo tu configuración
   bajó de verdad de la base. Mientras eso no pase, **ninguna escritura de
   configuración sale** — prefiere no guardar antes que pisarte los datos.
2. **Las rutinas de mantenimiento ya no vuelcan la configuración entera.**
   Antes, para cambiar un solo dato, reescribían todo. Ahora cada una escribe
   únicamente el campo que le corresponde.
3. **Esas rutinas no corren si la configuración no cargó**, así tampoco tocan
   contactos por error.

Además, si tocás "Guardar" en Config en un momento en que todavía no cargó,
te va a avisar con un cartel ("esperá unos segundos y volvé a guardar") en
vez de fallar en silencio y hacerte creer que guardaste.

**Ojo con esto:** el arreglo evita que se vuelva a romper de acá en adelante,
pero no puede recuperar lo que ya se perdió. Cargá una última vez los
mensajes, los links y los catálogos — esta vez deberían quedar.

---

## 1. Flecha para pasar al día siguiente (Gira)

Al lado de ▲▼ ahora hay un **▶**. Lo tocás y esa parada se va al día
siguiente, sin entrar a ese día ni buscarla. Si cae sábado o domingo, se corre
solo al lunes. Está en las dos vistas (lista y tarjetas).

## 2. "Ver en el mapa" desde la ficha

Botón nuevo en la ficha del cliente (vendedor y admin). Abre una ventanita con
la **dirección en grande** arriba y un mini-mapa marcando el punto — sin
sacarte de donde estabas. Abajo tiene un botón para abrirlo en Google Maps si
querés que te lleve hasta ahí.

## 3. Sucursales desde el botón "+"

Cambió como pediste: ahora el "+" pregunta primero **"Local nuevo"** o
**"Sucursal de un negocio que ya tengo"**. Si elegís sucursal: buscás el
negocio principal, ponés nombre y dirección, y te ofrece "Estoy en el local"
para marcar el GPS ahí mismo. El resto (rubro, productos, zona, vendedor,
teléfono) se hereda solo de la casa central.

En el mapa aparece como punto más chico del color de la casa central, y al
tocarlo dice "Sucursal de ..." con el botón para ver la ficha.

> El campo "Es sucursal de" que había puesto en el formulario de edición sigue
> estando, por si necesitás vincular un local que ya cargaste antes.

---

## Pendiente de tu lado

- Cargar los mensajes de WhatsApp, el de franquiciados y los links de catálogo
  (última vez).
- Horarios / CUIT / condición impositiva de cada cliente, para el export de facturación.
- Asignar Mañana/Tarde a las paradas de la Gira.
