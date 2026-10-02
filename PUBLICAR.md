# CRM-Jorge — Versión 9.5 · Zonas por día

**Solo cambió `app.js`.** Los otros dos son los mismos; van los tres juntos.

---

## Primero: no estaba en el sistema

Revisé el código. Lo que existía era parecido pero hacía otra cosa:

- **Agrupar por barrio** reordena a los que **ya están** en la gira. No agrega
  a nadie.
- **Orden de zonas** es para el reparto del miércoles, no para la gira de
  venta.
- **Agregar a la gira** suma de a uno, buscando por nombre.

Lo que pedías —zonas asignadas a días y un botón que carga los contactos de la
zona de hoy— no existía. Ahora sí.

---

## Cómo funciona

**Config:** en la Gira, botón **➕ Zona del día** → "Cambiar las zonas de este
día". Ahí le asignás a cada día de la semana las zonas que recorrés, y definís
cuántas paradas querés que te proponga (**15** por defecto, como pediste).

**En la calle:** tocás **➕ Zona del día** y te muestra los 15 más prioritarios
de esa zona, agrupados y con el motivo de cada uno. Destildás los que no van y
confirmás.

**El orden de prioridad es el que definiste:**

1. Cliente activo **con freezer** puesto
2. Cliente activo **sin freezer**
3. Prospecto **en Negociación**
4. El resto

Dentro de cada nivel, primero el que hace más tiempo que no visitás. El que
nunca visitaste va antes que todos.

**Y una vez elegidos, se ordenan por cercanía** para el recorrido. La prioridad
decide *quién* entra; la cercanía decide *en qué orden* los hacés.

---

## Probado con tus datos

Simulando lunes = Nueva Córdoba y martes = Centro + Cofico:

| | Lunes | Martes |
|---|---|---|
| Contactos en la zona | 83 | 64 |
| Propuestos | 15 | 15 |
| Clientes con freezer | 3 | 2 |
| Cliente sin freezer | — | 1 |
| En negociación | 4 | 7 |
| Resto | 8 | 5 |

Y el recorrido de esos 15: **6,56 km por orden de prioridad → 4,13 km
ordenados por cercanía**.

> Dato que te va a servir: el más viejo que apareció es **Ypf Sabatini**, en
> negociación, **hace 93 días** sin visita. Después Kiosco el Pequeño (66) y
> Feta (62).

---

## ⚠ Dos cosas de tus datos que limitan esto

**79 contactos no tienen barrio cargado** — el 24% de tu base. Esos **nunca
van a entrar** por el botón de zona, porque no pertenecen a ninguna. Si querés
te saco la lista para completarlos.

**"Yofre norte" y "Yofre Norte"** figuran como dos zonas distintas por la
mayúscula. Son 4 contactos que se te separan sin motivo: si asignás una al
día, la otra queda afuera. Se arregla editando el barrio de esos 4.

---

## Otra cosa que conviene que sepas

De tus 283 prospectos vivos, **208 están "vencidos"** según el umbral de su
etapa. O sea que ese umbral ya no te filtra nada: todo está atrasado.

Por eso el botón prioriza en vez de filtrar. Pero si en algún momento querés
que el umbral vuelva a significar algo, hay que subirlo o aceptar que la base
creció más rápido de lo que se puede recorrer.

---

## Probá esto apenas subas

1. **Gira → ➕ Zona del día** → te va a decir que no hay zonas asignadas →
   tocá "Asignar zonas a los días".
2. Armá tu semana real y poné el tope de paradas.
3. Volvé a la Gira y tocá **➕ Zona del día**: tienen que aparecer los 15 con
   su motivo.
4. Destildá un par y confirmá → fijate que entren a la gira ordenados por
   cercanía, no por prioridad.
