### Example 1
```js
const fruits = [
    "Apple-Kiwi",
    "Apple-Orange",
    "Banana-Kiwi",
    "Banana-Apple",
    "Banana-Orange",
]

const test = findChains(fruits, 3)
console.log(test)
```

Output
```js
[
  [ 'Apple-Kiwi', 'Banana-Apple', 'Banana-Kiwi' ],
  [ 'Apple-Orange', 'Banana-Apple', 'Banana-Orange' ],
  [ 'Banana-Kiwi', 'Banana-Apple', 'Apple-Kiwi' ],
  [ 'Banana-Apple', 'Banana-Kiwi', 'Apple-Kiwi' ],
  [ 'Banana-Apple', 'Banana-Orange', 'Apple-Orange' ],
  [ 'Banana-Orange', 'Banana-Apple', 'Apple-Orange' ]
]
```

### Example 2
Four items `findChains(list, 4)`    
```js
[
  [ 'Apple-Kiwi', 'Apple-Orange', 'Banana-Orange', 'Banana-Kiwi' ],
  [ 'Apple-Orange', 'Apple-Kiwi', 'Banana-Kiwi', 'Banana-Orange' ],
  [ 'Banana-Kiwi', 'Banana-Orange', 'Apple-Orange', 'Apple-Kiwi' ],
  [ 'Banana-Orange', 'Banana-Kiwi', 'Apple-Kiwi', 'Apple-Orange' ]
]
```

### Image
![example](https://raw.githubusercontent.com/ixjb94/chains/main/ex.png "example")

*It works for N chains*
