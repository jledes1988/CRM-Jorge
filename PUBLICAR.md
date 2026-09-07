# CRM-Jorge — Versión 7.7

**Solo cambió `app.js`.** Descargalo y subilo a GitHub. `index.html` y
`estilos.css` quedan como están.

Compila, ningún botón quedó apuntando a una función inexistente, y simulé el
motor de fracciones y las reglas de etapa contra tu backup del 3/9.

---

## 1 · Recordatorio de visitas agrupado por barrio

Los dos paneles de recordatorio —**Contactos sin gestión** y **Esperando
segunda visita**— ahora vienen partidos por barrio, con la zona que más
pendientes tiene arriba de todo. Adentro de cada barrio se mantiene el orden
por urgencia.

Así abrís el panel, ves "Nueva Córdoba (7)" y armás la gira de una zona sin ir
salteando la lista.

---

## 2 · Editar la marca del freezer después de entregado

El botón **Editar** aparecía solo en los pendientes. Ahora está también en los
**activos**: podés corregir marca, N° y fecha de entrega de un freezer que ya
está puesto.

Lo único que no te deja es borrar el N° de un freezer entregado — es lo que
identifica la unidad que está físicamente en el local.

---

## 3 · El Drugstore que "ya estaba cargado" pero no aparecía

Lo encontré. **Existe**, tel 3888447234, cargado el 15/7. No está borrado:
está en etapa **"No Le Interesa"**, y las listas esconden por defecto lo que
quedó fuera del embudo. Por eso no lo veías pero el chequeo de duplicados sí
lo encontraba.

Ahora el aviso de duplicado te dice **por qué no lo ves** ("marcado como No Le
Interesa: por eso no aparece en la lista", o "EN PAPELERA") y te da un botón
**"Reactivarlo en vez de cargarlo de nuevo"**, que lo devuelve al embudo en
Contactado con todo su historial intacto.

> Hay 3 contactos más en la misma situación: Drugstore Infinity, Drugstore
> 24/7 y este. Los buscás desde el filtro de etapa del Embudo.

---

## 4 · Kiosco vale y 6yS: encontré por qué y lo arreglé

**El bug:** poner "Cliente Activo" convertía el contacto por dentro, pero
**volver atrás no revertía nada**. La marca interna quedaba trabada en
"cliente" para siempre y ningún cambio de etapa la soltaba.

En tu historial se ve exactamente eso: el **10/8** 6yS se convirtió a Cliente
Activo y **ese mismo día** lo volviste a Negociación. No tomó. Y lo seguiste
intentando el 24/8, el 25/8 y el 31/8.

**Dos cosas:**

- **Ahora la etapa manda para los dos lados.** Cualquier etapa que no sea
  "Cliente Activo" lo devuelve al embudo. Ya podés moverlos a mano.
- **Se reparan solos al entrar como admin.** Se corrigen **3**: Kiosco vale
  (queda en Negociación), 6yS (Propuesta Enviada) y **Almacén de Andrea**, que
  figuraba como cliente activo estando en "No Le Interesa". Cada uno conserva
  su etapa real, no se aplastan todos a Negociación.

> Solo toca a los que nunca registraron una compra. Al que compró no lo mueve.

---

## 5 · "Se cayó el acuerdo" del freezer

Estado nuevo para cuando se acuerda el freezer y después no se entrega. En
**Pendientes**, botón **"Se cayó el acuerdo"** → te pide el motivo (podés
dejarlo vacío) y el acuerdo pasa a **⛔ CAÍDOS**.

- **No es un retiro.** El freezer nunca salió, así que no ensucia la
  estadística de freezers colocados ni de retirados.
- Sale del contador **"en camino a la meta"**.
- Solapa nueva **Caídos**, en admin y en vendedor.
- Si se reactiva, botón **"Volver a ponerlo en juego"** y vuelve al estado que
  tenía.
- El motivo queda guardado, así en unos meses podés mirar por qué se caen.

> Justamente es lo que le pasó a 6yS: el 31/7 figura entregado el freezer #yy
> y retirado el mismo día. Eso es la simulación que me pediste evitar.

---

## 6 y 7 · Postres y frambuesas fraccionados

Cada producto puede venderse **por caja cerrada o suelto**, con el precio de
la fracción calculado solo.

En el formulario del pedido, esos productos muestran **dos casillas** por
sabor: *Cajas* y *Cajas x8* (o *Unidades*), con el precio unitario arriba.

El texto para fábrica sale con el formato exacto de tus capturas:

```
pedido
2 alfajor seichoc
2 cajas x8 alfajor seichoc
6 unidades pote dubai
4 unidades frambuesa
```

Lo dejé cargado en **19 productos de Postres**: los packs x8 se fraccionan en
**cajitas x8** (6 por caja), y los potes, tortas y frambuesas en **unidades**.
Las frambuesas quedan a $76.429 la caja de 12 y **$6.369 la unidad**.

**Lo controlás vos** desde Config → Catálogo → cualquier producto: dos campos
nuevos, *"Cuántos entran en la caja"* y *"Cómo se llama cada uno"*. Poné 0 en
el primero y el producto vuelve a venderse solo por caja cerrada. Abajo te
muestra a cuánto queda el suelto.

Los baldes x3, x5 y el Pote Tutto quedaron sin fraccionar porque ya se venden
por unidad.

---

## Lo que vas a ver al entrar

Simulé todo junto sobre tu backup. Los avisos salen en este orden:

1. **3 contactos trabados como clientes se corrigieron** (punto 4).
2. **5 clientes volvieron a prospecto** por la regla de 45 días: Ypf sabatini
   (último pedido 30/6), Coco loco, Despensa Hidalgo, Di Navarro y Maxikiosco
   GyC (los cuatro sin ningún pedido cargado).

Te quedan **7 clientes**: Club Municipal, Despensa MyM, Fragueiro Store,
Colegio Garzón, La esquina Market, Roselane y La campiña.

> Igual que la vez pasada: los que caen sin pedidos caen porque el módulo de
> pedidos estuvo apagado hasta la 7.5 y nunca hubo forma de cargárselos. Si
> alguno te compra, cargale el pedido y vuelve solo a cliente.

---

## Probá esto apenas subas

1. Entrá como admin → mirá los dos avisos → el tablero debería decir **7
   clientes**.
2. **Kiosco vale** tiene que estar en el embudo, en Negociación, y ahora sí
   dejarte moverlo.
3. Tomá un pedido → pestaña **Postres** → cargá **2** en Cajas y **2** en
   Cajas x8 de Alfajor Seichoc → **Copiar para fábrica** → tienen que salir
   los dos renglones separados.
4. **Comodatos → Pendientes** → "Se cayó el acuerdo" en alguno → verificá que
   aparezca en la solapa **Caídos** y que el contador de la meta baje.
5. **Comodatos → Activos** → Editar → cambiá la marca y guardá.
6. Cargá un prospecto nuevo con el tel **3888447234** → tiene que avisarte que
   ya existe y ofrecerte reactivarlo.

---

## Pendientes tuyos

- Corregir sabores y abreviaciones desde el editor del catálogo.
- Sabores reales de cada categoría de lata.
- Definir el **Pote Tutto 3 Lts** (quedó a $9.900).
- CUIT, condición impositiva y horarios de los clientes.
- Arrancar con la **segunda visita**: 140 prospectos esperando.
