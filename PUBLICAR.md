# CRM-Jorge — Versión 9.18 · Alta de usuarios fácil y etapa "Sin Respuesta"

**Solo cambió `app.js`.** Los otros dos son los mismos; van los tres juntos.
Para verificar: en el login y en Config > Debug tiene que decir **9.18 - 29/10/2026**.

---

## 1. Crear usuarios sin entrar a Firebase

En **Config > Usuarios > Crear nuevo usuario** ahora se completa:
nombre, usuario, email, **contraseña inicial** (6 o más) y perfil. Tocás **+ Crear usuario** y listo:
el sistema crea también la cuenta para entrar. Tu sesión de admin no se cierra.

Al terminar te muestra el usuario y la contraseña, con dos botones:
- **Pasarle los datos por WhatsApp:** arma el mensaje con el link de la app, el mail y la contraseña.
- **Mandarle el mail para que elija su contraseña** (opcional).

Importante para el vendedor nuevo: **la primera vez en su celular entra con el mail**
(no con el nombre de usuario). Después puede cambiar la contraseña con "Olvidé mi contraseña".

Solo el admin crea usuarios. "chamu" y "pablo" quedan reservados.

## 2. Nueva etapa "Sin Respuesta"

Va entre **Propuesta Enviada** y **Negociación**, en gris. Es para los que recibieron la
propuesta y no contestaron.
- Desde Propuesta Enviada, la flecha ▶ lo pasa a Sin Respuesta. Si responde, ▶ lo pasa a Negociación.
- Pasar a Sin Respuesta no cuenta como "avanzó" en el informe de la junta.

## 3. Mensaje predeterminado y ronda de mensajes

Mensaje que viene cargado (se edita en **Config > Mensajes**, como los demás):

> Hola {nombre}, ¿cómo estás? Te escribo por la propuesta del freezer de Sei Tu que te
> acerqué para {negocio}. Sé que son días de mucho trabajo. ¿Pudiste pensarlo? Si te sirve,
> paso por el local esta semana y lo vemos en cinco minutos.

En el Embudo, en la solapa **Sin Respuesta**, aparece el botón
**✉ Enviar mensaje a los N sin respuesta**. Abre la lista, del más estancado al menos, con:
- Filtro "Todos" o "30 días o más".
- **Enviar** en cada uno: abre WhatsApp con el mensaje armado para ese contacto.
- Cada envío **cuenta como gestión de hoy** y los 30 días vuelven a empezar.
- Marca los ya enviados hoy y los que no tienen teléfono.

(WhatsApp no permite enviar a todos de un solo toque: se manda uno por uno, pero sin escribir nada.)

## 4. Inacción de 30 días

"Sin Respuesta" tiene **30 días** de tolerancia (las otras etapas tienen 5 a 7). Si pasan 30 días
desde la última visita o mensaje, aparece en las alertas de **contactos sin gestionar** para volver
a insistir. Los 30 días se cambian en **Config > Umbrales de inacción**.

---

## Probado

368 pruebas en el navegador simulado, sin errores (33 nuevas).
