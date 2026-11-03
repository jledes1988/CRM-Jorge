# CRM-Jorge — Versión 9.20 · Los mismos números en todas las pestañas

**Solo cambió `app.js`.** Los otros dos son los mismos; van los tres juntos.
Para verificar: en el login y en Config > Debug tiene que decir **9.20 - 03/11/2026**.

---

## Por qué el Dashboard mostraba 4 pedidos en vez de 12

El Dashboard, la pestaña Visitas y parte de Informes no contaban **pedidos**: contaban
**visitas marcadas "vendió"**. Un pedido cargado sin visita (directo, desde la ficha o por la
ronda de WhatsApp) no aparecía. La pestaña Pedidos sí contaba los pedidos reales, por eso no
coincidían. Lo mismo pasaba con "Facturado": sumaba el monto de esas visitas, no los pedidos.

## Las reglas, ahora iguales en todas las pestañas

| Número | Cómo se cuenta |
|---|---|
| **Pedidos tomados** | Por la fecha en que se tomó el pedido. Incluye los que después se cancelaron, que se muestran aparte. |
| **Pedidos entregados / Facturado** | Lo entregado, por la fecha de entrega. Es la venta real. |
| **Visita con venta** | Marcada "vendió" **o** con un pedido de ese cliente ese mismo día. |
| **Prospectos nuevos** | Contactos que ingresaron en el período, aunque ya hayan pasado a cliente. |
| **Pasaron a cliente** | El día en que el contacto pasó a cliente (no depende de que el historial esté cargado). |
| **Comodatos firmados** | Por la fecha de firma, y respetando el vendedor elegido. |
| **Sin seguimiento** | Con el plazo de cada etapa (Config > Umbrales), el mismo de las alertas de inacción. Antes el Dashboard usaba 7 días fijos, aunque "Sin Respuesta" tiene 30. |

## Qué cambia en cada pestaña

- **Dashboard (admin/gerente):** "Ventas realizadas" pasa a **Pedidos tomados** y **Pedidos
  entregados**. Facturado = lo entregado. Se suma "Tomado en el período" y un aviso si hubo
  cancelados. El ranking de vendedores muestra pedidos, no visitas con venta. Los comodatos
  firmados ahora respetan el vendedor elegido.
- **Hoy (vendedor):** "Ventas hoy" pasa a **Pedidos hoy**, con los pedidos reales del día.
- **Pedidos:** "VENDIDO" pasa a **TOMADO** (es lo que se tomó) y se ven los **CANCELADOS** aparte.
  Con un vendedor elegido, cuenta también los pedidos que él tomó a clientes de otro.
- **Visitas / Control del vendedor:** las ventas son pedidos; la efectividad es visitas con
  pedido sobre visitas. El día por día se pone verde si hubo pedido.
- **Informes:** los gráficos mensual, semanal y por vendedor comparan visitas con **pedidos
  tomados**. Convertidos y nuevos con las reglas de arriba.
- **Informe de la junta:** "Pasaron a cliente" y "Comodatos firmados" con las mismas reglas.
- **Ficha del cliente:** lo facturado es la suma de sus pedidos entregados.

---

## Probado

24 pruebas nuevas en el navegador simulado, sin errores, con tu caso: 12 pedidos tomados el
lunes, solo 4 cargados desde una visita. El Dashboard, Pedidos, Informes, el informe de la junta y
el control del vendedor dan el mismo número. Todas las pantallas abren sin errores con admin,
gerente y vendedor.
