//Spread Operator
let fruits=["Banana", "SweetLime","PineApple"];
let vegetables=["Potato","Spinach","Carrots"];
let food=[...fruits,...vegetables];
let yellowFruits=["Mango",...fruits];
console.log("food : ",food);
console.log("yellow fruits : ",yellowFruits);
//copying object using spread operator
const obj = {
    firstname: "Shruti",
    lastname: "Jawale",
};
const obj2 = { ...obj };
console.log(obj2);

//Rest operator to compress multiple argumemts into one iterable
function average(...args) {
    console.log(args);
    var avg =
        args.reduce(function (a, b) {
            return a + b;
       }, 0) / args.length;
    return avg;
}
console.log("average of numbers is : "
    + average(1, 2, 3, 4, 5));
console.log("average of numbers is : "
    + average(1, 2, 3));