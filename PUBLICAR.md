# CRM-Jorge — Versión 9.26 · Enviar el pedido por WhatsApp sin editarlo

**Solo cambió `app.js`.** Subí los 4 archivos del .zip igual que siempre.
Para verificar: en el login tiene que decir **9.26 - 25/11/2026**.

## Enviar desde el pedido abierto
En **Ventas › Pedidos**, al tocar un pedido se abre con tres botones nuevos, arriba de
"Guardar correcciones":
- **Enviar por WhatsApp (elegir chat)**: abre WhatsApp con el texto del pedido listo y elegís
  el chat o el grupo.
- **Enviar al chat fijo**: solo si cargaste un número en Config › Reglas y ajustes.
- **Copiar el texto del pedido.**

No hace falta entrar a "Editar el pedido completo". El texto es el mismo que arma el editor
(el primer pedido de un cliente sale con el encabezado completo). El gerente también puede enviarlo.

---

# CRM-Jorge — Versión 9.25 · Mapa oscuro que carga y mensajes de ingreso claros

**Solo cambió `app.js`.** Subí los 4 archivos del .zip igual que siempre.
Para verificar: en el login tiene que decir **9.25 - 23/11/2026**.

## Mapa oscuro
El oscuro ahora se arma con las mismas imágenes de **Calles (OpenStreetMap)**, que son las que
te cargan bien, pasadas a colores oscuros. Mismo detalle de calles y nombres, con los puntos
bien visibles. Se dejó de usar el servidor anterior (CARTO), que fallaba.

## Ingreso
Si no se puede entrar, el mensaje ahora dice **con qué email se intentó** y el motivo exacto
(contraseña incorrecta, cuenta no asignada, etc.).

---

(Lo de la 9.24 sigue igual:)


**Solo cambió `app.js`.** Subí los 4 archivos del .zip como la vez pasada
(`app.js`, `index.html`, `estilos.css`, `sw.js`).
Para verificar: en el login tiene que decir **9.24 - 23/11/2026**.

---

## 1. La cuenta de Jorge vuelve a entrar (y los usuarios no fallan más)

**Qué pasó:** la ficha del usuario "Jorge" en la base no tenía el email guardado. Entraba gracias
a un mail escrito en el código, que saqué en la 9.23. Por eso decía "no tiene permisos".

**Arreglo:**
- Jorge vuelve a entrar con jledes.tf@gmail.com y su contraseña nueva, sin hacer nada.
- Al entrar, el sistema **guarda en la ficha de cada usuario su email y el identificador de su
  cuenta**. Desde ahí lo reconoce aunque se cambie la contraseña o el email.
- **Config › Usuarios** muestra el email de cada usuario:
  - "✓ vinculado": ya entró y quedó atado a su cuenta.
  - "se vincula en su próximo ingreso": todavía no entró con esta versión.
  - En rojo **"Sin email: no puede entrar"** si le falta: tocás **Email** y lo cargás.
- Si alguien entra con una cuenta que no está asignada, el mensaje dice **qué email usó** y
  qué tiene que hacer el administrador.
- Los vendedores nuevos que crees desde Config ya quedan con su email.

## 2. Informe por barrio

En **Informes**, nueva sección **POR BARRIO** (respeta el período y el vendedor elegido):
- **Ranking de barrios por facturado** (lo entregado en el período), con % de la zona, consumo
  semanal, clientes, freezers, inactivos y prospectos.
- **Barrios para darles atención:** muchos clientes inactivos, freezers sin reponer, muchos
  prospectos abiertos con pocos clientes (zona para cerrar), o freezers que rinden poco.
- **Elegís un barrio** y ves su puesto, facturado, consumo semanal y todos sus clientes con su
  categoría, más los prospectos abiertos.
- **Exportar barrios a Excel.**
- "Nueva Córdoba" y "Nueva Cordoba" cuentan como el mismo barrio.

## 3. Mapa

- Se sacó el fondo claro. Quedan **Oscuro HD** (por defecto) y **Calles (OpenStreetMap)**.
- El oscuro ahora usa **mosaicos de alta definición**: calles y nombres más nítidos y un poco más
  grandes, con más brillo y contraste, para que se lean sin perder el contraste de los puntos.

## 4. WhatsApp

- El pedido siempre tiene **"Enviar por WhatsApp (elegir chat)"**: abre la lista de chats y
  elegís dónde mandarlo (sirve para grupos).
- Si cargás un número en Config › Reglas y ajustes, aparece además **"Enviar al chat fijo"**.

---

## Probado

149 pruebas en el navegador simulado, sin errores (23 nuevas), incluido el caso real de la ficha
de Jorge sin email.
