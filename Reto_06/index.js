function maxDistance(movements) {
  let left = 0;
  let right = 0;
  let comodin = 0;

  for (const movement of movements) {
    if (movement === '>') right++;
    if (movement === '<') left++;
    if (movement === '*') comodin++;
  }

  return Math.abs(left - right) + comodin;
}

const movements = '>>*<';
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = '<<<>';
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = '>***>';
const result3 = maxDistance(movements3);
console.log(result3); // -> 5
