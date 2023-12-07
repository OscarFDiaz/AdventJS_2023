# [Reto #6: Los renos a prueba](https://adventjs.dev/es/challenges/2023/6)

![Reto_06](../Assets/Retos_PNG/6.png)

Los elfos están catalogando los renos de Santa 🦌 según la distancia que pueden recorrer.

Para ello tienen una cadena de texto **_movements_** donde cada caracter representa la dirección del movimiento del reno:

- '>' = Avanza a la derecha
- '<' = Avanza a la izquierda
- '-' = Puede avanzar o retroceder

Por ejemplo, si el movimiento es **>>\*<**, va hacia la derecha dos veces, luego puede ir a derecha o izquierda (lo que maximice la distancia recorrida final) y luego ir a la izquierda.

Los elfos quieren saber cuál es la máxima distancia que recorre el reno al **_finalizar todos los movimientos_**.

**_En el ejemplo anterior, la máxima distancia que recorre el reno es 2_**. Va a la derecha dos veces **+2**, luego con el **\*** puede ir a la derecha otra vez para maximizar la distancia **+1** y luego va a la izquierda **-1**.

Crea una función _maxDistance_ que reciba la cadena de texto _movements_ y devuelva la **_máxima distancia_**que puede recorrer el reno en **_cualquier dirección_**:

```js
const movements = '>>*<';
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = '<<<>';
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = '>***>';
const result3 = maxDistance(movements3);
console.log(result3); // -> 5
```

Ten en cuenta que no importa si es a la izquierda o la derecha, la distancia es el **_valor absoluto de la distancia recorrida máxima al finalizar los movimientos_**.

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
Test: maxDistance('>>*<');

Expected: 2;

Actual: 2;
```

### Test #03

```js
Test: maxDistance('<<<<<');

Expected: 5;

Actual: 5;
```

### Test #04

```js
Test: maxDistance('>***>');

Expected: 5;

Actual: 5;
```

### Test #05

```js
Test: maxDistance('**********');

Expected: 10;

Actual: 10;
```

### Test #06

```js
Test: maxDistance('<<**>>');

Expected: 2;

Actual: 2;
```
