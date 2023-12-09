function organizeGifts(gifts) {
  let result = '';

  const separate = gifts.match(/\d+[a-z]/gi);

  const giftsInfo = separate.map((segment) => {
    const number = parseInt(segment); // Extraer el número
    const letter = segment.slice(-1); // Extraer la letra
    return [number, letter];
  });

  Object.entries(giftsInfo).forEach(([giftType, count]) => {
    const pallets = Math.floor(count[0] / 50); // 5 cajas * 1 pallet
    const remainingC = count[0] % 50;

    const boxes = Math.floor(remainingC / 10); // 10 regalos * 1 caja
    const remainingB = remainingC % 10;

    const bags = Math.floor(remainingB / 5); // Menos de 10 en bolsa
    const remainingR = remainingB % 5;

    result += `[${count[1]}]`.repeat(pallets);
    result += `{${count[1]}}`.repeat(boxes);

    if (remainingB > 0) {
      result += `(${count[1].repeat(remainingB)})`;
    }
  });

  return result;
}

const result1 = organizeGifts(`76a11b`);
console.log(result1);
// '[a]{a}{a}(aaaaaa){b}(b)'

const result2 = organizeGifts(`20a`);
console.log(result2);
// '{a}{a}';

const result3 = organizeGifts(`70b120a4c`);
console.log(result3);
// "[b]{b}{b}[a][a]{a}{a}(cccc)"

const result4 = organizeGifts(`9c`);
console.log(result4);
// "(ccccccccc)"

const result5 = organizeGifts(`19d51e`);
console.log(result5);
// "{d}(ddddddddd)[e](e)"

/* Explicación:

  76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos, resultando en 1 palé [a] (por las primeras 5 cajas), 2 cajas sueltas {a}{a} y una bolsa con 6 regalos (aaaaaa)

  11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, resultando en 1 caja suelta {b} y una bolsa con 1 regalo (b)*/
