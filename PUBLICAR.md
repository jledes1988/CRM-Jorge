# CRM-Jorge — Versión 7.6

**Solo cambió `app.js`.** Descargalo y subilo a GitHub. `index.html` y
`estilos.css` quedan como están.

Esta vez sí pasó los controles: compila, las cuatro funciones nuevas están en
su lugar, no quedaron botones apuntando a funciones borradas, y simulé la
regla contra tu backup del 3/9 antes de entregártela.

---

## 1 · Cliente sin pedido vuelve a prospecto

Automático, sin preguntar. **Al entrar como admin**, todo Cliente Activo que
lleve **45 días sin un pedido registrado** vuelve al embudo como prospecto en
etapa **Negociación**. Apenas le cargás un pedido, vuelve a ser cliente solo.

Queda todo en el historial de auditoría, con el motivo y la fecha de
referencia.

**El plazo lo cambiás vos:** Config → *Cliente sin pedido vuelve a prospecto*.
Debajo del campo te muestra, en vivo, **quiénes caerían con el número que
pongas**, antes de guardar. El botón dice "Guardar y aplicar": lo aplica en el
momento, no hace falta salir y volver a entrar.

### Lo que va a pasar apenas entres

Corrí la regla sobre tu backup. Con 45 días **caen 6** y te quedan **9
clientes**:

| Cliente | Motivo |
|---|---|
| Ypf sabatini | último pedido 30/6 — 68 días |
| Coco loco | sin pedidos, ingresó 2/7 |
| Almacén de Andrea | sin pedidos, ingresó 14/7 |
| Despensa Hidalgo | sin pedidos, ingresó 15/7 |
| Di Navarro | sin pedidos, ingresó 16/7 |
| Maxikiosco GyC | sin pedidos, ingresó 17/7 |

Y en las próximas semanas caerían **Kiosco vale** (41 días) y **6yS** (38), si
no les cargás nada.

> **Leé esto antes de subirlo.** Cinco de los seis caen porque *nunca tuvieron
> un pedido cargado* — y hasta la 7.5 el módulo de pedidos estaba apagado, así
> que no había manera de cargárselo. Si alguno de esos cinco te está comprando
> de verdad, **cargale el pedido y vuelve solo a cliente**. Si no te compran,
> la regla está haciendo exactamente lo que tiene que hacer.

### Un detalle que cambié respecto de lo que habíamos hablado

Para el que **nunca tuvo un pedido** cuento los 45 días **desde que ingresó**,
no desde siempre. Vos me dijiste que el caso no existe porque un prospecto
nunca pasa a cliente sin su primer pedido — y tenés razón como regla de
negocio. Pero en la base hay ocho que sí están así, y uno es **La campiña**,
que cargaste hace 12 días. Con el criterio estricto, La campiña se te iba a
prospecto el primer día. Con este, tiene sus 45 días como cualquier otro y
después cae igual. A largo plazo el resultado es el mismo; la diferencia es
que no te castiga al que acabás de ganar.

---

## 2 · El pedido solo se copia

Saqué el botón verde de WhatsApp de la pantalla del pedido. Queda **"Copiar al
portapapeles"** como única acción, y arriba dice que lo pegues en el grupo
"Pedidos y clientes nuevos".

---

## Probá esto apenas subas

1. Entrá como admin → tiene que aparecer el aviso de **6 clientes** que
   volvieron a prospecto → el tablero debería decir **9 clientes**.
2. Buscá alguno de esos 6 en el embudo: tiene que estar en **Negociación**.
3. Cargale un pedido de prueba a uno → verificá que vuelva a **Cliente Activo**
   solo. Después borrá el pedido desde Config → Pedidos cargados.
4. Config → *Cliente sin pedido vuelve a prospecto* → cambiá a 90 y mirá cómo
   cambia la lista de abajo. Volvelo a 45 antes de guardar (o dejalo en lo que
   te sirva).
5. Tomá un pedido → **Pedido para fábrica** → tiene que haber un solo botón,
   el de copiar.

---

## Pendientes tuyos

- Corregir sabores y abreviaciones desde el editor del catálogo.
- Sabores reales de cada categoría de lata.
- Definir el **Pote Tutto 3 Lts** (quedó a $9.900).
- CUIT, condición impositiva y horarios de los clientes, para que el
  encabezado del pedido a fábrica salga solo.
- Arrancar con la **segunda visita**: 140 prospectos esperando.
