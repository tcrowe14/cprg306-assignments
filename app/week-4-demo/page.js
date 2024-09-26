"use client";
import Counter from "./counter";

export default function Page() {
let empty = [];
let numbers = [1, 2, 3, 4, 5];
let names = ["Alice", "Bob", "Charlie", "David", "Eve"];

console.log(numbers[0]); // 1


// adding and subtracting then calling those functions in another function
let add = function (a, b) {
    return a + b;
  };
  
  let subtract = function (a, b) {
    return a - b;
  };
let calculate = function (a, b, operator) {
    let result = operator(a, b);
    return result;
}
console.log("calculate(5, 10, add))");
console.log(calculate(5, 3, add)); // 8

// Multiplier
let getMultiplier = function (factor) {
    return function (number) {
      return number * factor;
    };
  };
  
  let double = getMultiplier(2); // double is a function that multiplies by 2
  let triple = getMultiplier(3); // triple is a function that multiplies by 3
  
  let result = double(5); // 10
  console.log(result);
  
  result = triple(5); // 15
  console.log(result);


  // greet function with arrow
  let greet = (name) => {
    return "Hello, " + name;
  };
  
  console.log(greet("Alice")); // "Hello, Alice"

  function Button() {
    const showMessage = () => {
      alert("Hello, world!");
    };

  return (
    <main className="ml-4 mt-2">
      <h2 className="text-3xl font-bold m-2">Week-4 Demo</h2>
      <Counter />
      <button onClick={showMessage}>Click me</button>;
      <div className="flex justify-center max-w-lg h-24 bg-gray-200">
            <div className="flex-1 bg-cyan-500 hover:bg-slate-500 hover:rounded">Item 1</div>
            <div className="flex-1">Item 2</div>
            <div className="flex-1">Item 3</div>
        </div>
      </main>
    );
  }

  return <Button />;
}
