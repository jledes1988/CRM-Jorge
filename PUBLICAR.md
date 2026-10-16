# CRM-Jorge — Versión 9.12 · Mapa y colores

**Solo cambió `app.js`.** Los otros dos son los mismos; van los tres juntos.
Para verificar: en el login y en Config > Debug tiene que decir **9.12 - 15/10/2026**.

---

## 1. Contactos que no aparecían en el mapa

**Qué pasaba:** 4 contactos tenían la marca de "ubicación confirmada" pero **sin
coordenadas guardadas**: La Cantina, Drugstore Vélez, Club Instituto y Caravan
Bebidas. El mapa no tenía dónde dibujarlos, y como la ficha veía la marca,
**escondía el botón de GPS** y solo mostraba "Quitar del mapa". No había forma de
volver a marcarlos.

**Ya reparado en la base:** a esos 4 les saqué la marca. Desde ya (incluso antes
de subir esta versión) la ficha vuelve a mostrar **📍 GPS (en el local)**.
**Para La Cantina: la próxima vez que estés en el local, abrí la ficha y tocá GPS.**

Los otros **40 contactos que marcaste desde el 5/10 están todos en el mapa.**

**Qué cambia en esta versión para que no vuelva a pasar:**
- "Ubicado" ahora quiere decir **marca + coordenadas**. Si falta una de las dos,
  la ficha muestra el botón de GPS y la visita te lo pide.
- La app **nunca guarda** "ubicación confirmada" sin coordenadas. Si una copia vieja
  del contacto se guarda encima de una nueva, las coordenadas se conservan.
- Al marcar el GPS se usa siempre la versión más nueva del contacto (antes, si
  justo llegaba una sincronización mientras el GPS buscaba, podía guardarse sobre
  una copia vieja).

## 2. Colores de Contactado y Negociación

Eran prácticamente el mismo amarillo. **Contactado pasa a azul**. Es el color que
más se diferencia de todos los demás (naranja, violeta, amarillo, celeste, verde,
rojo y rosa), y se ve bien sobre el mapa oscuro. Negociación sigue en amarillo.
El cambio se ve en el mapa, en el embudo y en la Gira.

---

## Probado

219 pruebas en el navegador simulado, sin errores (11 nuevas).
