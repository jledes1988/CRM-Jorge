# CRM-Jorge — Versión 9.4 · Pulido

**Solo cambió `app.js`.** Los otros dos son los mismos; van los tres juntos.

---

## 1 · Las sucursales ahora llevan la calle

Como pediste: **nombre del negocio + Sucursal + la calle**.

**Al cargar una nueva**, el campo de dirección va primero y el nombre **se
arma solo** mientras escribís. Si lo editás a mano, deja de pisarse.

**Las 14 que ya estaban se renombran solas** la primera vez que entres como
admin. Tus nueve Drugstore quedan así:

```
Drugstore Argentina - Sucursal General Paz 133
Drugstore Argentina - Sucursal General paz 31
Drugstore Argentina - Sucursal Velez Sarsfield 30
Drugstore Argentina - Sucursal Velez Sarsfield 100
Drugstore Argentina - Sucursal Velez Sarsfield 168
Drugstore Argentina - Sucursal Velez Sarsfield 286
Drugstore Argentina - Sucursal Velez Sarsfield 374
Drugstore Argentina - Sucursal Bv. Illía 250
Drugstore Argentina - Sucursal Corro 1
```

Verificado: **cero nombres repetidos**. Lo mismo con Entresano y Kiosc ON.

> Solo toca las que hoy se llaman exactamente "X - Sucursal" y tienen
> dirección. Si a alguna le pusiste nombre propio, no se la toca.
>
> Detalle que vas a ver: en una quedó *"General paz 31"* con minúscula, así
> como está cargada la dirección. Se corrige desde la ficha.

---

## 2 · Las fallas dejaron de ser invisibles

Había **23 lugares donde un error se tragaba en silencio**. Arreglé 20 y dejé
2 a propósito (quitar una capa del mapa que puede no existir), ahora con un
comentario que explica por qué, para que nadie los tome después por un
descuido.

Lo más grave estaba en el arranque: **las 16 migraciones y reparaciones que
corren al entrar**. Si una fallaba, se salteaba sin dejar rastro — el dato
quedaba a medias y no había forma de saberlo. Ahora cada una queda registrada
en el historial técnico con el motivo.

**Y encontré dos huecos peores que los catch vacíos**, que no estaban en mi
lista:

- **El admin no tenía red de contención.** Si un render fallaba, la excepción
  subía y podía dejar la pantalla a medio dibujar sin ningún rastro. El
  vendedor sí la tenía. Ahora los dos muestran el error en pantalla y lo
  registran.
- **El redibujado por cambios en la base tampoco.** Si reventaba ahí, se comía
  el resto del refresco y la pantalla quedaba desactualizada en silencio.

Probado a propósito: forcé una falla en el tablero del admin y la pantalla
avisa, la app sigue andando, y queda el registro.

Todo esto lo mirás en **Config → Modo Debug → Últimos eventos técnicos**.

---

## 3 · Datos que faltan

Te dejé la lista en **`DATOS-A-COMPLETAR.md`**, sin botón ni pantalla nueva
como pediste. Resumen: **12 de tus 23 clientes** tienen algo pendiente.

Los dos más urgentes son **La campiña** y **M&M Sandwich**: no tienen GPS, así
que no salen en el mapa ni entran en el orden por cercanía de la hoja de ruta.

También ahí van los dos locales repetidos sin vincular — **Kiosc ON** y **Lo de
Ema** — para que decidas vos.

---

## Probá esto apenas subas

1. Entrá como admin → tiene que salir *"14 sucursales ahora llevan su calle en
   el nombre"*.
2. Buscá "Drugstore Argentina" en Contactos → las nueve distinguibles.
3. Cargá una sucursal nueva: escribí la dirección y mirá cómo se arma el
   nombre solo.
4. **Config → Modo Debug** → si algo falló al arrancar, ahora figura ahí.

---

## Esta semana

Usá la **Ronda** de jueves a lunes y la **hoja de ruta** el miércoles. Anotá
qué te faltó y lo ajustamos con el uso real encima.
