// //functions
// console.log("Hello world");
//
// function capitalCase(string) {//FUNCTION DEFINITION
// let words = string.split(' ');
//  words.forEach(word => {
//    let letters =word.split(' ');
//    let capped = letters[0].toUpperCase();
//    word.splice(0,1, capped);
//
//  });
//  return words.join(' ')
// };
//
// //the arguemnets in a function have no value until called
//
// let newString = capitalCase("peter pipera");
//
// console.log(newString)

// console.log ("hello")

// function ageDog(years) {
//   return years * 7;
// };
//
// alert(ageDog(
//   parseInt(
//     prompt("How old is your dog?","3")
//   )
// ));
//
//
// function LifeTimeSupply(age, amountPerDay) {
//   let life = 80 - age;
//
//
// }

let todos = [];

let todo1 = [prompt("what do you want to do first?") ,"Eat"];
let todo2 = [prompt("what do you want to do second?") ,"Eat"];
let todo3 = [prompt("what do you want to do second?") ,"Eat"];

todos.push(todo1,todo2,todo3);

for(let i =0; i<todos.length; i++) {
  let timeline = prompt(`how many days will it take ${todos[i][0]} to get  done?`, "2");

  timeline = !isNaN(parseInt(timeline)) ?
  parseInt(timeline) : 2;

  todos[i].unshift(timeline);
}

// console.log(todos)


todos.sort()

let longest = todos[0];

let j = 0;
while(j < todos.length) {
  if(todos[j][0] > longest[0]) longest =todos[j];

//   longest = todos[j][0] > longest[0] ? longest = todos[j] :
// }

  j++;
}

console.log(longest)
