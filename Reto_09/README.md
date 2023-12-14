# [Reto #9: Alterna las luces](https://adventjs.dev/es/challenges/2023/9)

![Reto_09](../Assets/Retos_PNG/9.png)

Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, <strong style="color:rgb(250 202 2)">siempre deben estar alternadas</strong>. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.

```js
adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']);
// -> 1 (cambias la cuarta luz a 🔴)

adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢']);
// -> 1 (cambia la primera luz a verde)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']);
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']);
// -> 0 (ya están alternadas)

adjustLights(['🔴', '🔴', '🔴']);
// -> 1 (cambias la segunda luz a 🟢)
```

---

## Resultados

### Test #01

```js
Test: return type;

Expected: 'number';

Actual: 'number';
```

### Test #02

```js
Test: adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']);

Expected: 1;

Actual: 1;
```

### Test #03

```js
Test: adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']);

Expected: 2;

Actual: 2;
```

### Test #04

```js
Test: adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢']);

Expected: 1;

Actual: 1;
```

### Test #05

```js
Test: adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']);

Expected: 0;

Actual: 0;
```

### Test #06

```js
Test: adjustLights(['🔴', '🔴', '🔴']);

Expected: 1;

Actual: 1;
```
