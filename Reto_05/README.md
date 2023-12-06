# [Reto #5: El Cybertruck de Santa](https://adventjs.dev/es/challenges/2023/5)

![Reto_05](../Assets/Retos_PNG/5.png)

Santa 🎅 está probando su nuevo trineo eléctrico, el _CyberReindeer_, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

- . = Carretera
- S = Trineo de Santa
- \*\* = Barrera abierta
- | = Barrera cerrada

Ejemplo de carretera: ` S...|....|.....`

Cada unidad de tiempo, <strong style="color:rgb(250 202 2)">el trineo avanza una posición a la derecha</strong>. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

<strong style="color:rgb(250 202 2)">Todas las barreras empiezan cerradas</strong>, pero después de 5 unidades de tiempo, se abren todas <strong style="color:rgb(250 202 2)">para siempre</strong>.

<strong style="color:rgb(250 202 2)">Crea una función que simule el movimiento del trineo</strong> durante un tiempo dado y <strong style="color:rgb(250 202 2)">devuelva un array</strong> de cadenas representando el estado de la carretera en cada unidad de tiempo:

```js
const road = 'S..|...|..';
const time = 10; // unidades de tiempo
const result = cyberReindeer(road, time);

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/
```

El resultado es un <strong style="color:rgb(250 202 2)">array donde cada elemento muestra la carretera en cada unidad de tiempo</strong>.

Ten en cuenta que <strong style="color:rgb(250 202 2)">si el trineo está en la misma posición que una barrera</strong>, entonces toma su lugar en el array.

Los elfos se <strong style="color:rgb(250 202 2)">inspiraron en este reto de Code Wars</strong>.

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
