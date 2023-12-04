# [Reto #2: Ponemos en marcha la fábrica](https://adventjs.dev/es/challenges/2023/2)

![Reto_02](../Assets/Retos_PNG/2.png)

En el taller de Santa, los elfos tienen una <strong style="color:rgb(250 202 2)">lista de regalos</strong> que desean fabricar y un conjunto limitado de materiales.

Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

Los _regalos son cadenas de texto_ y los _materiales son caracteres_. Tu tarea es escribir una función que, dada una <strong style="color:rgb(250 202 2)">lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar</strong>.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

```js
const gifts = ['tren', 'oso', 'pelota'];
const materials = 'tronesa';

manufacture(gifts, materials); // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts = ['juego', 'puzzle'];
const materials = 'jlepuz';

manufacture(gifts, materials); // ["puzzle"]

const gifts = ['libro', 'ps5'];
const materials = 'psli';

manufacture(gifts, materials); // []
```

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
