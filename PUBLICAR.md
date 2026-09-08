# CRM-Jorge — Versión 7.9

**Solo cambió `app.js`.**

> Si todavía no cargaste las reglas de Firestore de `REGLAS-DEUDAS.txt`,
> hacelo antes: sin eso el módulo de deudas no guarda nada.

---

## 1 · Cuándo viene por el resto

Esto era lo que faltaba para tu caso: paga la mitad al bajar la mercadería y la
otra mitad a la semana.

**Al cargar el pedido**, si elegís "Cobré una parte" o "No cobró nada",
aparece un campo **"Cuándo viene por el resto"**, con el lunes siguiente ya
puesto por defecto.

**Al registrar un pago** en la cuenta corriente, lo mismo: si queda saldo, te
pregunta qué día vuelve.

**Después el sistema te lo cobra a vos:**

- El día que prometió, el recordatorio de HOY dice **"N vienen a pagar HOY"**.
- Si pasó y no pagó, ese cliente sube **al primer lugar** del panel con el
  cartel rojo **"PROMETIÓ PAGAR EL 12/9 Y NO PAGÓ"**.
- El orden del panel es: primero los que rompieron la promesa, después los que
  vienen hoy, y recién ahí por monto.
- Cuando queda en cero, el compromiso se borra solo.

---

## 2 · No se baja mercadería con saldo

Tu regla, metida en dos puntos del camino:

**Al abrir el pedido**, si el cliente debe, te frena con el monto y la fecha
que había prometido (y te dice si esa promesa ya venció). Si cancelás, te
lleva directo a su cuenta corriente para cobrarle.

**Al guardar**, si además le vas a sumar deuda nueva, te avisa cuánto va a
quedar debiendo en total antes de confirmar.

> Lo dejé como aviso fuerte y no como bloqueo total, porque vos mismo
> describiste el caso donde sí le bajás: te paga la mitad en el momento. Con
> el aviso la decisión es consciente, no un descuido. Si preferís que sea
> imposible, lo cambio.

---

## 3 · Aviso de retiro del freezer

Cliente con **freezer entregado** que lleva más de 45 días sin pasar un
pedido: aparece en HOY como **"N freezers para retirar"**.

Adentro, agrupados por barrio, cada uno con el N° y la marca del equipo, hace
cuántos días que no compra, y **si además debe plata**. Cuatro botones:
**+ Gira para retirar**, **Visitar**, **WhatsApp** y **Ya lo retiré**.

Usa el mismo plazo de 45 días que la regla de recaída — se cambia desde Config
y las dos cosas se mueven juntas, porque son la misma decisión comercial.

**Hoy no te va a aparecer ninguno**, y está bien: tus cinco freezers activos
se entregaron entre hace 6 y 18 días.

---

## ⚠ Un bug que encontré simulando, y que te está afectando ahora

Al probar el aviso de retiro contra tu backup me topé con esto:

**Coco loco, Di Navarro y Despensa Hidalgo tienen freezer nuestro entregado el
31/8, el 2/9 y el 28/8** — hace días, no meses. Pero la regla de los 45 días
los contaba desde su **fecha de ingreso** (julio), así que la 7.7 los mandó de
vuelta a prospecto **una semana después de haberles instalado el equipo**.

Estaba mal y era mío. Ahora la regla cuenta así:

1. Su último pedido.
2. Si nunca compró, **desde que se le puso el freezer** — instalar un equipo es
   empezar de cero, no se puede castigar por lo de antes.
3. Si tampoco hay freezer, la fecha de ingreso.

Verifiqué que con el arreglo los tres **se salvan**, y que Ypf sabatini
(último pedido 30/6, sin freezer) sigue cayendo como corresponde.

> **Revisá en qué etapa te quedaron esos tres.** Si están en Negociación, son
> clientes tuyos con el freezer puesto: pasalos a Cliente Activo a mano. De
> acá en adelante no vuelve a pasar.

---

## Probá esto apenas subas

1. Tomá un pedido de un cliente **que deba plata** → tiene que frenarte antes
   de dejarte entrar.
2. En un pedido nuevo: **"Cobré una parte"** → poné un monto → fijate que
   aparezca **"Cuándo viene por el resto"** → guardá.
3. Cambiá esa fecha a ayer (Cuenta corriente → Cobrar → poné $1 y fecha de
   ayer) y volvé a HOY: tiene que decir **"1 rompió la promesa"** y ese
   cliente ir primero en el panel.
4. **Coco loco, Di Navarro y Despensa Hidalgo**: revisá su etapa y corregila
   si hace falta.

---

## Tus pendientes

- Definir el **Pote Tutto 3 Lts** ($9.900 provisorio).
- Datos de los clientes (CUIT, condición impositiva, horarios).
- Segundas visitas.
