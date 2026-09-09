# CRM-Jorge — Versión 8.1

**Solo cambió `app.js`.** `index.html` y `estilos.css` de la 8.0 quedan como
están.

> Las reglas de Firestore ya están publicadas (hoy 2:08 p.m.). No hay que
> tocar nada más ahí.

---

## 1 · Editar el pedido entero

Antes la pantalla de un pedido solo te dejaba **bajar** cantidades. Si te
olvidaste de sumarle algo, no había forma.

Ahora, adentro de cualquier pedido, botón **"Editar el pedido completo
(agregar productos)"**. Te reabre el formulario original con **todo lo que ya
tenía cargado**: productos, sabores, cajas y sueltos, materiales en comodato,
las notas y cómo lo habías cobrado. Agregás lo que falte y guardás.

**Se pisa el mismo pedido, no se crea uno nuevo.** El encabezado te avisa en
amarillo qué pedido estás editando.

**Lo que pasa con la deuda** — esto es lo que más cuidé:

- Si el pedido pasa de $100.000 a $150.000 y habías cobrado $40.000, la deuda
  de ese pedido pasa de $60.000 a $110.000. **No se duplica.**
- **Los pagos que el cliente ya hizo no se tocan nunca.** Si te había pagado
  $50.000 a cuenta, ese pago sigue ahí después de editar.
- Si al final lo cobrás entero, la deuda de ese pedido desaparece sola.
- Si borrás el pedido, su deuda se va con él (antes quedaba colgada).

Lo llegás desde **VENTAS → Pedidos**, desde **Pedidos y deudas** en el admin,
o desde el historial del cliente.

---

## 2 · La visita desde Embudo

Tenías razón y fue un olvido mío. En la 8.0 cambié la visita a **clientes**,
pero desde Embudo se usa la visita a **prospectos**, que es otra pantalla —
y esa quedó igual, con el monto suelto.

Ya está unificada. En la visita a prospecto, **SÍ** ahora te da **"Tomar el
pedido"**, abre el módulo con los productos y al guardarlo volvés a la visita
con el resumen verde. **No perdés lo que ya habías escrito**: las
observaciones, la etapa y la próxima visita quedan como las dejaste.

Saqué tres campos que ahora los resuelve el pedido:

- *Fecha de la venta* → es la del pedido.
- *Monto de la venta* → es el total del pedido.
- *Convertir a Cliente Activo* → pasa solo, porque cargar un pedido **es** lo
  que lo convierte en cliente.

Si marcás SÍ y no cargás el pedido, no te deja guardar y te avisa.

---

## Probá esto apenas subas

1. **Embudo** → entrá a un prospecto → Visita → escribí una observación → **SÍ**
   → "Tomar el pedido" → cargá algo → guardá. Tenés que volver a la visita
   **con la observación todavía escrita** y el resumen verde.
2. Guardá esa visita → el prospecto tiene que quedar en **Cliente Activo**.
3. **VENTAS → Pedidos** → entrá a ese pedido → **"Editar el pedido completo"**
   → sumale un producto → guardá.
4. **VENTAS → Deudores** → si había quedado debiendo, el monto tiene que
   reflejar el pedido nuevo, no el viejo ni los dos sumados.

---

## Tus pendientes

- Definir el **Pote Tutto 3 Lts** ($9.900 provisorio).
- CUIT, condición impositiva y horarios de los clientes.
- Segundas visitas.
- Revisar si los pedidos de antes de hoy se perdieron (VENTAS → Pedidos →
  Todo). Los que falten hay que volver a cargarlos.
