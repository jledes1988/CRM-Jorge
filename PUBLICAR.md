# CRM-Jorge — Versión 9.8 · Volver donde estabas

**Solo cambió `app.js`.** Los otros dos son los mismos; van los tres juntos.
Para verificar: en el login y en Config > Debug tiene que decir **9.8 - 05/10/2026**.

---

## Qué pasaba

La app no se reinicia sola. Cuando pasás a WhatsApp, el **teléfono** la cierra
en segundo plano para liberar memoria, y al volver arranca de cero. Eso no se
puede impedir desde la app.

## Qué hace ahora

Cada vez que salís de la app, anota en el teléfono dónde estabas. Si el teléfono
la cerró, al volver arranca directo ahí y te avisa con un cartelito:
**"Volviste donde estabas"**.

| Lo que tenías abierto | Al volver |
|---|---|
| Una solapa o sección (Gira, Contactos, Embudo…) | La misma, con el mismo día y la misma semana de la Gira |
| La ficha de un contacto | La ficha abierta |
| Un **pedido a medio cargar** | El pedido con las cantidades y las notas que habías puesto. **No vuelve a preguntar** por la deuda. |
| La visita a un **prospecto** a medio escribir | Las observaciones, la próxima visita, la etapa y el SI/NO |
| La visita a un **cliente** (los pasos) | El mismo paso, con lo que habías marcado y escrito |
| El mensaje de la ronda | Abierto |
| La posición del scroll | Donde estabas |

**Cuándo no lo hace (a propósito):**
- Si pasó **más de una hora**: arranca normal, desde el Inicio.
- Si entra **otro usuario** en el mismo teléfono.
- Solo **una vez**: si cerrás y abrís de nuevo, arranca normal.
- Las **fotos** de la visita a cliente no se guardan (pesan demasiado para el
  teléfono). Si habías sacado una, hay que volver a sacarla.
- Otras ventanitas que no están en la tabla: vuelve a la pantalla, pero no
  reabre la ventanita.

Todo esto queda solo en el teléfono: no se guarda en la base ni lo ve nadie más.

---

## Para la espera del arranque

Config > Debug tiene ahora **"Últimos arranques"**: cuánto tardó cada uno de los
últimos 5 y qué parte fue la más lenta. **Después de un par de días de uso,
mandame una captura de esa parte.** Con eso vemos qué se puede acelerar, con
datos reales de tu teléfono y no a ciegas.

---

## Probado

98 pruebas en el navegador simulado, sin errores: 24 nuevas (cerrar la app con
cada cosa abierta y volver a abrirla) y las 74 de la 9.6 y la 9.7.
