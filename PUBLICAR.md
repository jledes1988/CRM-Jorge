# CRM-Jorge — Versión 8.2

**Van `app.js` y `index.html`.** `estilos.css` no cambió, pero lo dejé en la
carpeta para que subas los tres juntos y no haya dudas.

> ⚠ **Ojo con esto:** el `index.html` que tenías en Descargas **no era el de la
> app** — era de otro proyecto tuyo (Smarteeth, 398 KB). Si lo hubieras subido
> a GitHub, el CRM dejaba de abrir. Ya lo reemplacé por el bueno (15 KB). Si
> te aparece un `index.html` raro en Descargas más adelante, no lo subas.

---

## 1 · Gira para el administrador

**Ítem nuevo en el menú: "Gira".** Antes no existía — tenías Dashboard,
Contactos, Embudo, Visitas, Comodatos, Pedidos y deudas, Mapa, Informes y
Config, pero la gira era solo del vendedor.

Es la misma pantalla que usa el vendedor (semana Lun–Vie, mañana y tarde,
mapa, reordenar), con un **selector de vendedor arriba**. Elegís *Todos* y ves
todo, o elegís uno y ves solo su gira.

- **Sumar:** botón "+ Agregar" de cada día. Con un vendedor elegido, la lista
  te ofrece **solo los contactos de ese vendedor**, así no le metés un cliente
  de otro por error.
- **Sacar:** la × de cada parada, como el vendedor.
- Los días pasados los podés tocar vos (el vendedor no).

Verificado contra tu backup: con *Todos* son 414 paradas; con Jorge, 314; con
Pablo, 100.

---

## 2 · Agendar desde la ficha del cliente

Bloque **"EN LA GIRA"** en la ficha, arriba de Cuenta corriente. Está en la
ficha del vendedor **y** en la del admin.

Te muestra en qué días está agendado de hoy en adelante, con un botón **Sacar**
en cada uno, y abajo un campo de fecha con **Agendar**. Si elegís un sábado o
domingo lo corre al lunes solo, como en el resto de la app.

Las paradas de días donde ya registraste la visita dicen *"ya visitado"* y no
se pueden sacar: eso es historial, no plan.

---

## 3 · El bug de los perdidos

Confirmado y arreglado. En el Embudo del vendedor las solapas **"No Le
Interesa"** y **"Perdido"** estaban dibujadas y se podían tocar, pero la lista
se armaba con una función que **ya los excluía**. Tocabas la solapa y no
aparecía nada.

Ahora:

- Las dos solapas funcionan y **muestran el número al lado** (por ejemplo
  *"No Le Interesa (16)"*), así se ve de una que hay gente ahí.
- En **Contactos** hay un filtro nuevo, *Estado en el embudo*, con dos
  opciones: **ver los descartados junto al resto**, o **ver solo los
  descartados**. Por defecto siguen ocultos, para que la lista de todos los
  días no se llene.

**A vos te afecta ahora mismo:** como vendedor, Jorge tiene **17 contactos**
que no podía ver — 16 en "No Le Interesa" y 1 en "Perdido".

---

## 4 · Cobrar en la visita

Si el cliente debe plata, el paso **Venta** de la visita arranca con un cartel
rojo: **cuánto debe**, **hace cuántos días** que arrastra, y si había prometido
pagar, **qué día** — en rojo si esa promesa ya venció.

Dos botones: **Registrar el cobro** (el mismo que ya usabas, con monto parcial
y la fecha del próximo pago) y **Ver la cuenta**.

Al volver del cobro, el cartel se actualiza solo y **no perdés nada de lo que
habías cargado** en la visita. Si el cliente no debe nada, el cartel no
aparece.

Está en la visita a clientes **y** en la de prospectos.

---

## Probá esto apenas subas

1. **Admin → Gira** → elegí "Jorge" arriba → tenés que ver su semana. Sumale
   un cliente con "+ Agregar" y después sacalo con la ×.
2. **Vendedor → Embudo → "No Le Interesa"** → tienen que aparecer los 16.
3. **Contactos → Filtros → Estado en el embudo → "Ver solo los descartados"**.
4. Abrí la ficha de cualquier cliente → bloque **EN LA GIRA** → agendalo para
   mañana → volvé a entrar y fijate que figure.
5. Registrá una visita a un cliente **que deba plata** → el paso Venta tiene
   que arrancar con el cartel rojo → tocá "Registrar el cobro" → al volver el
   monto tiene que estar actualizado.

---

## Tus pendientes

- Definir el **Pote Tutto 3 Lts** ($9.900 provisorio).
- CUIT, condición impositiva y horarios de los clientes.
- Segundas visitas.
