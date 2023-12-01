# [Reto #1: ¡Primer regalo repetido!](https://adventjs.dev/es/challenges/2023/1)

![Reto_01](../Assets/Retos_PNG/1.png)

En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

¡Encuentra el primer número de identificación que se ha repetido, <strong style="color:rgb(250 202 2)">donde la segunda ocurrencia tenga el índice más pequeño</strong>!

En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.

```js
const giftIds = [2, 1, 3, 5, 3, 2];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId); // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4];
const firstRepeatedId2 = findFirstRepeated(giftIds2);
console.log(firstRepeatedId2); // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1];
const firstRepeatedId3 = findFirstRepeated(giftIds3);
console.log(firstRepeatedId3); // 5
```

<strong style="color:rgb(250 202 2)">¡Ojo! Los elfos dicen que esto es una prueba técnica de Google.</strong>

---

## Resultados

### Test #01

```js
Test: return type;

Expected: 'number';

Actual: 'number';
```

### Test #02

```js
Test: findFirstRepeated([2, 1, 3, 5, 3, 2]);

Expected: 3;

Actual: 3;
```

### Test #03

```js
Test: findFirstRepeated([2, 2]);

Expected: 2;

Actual: 2;
```

### Test #04

```js
Test: findFirstRepeated([2, 4, 3, 5, 1]);

Expected: -1;

Actual: -1;
```

### Test #05

```js
Test: findFirstRepeated([1]);

Expected: -1;

Actual: -1;
```

### Test #06

```js
Test: findFirstRepeated([]);

Expected: -1;

Actual: -1;
```

### Test #07

```js
Test: findFirstRepeated([10, 20, 30]);

Expected: -1;

Actual: -1;
```

### Test #08

```js
Test: findFirstRepeated([5, 1, 2, 3, 2, 5, 1]);

Expected: 2;

Actual: 2;
```

### Test #09

```js
Test: findFirstRepeated([12, 20, 30, 11, 20, 12]);

Expected: 20;

Actual: 20;
```
