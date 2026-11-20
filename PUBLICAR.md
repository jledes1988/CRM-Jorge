# CRM-Jorge — Versión 9.23 · Deuda, visitas, clasificación, inactivos, mapa y WhatsApp

**Esta vez son 4 archivos:** `app.js`, `index.html`, `estilos.css` y **`sw.js`** (cambió).
Van dentro del .zip. Para verificar: en el login tiene que decir **9.23 - 20/11/2026**.

---

## 1. Antigüedad de la deuda

- La deuda empieza a contar **el día de la entrega** del pedido que no se pagó.
- Los pagos cancelan **primero la deuda más vieja**. Si paga lo anterior y ese mismo día recibe
  un pedido que no paga, el conteo **arranca de nuevo** desde ese día.
- Si paga una parte, sigue sumando días desde el pedido viejo...
- ...salvo que queden **menos de $5.000**: ese saldo chico pasa al pedido siguiente y **no sigue
  sumando días**. Si el pedido siguiente tampoco lo paga, el atraso cuenta desde ese pedido.
- En Deudores dice "atraso: N días" o "saldo chico: va con el próximo pedido".
- Los $5.000 se cambian en **Config › Reglas y ajustes**.

## 2. Pedido y entrega de freezer cuentan como visita

- Al **tomar un pedido** queda registrada una visita de ese día (con el pedido).
- Al **entregar un freezer**, también.
- Si después cargás la visita a mano ese mismo día, se **fusiona** con la automática: no queda doble.
- **Por única vez**, al entrar como JL, los pedidos y entregas de freezer anteriores que no
  tenían visita ese día se suman como visitas. Te avisa cuántos.

## 3 y 6. Clasificación automática por consumo

La hace el CRM solo, con los pedidos (la carga inicial no cuenta como consumo; mira las
últimas 12 semanas). Mismos criterios que la planilla:

| Categoría | Regla | Visita sugerida |
|---|---|---|
| **A · Alto consumo** | Repone $60 mil o más por semana y pide cada 14 días o menos | Semanal |
| **B · Estable** | Ya repone | Quincenal |
| **Nuevo** | Solo la carga inicial, hace 3 semanas o menos | Quincenal |
| **Revisar** | Sin reponer hace más de 3 semanas | Quincenal + visita de diagnóstico |
| **Inactivo** | Sin pedido hace más de 45 días | WhatsApp / evaluar retiro del freezer |

Dónde se ve:
- **Informes › Clasificación de clientes por consumo:** cuántos hay de cada categoría,
  **ranking de puntos Sei Tu** por consumo semanal (con % de la zona y tendencia de las
  últimas 4 semanas), consumo semanal de la zona, promedio por freezer y la lista de
  **cambios de frecuencia sugeridos** comparando con la semana tipo. Botón **Exportar a Excel**.
- **Ficha del cliente (En la Gira):** categoría, consumo por semana, cada cuántos días pide,
  tendencia y la visita sugerida.
- **Dashboard:** avisos de clientes inactivos, freezers para revisar y clientes para cambiar
  de frecuencia.
- Los montos y días de los criterios se cambian en **Config › Reglas y ajustes**.

## 4. Cliente inactivo (en vez de volver a prospecto)

- Un cliente **nunca vuelve a prospecto**. Si pasa 45 días sin pedido queda **inactivo**,
  tenga o no freezer. Con el próximo pedido vuelve a estar activo.
- En el mapa va en **gris**, y hay un filtro "Clientes inactivos (gris)".
- **Por única vez**, al entrar como JL, los que la regla vieja había pasado a prospecto y
  tienen freezer o ya habían comprado vuelven a ser clientes.

## 5. Mapa

- Fondo **claro con calles** (se lee mucho mejor). Arriba a la derecha podés elegir
  Claro / Oscuro / OpenStreetMap; queda guardado.
- Se reacomoda varias veces mientras se abre la pantalla, para que no quede gris.
- Si el servidor del mapa falla, pasa solo a OpenStreetMap.

## 7. Enviar el pedido por WhatsApp

- En el pedido hay un botón verde **Enviar por WhatsApp**: abre el chat con el texto listo.
- El chat fijo se pone en **Config › Reglas y ajustes › WhatsApp para enviar los pedidos**
  (número con código de país, ej. 5493511234567).
- **WhatsApp no permite abrir un grupo directo.** Si los pedidos van a un grupo, dejá el
  número vacío: el botón abre la lista de chats y elegís el grupo (queda primero en recientes).

## Otro cambio: sin mails escritos en el código

El mail de la cuenta de admin estaba escrito dentro de `app.js` (que es público). Se sacó: cada
usuario se identifica con el email guardado en su ficha. Para vos no cambia nada en los
celulares donde ya entraste. En un celular nuevo, la primera vez entrás con tu **email**
(después alcanza con "jl"). También es un paso necesario para licenciar el sistema.

---

## Probado

126 pruebas en el navegador simulado, sin errores (41 nuevas).
