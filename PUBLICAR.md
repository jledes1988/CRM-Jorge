# CRM-Jorge — Versión 9.22 · Ruta semanal con semana A / semana B

**Solo cambió `app.js`.** Los otros dos son los mismos; van los tres juntos.
Para verificar: en el login y en Config > Debug tiene que decir **9.22 - 12/11/2026**.

---

## Cómo funciona la semana A / B

- El ciclo va de **jueves a miércoles**. La **semana A arranca hoy, jueves 12/11/2026**, y
  después se alternan: 19/11 = B, 26/11 = A, y así.
- El lunes 16 y el martes 17 son **semana A**, porque pertenecen al ciclo que empezó el jueves 12.
- Cada visita de la semana tipo dice **A+B** (todas las semanas), **A** o **B** (quincenal).
- Un cliente **semanal** está dos veces el mismo día, una en A y otra en B, cada una con su hora.

## La ruta nueva ya cargada

La primera vez que abras la app (como JL o como Jorge, no como gerente) se reemplazan **lunes,
martes, jueves y viernes** de la semana tipo con la ruta nueva. El **miércoles queda como estaba**.
El horario pasa a 08:30–14:00 y 16:00–19:00, con visitas de 20 minutos.
Las visitas se vinculan solas a cada contacto por el nombre. Si alguna no encuentra su
contacto, te avisa y queda en rojo en **Editar la semana tipo** para que toques **Elegir**.

## Qué cambia en la pantalla

- **Cargar semana:** cada día muestra si es **semana A** o **semana B**, y solo carga las
  visitas de esa letra (más las A+B).
- **Editar la semana tipo:** arriba dice **"Hoy es semana A"** y cuándo arranca la próxima.
  Al lado de la hora de cada visita hay un selector **A+B / A / B**. Si agregás un cliente en un
  día con quincenales, va solo a la semana con menos visitas (lo podés cambiar). No deja poner
  el mismo cliente dos veces en la misma semana del mismo día.
- **Ficha del cliente (EN LA GIRA):** "Visita fija: Jueves · **Semanal**" o "Viernes ·
  **Quincenal** · semana B", con las horas y si le toca esta semana.

## Cómo se mantiene

- **Cliente nuevo con freezer:** Editar la semana tipo → día de su zona → **+ Visita** → semana
  A o B → hora en el recorrido → Guardar.
- **Recalificación mensual (primer lunes):** al quincenal que empezó a pedir todas las semanas
  con buen volumen, pasalo a A+B (o agregale la otra letra). Al semanal que pide poco, dejalo en A o B.

---

## Probado

85 pruebas en el navegador simulado, sin errores (35 nuevas). Simulé el jueves 12
(semana A) y el jueves 19 (semana B), la carga de los días siguientes, el editor y la ficha.
Todas las pantallas abren sin errores con admin y vendedor.
