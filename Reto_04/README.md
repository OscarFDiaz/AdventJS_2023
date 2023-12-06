# [Reto #4: Dale la vuelta a los paréntesis](https://adventjs.dev/es/challenges/2023/4)

![Reto_04](../Assets/Retos_PNG/4.png)

En el taller de _Santa_ 🎅, algunos mensajes navideños han sido escritos de manera peculiar: <strong style="color:rgb(250 202 2)">las letras dentro de los paréntesis deben ser leídas al revés</strong>

Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

```js
const a = decode('hola (odnum)');
console.log(a); // hola mundo

const b = decode('(olleh) (dlrow)!');
console.log(b); // hello world!

const c = decode('sa(u(cla)atn)s');
console.log(c); // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
```

**Notas:**

- Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
- En el mensaje final no deben quedar paréntesis.
- El nivel máximo de anidamiento es 2.

---

## Resultados

### Test #01

```js
Test: return type;

Expected: 'string';

Actual: 'string';
```

### Test #02

```js
Test: decode('hola (odnum)');

Expected: 'hola mundo';

Actual: 'hola mundo';
```

### Test #03

```js
Test: decode('(olleh) (dlrow)!');

Expected: 'hello world!';

Actual: 'hello world!';
```

### Test #04

```js
Test: decode('sa(u(cla)atn)s');

Expected: 'santaclaus';

Actual: 'santaclaus';
```

### Test #05

```js
Test: decode('((nta)(sa))');

Expected: 'santa';

Actual: 'santa';
```
