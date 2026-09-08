# CRM-Jorge — Versión 7.8

**Solo cambió `app.js`.** Pero esta vez hay **un paso extra obligatorio** antes
de usar las deudas: leé `REGLAS-DEUDAS.txt`.

---

## ⚠ Primero: las reglas de Firestore

El módulo de deudores guarda en una colección nueva (`deudas`) que tus reglas
actuales **no contemplan**. Hasta que agregues el bloque, la base va a rechazar
cada movimiento.

Está todo explicado en `REGLAS-DEUDAS.txt`: son 6 pasos y un bloque de 5
líneas para pegar. **No borres nada de lo que ya está**, solo agregás.

Si te lo olvidás, la app te avisa con un cartel rojo explícito en vez de hacer
como que guardó. Decime si preferís que lo aplique yo desde el navegador, como
la vez pasada.

---

# Los dos bugs que encontraste

## Los comodatos caídos seguían contando

Tenías razón. Cuando hice el estado "caído" en la 7.7, lo apliqué en la
pantalla de Comodatos, pero **seis lugares más del código** definían "freezer
vigente" como *"que no esté retirado"* — y un acuerdo caído no está retirado,
así que seguía contando.

Por eso el aviso te decía que había freezers sin visita que vos ya habías dado
de baja. Afectaba también al tablero, a los informes, al mapa y al botón
"Acordó freezer" de la ficha.

Lo unifiqué en un solo lugar: ahora hay una única definición de "en juego" y
todo el resto la usa. **En Informes agregué un contador de "Acuerdos caídos"**
para que no desaparezcan del todo.

## El pedido: vista previa y copiado

Dos cosas distintas, las dos arregladas.

**La vista previa vuelve, y mejor:** ya no está escondida detrás de un botón.
Ahora el texto para fábrica está **dentro del mismo formulario del pedido**,
abajo de todo, y **se va escribiendo solo** mientras cargás cantidades. Sacás
la pantalla intermedia que te confundía.

**El copiado mentía.** El método viejo (`execCommand`) en el Chrome del celular
**devuelve "no pude" en vez de tirar error**, así que la app cantaba "Copiado"
en verde cuando en realidad no había copiado nada. Ahora usa el portapapeles
moderno y **solo dice "Copiado" si el navegador confirma que copió**. Si no
puede, te deja el texto seleccionado y te dice que lo mantengas apretado.

> El cartel verde seguido del rojo era eso: el verde mentía y el rojo era el
> real.

---

# Lo nuevo

## 1 · Módulo de deudores

**La deuda sale del pedido.** Al final del formulario hay una sección
**COBRO DE ESTA ENTREGA** con tres botones: *Cobré todo* / *Cobré una parte* /
*No cobró nada*. Si elegís "una parte", ponés cuánto te dio y abajo te dice en
rojo, en vivo, **cuánto queda debiendo**. Al guardar, eso se carga solo a su
cuenta.

Si el cliente ya venía debiendo, te lo avisa arriba antes de que cargues nada.

**Cuenta corriente por cliente.** Botón *Cuenta corriente* en la ficha, que ya
te muestra el saldo en el propio botón. Adentro: el saldo grande, desde cuándo
arrastra, y el historial de cada deuda y cada pago con quién y cuándo. Podés
**registrar un pago** (total o parcial), **cargar una deuda a mano** (para lo
que quedó de antes de la app) y **borrar un movimiento** mal cargado.

> El saldo **no se guarda en ningún lado**: se recalcula siempre sumando los
> movimientos. Así nunca te queda un número que no coincide con el historial.

**El recordatorio, agrupado por barrio.** En HOY aparece en rojo *"N clientes
te deben $X"*. Al tocarlo se abre el panel: el total en la calle arriba, y
abajo agrupados por barrio con el subtotal de cada zona, para salir a cobrar
por recorrido. Cada cliente trae el monto, hace cuántos días arrastra (color
según sea más o menos de 15 y 30 días) y cuatro botones: **Cobrar**, **Cuenta**,
**WhatsApp** y **+ Gira**.

El admin lo ve también como alerta en el tablero, y el filtro **Deudores** de
Contactos ahora usa el saldo real en vez de la marca vieja.

## 2 · El comodato convierte en Cliente Activo

Elegiste *al entregar*, que es lo que ya hacía. Lo dejé como está: mientras el
freezer está "por firmar" o "por entregar" sigue siendo prospecto, porque
todavía no tiene nada nuestro en el local.

> Aviso de algo que se va a cruzar: un cliente al que le pusiste el freezer
> pero que no te compra hace 45 días, hoy **vuelve a prospecto** por la regla
> de la 7.6. Si querés que el freezer puesto lo blinde de esa regla, decime y
> lo cambio: es una línea.

## 3 · Color de Negociación en el mapa

Era cyan, el mismo color de acento de toda la app, por eso no resaltaba.
Ahora es **blanco puro con borde oscuro y el punto más grande** que los demás.
Ningún otro estado usa blanco, y sobre el mapa oscuro es el que más salta.

Como Negociación dejó de ser cyan, el cyan queda libre para "cliente activo
con freezer puesto", que ya lo usaba.

---

## Probá esto apenas subas

1. **Primero las reglas** (`REGLAS-DEUDAS.txt`). Sin eso, el punto 3 falla.
2. Tomá un pedido → cargá algo → mirá que **la vista previa se escriba sola**
   abajo → **Copiar al portapapeles** → pegalo en cualquier lado para
   confirmar que copió de verdad.
3. En el mismo pedido, elegí **"Cobré una parte"**, poné un monto menor al
   total y guardá → tiene que decirte cuánto quedó debiendo.
4. Volvé a **HOY**: tiene que aparecer el recordatorio rojo de cobranza.
   Entrá, tocá **Cobrar**, registrá el pago completo y verificá que
   desaparezca de la lista.
5. **Comodatos → Caídos**: agarrá uno y fijate que **ya no aparezca** en el
   aviso de "comodato activo sin visita" del tablero admin.
6. **Mapa**: buscá un contacto en Negociación — tiene que ser un punto blanco,
   más grande que el resto.

---

## Tus pendientes

- Definir el **Pote Tutto 3 Lts** (quedó a $9.900).
- Datos de los clientes (CUIT, condición impositiva, horarios) — dijiste que
  los cargás hoy.
- Segundas visitas — dijiste que arrancás hoy.
