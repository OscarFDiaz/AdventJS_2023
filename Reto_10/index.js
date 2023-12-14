function createChristmasTree(ornaments, height) {
  let item = 0;
  let contador = 1;
  let tree = '';

  // Itero en la altura
  for (let i = 0; i < height; i++) {
    tree += ' '.repeat(height - 1 - i);

    //Itero para añadir items
    for (let j = 0; j < contador; j++) {
      if (ornaments[item]) {
        tree += ornaments[item];
        item++;
      } else {
        item = 0;
        tree += ornaments[item];
        item++;
      }
      if (j < contador - 1) tree += ' ';
    }
    contador++;
    tree += '\n';
  }

  return (tree += ' '.repeat(height - 1) + '|' + '\n');
}

const resp = createChristmasTree('x', 3);
console.log(resp);
// "  x
//  x x
//  x x x
//    |
//  "

const resp1 = createChristmasTree('xo', 4);
console.log(resp1);
// "   x
//   o x
//   o x o
//  x o x o
//     |
//  "

const resp2 = createChristmasTree('123', 5);
console.log(resp2);
// "    1
//    2 3
//   1 2 3
//  1 2 3 1
// 2 3 1 2 3
//     |
// "

const resp3 = createChristmasTree('*@o', 3);
console.log(resp3);
// "  *
//  @ o
//  * @ o
//    |
//  "
