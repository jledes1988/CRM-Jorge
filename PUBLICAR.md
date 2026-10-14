# CRM-Jorge — Versión 9.11 · Vendedores, saldos, ranking de freezers

**Solo cambió `app.js`.** Los otros dos son los mismos; van los tres juntos.
Para verificar: en el login y en Config > Debug tiene que decir **9.11 - 13/10/2026**.

---

## 1. Chamu y Pablo ya no son vendedores

- Ya hecho en la base: los **16 prospectos de Pablo** están en la papelera
  (se recuperan durante 30 días). Chamu no tenía nada a su nombre.
- Esta versión **saca a Chamu y Pablo del código** (antes la app los volvía a
  crear si se borraban) y **borra sus dos usuarios** sola, una única vez, la
  primera vez que entres como administrador.
- Los vendedores desactivados ya no aparecen en filtros, listas para reasignar,
  ni en la alerta de "Baja actividad".
- El usuario **Pablo Della** (gerente, desactivado) no se tocó.
- **Para sumar un vendedor nuevo**: Configuración → Usuarios, igual que siempre.

## 2. Alerta "comodato activo sin visita"

**Era un error.** La alerta contaba como "activo" cualquier comodato vigente,
también los que están **por firmar** o **por entregar**. Te saltaba por
**MaxiKiosco Emilio** (por firmar, última visita 1/9). Ahora solo cuenta los
freezers **puestos**.

El indicador **"Comodatos firmados"** del panel también contaba los que no estaban
firmados. Ahora cuenta por fecha de firma (se guarda al tocar "Marcar firmado").

## 3. Saldos

**Las deudas nunca vencen.** En Deudores figuran hasta que se pagan, sin importar
el mes. Lo que pasaba: el pedido de **Colegio Garzón del 18/9 ($423.240)** se
entregó sin cobrar pero la deuda **nunca se cargó**. Solo se veía en Pedidos, y al
cambiar el mes desaparecía de la vista. Es el único caso en tu base.
- **Revisar deudas** ahora detecta estos casos. En Deudores aparece un aviso
  naranja: tocalo y corregí. La deuda queda con la fecha del pedido.

**Ajuste / nota de crédito:** en la cuenta de cada cliente hay un botón nuevo para
las diferencias que no se van a cobrar (notas de crédito, redondeos, descuentos).
Elegís el motivo y podés anotar el N° de nota de crédito. **No cuenta como cobro**
(no aparece en Pagos) y queda registrado en la cuenta en violeta.
Ejemplo: Max Candy debe $18.809 de diferencia → Ajuste → Nota de crédito → queda en 0.

## 4. Hoja de ruta para el repartidor

**Pedidos y deudas → Entregas → 📜 Hoja de ruta** (arriba, al lado de
"Cerrar la entrega"). Aparece cuando hay pedidos pendientes. Ahí la copiás y se
la mandás por WhatsApp.

## 5. Contactos sin ubicación, por zona

En el **Mapa** hay un botón **📍 Sin ubicación (N)**. Abre la lista **agrupada por
barrio** (o ciudad si no tiene barrio), con filtros Clientes / Negociación /
Otros prospectos. Tocando uno abrís su ficha.

## 6. Ranking de freezers (administrador y gerente)

En **Informes**, al final. Por cada cliente con freezer activo:
- **Venta por mes** desde que se le puso el freezer (el consumo promedio), con barra.
- Venta total, cantidad de pedidos, ticket promedio, cada cuántos días pide,
  último pedido, venta de los últimos 30 días y deuda.
- Marcas: **sin pedir hace más de X días** (el plazo de Configuración),
  **rinde menos de la mitad del promedio**, o **freezer nuevo** (menos de 30 días).
- Arriba: freezers activos, venta promedio por freezer, total mensual y cuántos
  hay para revisar.
- Se ordena por venta por mes, venta total o días sin pedir.

Mide **venta, no ganancia**: no hay costos cargados.

---

## Probado

208 pruebas en el navegador simulado, sin errores (30 nuevas).

## Lo primero que conviene hacer

1. Subir la versión y entrar como administrador (borra los usuarios de Chamu y Pablo).
2. **Deudores → aviso naranja → Corregir** (Colegio Garzón).
3. Max Candy y los demás con diferencias chicas → **Ajuste / nota de crédito**.
