function cyberReindeer(road, time) {
  let stepsArray = [road];
  let myRoad = road.split('');
  let step = 0;
  let flag = false;

  for (let i = 0; i < time - 1; i++) {
    if (i > 3) {
      for (let i = 0; i < myRoad.length; i++) {
        if (myRoad[i] === '|') myRoad[i] = '*';
      }
    }

    if (myRoad[step + 1] === '.') {
      myRoad[step] = '.';
      myRoad[step + 1] = 'S';
      if (flag) {
        myRoad[step] = '*';
        flag = false;
      }
      stepsArray.push(myRoad.join(''));
    } else if (myRoad[step + 1] === '|') {
      stepsArray.push(myRoad.join(''));
      step--;
    } else if (myRoad[step + 1] === '*') {
      myRoad[step] = '.';
      myRoad[step + 1] = 'S';
      if (flag) {
        myRoad[step] = '*';
        flag = false;
      }
      stepsArray.push(myRoad.join(''));
      flag = true;
    }
    step++;
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
