'use strict';

function fizzBuzz(countTo) {
  const result = [];
  console.log(countTo);
  for (let i = 1; i <= countTo; i++) {
    console.log(`current number ${i}`)
  switch(i <= countTo) {
    case i % 15 === 0:
      result.push('fizzbuzz')
      break;
    case i % 3 === 0:
      result.push('fizz')
      break;
    case i % 5 === 0:
      result.push('buzz')
      break;
    default:
      result.push(i);
      break;
    }
  }
console.log(result);
return result;
}

// tests
(function testFizzBuzz() {
// we'll use the variables in our test cases
const countTo = 16;
const expected = [
1,
2,
'fizz',
4,
'buzz',
'fizz',
7,
8,
'fizz',
'buzz',
11,
'fizz',
13,
14,
'fizzbuzz',
16
];

const actual = fizzBuzz(countTo) || [];

if (expected.length === actual.length && expected.every(function(item, index) {
return actual[index] === item;
})) {

console.log('SUCCESS: fizzBuzz is working');
} else {
console.log('FAILURE: fizzBuzz is not working');
}
})();
