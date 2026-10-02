# CRM-Jorge — Versión 9.7 · Semana tipo

**Solo cambió `app.js`.** Los otros dos son los mismos; van los tres juntos.
Para verificar: en el login y en Config > Debug tiene que decir **9.7 - 02/10/2026**.
Incluye todo lo de la 9.6 (ruta semanal con horarios): si no subiste la 9.6, subí directamente esta.

---

## Tu semana, cargada en el sistema

| Día | Visitas fijas | Bloques |
|---|---|---|
| Lunes | 9: Autoservicio NC 09:00 … Unagi 12:18 | 12:38–13:30 Revisitas a interesados de Nueva Córdoba · 14:00–15:30 Cerrar el pedido |
| Martes | — | 09:00–14:00 Prospección · 16:00–18:00 Revisitas a los que dijeron "me interesa" |
| Miércoles | — | 09:00–14:00 Entrega con el chofer · 16:00–18:00 Cobros pendientes y carga de datos en el CRM |
| Jueves | 4: Club Municipal 09:00 … Minimarket Vale 10:17 | 10:40–14:00 Prospección en Alta Córdoba y Cofico |
| Viernes | 8: La Esquina Market 09:00 … Colegio Garzón 11:53 | 12:15–14:00 Prospección en Pueyrredón y Yofre |

Martes y miércoles no tenían hora: les puse **09:00–14:00** y **16:00–18:00**.
Se cambia en *Semana tipo*.

---

## Cómo se usa

**1. La primera vez: revisá los vínculos.** Gira → **🗓 Cargar semana**. Cada
visita está escrita con el nombre que me pasaste y el sistema la busca en tus
contactos (sin importar acentos ni mayúsculas). Debajo de cada una ves con qué
contacto la vinculó. Si alguna dice **"sin vincular"** (en rojo), no se carga:
tocá *Vincular y editar la semana tipo* → **Elegir** → buscala.
**Revisá también las que sí vinculó**: si encontró un único contacto que *contiene*
el nombre (por ejemplo "Corner" → "Kiosco Corner"), lo vinculó solo.

**2. Cada semana:** parate en la semana que querés (flechas de arriba) y tocá
**🗓 Cargar semana** → ves todo → **Cargar la semana**.
- Carga las visitas con **tus horarios exactos**.
- Los días que ya pasaron no se tocan.
- Lo que ya tenías agendado ese día se queda, después de las visitas fijas.
- Si lo tocás dos veces, no duplica.

**3. Los bloques** se ven siempre en su día, como renglones punteados intercalados
con las visitas según la hora. También en *Ver semana completa*.

**4. Si cambiás algo en el día:**
- **Subir o bajar** una visita: toma el horario del lugar al que va (los horarios
  son los turnos del día).
- **Sacar** una visita: las demás **conservan su hora**, no se corren.
- **Agregar** algo extra: va con hora calculada después de la última.
- **Cargar ruta** (lo de la 9.6) en ese día: reordena por GPS y las horas pasan
  a calcularse. Usalo solo si querés salir de la semana tipo.

**5. Editar la semana tipo:** Ruta semanal → *Semana tipo: visitas fijas y bloques*.
Cambiás horas, agregás o sacás visitas y bloques. Nada cambia hasta **Guardar**.

---

## Probado

74 pruebas en el navegador simulado, sin errores (30 nuevas y las 44 de la 9.6).
Incluye los casos difíciles de tus nombres: "24/7 Sucursal" y "24/7" van a
contactos distintos; "Alto Paz", "Alto Paz Patria" y "Alto Paz Roma" no se
mezclan; un nombre que no existe queda sin vincular en vez de inventar.
