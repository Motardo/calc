# calculator
Javascript shunting yard algorithm to parse mathematical expressions and calculate the resulting value

## About
The `calc` function takes a string argument and returns the value of the resulting calculation. It uses the shunting yard algorithm and two separate stacks, one for numerical values, and one for operators. The operators currently supported are + - * / and ^. Parenthesis can be used to override operator precedence.

## Examples
```javascript
calc("1 + 2")          // 3
calc("-1 / 2")       // -0.5
calc("2 + 3 * 4")    // 14
calc("(2 + 3) * 4")  // 20
calc("5^2")          // 25
```

## Demo
See a live codepen demo at [https://codepen.io/motardo/full/LLjJxb](https://codepen.io/motardo/full/LLjJxb)

## Testing
Run the tests with the command `node calc.js`
