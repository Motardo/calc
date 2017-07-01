# calc
### Calculates mathematical expressions
The `calc` function takes a string argument and returns the value of the resulting calculation.

## Install
```sh
npm install @motardo/calc
```

## Usage
```js
var calc = require("@motardo/calc");

calc("1+2")          // 3
calc("-1 / 2")       // -0.5
calc("2 + 3 * 4")    // 14
calc("(2+3)*4")      // 20
calc("5^2")          // 25
```

## Demo
Try it out at [https://motardo.github.io/calc/web/index.html](https://motardo.github.io/calc/web/index.html)

## Testing
Run the tests with:
```sh
npm test
```

## About
calc uses the shunting yard algorithm and two separate stacks, one for numerical values, and one for operators. The operators currently supported are + - * / and ^. Parenthesis can be used to override operator precedence.

## TODO
- [ ] Add support for shorthand scientific notation as in `1e9` for 1 billion
- [ ] Add support for trigonometric functions
- [ ] Add support for `log` and `ln` notation

## Bugs
Bug reports and contributions are welcome. Open an issue on [github](http://github.com/Motardo/calc/issues/new) or email the author at nswilson@gmail.com
