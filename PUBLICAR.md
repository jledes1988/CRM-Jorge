# CRM-Jorge — Versión 9.16 · Deudas sin tocar las ventas

**Solo cambió `app.js`.** Los otros dos son los mismos; van los tres juntos.
Para verificar: en el login y en Config > Debug tiene que decir **9.16 - 24/10/2026**.

---

## 1. "+ Cargar deuda" = no pagó el último pedido

Cargar una deuda a mano ya no es un cargo suelto: el sistema lo toma como que el
cliente **no pagó (todo) el último pedido entregado**.
- El pedido queda con el mismo total (las ventas no cambian) y baja lo cobrado.
  En Pedidos aparece con "debe $...".
- La deuda queda atada a ese pedido, con la fecha de la entrega.
- Antes de guardar se ve de qué pedido sale ("No pagó $30.000 del pedido del 16/10").
- Si el monto es más que lo cobrado del último pedido, sigue con el anterior.
- Si el cliente no tiene pedidos entregados en el sistema, queda como **saldo anterior**
  (avisa antes).

## 2. Corregir saldo con la administración (admin y gerente)

Botón **⚖ Corregir saldo** en Deudores y en la cuenta de cada cliente. Ponés el saldo que
dice la administración y el motivo (obligatorio), y el sistema arma la diferencia:

| Diferencia | Qué hace | ¿Cuenta como cobro? |
|---|---|---|
| **Suma** | No pagó (todo) el último pedido, igual que "Cargar deuda" | No |
| **Resta, entró un pago** | Pago con la fecha que elijas | **Sí** (Pagos e informe) |
| **Resta, no entró plata** | Ajuste (nota de crédito, redondeo, descuento) | No |

- El gerente puede corregir saldos; para todo lo demás sigue siendo solo lectura.
- En la cuenta, los movimientos corregidos llevan la etiqueta **"corrección"**, y queda en el
  historial quién lo hizo, el saldo de antes y el de después.
- Las ventas no se tocan nunca.

## 3. Deudas a mano viejas

En **Revisar deudas** (admin), las deudas cargadas a mano antes de esta versión tienen un
botón **Atar al pedido**: las pasa al último pedido entregado. El saldo no cambia.
Es opcional, una por una. Si alguna era un saldo de antes del sistema, dejala como está.

---

## Probado

310 pruebas en el navegador simulado, sin errores (35 nuevas).
