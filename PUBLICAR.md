# CRM-Jorge — Versión 9.9 · Cobro al entregar y 8 cambios más

**Solo cambió `app.js`.** Los otros dos son los mismos; van los tres juntos.
Para verificar: en el login y en Config > Debug tiene que decir **9.9 - 07/10/2026**.

---

## Lo más importante: el cobro se registra al entregar (puntos 7 y 9)

**Antes:** al *tomar* el pedido había que elegir "Cobré todo / una parte / nada",
cuando todavía no se sabía. Eso generaba deudores que no correspondían.

**Ahora:**
- **Tomar el pedido** no pregunta nada de cobro. Hasta que no recibe la mercadería,
  el cliente **no debe nada**.
- **Al marcar Entregado** te pregunta: **Cobró todo / Cobró una parte ($) / No pagó**,
  y si querés, cuándo paga el resto. Solo queda debiendo el que recibió y no pagó.
- **Cerrar la entrega** (antes "Marcar todo entregado"): una lista con todos los
  pedidos del día, cada uno viene en "Cobró todo" y cambiás solo los que no pagaron,
  pagaron una parte o **no se entregaron**. Un solo botón al final.
- Los pedidos que ya estaban tomados con la versión anterior vienen preseleccionados
  con lo que habías elegido en ese momento.

**Corregir después de la entrega:** en Entregas, abajo, está la lista
**"Entregados · últimos 14 días"** con un botón **Corregir**. Ahí cambiás las
cantidades (lo que faltó o se cambió) **y lo que de verdad cobró el repartidor**.
La deuda se recalcula sola:

| Ejemplo | Antes | Ahora |
|---|---|---|
| Entregado $100.000, no pagó. Faltaron $10.000. Paga $90.000. | Quedaba debiendo $10.000 y había que inventar un pago de $100.000 | Corregís a $90.000 → registrás el pago real de $90.000 → queda en 0 |
| Cobró $100.000 pero solo se entregaron $90.000 | No había forma | Queda **$10.000 a favor** del cliente (se ve en su cuenta en celeste) |

## Punto 8: clientes que figuraban como deudores sin deber

**Encontré la causa principal:** al corregir con "Ver / corregir" un pedido
**todavía no entregado**, la app le cargaba la deuda en ese momento. Si se había
tomado con "No cobro nada", el cliente quedaba deudor sin haber recibido nada.
**Corregido.**

Para limpiar lo que ya quedó mal: **Deudores → 🔍 Revisar deudas** (solo vos).
Te muestra cada deuda que no coincide con los pedidos y por qué:
- de un pedido que **todavía no se entregó** o que figura **no entregado**,
- de un pedido que **se borró**,
- **repetida**, o que **no coincide** con lo entregado menos lo cobrado.

Cada una se corrige con tu OK (o todas juntas). **Los pagos que registraste no se
tocan.** Las deudas cargadas a mano (sin pedido) aparecen aparte, para que las
revises vos.

## Punto 6: fecha de los pedidos corregidos

El pedido **conserva su fecha original** (no se mueve de día ni de mes) y debajo
dice **"Corregido el 9/10 por Jorge"**. La deuda de un pedido lleva la fecha de la
**entrega**, no la del día en que lo corregiste.

## Punto 1: mapa

- **Cliente activo:** celeste.
- **Cliente con freezer nuestro:** celeste con borde verde.
- Se sacó la referencia repetida "borde verde: freezer puesto".

## Punto 2: Pedidos y deudas, desde–hasta

En **Pedidos** y en **Pagos** hay un botón nuevo **Desde–hasta** con dos fechas.
Arranca del 1° del mes a hoy. También arreglé que, en tu perfil, tocar
Hoy / Esta semana / Este mes no actualizaba la lista.

## Punto 3: ventas por mes (solo administrador y gerente)

**Informes**, arriba de todo: gráfico de barras de los últimos 12 meses y la tabla
con lo vendido, pedidos, clientes y la variación contra el mes anterior.
- Cuenta como venta el pedido **entregado**, en el mes en que se **entregó**. Los tomados
  y los no entregados no suman.
- El mes en curso va más claro y no se compara en %, porque todavía no terminó.
- Tocando una barra ves el detalle de ese mes.
- Respeta el vendedor elegido arriba.

## Punto 4: comodatos

- **Marcar como firmado** → te ofrece tomar la **carga inicial** en ese momento
  (queda como pedido tomado).
- **Marcar como entregado** → si tiene la carga inicial tomada, te pregunta si se
  entregó también y abre la entrega (con el cobro). Freezer y pedido bajan juntos.
- Si llegás a la entrega sin carga inicial tomada, te ofrece tomarla.

## Punto 5: prospección martes y miércoles

- Se agregó al **miércoles** el bloque **14:00–16:00 "Prospección: búsqueda de
  clientes nuevos"** (el martes ya lo tenía). Se cambia en *Semana tipo*.
- El bloque de prospección ahora **se toca** (🔍 ›) y abre:
  - **+ Cargar un local nuevo**, y
  - los **prospectos para revisitar**: primero los que están en Negociación, después
    Propuesta enviada, Contactado y Nuevo; dentro de cada etapa, el que hace más que
    no visitás. Marcás los que querés y se suman a la Gira de ese día.

---

## Probado

156 pruebas en el navegador simulado, sin errores (56 nuevas y las 100 de la
9.6 a la 9.8). El gráfico se revisó en pantalla de celular.

## Lo primero que conviene hacer

1. Subir la versión.
2. **Deudores → Revisar deudas** y corregir lo que aparezca.
3. El próximo miércoles, usar **Cerrar la entrega** con lo que te pase el repartidor.
