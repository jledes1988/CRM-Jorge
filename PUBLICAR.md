# CRM-Jorge — Versión 9.17 · Sin Chamu ni Pablo, Embudo con buscador

**Cambiaron `app.js` e `index.html`.** `estilos.css` es el mismo; van los tres juntos.
Para verificar: en el login y en Config > Debug tiene que decir **9.17 - 25/10/2026**.

---

## 1. Chamu y Pablo desaparecen del todo

La limpieza de la 9.11 había fallado: corría una sola vez, al abrir la app, antes de que
cargaran los usuarios, así que no los encontraba y quedaba marcada como hecha.

Ahora:
- No aparecen nunca en filtros, resúmenes, listas ni informes.
- La primera vez que entre el admin (JL), sus usuarios se borran de la base.
- Sus 68 contactos ya estaban en la papelera; quedan ahí.
- El gerente "Pablo Della" (inactivo) no se toca.

**Vendedor nuevo de prueba:** crealo en Config > Usuarios como siempre, con un nombre de
usuario distinto de "chamu" y "pablo". Acordate de crear también su cuenta en Firebase
(Authentication > Add user) con el mismo mail; la app te lo recuerda.

## 2. Embudo (admin y gerente): mover etapas con flechas

Cada contacto del Embudo tiene ahora **◀** y **▶** al lado del selector "Mover etapa":
- ◀ lo vuelve una etapa (ej: Negociación → Propuesta Enviada).
- ▶ lo pasa a la siguiente (ej: Contactado → Propuesta Enviada).
- El selector sigue estando para saltar varias etapas o mandarlo a No le interesa / Perdido.
- Funciona igual para el gerente y queda en el historial.

## 3. Embudo (admin y gerente): buscador

Arriba del Embudo hay un buscador. Busca por nombre, nombre de fantasía, barrio, dirección,
rubro, vendedor o teléfono, sin importar acentos ni mayúsculas ("lucia" encuentra "Lucía").
Se combina con las solapas de etapa.

---

## Probado

335 pruebas en el navegador simulado, sin errores (16 nuevas).
