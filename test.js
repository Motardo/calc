var calc = require('./calc');

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

function runTests() {
  console.log("Running " + tests.length + " tests");
  failCount = 0;
  tests.forEach(function(test) {
    if (Math.abs(test[0] / test[1] - 1) > 0.0001) {
      console.error("Fail: " + test[0] + " expected: " + test[1]);
      failCount++;
    }
  });
  console.log(failCount + " tests failed");
}

console.log(tests);
var failCount = runTests();

if (failCount > 0) {
  return -1;
}


