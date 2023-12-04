# [Reto #3: Un elfo travieso](https://adventjs.dev/es/challenges/2023/3)

![Reto_03](../Assets/Retos_PNG/3.png)

En el taller de Santa, <strong style="color:rgb(250 202 2)">un elfo travieso</strong> ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

Tienes la secuencia original de pasos en la fabricación _original_ y la secuencia modificada _modified_ que puede incluir un paso extra o faltar un paso.

Tu tarea es <strong style="color:rgb(250 202 2)">escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación</strong>. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

```js
const original = 'abcd';
const modified = 'abcde';
findNaughtyStep(original, modified); // 'e'

const original = 'stepfor';
const modified = 'stepor';
findNaughtyStep(original, modified); // 'f'

const original = 'abcde';
const modified = 'abcde';
findNaughtyStep(original, modified); // ''
```

**A tener en cuenta:**

- Siempre habrá un paso de diferencia o ninguno.
- La modificación puede ocurrir en cualquier lugar de la cadena.
- La secuencia original puede estar vacía

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
Test: findNaughtyStep('abcd', 'abcde');

Expected: 'e';

Actual: 'e';
```

### Test #03

```js
Test: findNaughtyStep('abcde', 'abcd');

Expected: 'e';

Actual: 'e';
```

### Test #04

```js
Test: findNaughtyStep('xxxx', 'xxoxx');

Expected: 'o';

Actual: 'o';
```

### Test #05

```js
Test: findNaughtyStep('stepfor', 'stepor');

Expected: 'f';

Actual: 'f';
```

### Test #06

```js
Test: findNaughtyStep('iiiii', 'iiiii');

Expected: '';

Actual: '';
```
