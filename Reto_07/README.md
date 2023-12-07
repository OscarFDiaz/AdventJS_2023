# [Reto #7: Las cajas en 3D](https://adventjs.dev/es/challenges/2023/7)

![Reto_07](../Assets/Retos_PNG/7.png)

Santa está experimentando con nuevos diseños de regalos y <strong style="color:rgb(250 202 2)">necesita tu ayuda para visualizarlos en 3D</strong>.

Tu tarea es escribir una función que, dado un tamaño n (entero), <strong style="color:rgb(250 202 2)">genere un dibujo de un regalo en 3D</strong> utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:

```js
drawGift(4, '+');

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

drawGift(5, '*');
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, '^');
/*
#
*/
```

Importante: Nos han dicho que <strong style="color:rgb(250 202 2)">siempre hay que dejar un salto de línea al final del dibujo</strong>.

<strong style="color:rgb(250 202 2)">Nota</strong>: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".

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
