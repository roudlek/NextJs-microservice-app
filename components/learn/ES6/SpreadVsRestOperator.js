// rest operator
// the rest parameter is a real array, so you can use: sort(), map(), forEach() or pop()
// the rest parameter is used inside a function as parameter

function printAllParams(a, b, ...restArgs) {
  console.log("a: ", a);
  console.log("b: ", b);
  console.log("the rest param: ", restArgs);
  // restArgs.map(element => console.log(element))
  // const filtredArray = restArgs.filter(element =>  element.length > 2)
  // console.log("filtredArray:", filtredArray);
}
printAllParams("item1", "item2", "arg1", "arg2", 3, 4, 5);

// spread syntax is like rest but, as it says it spread the elements of an array (katfr9 elements l array jdid)
// the spread operator is used outside a function

const numbers = [1, 2, 3];
const newArrayWithSpread = [...numbers, 4, 5]; // != const newArray = [numbers, 4, 5]; // output: [ [ 1, 2, 3 ], 4, 5 ]
console.log("numbers:", numbers);
console.log("newArrayWithSpread:", newArrayWithSpread); // Outputs: [1, 2, 3, 4, 5]
