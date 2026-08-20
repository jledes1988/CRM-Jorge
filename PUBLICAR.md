# CRM-Jorge — Versión 7.0

## Por qué te salían otros mensajes

**No era que no se guardaran: se guardaron bien. El problema era al enviarlos.**

En el código había una regla vieja: si el contacto era **cliente** (no
prospecto), el WhatsApp salía siempre con un texto fijo escrito en el
programa — *"Hola! Te escribo de Sei Tu Helados."* — y se ignoraba por
completo el mensaje que vos hubieras grabado para "Cliente Activo".

Antes casi no se notaba porque tenías 17 clientes. Pero **ayer convertimos 39
contactos a cliente**, así que de golpe pasaron a ser 56 los que recibían el
texto genérico. Por eso lo viste justo ahora: lo destapó el cambio que
hicimos ayer.

Corregido: ahora el mensaje sale **siempre** del que está configurado para la
etapa del contacto, sea prospecto o cliente. Si grabaste un mensaje para
"Cliente Activo", ese es el que se manda.

Lo mismo pasaba con los **links de catálogo**: a los clientes solo se les
adjuntaba el link general y se ignoraba el específico de su etapa. También
quedó arreglado.

> Tus mensajes grabados están intactos, no hace falta que los vuelvas a
> escribir. Con esta versión ya salen como los guardaste.

## Además

Los botones de guardar de Config (mensajes, mensaje de pedido, franquiciados,
links) ahora **graban solo su propio campo** en vez de volcar toda la
configuración. Es la misma lógica que aplicamos a las rutinas internas: menos
superficie donde algo pueda pisar otra cosa.

---

## Subir

Borrá de Descargas los archivos viejos. Repo → **Add file → Upload files** →
los 3 sueltos → Commit. Ctrl+Shift+R y verificá que diga **versión 7.0**.

### Probá esto apenas subas

1. Abrí un **cliente** (de los 56) y tocá "Enviar WhatsApp" → tiene que salir
   el mensaje que vos grabaste para "Cliente Activo", no el genérico.
2. Abrí un **prospecto** y probá lo mismo → el mensaje de su etapa.
3. Si tenés un link de catálogo cargado, fijate que se adjunte.

> Como la vez pasada: no pude correr el control automático porque se me cayó
> la herramienta otra vez. Revisé los cambios línea por línea y son acotados
> (tocan solo el envío de WhatsApp y los botones de guardar de Config), pero
> conviene que verifiques que la app abra normal.

---

## Recordá

- **Backup**: los viernes, en la carpeta del escritorio que armaste. Bien ahí.
  Subilo también a Drive de vez en cuando: si se rompe el disco, la carpeta
  del escritorio se va con él.
- **Reglas de Firestore**: si todavía no las pegaste, están en
  `REGLAS-FIRESTORE.txt`. Acordate de copiar las viejas antes, por las dudas.

## Pendiente de tu lado

- Links de catálogo (los mensajes ya están).
- Horarios / CUIT / condición impositiva de los clientes.
- Asignar Mañana/Tarde a las paradas de la Gira.
