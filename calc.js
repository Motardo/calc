// return the relative precedence of the given operator
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

// pop an operator off the stack and perform the computation
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
          //var num = parseFloat(nums.pop());
          //nums.push(num);
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
  //console.log("Nums: " + nums);
  //console.log("Ops: " + ops);
  while (ops.length > 0) {
    popOp(nums, ops);
    //console.log("Nums: " + nums);
    //console.log("Ops: " + ops);
  }
  return nums[0];
}

// some tests to make sure everything is working as expected
var tests = [
  [calc("-243"), -243],
  [calc("(-243)"), -243],
  [calc("-(243)"), -243],
  [calc("-(-243)"), 243],
  [calc("-(-2+3)"), -1],
  [calc("(24)-3"), 21],
  [calc("-3-4*2"), -11],
  [calc("3^4*2"), 162],
  [calc("3+4^2"), 19],
  [calc("3+-(4-2)^2"), -1],
  [calc("3+(-4-2)^2"), 39],
  [calc("(-3-4)*2"), -14],
  [calc("-(-3-4)*2"), 14],
  [calc("-(-3-4)*-2"), -14],
  [calc("-3-4*2*3-5+2"), -30],
  [calc("((3*(3-4))+2)*3"), -3],
  [calc("((3.53*(3.02-4.5))+2.88)*3.307"), -7.7529308],
  [calc("3.53*3.02-4.5+2.88*3.307"), 15.68476],
  [calc("1/2"), 0.5],
  [calc("1/-2"), -0.5]
]

// run the tests and print failures to stdout
function runTests() {
  var failCount = 0;
  console.log("Running " + tests.length + " tests");
  tests.forEach(function(test) {
    if (Math.abs(test[0] / test[1] - 1) > 0.0001) {
      console.log("Fail: " + test[0] + " expected: " + test[1]);
      failCount++;
    }
  });
  console.log(failCount + " tests failed");
}

// show the tests and run them
console.log(tests);
runTests();
