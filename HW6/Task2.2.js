// function checkAge(age) {
//     const isAdult = age >= 18;
//     if (isAdult) { return "True"; }
//     else { return "False";  }
// };

// const { title } = require("node:process");

// console.log(checkAge(25));

// const arr = [1, 2, 3, 4, 5];

// const result = arr.map((element, index) => {
//     return element * index;
// });

// console.log(arr);
// console.log(result);

// const arr = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];
// // const newArr = arr.concat(arr2);
// const newArr = [...arr, ...arr2]
// console.log(newArr)

// const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
// const sorteredList = [...numbersList].sort((a, b) => a - b);

// console.log(numbersList);
// console.log(sorteredList);

const users = [
    { firstName: "Vlada", email: "vladaM@gmail.com", age: 10 },
    { firstName: "Tatiana", email: "TanyB@gmail.com", age: 38 },
    { firstName: "Dasha", email: "DashaM@gmail.com", age: 36 },
];
for (const user of users) {
    let { firstName, email, age } = user;
    console.log(firstName, email, age);
}
