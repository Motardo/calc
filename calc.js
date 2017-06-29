// get the precendence of the given operator
function prec(str) {
  switch (str) {
    case ')':
      return 0;
    case '+':
    case '-':
      return 1;
    case '*':
    case '/':
      return 2;
    case '^':
      return 3;
    default:
      return -1;
  }
}

// pop one operator off the stack and evaluate it
function popOp(nums, ops) {
  var op = ops.pop();
  var a = parseFloat(nums.pop());
  var b = parseFloat(nums.pop());
  switch (op) {
    case '+':
      nums.push(a + b);
      break;
    case '-':
      nums.push(b - a);
      break;
    case '*':
      nums.push(a * b);
      break;
    case '/':
      nums.push(b / a);
      break;
    case '^':
      nums.push(Math.pow(b, a));
      break;
  }
}

// evaluate str and return numerical result
// evaluate subexpressions in parenthesis first
function calc(str) {
  var newNumF = true;
  var needOpF = false;
  var nums = [];
  var ops = [];

  for (var i = 0; i < str.length; i++) {
    switch (str[i]) {
      case '-':
        if (!needOpF) {
          nums.push(0);
          ops.push('-');
          break;
        }
      case '+':
      case '*':
      case '/':
      case '^':
      case ')':
        if (needOpF) {
          newNumF = true;
          while (prec(str[i]) <= prec(ops[ops.length -1])) {
            popOp(nums, ops);
          }
          if (str[i] === ')') {
            var open = ops.pop();
            if (open !== '(') {
              console.log("Error parenthesis: " + open);
            }
          } else {
            ops.push(str[i]);
            needOpF = false;
          }
        } else {
          console.log("Parse error: " + str[i] + " at position " + i);
        }
        break;
      case '(':
        ops.push('(');
        break;
      case ' ':
        break;
      default:
        if (newNumF) {
          nums.push(str[i]);
          newNumF = false;
        } else {
          var num = nums.pop();
          num = num + str[i];
          nums.push(num);
        }
        needOpF = true;
    }
  }
  while (ops.length > 0) {
    popOp(nums, ops);
  }
  return nums[0];
}

module.exports = calc;
