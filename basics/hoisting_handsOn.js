// hoisting - variable
console.log(firstName);
//console.log(job);
//console.log(city);

var firstName = "Shruti"; // hoisted but initialized to undefined
console.log(firstName);
let job = "Intern"; // hoisted and will give error
const city = "Pune"; // hoisted and will give error

addDecl(3, 4);
// addExpr(6, 1);
// addArrow(9, 3);

// is hoisted - works
function addDecl(a, b) {
  console.log(a + b);
}

// is hoisted but kept in TDZ - won't work
const addExpr = function (a, b) {
  console.log(a + b);
};

// is hoisted but initialized to undefined - won't work
var addArrow = (a, b) => console.log(a + b);