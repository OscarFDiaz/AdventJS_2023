function findNaughtyStep(original, modified) {
  if (original === modified) return '';

  if (original.length < modified.length) {
    [original, modified] = [modified, original];
  }

  for (let i = 0; i < original.length; i++) {
    if (original[i] !== modified[i]) return original[i];
  }
}

const original = 'stepfor';
const modified = 'stepor';
console.log(findNaughtyStep(original, modified)); // 'e'
