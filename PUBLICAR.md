# CRM-Jorge — Versión 9.0

**Solo cambió `app.js`.** `index.html` y `estilos.css` son los mismos de la
8.3; los dejo en la carpeta para que subas los tres juntos sin dudar.

Es la entrega más grande hasta ahora: cambia cómo funciona el pedido.

---

# El cambio de fondo: el pedido ahora tiene estado

Antes, cargar el pedido era lo mismo que entregarlo. Pero vos tomás los
pedidos de **jueves a lunes** y entregás el **miércoles**. Ahora:

| Estado | Qué significa |
|---|---|
| **Tomado** | Lo cargaste. **No genera deuda** ni cuenta como venta todavía. |
| **Entregado** | Bajó la mercadería. Recién acá nace la deuda y cuenta la venta. |
| **No entregado** | No se entregó y no se va a entregar. No genera nada. |

Los pedidos que ya tenías cargados se consideran **entregados**, que es como
venían funcionando.

## La solapa ENTREGAS

En **VENTAS → Entregas** (y en *Pedidos y deudas* del admin) están todos los
pedidos tomados esperando el miércoles, con la fecha de entrega arriba.

Cada uno tiene tres botones: **Entregado**, **Ver / corregir** y **No se
entregó**. Y arriba, **"Marcar todo entregado"** para despachar la tanda
completa de una.

Al marcar entregado pasan tres cosas de golpe: se actualiza la última compra
del cliente, el prospecto se convierte en Cliente Activo si hacía falta, y se
carga a su cuenta lo que no se cobró.

## La solapa RONDA

Para que no se te pase preguntarle a nadie entre jueves y lunes.

Lista **todos tus clientes activos** del ciclo, separados en tres grupos:
**FALTA PREGUNTAR** (rojo), **NO PIDEN ESTA VEZ** (gris) y **YA PASARON
PEDIDO** (verde). Arriba, los tres contadores.

Desde cada uno tomás el pedido, le escribís por WhatsApp, o marcás **"esta vez
no pide"**. Esa marca **se borra sola** cuando arranca el ciclo siguiente.

> Con tus datos de hoy: **19 clientes activos, 18 sin preguntar**.

El número también aparece en la propia solapa: *Ronda (18)*.

---

# Lo que preguntaste

**Las listas de 40:** la búsqueda filtra sobre los 232 completos y después
corta los primeros 40 resultados. Lo que busques siempre aparece, y sí, es lo
que acelera todo.

**Los contactos que faltaban:** debería estar resuelto, pero no te lo
garantizo. Si vuelve a pasar, **anotame el nombre** y lo busco en la base.

**La cuota de Firestore:** en el plan Spark **no hay facturación**. Al llegar
a 50.000 lecturas simplemente deja de responder hasta la medianoche del
Pacífico (unas 4 de la mañana acá). Para pasar de ahí habría que activar
Blaze: las primeras 50.000 diarias siguen gratis y después son **US$ 0,06 cada
100.000 lecturas**. Si duplicaras tu consumo a 100.000 por día, pagarías
**menos de US$ 1 por mes**. Hoy estás en 17.000.

---

# Las modificaciones

**1 · Colores.** Volvió la gama de siempre y Negociación quedó en **amarillo
oro**, como elegiste. Te repito el aviso: el oro y el ámbar de Contactado son
vecinos. Le dejé a Negociación el punto más grande para que se distinga
también por tamaño, pero si igual los confundís, avisame.

**2 · Gira por barrio.** Las paradas del día ahora se muestran **agrupadas por
barrio**, con el nombre de la zona y cuántas paradas tiene. Cada barrio tiene
**▲** para llevarlo al principio del recorrido y **▼** para mandarlo al final.
Y hay un botón **📍 Por barrio** que reordena todo el día de una, poniendo
primero la zona con más paradas. Como el orden es el mismo que usa la línea
del mapa, el recorrido deja de cruzar la ciudad.

**3 · Los pagos.** Encontré por qué no los veías: cuando el cliente terminaba
de pagar **desaparecía de Deudores** y ya no había forma de llegar a su
cuenta. Ahora hay solapa **Pagos**, con todo lo cobrado por día, el total del
período y si el cliente quedó al día o sigue debiendo. Tocás uno y entrás a su
cuenta completa.

**4 · CUIT y horarios obligatorios.** Cuando un prospecto pasa a Cliente
Activo — por cambio de etapa, por entrega de pedido o por entrega de freezer —
se abre una pantalla pidiendo **CUIT y horarios** (más condición impositiva y
localidad, opcionales). Sin esos dos no deja continuar.

**5 · Encabezado del pedido.** El nombre del negocio va entre asteriscos, que
es como WhatsApp lo pone en **negrita**. Después la dirección, la **localidad**
y los **horarios**. Si es el primer pedido sigue yendo la ficha completa, ahora
también con el nombre en negrita.

**6 · Carga inicial.** Tenías razón: el freezer se entrega el miércoles pero
la carga inicial se toma el lunes. **Ya no se inventa una fecha de compra** al
marcar el freezer entregado. En su lugar te ofrece tomarle el pedido ahí
mismo, y ese pedido sigue el ciclo normal: queda tomado y se entrega el
miércoles con todos los demás.

---

# Las situaciones

**1 · La deuda al entregar.** Resuelto con el estado del pedido. Verificado:
un pedido de $100.000 cobrando $40.000 **no genera deuda al cargarlo**; al
marcarlo entregado aparecen los $60.000.

**2 · No olvidarse de ningún cliente.** Es la solapa Ronda.

**3 · Deudores sin deuda.** Confirmado: venía del botón viejo de "deudor
sí/no". **Tres contactos** lo tenían marcado sin ningún movimiento cargado —
Despensa Hidalgo, Di Navarro y Minimarket Ohana. Saqué ese campo de toda la
app y se limpia solo de la base la primera vez que entres como admin. De acá
en más, el único dato de deuda es el saldo real de los movimientos.

**4 · Tu mensaje se cortó en "el día miércoles".** Contame qué seguía.

---

## Probá esto apenas subas

1. Entrá como admin: tiene que limpiarse sola la marca vieja de deudor. Fijate
   que **Despensa Hidalgo, Di Navarro y Minimarket Ohana** ya no figuren como
   deudores.
2. **VENTAS → Ronda** → tiene que decir **18 sin preguntar**. Marcá a uno
   "esta vez no pide" y fijate que baje a 17.
3. Tomá un pedido de prueba con "Cobré una parte" → **no tiene que generar
   deuda**. Andá a **Deudores** y confirmalo.
4. **VENTAS → Entregas** → ese pedido tiene que estar ahí → **Entregado** →
   ahora sí aparece la deuda.
5. **VENTAS → Pagos** → cobrale algo y verificá que el pago quede listado.
6. **Gira** → botón **📍 Por barrio** → las paradas se agrupan. Probá el ▲ de
   un barrio.
7. Pasá un prospecto a Cliente Activo → tiene que pedirte CUIT y horarios.

---

## Tus pendientes

- Definir el **Pote Tutto 3 Lts** ($9.900 provisorio).
- **94 contactos sin coordenadas**: no pueden salir en el mapa.
