// reduce function is an array method that return a one value, it takes two arguments:
// first arg: callback function wich contains two args:
// 1st : accumilator (that hold the value )
// 2nd : element(current array element)
// second arg: accumilator initial value, can be 0 or " "


const expenses = [
    { id: 1, category: "Food", amount: 30 },
    { id: 2, category: "Transportation", amount: 20 },
    { id: 3, category: "Food", amount: 25 },
    { id: 4, category: "Entertainment", amount: 50 },
  ];
  
  const totalFoodExpences = expenses.reduce((accumilator, currentElement) => {
    // console.log(accumilator);
    if (currentElement.category === "Food") {
      return accumilator + currentElement.amount;
    }
    return accumilator;
  }, 0);
  
  console.log(totalFoodExpences);
  
  
  // using arrow functions
  // const total = expenses.reduce(
  //   (accumilator, currentElement) =>
  //     currentElement.category === "Food"
  //       ? accumilator + currentElement.amount
  //       : accumilator,
  //   0
  // );
  // console.log(total);
  