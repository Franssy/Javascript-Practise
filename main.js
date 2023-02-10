function changeColor(newColor) {
    let colorTest = document.getElementById('test');
    colorTest.style.color = newColor;
}
// let gender = "female";

// function checkGender() {
//     if (gender != gender) {
//         return document.getElementById('ev').console.log("A babe and More");
//     };
// };

// function getvalue() {
//     // if 
//     return event.target.value
// }


// A function to add or remove items in an array within an object 
// depending on the type of data passed when calling the function
const myDog = {
  name: "Doggly",
  legs: 4,
  tails: 1,
  friends: ["Dog x", "scubby", "nane"]
}

function addAndRemove (figure) {
  if (typeof figure === 'string') {
    return myDog.friends.unshift(figure);
  } else {
    return myDog.friends.pop();
  };
};
addAndRemove("added cox string");
console.log(myDog.friends);


// A function to implement multiplication table
let number = parseInt(prompt("Enter a Number to Evaluate: "));

let count = 0;
while (count <= 12) {
  let sum = count * number;
  document.write(console.log(`${number} * ${count} = ${sum}`));
  count++;
}