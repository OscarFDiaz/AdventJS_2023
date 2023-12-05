function decode(message) {
  while (message.includes('(')) {
    let openingParenIndex = message.lastIndexOf('(');
    let closingParenIndex = message.indexOf(')', openingParenIndex);
    let subStr = message.substring(openingParenIndex + 1, closingParenIndex);
    let reversedSubStr = subStr.split('').reverse().join('');

    message =
      message.slice(0, openingParenIndex) +
      reversedSubStr +
      message.slice(closingParenIndex + 1);
  }
  return message.replace(/[()]/g, '');
}

const c = decode('sa(u(cla)atn)s');
console.log(c); // santaclaus

const a = decode('hola (odnum)');
console.log(a); // hola mundo

const b = decode('(olleh) (dlrow)!');
console.log(b); // hello world!

const d = decode('((nta)(sa))');
console.log(d); // santa

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
// Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
// En el mensaje final no deben quedar paréntesis.
// El nivel máximo de anidamiento es 2.
