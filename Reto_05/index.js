function cyberReindeer(road, time) {
  let stepsArray = [road];

  let santaPosition = 0;
  let roadPlain = road.replaceAll('S', '.');

  for (let i = 0; i < time - 1; i++) {
    if (i === 4) roadPlain = roadPlain.replaceAll('|', '*');

    if (roadPlain[santaPosition + 1] !== '|') {
      santaPosition++;
    }

    const newPosition = [...roadPlain];
    newPosition[santaPosition] = 'S';
    stepsArray.push(newPosition.join(''));
  }
  return stepsArray;
}

const road = 'S..|...|..';
const time = 10; // unidades de tiempo
const result = cyberReindeer(road, time);
console.log(result);

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
