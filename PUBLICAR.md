# CRM-Jorge — Versión 9.10 · Pedidos que no se entregaron

**Solo cambió `app.js`.** Los otros dos son los mismos; van los tres juntos.
Para verificar: en el login y en Config > Debug tiene que decir **9.10 - 08/10/2026**.

---

## 1. Un pedido "no entregado" que se edita vuelve a estar para entregar

**Antes:** si un pedido estaba como "No se entregó" y lo editabas, seguía cancelado:
no aparecía en Entregas, no se podía marcar entregado y no generaba deuda.

**Ahora:** editarlo es volver a tomarlo. Al guardar queda **pendiente de entrega**
para el próximo día de reparto, aparece en **Entregas** y en la **Gira** de ese día.
Conserva su fecha original y dice "corregido el…".

Si lo quiere igual, **sin cambios**: abrí el pedido → **Volver a entregar** → elegís el día.

## 2. "No se entregó" ahora pregunta

- **Se entrega otro día** → elegís la fecha. Sigue pendiente, con el mismo pedido,
  y su parada de reparto pasa a ese día en la Gira.
- **Cancelar el pedido** → no cuenta como venta ni genera deuda.

Cada pedido en **Entregas** muestra su **día de entrega** (en rojo si está atrasado)
y tiene un botón **Cambiar día**.

**Cerrar la entrega** muestra solo lo que tocaba entregar hasta hoy. Lo que pasaste
a otro día lo marcás de a uno, ese día, con **Entregado**.

## 3. Tomados vs entregados (administrador y gerente)

En **Informes**, debajo de Ventas por mes, según el período elegido arriba:
- Lo **tomado**, lo **entregado**, lo que está **por entregar** y lo **cancelado**,
  en pesos y en cantidad, con la barra de proporciones y el % entregado.
- Tabla de las **últimas 8 semanas**, por semana en que se tomó el pedido.
- Lista de **atrasados**: pedidos cuya fecha de entrega ya pasó. Tocando uno le
  cambiás el día.

---

## Tus dos casos, después de subir la versión

**Club Municipal** (pedido del 29/9, ya editado): Pedidos → tocalo →
**Volver a entregar** → elegí el día. Queda en Entregas y lo marcás entregado
con el cobro como siempre.

**La Campiña** (pedido del 5/10, figura para el miércoles 7): Entregas →
**Cambiar día** → viernes 9. El viernes lo marcás **Entregado**.

---

## Probado

178 pruebas en el navegador simulado, sin errores: 24 nuevas (incluye tus dos casos
tal como están en la base) y las 154 anteriores.
