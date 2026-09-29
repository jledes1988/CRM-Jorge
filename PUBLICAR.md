# CRM-Jorge — Versión 9.3

**Solo cambió `app.js`.** Los otros dos son los mismos; van los tres juntos.

Esta versión trae la **hoja de ruta**, la **ronda asistida por WhatsApp**, la
**baja de la Barrita** y la **regla del catálogo**.

---

# 1 · La hoja de ruta del miércoles

En **VENTAS → Entregas**, botón **📋 Hoja de ruta**. Genera el texto listo para
mandarle al chofer o imprimir.

Cada parada lleva número, negocio, dirección, horario, teléfono, cuántos
renglones, el monto, **qué cobrar** y las indicaciones especiales.

**El cobro va primero y en negrita**, en tres formas:

- **COBRAR $145.000**
- **COBRAR SOLO $50.000** — el resto ($80.000) queda en cuenta
- **NO COBRAR** — queda en cuenta corriente

Lo ordené así a propósito: si el chofer solo hace lo que está escrito, el
riesgo no es que cobre de menos, es que cobre algo que no correspondía.

Arriba el resumen y el recordatorio de **cargar el camión al revés**. Abajo, tu
teléfono, para que ante la duda te llamen en vez de improvisar.

## El orden de las zonas

Desde la misma hoja: **"Cambiar el orden de las zonas"**. Ordenás los barrios
una vez con las flechas y de ahí en más la hoja sale sola: primero por tu
orden de zonas, y **adentro de cada zona por cercanía**.

Probado con tus clientes reales: dentro de Nueva Córdoba el recorrido bajó de
**2,82 km a 1,84 km**.

Si a un cliente le falta el barrio, la hoja te avisa arriba en amarillo y lo
manda al final.

## Indicaciones para el repartidor

Campo nuevo al tomar el pedido. Es lo que hoy tenés en la cabeza y el chofer
no: *"si no está la dueña no dejar"*, *"entrar por atrás"*. Sale con ⚠ en la
hoja y **no va al texto de fábrica**.

## El pedido se agenda solo

Al tomarlo, el cliente queda agendado en la **gira del día de entrega**.

---

# 2 · La ronda asistida por WhatsApp

Esta es la primera etapa del chatbot, la que **no cuesta nada**.

En **VENTAS → Ronda**, cada cliente tiene ahora **"Pedir por WhatsApp"**. Te
muestra el mensaje como le va a llegar, y lo mandás desde tu WhatsApp de
siempre. El cliente te responde ahí mismo.

El mensaje sale armado y personalizado:

```
Hola Santiago! Soy Jorge de Sei Tu.
Estamos armando el pedido de Pecorino para entregar
el miércoles, 30 de septiembre.

La vez pasada te llevaste:
• 1 P Picolle / Seitufan Frutilla, Anana, Naranja
• 2 P Granizado Americana
• 2 Sei Bom Pistacho
  ...

Que necesitas esta semana?
```

**Lo del "la vez pasada te llevaste"** es lo que más te va a servir: el cliente
no tiene que acordarse de nada, solo decir qué cambia. Solo cuenta lo que se
**entregó** de verdad, no lo que quedó tomado.

Si el cliente nunca compró, ese bloque **desaparece solo** y el mensaje queda
limpio.

El texto lo editás en **Config → Mensajes → Mensaje de la ronda de pedidos**.
Además de las variables de siempre acepta `{entrega}` y `{ultimo}`.

---

# 3 · Barrita Sin TACC eliminada

Borrada del catálogo. El pedido que la usaba —**Pecorino del 9/9, $592.060**,
2 cajitas por $17.768 de 19 renglones— **no se toca**: guarda su propia copia
del renglón, así que total e historial quedan iguales.

# 4 · La regla del catálogo

La dejé escrita en la pantalla donde se editan los productos:

> Si dos variantes **valen lo mismo**, van como sabores del mismo producto. Si
> **valen distinto**, hay que hacer un producto aparte.

---

## Probá esto apenas subas

1. **VENTAS → Ronda** → **"Pedir por WhatsApp"** en un cliente que ya te haya
   comprado → fijate que aparezca lo que se llevó la vez pasada.
2. Probalo también con uno que nunca compró: ese bloque no tiene que aparecer.
3. **Config → Mensajes** → abajo está el mensaje de la ronda para editar.
4. **VENTAS → Entregas** → **📋 Hoja de ruta** → **"Cambiar el orden de las
   zonas"** → acomodá tus barrios como los recorrés de verdad.
5. Tomá un pedido con algo en **Indicaciones para el repartidor** → tiene que
   salir con ⚠ en la hoja.

---

## Sobre el chatbot completo

Quedó definido que cuando lo hagamos, **el bot interpreta pero vos confirmás**:
el pedido entra a la app marcado como "por confirmar" y no baja mercadería sin
tu OK.

Antes de escribir una línea hay que resolver cuatro cosas que no son código:
un **número de WhatsApp dedicado** (la API se apodera del número y no lo podés
seguir usando a mano), el **plan Blaze** en Firebase, la **verificación de Meta
Business**, y la **aprobación de cada plantilla**, que tarda días.

El costo estimado con tus 19 clientes activos es de **4 a 8 dólares por mes**;
con 80 freezers, entre 16 y 30.

Mi sugerencia sigue siendo: usá la ronda asistida unas semanas. Vas a ver
cuántos te responden y qué te contestan, y eso es justo lo que hay que saber
para que el bot entienda bien. Si igual querés arrancar con el bot, decime y
armo el diseño técnico completo.
