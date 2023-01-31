# Division sin dividir

## Lógica
La division es una resta recurrente , o sea la resta de `a - b` mientras `a` sea mayor o igual a `b`

### Ejemplo

```py
6/2 ===  6>=2 (6-2), 4 >=2 (4-2) , 2>= 2 (2-2)
6/2 ===  1        +      1    +         1
```

### Ejemplo en JS

```js
/**
 * @param {number} a
 * @param {number} b
 */
function Div(a, b) {
  let value = 0;
  while (a >= b) {
    value++;
    a -= b;
  }
  return value;
}
```

### Ejemplo en Python

```py
def main(a:int, b:int):
    value = 0
    while a >= b:
        value += 1
        a -= b
    return value
```