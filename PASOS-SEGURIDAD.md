# Migración de seguridad — CRM Jorge

**Hacelo en este orden exacto. Cada paso deja el sistema funcionando: si algo falla, nadie queda afuera.**

Tené a mano los celulares de Chamu y Pablo (o avisales que estén disponibles) para el paso 4.

---

## PASO 1 — Crear las 4 cuentas en Firebase (5 minutos)

1. Entrá a **console.firebase.google.com**
2. Elegí el proyecto **crm-jorge-63a40**
3. Menú izquierdo → **Authentication**
4. Solapa **Sign-in method** → buscá **Email/Password** → **Habilitar** → Guardar
   - *(Si ya estaba habilitado, seguí de largo)*
5. Solapa **Users** → botón **Add user**, y creá estas cuatro, una por una:

| Email | Contraseña inicial |
|---|---|
| jorge.ledesmagd@gmail.com | (elegí una) |
| jledes.tf@gmail.com | (elegí una) |
| jorge_500_df@gmail.com | (elegí una) |
| pablodellacasa13@gmail.com | (elegí una) |

**Importante:** podés poner la misma contraseña inicial para los cuatro. Después cada uno la cambia solo desde "Olvidé mi contraseña" en el login.

**No toques las reglas todavía.** Eso es el paso 5.

---

## PASO 2 — Subir los archivos nuevos

Subí a GitHub: **`app.js`** y **`index.html`**

Esperá 1-2 minutos a que GitHub Pages publique.

---

## PASO 3 — Probar vos primero

1. Abrí la app y cerrá sesión si estabas adentro
2. Verificá abajo del login que diga **Versión 5.0**
3. Entrá con usuario **jl** y la contraseña que le pusiste en el paso 1
4. Si entrás bien: perfecto, seguí
5. Si NO entrás: **frená acá y avisame**. Nada se rompió, la base sigue como estaba.

---

## PASO 4 — Que prueben los tres

Que Jorge, Chamu y Pablo entren cada uno con su usuario de siempre (`jorge`, `chamu`, `pablo`) y la contraseña inicial.

**Que cada uno cambie su contraseña**: en el login, tocar **"Olvidé mi contraseña"** después de escribir su usuario → les llega un mail → eligen la suya.

**No sigas al paso 5 hasta que los cuatro hayan entrado bien.**

---

## PASO 5 — Cerrar la base (el paso que realmente protege)

Recién ahora, con los cuatro entrando bien:

1. Firebase Console → **Firestore Database** → solapa **Rules**
2. Reemplazá **todo** el contenido por esto:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      // Solo usuarios reales y verificados. Se acabó el acceso anónimo.
      allow read, write: if request.auth != null
                         && request.auth.token.firebase.sign_in_provider == 'password';
    }
  }
}
```

3. Botón **Publicar**

4. **Probá de nuevo** que entrás y que ves los datos. Que los otros tres también.

---

## PASO 6 — Cortar el acceso anónimo

1. Firebase Console → **Authentication** → **Sign-in method**
2. Buscá **Anonymous** → abrilo → **Deshabilitar** → Guardar

Listo. La base quedó cerrada.

---

## Si algo sale mal

**"Este usuario todavía no está dado de alta"** → falta crear esa cuenta en el paso 1, o el email tiene una letra distinta.

**Nadie puede entrar después del paso 5** → volvé a poner esta regla provisoria, que deja todo como estaba antes:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

Publicá, y avisame. Con esa regla vuelven a entrar todos.

**Alguien olvidó su contraseña** → en el login, escribe su usuario y toca "Olvidé mi contraseña". Le llega un mail. No necesita que hagas nada.

---

## Qué cambia para el uso diario

- Entran igual que siempre: **usuario y contraseña** (no cambia el hábito)
- Cada uno puede recuperar o cambiar su contraseña solo, por mail
- Vos ya **no podés ver** las contraseñas de nadie (así debe ser). Desde Config → Usuarios podés enviarles el mail de restablecimiento
- Para **crear un usuario nuevo**: lo creás en Config como siempre (ahora pide el email en vez de la contraseña), y la app te recuerda el paso de crear la cuenta en Firebase
- Sin internet, en el celular que ya tenía sesión iniciada, se sigue trabajando normal
