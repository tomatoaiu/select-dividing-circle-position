# Select Deviding Circle Position

## Usage
```js
import { selectDividingCirclePosition } from 'select-dividing-circle-position'

const position = selectDividingCirclePosition({ x: 10, y: 0, divideCount: 4, offset: 0 });
```

## Result 
divideCount = 4, offset = 0
```javascript
{ min:  -45, max:   44, index: 1 },
{ min:   45, max:  134, index: 2 },
{ min:  135, max:  179, index: 3 },
{ min: -180, max: -136, index: 3 },
{ min: -135, max:  -46, index: 4 }
```

```javascript
selectDividingCirclePosition({ x:  10, y:   0, divideCount: 4, offset: 0 }); // 1
selectDividingCirclePosition({ x:   0, y:  10, divideCount: 4, offset: 0 }); // 2
selectDividingCirclePosition({ x: -10, y:   0, divideCount: 4, offset: 0 }); // 3
selectDividingCirclePosition({ x:   0, y: -10, divideCount: 4, offset: 0 }); // 4
```
