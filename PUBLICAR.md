# CRM-Jorge — Versión 6.9 + reglas de seguridad

Son **dos cosas separadas**: primero subís los archivos (como siempre), y
después, aparte, pegás las reglas nuevas en Firebase. Hacelas en ese orden.

---

## PARTE 1 · Subir los archivos

Borrá de Descargas los `app.js` / `index.html` / `estilos.css` viejos.
Repo → **Add file → Upload files** → los 3 archivos sueltos → Commit.
Ctrl+Shift+R y verificá que diga **versión 6.9**.

### Qué trae

**Aviso de backup automático.** Si pasaron más de 7 días desde el último
backup (o si nunca hiciste uno), al entrar como admin te aparece un cartel con
el botón para exportarlo ahí mismo. Deja de depender de que te acuerdes. La
fecha queda registrada sola cada vez que exportás.

Lo demás ya venía de la 6.8: la corrección de los 39 contactos, el candado
anti-pisada de configuración, la flecha ▶ en la Gira, "Ver en el mapa" en la
ficha y las sucursales desde el "+".

> Nota: la 6.8 pasó todos los controles automáticos. Los agregados del aviso
> de backup (6.9) los revisé línea por línea pero no pude correr el control
> automático porque se me volvió a caer la herramienta. Son cambios chicos y
> acotados. Aun así: al entrar, fijate que la app abra normal.

---

## PARTE 2 · Reglas de seguridad (Firebase)

Esto es lo que hablamos: hoy **cualquiera de los cuatro usuarios tiene permiso
técnico para borrar toda la base**. El "solo lectura" del Gerente es un cartel
en la pantalla, no una cerradura en el servidor.

### Cómo se ponen

1. Firebase Console → proyecto **crm-jorge-63a40** → **Firestore Database**
2. Pestaña **Reglas**
3. **Antes de tocar nada: copiá las reglas que tenés ahora** y guardalas en un
   bloc de notas. Son 10 líneas. Esa es tu marcha atrás.
4. Borrá todo y pegá el contenido de `REGLAS-FIRESTORE.txt`
5. **Publicar**

### Probá inmediatamente después (importante)

Apenas publiques, entrá a la app y verificá:

- Que puedas **abrir un contacto** (lectura)
- Que puedas **editar y guardar** un contacto (escritura)
- Que puedas **guardar algo en Config** (configuración)
- Pedile a Pablo o Chamu que **carguen un prospecto** desde su celular

Si algo da error de permisos, volvé a pegar las reglas viejas que guardaste en
el paso 3 y avisame. No te quedes con la app rota.

### Qué cambia

| | Antes | Ahora |
|---|---|---|
| Configuración (mensajes, catálogos, links) | cualquiera | solo vos |
| Borrar contactos | cualquiera | vos, o el vendedor los suyos |
| Borrar visitas / comodatos | cualquiera | solo vos |
| Alterar el historial (log) | cualquiera | nadie |
| Cargar y editar en la calle | cualquiera | vendedores y vos (igual que antes) |
| Un Gerente que se cree después | escribía todo | solo lectura de verdad |

Fijate que la configuración pasa a ser tuya y de nadie más: eso es una segunda
cerradura contra el problema que tuvimos.

### La contra, para que la tengas clara

Las reglas tienen los emails escritos adentro. **Si sumás un vendedor nuevo,
hay que agregarlo ahí** o no va a poder cargar nada. Son dos líneas y te digo
cómo cuando pase. Es el precio de que el servidor sepa quién es quién.

---

## Sobre los backups (resumen de lo que hablamos)

- Tu plan de Firebase es el gratuito (Spark). **Google no guarda copias de tu
  base.** Las funciones de recuperación existen pero requieren el plan pago.
- O sea: **el archivo que exportás es la única copia que existe.**
- Frecuencia recomendada: **viernes**, y siempre antes de subir una
  actualización. Guardalo en Drive, no solo en la computadora.
- La app ahora te lo recuerda, pero el archivo lo tenés que bajar y guardar vos.

## Pendiente de tu lado

- Cargar mensajes por etapa y links de catálogo.
- Horarios / CUIT / condición impositiva de los clientes.
- Asignar Mañana/Tarde a las paradas de la Gira.
