function findFirstRepeated(giftIds) {
  let visited = [];

  for (const gift of giftIds) {
    if (visited.includes(gift)) {
      return gift;
    }
    visited.push(gift);
  }

  return -1;
}

const giftIds = [2, 1, 3, 5, 3, 2];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId); // 3
