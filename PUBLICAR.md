# CRM-Jorge — Versión 8.3 · Optimización

**Van `app.js` e `index.html`.** `estilos.css` no cambió; lo dejo igual en la
carpeta para que subas los tres juntos.

---

## Qué encontré

Medí la app con tus datos reales (el backup del 19/9: 318 contactos, 502
visitas). El JavaScript es rápido — 7 a 15 milésimas de segundo. **El problema
era el HTML que generaba:**

| Pantalla | Antes | Ahora |
|---|---|---|
| Contactos (vendedor) | 366 KB · 9.048 nodos | **12 KB · 568** |
| Embudo (vendedor) | 333 KB · 9.404 nodos | **13 KB · 566** |
| Contactos (admin) | 190 KB · 9.000 nodos | **12 KB · 570** |
| Embudo (admin) | 103 KB · 4.450 nodos | **13 KB · 564** |

Son **30 veces menos**. En una computadora no se notaba; en un celular, armar
9.000 nodos son varios segundos de pantalla congelada.

---

## 1 · Las listas se dibujan de a 40

Contactos y Embudo ahora muestran los primeros 40 y abajo dice **"Mostrando 40
de 232"** con un botón **"Ver 40 más"**. Cuando llegás al final te avisa que
están todos a la vista.

Al buscar o cambiar un filtro vuelve a la primera tanda, así no te quedás
mirando el final de una lista vieja.

**En celular ahora arranca en modo lista** en vez de tarjetas: pesa 5 veces
menos (71 KB contra 366 KB). Si preferís tarjetas, tocás el botón de arriba y
queda guardada tu elección, como siempre.

---

## 2 · Los botones que no respondían

Esta era la causa, y es la que más te molestaba.

Había **seis escuchas de Firestore** (contactos, visitas, comodatos, gira,
pedidos, deudas) y **cada una redibujaba la pantalla entera por su cuenta**. Al
abrir la app llegan las seis casi juntas: seis redibujados seguidos de 9.000
nodos cada uno.

Si uno de esos redibujados caía justo entre que tocabas un botón y que el toque
se procesaba, **el botón que tocaste ya había sido reemplazado** por un nodo
nuevo y el click se perdía. Por eso salías y volvías a entrar y ahí sí andaba.

Dos cambios:

- **Se juntan en un solo redibujado.** Los avisos que llegan en menos de un
  tercio de segundo se agrupan.
- **Solo se redibuja si hace falta.** Cada pantalla declara de qué datos
  depende. Si cambia una deuda mientras mirás el Mapa, el Mapa ya no se
  redibuja.

Esto también explica lo de **"a veces no se ven todos los clientes"**: el
redibujado se cortaba a la mitad. Con las listas 30 veces más livianas y sin
redibujados encimados, no debería volver a pasar.

---

## 3 · Los colores del mapa

Encontré las tres reglas que pisaban el color del embudo. Sobre tus datos:
**34 de 224 puntos mostraban un color que no era el de su etapa** — 3 rosas
por freezer acordado, 11 celestes por cliente con freezer, y 20 sucursales que
tomaban el color de la casa central. La leyenda solo explicaba el rosa.

Ahora, como elegiste:

- **El relleno es SIEMPRE la etapa del embudo.** Verificado: 0 puntos con
  color equivocado.
- **El freezer pasó al borde:** borde verde grueso si tiene freezer nuestro
  puesto (11 casos), borde rosa si lo acordó y falta entregarlo (3 casos).
- **Las sucursales** quedan con su propio color, solo más chicas (20 casos).
- **La leyenda ahora explica los tres**, que antes no figuraban.
- Al tocar un punto, el cartelito te dice si tiene freezer puesto o acordado.

---

## Sobre la cuota de Firestore

Aproveché y miré la consola: hoy llevás **17.000 lecturas de las 50.000**
gratuitas. No es lo que causaba la lentitud, pero conviene tenerlo a la vista.

Cada apertura de la app baja **1.166 documentos**, así que entran unas **42
aperturas por día**, y ese número baja alrededor de un 9% por cada 100
contactos nuevos que cargues.

No es urgente. Cuando quieras lo atacamos: se puede hacer que cada vendedor
baje solo sus contactos en vez de los 318, y acortar la ventana de visitas.

---

## Probá esto apenas subas

1. Entrá como vendedor y andá pasando de pestaña: **Contactos, Embudo, Gira,
   Ventas**. Tienen que abrir de una.
2. En Contactos, bajá hasta el final: **"Mostrando 40 de 232"** y el botón
   **Ver 40 más**.
3. Tocá varios botones seguidos sin esperar — es lo que antes se perdía.
4. **Mapa**: buscá un cliente con freezer puesto. El punto tiene que ser
   **verde** (Cliente Activo) con **borde verde grueso**, no celeste.
5. Fijate que la leyenda de abajo tenga las tres líneas nuevas.

> Si algún cliente puntual sigue sin aparecer después de esto, decime el nombre
> y lo busco directo en la base.

---

## Tus pendientes

- Definir el **Pote Tutto 3 Lts** ($9.900 provisorio).
- CUIT, condición impositiva y horarios de los clientes.
- **94 contactos sin coordenadas** cargadas: no pueden aparecer en el mapa.
  Si querés te armo la lista para ir ubicándolos.
