# CRM-Jorge — Versión 9.1 · Lista de precios 21/09/2026

**Solo cambió `app.js`.** `index.html` y `estilos.css` son los mismos de la
9.0; los dejo en la carpeta para que subas los tres juntos.

---

## Primero: la otra conversación

Era sobre un **chatbot de WhatsApp para tomar pedidos**. Quedó en diseño, **no
se tocó una línea de código**. La app estaba y sigue en 9.0 hasta esta entrega.

La idea está bien planteada en lo grueso, con un detalle: ahí se habla de
"agregar una colección `pedidos`" y esa colección ya existe hace rato en tu
CRM, con el ciclo tomado → entregado que acabamos de hacer. Si retomás ese
tema, avisame y lo empalmo con lo que ya está en vez de armar algo paralelo.

---

## Lo que cambió de la lista

**Los impulsivos no cambiaron.** Los 16 están idénticos a los de agosto.
Verificado uno por uno.

**El granel subió 3,57%** parejo: Común $40.699, Especial $46.303, Súper
Especial $51.495, Licencias $54.071.

**Los postres subieron 7,69%** parejo. La única excepción es la **Mini Torta
Cookies**, que subió 9,7% ($58.991 → $64.706, cuando por el porcentaje del
resto habría dado $63.529). Lo cargué como dice la lista.

**Seis presentaciones cambiaron**, tal cual me dijiste:

| Producto | Antes | Ahora |
|---|---|---|
| Pack Tricolor Diet Fun | caja x8 | caja x6 |
| Torta Isabella / Cookies | caja x6 | caja x8 |
| Pack 0,750 Lts | caja x8 | caja x6 |
| Pack Pote Dubai 360cc | caja x12 | caja x8 |
| Pack 0,750 Lts Vegano | caja x6 | caja x12 |
| Pack Pote Cormillot 360cc | caja x12 | caja x6 |

**Los baldes van los tres por unidad**, como me aclaraste: 2 Lts $11.509,
3 Lts $11.508, 5 Lts $16.180. El de 2 litros estaba como caja de 9 a $103.585
— por eso en el historial vas a ver un "cambio de precio" enorme, pero es solo
que pasó de precio por caja a precio por unidad.

**Alta:** Pote **Arándanos** Bañados x12 a $68.089, en Impulsivos.

**Baja:** Pote Tutto 3 Lts, ese que nunca llegamos a definir. Eliminado.

**Discontinuado:** Pack Barrita Sin TACC x8. **No lo borré**, y te explico por
qué: hay un pedido ya cargado que lo usa, y si desaparece del catálogo ese
pedido no se puede volver a editar. Queda marcado como discontinuado: no
aparece al tomar pedidos, pero el historial sigue entero. En el catálogo lo
vas a ver con la etiqueta **DISCONTINUADO** y hay un interruptor para darlo de
alta de nuevo si vuelve.

**Lo que ignoré:** el renglón de "ALFAJOR SEICHOC $17.283" en impulsivos, como
me dijiste que estaba mal la lista. El suelto se sigue calculando dividiendo
la caja: $85.401 ÷ 6 = **$14.234** la cajita.

---

## ⚠ Algo que encontré revisando tu catálogo

Vos **fusionaste los dos escoceses** en un solo producto: lo renombraste
**"Bombón Escocés"** con tres sabores —Blanco, Negro y Pistacho— y borraste el
"Pack Escocés Pistacho x8" por separado.

Mi migración, tal como la había escrito, te lo **volvía a crear duplicado**
porque figura en la lista nueva. Lo corregí: ahora solo da de alta lo que es
realmente nuevo. **Borrar un producto es una decisión tuya y la migración no
la deshace.**

> Detalle menor: en ese producto el sabor Blanco quedó escrito **"Banlco"**. La
> abreviación que va a fábrica ("Escoces Bla") está bien, así que no es urgente,
> pero lo podés corregir cuando quieras desde el catálogo.

---

## Tus ediciones se respetan

Esto era lo delicado, porque vos ya habías corregido sabores y abreviaciones a
mano. La migración pisa **solo** precio, presentación, fracción y línea. El
nombre y los sabores quedan como los dejaste.

Verificado contra tu catálogo real: **los 40 productos conservan sus sabores
intactos**, incluidos tus renombres.

---

## Probá esto apenas subas

1. Entrá como **admin**: tiene que salir el aviso *"Lista de precios
   actualizada"*. Corre una sola vez.
2. **Config → Catálogo** → revisá tres precios: Pack Almendrado $50.759, Lata
   Común $40.699, Baldes x2 Lt $11.509 por unidad.
3. Buscá **Pote Arándanos Bañados x12** — tiene que estar en Impulsivos. Los
   sabores los inventé yo, corregilos si hace falta.
4. Confirmá que **Bombón Escocés** sigue siendo uno solo con sus tres sabores,
   sin duplicado.
5. Tomá un pedido de prueba con un postre: fijate que el precio suelto sea el
   de la caja dividido.

---

## Sigue pendiente de lo anterior

La **hoja de ruta del miércoles** con las cuatro piezas que quedamos: orden de
zonas configurable, indicaciones para el repartidor, el pedido agendándose
solo en la gira del miércoles, y la hoja para copiar. Avisame cuando quieras
que la encare.
