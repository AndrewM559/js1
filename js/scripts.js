/*let inside = true;

if(inside){
  console.log('i am inside')
} else {
  console.log('i am not inside')
} */

//condition ? expression1 : expression2

//let example2 = inside ? "i am inside" : "i am not inside"
//console.log(example2)

//let number = 10



//let num = (number > 20)?"number is greater than 20" : "number is less than 20"
//console.log =(num)


//let name = false;
//let email = true;
/*
if (name) {
  alert("i have name")
}
else if (email){
  console.log("i love email")
}
else {
  console.;log("i have none")
} */

//name ? "i have name" : email ? "i have email" : "i have none"
//console.log(name ? "i have name" :)
/*
let iAmHungry = true;
let money = 5;



let hungry = iAmHungry ?((money>10)? "i am hungry and i more than 10" : "i am hungry and i have less than ten") : ((money>10)?"i am not hungry and i have more than 10" : "i am not hungry and i have less than 10")
console.log(hungry)
*/

//let iAmWearingYellow = false;

//let number = 23;

//let num = (number = 23 || iAmWearingYellow) ? "number = 23 and yellow" : "number not 23 and/or not yellow";
//console.log(num);
// if (iAmHungry) {
//   if (money > 10){
//     console.log('i am hungry and i have more than 10')
// }
//   else {
//     console.log('i am hungry and i have less that 10')
//   }
// } else {
//   if (money>10) {
//     console.log('i am not hungry and i have more than ten')
//   }
//   else {
//     console.log('i am not hungry and i have less than ten')
//   }
// }


// let arr= ["javascript", 100, {}, [], true];

 //console.log(arr[6]);

// let arr= ["sweeney todd", 4, false, 2013];
//
// // console.log(arr.length);
// //
// // arr.unshift("crawdads");
// //
// // console.log(arr.length);
// //
// // console.log (arr[2])
// //
// // var last =  arr[arr.length - 1];
// // //console.log (arr.)
// //
// // console.log (last)
//
// // arr.splice(2);
//
// // arr.splice(2,1)
// arr.splice(2,1, true,"milk","dogs")
// console.log (arr, "this is the result of a splice");


let products = [["blanket", 12.99, "best blanket ever"], ["rattle", 5.99, "it rattles"], ["daiper", 8.99, "doo doo booty"]];
//
// alert(products [1][2]);



// let i = 0;
//
// let newProduct = ["squeeky toy", 19.99,"really good toy."];
// do {
//   if(i === 1) products[i].push(newProduct);
//   i++;
// } while(i < products.length);

for(let i = products.length - 1; i >= 0; i--) {
  console.log(products[i]);
}

// console.log (products);

// products.forEach((product) => {
//   console.log(product);
// })
