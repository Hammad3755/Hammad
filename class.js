//   const day = parseInt(prompt("Enter day"));

// switch(day) {
//     default: {
//         console.log("Invalid value for day!");
//         break;
//     }
//     case 1: {
//         console.log("Monday");
//         break;
//     }
//     case 2: {
//         console.log("Tuesday");
//         break;
//     }
//     case 3: {
//         console.log("Wednesday");
//         break;
//     }
//     case 4: {
//         console.log("Thursday");
//         break;
//     }
//     case 5: {
//         console.log("Friday");
//         break;
//     }
//     case 6: {
//         console.log("Saturday");
//         break;
//     }
//     case 7: {
//         console.log("Sunday");
//         break;
//     }
// }

// const fruits = ['Apple', 'Banana', 'Cherry'];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]); // undefined

// // Push and Pop
// console.log("Push and Pop");
// fruits.push('Dates');
// console.log(fruits);
// const lastFruit = fruits.pop();
// console.log(fruits);
// console.log(lastFruit);

// // Unshift and Shift
// console.log("Unshift and Shift");
// fruits.unshift('Dates');
// console.log(fruits);
// const firstFruit = fruits.shift();
// console.log(fruits);
// console.log(firstFruit);

// console.log(fruits[2]);
// fruits[2] = "Mango";
// console.log(fruits[2]);

// const arr1 = [1,2];
// const arr2 = [2,3,4];
// const arr3 = [5,6];

// const result = arr1.concat(arr2).concat(arr3);
// const result = arr1.concat(arr2, arr3);
// console.log(result);

// const check = result.includes(-3);
// console.log(check); // false

// const index = result.indexOf(2);
// console.log(index); // 1

// const isArray = Array.isArray(result);
// console.log(isArray); // true
// const isStringArray = Array.isArray("asdasd")
// console.log(isStringArray); // false
// console.log("acv"[2]); // v

// const str = "abc";
// str[2] = 'd';
// console.log(str);

// const subArray = result.slice(2,5);
// console.log(subArray); // [2,3,4]

// console.log(subArray.slice(2,3)); // [4]

// console.log(subArray.splice(1,1, 2.5, 3, 3.5)); // [3]
// console.log(subArray); //  [2, 2.5, 3, 3.5, 4]

// for (let i = 0; i < subArray.length; i = i + 1) {
//     console.log(subArray[i]);
// }


// for (let i = subArray.length - 1; i >= 0; i = i - 1) {
//     console.log(subArray[i]);
// }
// let product={
//     name:"hp elitebook sleeve",
//     instock:true,
//     price:1000,
//     totalunits:7,
//     colors:["black","white","gray"],
// }
// console.log(product)
// console.log(product.name)
// console.log(product["colors"][0])
// const restaurant={
//     name:"hammad khan",
//     address: "gizri road clifton karachi",
//     city: "karachi",
//     state:"sindh",
//     zipcode:"75600",
// };
// let fulladdress =`${restaurant.address}, ${restaurant.city}, ${restaurant.state}, ${restaurant.zipcode}`;
// console.log(fulladdress)
// restaurant.name= "shazil";
// restaurant.city= "islamabad";
// // restaurant.zipcode= "98002";
// // console.log(restaurant)
// const student = {
//     name: "hammad khan",
//     age: "28",
//     subject: "computer",
//     isenrolled: "false",
// }
// let students= `${student.name}, ${student.age}, ${student.subject}, ${student.isenrolled}`;
// console.log(students)

const library = [{"the flutter"}]