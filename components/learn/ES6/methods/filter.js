// filter method returns a new array filtred based on a condition in the return statement 
function printAllParams(a, b, ...restArgs) {
    console.log("a: ", a);
    console.log("b: ", b);
    console.log("the rest param: ", restArgs);
    const filtredArray = restArgs.filter(element =>  element.length > 2)
    console.log("filtredArray:", filtredArray);
  }
printAllParams("item1", "item2", "arg1", "arg2", 3, 4, 5);
