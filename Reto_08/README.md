# [Reto #8: Ordenando el almacen](https://adventjs.dev/es/challenges/2023/8)

![Reto_08](../Assets/Retos_PNG/8.png)

Los elfos están muy ocupados en el taller de Santa Claus organizando regalos 🎁 para la víspera de Navidad 🎄.

El formato de entrada es especial, ya que indica el número de regalos y el tipo de regalo con letras de la a a la z. Por ejemplo, '66a11b' significa 66 regalos a y 11 regalos b.

Los elfos tienen un <strong style="color:rgb(250 202 2)">sistema especial</strong> para organizar los regalos:

- Cada 10 regalos del mismo tipo se empaquetan en una caja, representada por {x}. Por ejemplo, 20 regalos tipo a se empaquetan en 2 cajas así: {a}{a}.
- Cada 5 cajas se apilan en un palé, representado por [x]. Por ejemplo, 10 cajas de a se apilan en 2 palés de esta manera: [a][a]
- Cualquier regalo adicional se coloca en una bolsa, representada por () y se colocan todas dentro. Por ejemplo 4 regalos de b se colocan en una bolsa así (bbbb)

<strong style="color:rgb(250 202 2)">Los regalos luego se colocan en el siguiente orden</strong>: _palés, cajas y bolsas_. Y los regalos aparecen en el mismo orden que la cadena de entrada.

Tu tarea es escribir una función organizeGifts que tome una cadena de regalos como argumento y devuelva una cadena representando el almacén.

```js
const result1 = organizeGifts(`76a11b`)
console.log(result1)
// '[a]{a}{a}(aaaaaa){b}(b)'

/* Explicación:

  76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos, resultando en 1 palé [a] (por las primeras 5 cajas), 2 cajas sueltas {a}{a} y una bolsa con 6 regalos (aaaaaa)

  11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, resultando en 1 caja suelta {b} y una bolsa con 1 regalo (b)
```

---

## Resultados

### Test #01

```js
Test: return type;

Expected: 'function';

Actual: 'function';
```

### Test #02

```js
Test: organizeGifts('76a11b');

Expected: '[a]{a}{a}(aaaaaa){b}(b)';

Actual: '[a]{a}{a}(aaaaaa){b}(b)';
```

### Test #03

```js
Test: organizeGifts('20a');

Expected: '{a}{a}';

Actual: '{a}{a}';
```

### Test #04

```js
Test: organizeGifts('70b120a4c');

Expected: '[b]{b}{b}[a][a]{a}{a}(cccc)';

Actual: '[b]{b}{b}[a][a]{a}{a}(cccc)';
```

### Test #05

```js
Test: organizeGifts('9c');

Expected: '(ccccccccc)';

Actual: '(ccccccccc)';
```

### Test #06

```js
Test: organizeGifts('19d51e');

Expected: '{d}(ddddddddd)[e](e)';

Actual: '{d}(ddddddddd)[e](e)';
```
