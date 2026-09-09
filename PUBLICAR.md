# CRM-Jorge — Versión 8.0

**Esta vez van los TRES archivos:** `app.js`, `index.html` y `estilos.css`.
Si subís solo uno, la pestaña nueva no aparece o queda rota.

> Y si todavía no cargaste las reglas de Firestore de `REGLAS-DEUDAS.txt`,
> hacelo antes que nada: sin eso las deudas no guardan.

---

## Por qué no veías a los deudores

No era un bug tuyo: **el módulo no tenía puerta de entrada**. El panel de
deudores solo aparecía en HOY *si ya había alguien debiendo*, y la única forma
de cargar una deuda era entrar a la ficha de un cliente. Con la base vacía, no
había manera de llegar.

Lo mismo pasaba con los pedidos: se guardaban bien, pero para verlos había que
entrar cliente por cliente, o meterse en Config.

---

## La reestructuración

**Pestaña nueva "VENTAS"** en la barra de abajo (séptimo botón), con dos
solapas:

**Pedidos** — filtro por Hoy / Esta semana / Este mes / Todo, y arriba tres
números: cuántos pedidos, cuánto vendiste y **cuánto quedó sin cobrar**. Abajo
la lista agrupada por día con el subtotal de cada jornada. Tocás uno y entrás a
corregirlo.

**Deudores** — el total en la calle, la cantidad de deudores, y la lista
agrupada por barrio. **Está siempre, aunque no haya nadie debiendo**, y tiene
un botón **"+ Cargar deuda"** para meter lo que venías arrastrando de antes sin
tener que buscar la ficha del cliente.

El admin tiene lo mismo en un ítem propio del menú: **"Pedidos y deudas"**.

---

## La visita ahora carga el pedido

Este era el nudo. Había **dos formas paralelas de registrar una venta que no se
hablaban**: el "¿vendió? SÍ/NO + monto" de la visita, y el módulo de pedidos.
El monto suelto de la visita no alimentaba nada — ni el texto para fábrica, ni
la deuda, ni el detalle de qué se llevó.

Ahora, en el paso **Venta**:

- **SÍ** → botón **"Tomar el pedido"**, que abre el módulo con los productos.
  Al guardarlo **volvés solo a la visita**, y ahí ves el resumen: el total, los
  renglones y cuánto quedó debiendo. Podés tocar "Corregir el pedido" si te
  equivocaste.
- **NO** → sigue igual, con los motivos.

Saqué el campo "monto de la venta" y el check "marcar como deudor": los dos los
reemplaza el pedido, que además te deja el detalle y la cuenta corriente.

---

## La carga inicial

Tenías razón y esto explica el problema de ayer.

**Cuando marcás el freezer como entregado**, la fecha queda registrada como su
**primer pedido** — porque la carga inicial baja junto con el equipo. Ahí
arranca el reloj de los 45 días. Además te ofrece cargar el detalle de
productos, pero no te obliga: si decís que no, la fecha queda igual.

**Los que ya estaban cargados se arreglan solos** la primera vez que entres
como admin. Simulé contra tu backup:

| Cliente | Primer pedido que queda |
|---|---|
| Coco loco | 31/8 (entrega del freezer) |
| Di Navarro | 2/9 |
| Despensa Hidalgo | 28/8 |

Los tres vuelven a Cliente Activo y **ya no los alcanza la regla de los 45
días**. Verificado. Despensa MyM y La esquina Market no se tocan porque ya
tenían pedidos propios.

---

## Probá esto apenas subas

1. **Subí los tres archivos.** Entrá como admin → tiene que salir el aviso
   *"3 clientes con freezer: se registró su carga inicial"* → revisá que Coco
   loco, Di Navarro y Despensa Hidalgo estén en Cliente Activo.
2. Entrá como vendedor → tiene que estar el botón **VENTAS** en la barra de
   abajo. Fijate que los 7 botones entren bien en tu pantalla.
3. **VENTAS → Deudores** → tiene que abrir aunque esté vacío, con el botón
   "+ Cargar deuda". Cargale una deuda de prueba a alguien.
4. **Registrá una visita a un cliente** → paso Venta → **SÍ** → "Tomar el
   pedido" → cargá algo → guardá → tenés que volver a la visita con el resumen
   verde.
5. **VENTAS → Pedidos** → ese pedido tiene que estar ahí, bajo la fecha de hoy.

> Si los 7 botones te quedan apretados en el celular, decime y los paso a solo
> íconos, o muevo Ventas adentro de otra pestaña.

---

## Tus pendientes

- Definir el **Pote Tutto 3 Lts** ($9.900 provisorio).
- CUIT, condición impositiva y horarios de los clientes.
- Segundas visitas.
