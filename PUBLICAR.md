# CRM-Jorge — Versión 9.14 · El informe en PDF sale completo

**Solo cambió `app.js`.** Los otros dos son los mismos; van los tres juntos.
Para verificar: en el login y en Config > Debug tiene que decir **9.14 - 22/10/2026**.

---

## Qué pasaba

Al guardar el informe del vendedor como PDF salía **solo la primera hoja**. La app
tiene la página fija al alto de la pantalla (para que no se mueva al usar el
celular), y al imprimir eso cortaba todo lo que no entraba en la primera hoja.

## Qué cambia

Al imprimir, el informe deja de tener el alto fijo y salen **todas las hojas**.
Lo probé reproduciendo exactamente el problema con el estilo de la app: antes salía
1 hoja, ahora salen las 3.

Nada más cambia. El informe y todo lo demás siguen igual.

---

## Probado

250 pruebas en el navegador simulado, sin errores.
