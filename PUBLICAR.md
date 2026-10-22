# CRM-Jorge — Versión 9.15 · Marcadores en la Gira

**Solo cambió `app.js`.** Los otros dos son los mismos; van los tres juntos.
Para verificar: en el login y en Config > Debug tiene que decir **9.15 - 22/10/2026**.

---

## 1. Informe para la junta

En "Prospección y embudo" ya **no salen** la lista de "Nuevos" ni los
"Movimientos del embudo". Quedan los números (nuevos, avanzaron, pasaron a
cliente, descartados) y el embudo actual.

## 2. "Acordó freezer" cuenta como gestión del día

Al marcar que un contacto acordó el freezer, queda registrada una **gestión de ese
día** (con la nota "Acordó freezer"), aunque no se haya cargado la visita aparte:
- Cuenta en visitas, en el informe y en "días sin gestión".
- En la Gira aparece con el ✓ de visitado.
- Si ese día ya tenía una visita cargada, no se duplica: se le suma el acuerdo.

## 3. Marcadores de gestión en la Gira

Cada parada de la Gira tiene un botón **🏷** para marcar qué gestión hay que hacer
ese día. Los marcadores se ven como etiquetas de color en la lista y en las
tarjetas, y como puntitos en "Ver semana completa". Arriba del día aparece el
resumen (ej: "2 · Cobrar deuda", "1 · Cerrar acuerdo de freezer").

**Vienen cargados:**

| Color | Marcador | |
|---|---|---|
| Azul | Cerrar acuerdo de freezer | a mano |
| Rojo | Cobrar deuda | **automático** cuando el cliente debe (muestra cuánto) |
| Amarillo | Firmar comodato | **automático** cuando tiene un comodato por firmar |
| Verde | Tomar pedido | a mano |
| Violeta | Llevar material / POP | a mano |
| Naranja | Reclamo o problema | a mano |

**Agregar los que vayan surgiendo:** en la ventana del 🏷 → **Editar la lista de
marcadores**. Escribís el nombre, tocás el círculo para cambiar el color y guardás.

Si pasás una parada al día siguiente, se lleva sus marcadores.

---

## Probado

275 pruebas en el navegador simulado, sin errores (25 nuevas).
