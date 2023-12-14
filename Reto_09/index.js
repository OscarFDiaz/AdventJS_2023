function adjustLights(lights) {
  let changesGreen = 0;
  let changesRed = 0;

  for (let i = 0; i < lights.length; i++) {
    if (i % 2 == 0) {
      if (lights[i] === '🟢') changesGreen++;
      if (lights[i] === '🔴') changesRed++;
    } else {
      if (lights[i] != '🟢') changesGreen++;
      if (lights[i] != '🔴') changesRed++;
    }
  }

  return changesGreen < changesRed ? changesGreen : changesRed;
}

const resp4 = adjustLights(['🔴', '🔴', '🟢']);
console.log(resp4);

const resp = adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']);
console.log(resp);
// -> 1 (cambias la cuarta luz a 🔴)

const resp1 = adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']);
console.log(resp1);
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

const resp2 = adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']);
console.log(resp2);
// -> 0 (ya están alternadas)

const resp3 = adjustLights(['🔴', '🔴', '🔴']);
console.log(resp3);
// -> 1 (cambias la segunda luz a 🟢)
