//! 250 puntos
function manufacture(gifts, materials) {
  let posibles = [];
  let itBreaks = false;
  for (let i = 0; i < gifts.length; i++) {
    for (let j = 0; j < gifts[i].length; j++) {
      if (!materials.includes(gifts[i][j])) {
        itBreaks = true;
      }
    }
    itBreaks ? '' : posibles.push(gifts[i]);
    itBreaks = false;
  }
  return posibles;
}

//! 270 puntos
function manufacture(gifts, materials) {
  return gifts.filter((gift) =>
    gift.split('').every((letter) => materials.includes(letter)),
  );
}

const gifts = ['tren', 'oso', 'pelota'];
const materials = 'tronesa';

console.log(manufacture(gifts, materials)); // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'
