# CRM-Jorge — Versión 9.21 · Pedido, visita y embudo cruzados

**Solo cambió `app.js`.** Los otros dos son los mismos; van los tres juntos.
Para verificar: en el login y en Config > Debug tiene que decir **9.21 - 03/11/2026**.

---

## 1. El primer pedido siempre sale con todos los datos

Antes, al guardar el primer pedido y volver a abrirlo para copiarlo, salía con el encabezado
corto, porque el sistema veía que "ya tenía un pedido" (el mismo). Ahora un pedido es el
**primero** si no hay otro anterior de ese cliente (los cancelados no cuentan). Cuando lo abrís
para corregir o copiar, dice "Es su primer pedido: lleva el encabezado completo".

## 2. La visita usa el pedido que ya tomaste ese día

Si primero cargás el pedido y después registrás la visita del mismo día, la visita ya trae
**"Sí vendió"** con el pedido vinculado ("PEDIDO CARGADO"). No te pide tomar otro.
Funciona en la visita a cliente y en la visita a prospecto. Un pedido se vincula a una sola visita.

## 3. Al tomar el pedido pasa a Cliente Activo

Antes pasaba recién al entregarlo. Ahora, **en el momento en que se toma el pedido**, el
prospecto pasa a Cliente Activo en todas las pestañas y en el Embudo, y queda en el historial.
- La regla de "X días sin pedido vuelve a prospecto" cuenta también el último pedido tomado,
  para que no lo devuelva enseguida.
- **Al abrir la app como admin (JL)** se acomodan los datos de antes, una vez:
  - los prospectos con un pedido dentro del plazo de la regla pasan a Cliente Activo;
  - los clientes que tenían otra etapa en el Embudo quedan en Cliente Activo;
  - los prospectos que figuraban en "Cliente Activo" sin ser clientes vuelven a Negociación.
  Te avisa cuántos acomodó y cada cambio queda en el historial.

## 4. Dashboard: las visitas con pedido se ven como venta

Lo de Sonia: en "Actividad reciente" (y en los historiales de visitas) una visita a un
prospecto salía siempre como "Visita prospecto", aunque le hayas tomado el pedido. Ahora dice
**VENTA** con el monto. Además, en "Actividad reciente" aparecen los **pedidos tomados sin
visita** (tocándolos se abre el pedido).

## 5. Mapa por tipo de negocio

En el Mapa (admin y vendedor) hay un selector nuevo, **"Todos los tipos de negocio"**, con los
tipos que tienen contactos cargados y cuántos hay de cada uno. Incluye "Sin tipo cargado".
Se combina con los filtros de etapa y de clientes/prospectos.

## 6. Publicidad / comodato del pedido, editable

En **Config > Administrador de catálogos > Publicidad / comodato del pedido** está la lista
(freezer + comodato, veleta, totem c/display, cartel...). Podés agregar, **✎ renombrar** y
borrar. Los cambios se ven al instante al tomar un pedido.
(El ✎ para renombrar quedó también en las demás listas del administrador de catálogos.)

---

## Probado

50 pruebas en el navegador simulado, sin errores (26 nuevas + las 24 de la 9.20).
Todas las pantallas abren sin errores con admin y vendedor.
