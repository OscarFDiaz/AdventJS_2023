# [Reto #6: Los renos a prueba](https://adventjs.dev/es/challenges/2023/6)

![Reto_06](../Assets/Retos_PNG/6.png)

Los elfos están catalogando los renos de Santa 🦌 según la distancia que pueden recorrer.

Para ello tienen una cadena de texto **movements** donde cada caracter representa la dirección del movimiento del reno:

- '>' = Avanza a la derecha
- '<' = Avanza a la izquierda
- '-' = Puede avanzar o retroceder

Por ejemplo, si el movimiento es **>>\*<**, va hacia la derecha dos veces, luego puede ir a derecha o izquierda (lo que maximice la distancia recorrida final) y luego ir a la izquierda.

Los elfos quieren saber cuál es la máxima distancia que recorre el reno al <font style="color:rgb(250 202 2)">finalizar todos los movimientos</font>.

<font style="color:rgb(250 202 2)">En el ejemplo anterior, la máxima distancia que recorre el reno es _**2**_</font>. Va a la derecha dos veces _**+2**_, luego con el **_\*_** puede ir a la derecha otra vez para maximizar la distancia **_+1_** y luego va a la izquierda **_-1_**.

Crea una función _maxDistance_ que reciba la cadena de texto _movements_ y devuelva la <font style="color:rgb(250 202 2)">máxima distancia</font> que puede recorrer el reno en <font style="color:rgb(250 202 2)">cualquier dirección</font>:

```js
const movements = '>>*<';
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = '<<<>';
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = '>***>';
const result3 = maxDistance(movements3);
console.log(result3); // -> 5
```

Ten en cuenta que no importa si es a la izquierda o la derecha, la distancia es el <font style="color:rgb(250 202 2)">valor absoluto de la distancia recorrida máxima al finalizar los movimientos</font>.

---

## Resultados

### Test #01

```js
Test: return type;

Expected: 'array';

Actual: 'array';
```

### Test #02

```js
Test: cyberReindeer('S..|...|..', 10);

Expected: [
  'S..|...|..',
  '.S.|...|..',
  '..S|...|..',
  '..S|...|..',
  '..S|...|..',
  '...S...*..',
  '...*S..*..',
  '...*.S.*..',
  '...*..S*..',
  '...*...S..',
];

Actual: [
  'S..|...|..',
  '.S.|...|..',
  '..S|...|..',
  '..S|...|..',
  '..S|...|..',
  '...S...*..',
  '...*S..*..',
  '...*.S.*..',
  '...*..S*..',
  '...*...S..',
];
```

### Test #03

```js
Test: cyberReindeer('S.|.', 4);

Expected: ['S.|.', '.S|.', '.S|.', '.S|.'];

Actual: ['S.|.', '.S|.', '.S|.', '.S|.'];
```

### Test #04

```js
Test: cyberReindeer('S.|.|.', 7);

Expected: ['S.|.|.', '.S|.|.', '.S|.|.', '.S|.|.', '.S|.|.', '..S.*.', '..*S*.'];

Actual: ['S.|.|.', '.S|.|.', '.S|.|.', '.S|.|.', '.S|.|.', '..S.*.', '..*S*.'];
```

### Test #05

```js
Test: cyberReindeer('S.|..', 6);

Expected: ['S.|..', '.S|..', '.S|..', '.S|..', '.S|..', '..S..'];

Actual: ['S.|..', '.S|..', '.S|..', '.S|..', '.S|..', '..S..'];
```

### Test #06

```js
Test: cyberReindeer('S.|.|.|......|.||.........', 8);

Expected: [
  'S.|.|.|......|.||.........',
  '.S|.|.|......|.||.........',
  '.S|.|.|......|.||.........',
  '.S|.|.|......|.||.........',
  '.S|.|.|......|.||.........',
  '..S.*.*......*.**.........',
  '..*S*.*......*.**.........',
  '..*.S.*......*.**.........',
];

Actual: [
  'S.|.|.|......|.||.........',
  '.S|.|.|......|.||.........',
  '.S|.|.|......|.||.........',
  '.S|.|.|......|.||.........',
  '.S|.|.|......|.||.........',
  '..S.*.*......*.**.........',
  '..*S*.*......*.**.........',
  '..*.S.*......*.**.........',
];
```