//Exploring Arrays in js, also map, filter and split()

//Creating an array 
let shopping=["Milk","Juice","Almonds","Oatmeal","Banana","Wheat Flour"];
let numbers=[54,67,89,87,2,36,12];
//printing arrays
console.log("Shopping list : ", shopping);
console.log("Numbers : ",numbers);

//Sort the arrays
shopping.sort();
numbers.sort();
console.log("Sorted Shopping List : ",shopping);
console.log("Sorted Numbers : ",numbers);

//Use array Indexing to print arrays 
console.log("\nPrinting shopping array using index from first to last : [ ");
for (let index = 0; index < shopping.length; index++) {
    console.log(shopping[index]);    
}
console.log(']');
console.log("\nPrinting shopping array using index in reverse order: [ ");
for (let index = shopping.length-1; index >= 0; index--) {
    console.log(shopping[index]);    
    
}
console.log(']');

//Using the splice method to remove entry of "Oatmeal" from the shopping list and add "Apple"
shopping.splice(shopping.indexOf("Oatmeal"),1,"Apple");
console.log("Modified array from splice() after removing oatmeal and adding apple: ",shopping);
//Insert after 3rd index from end using splice()
shopping.splice(-3,0,"Cheese");
console.log("Modified array from splice() after adding cheese after 3rd index from end: ",shopping);


//Using concat() to merge numbers and shopping
let merged_array=shopping.concat(numbers);
console.log("Concatenated array is : ", merged_array);

//Using map() to get an array of lengths of list Items
const lengthArray = shopping.map((item)=>item.length);
console.log('length of each item in the shopping list : ',lengthArray);

//get an array of only those items which have length<6 using filter(). 
let essentials = shopping.filter((item)=>item.length<6);
console.log('items with length less than 8 characters : ',essentials);

//Converting strings to arrays using split()
const data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
const cities = data.split(',');
console.log(cities, ' is an array resulting from using split() on ',data);

//Converting arrays to strings using join() or toString()
const commaSeparated = cities.join(',');
const dogNames = ['Rocket','Flash','Bella','Slugger'];
let conversion= dogNames.toString(); // Rocket,Flash,Bella,Slugger

console.log(commaSeparated,' is a conversion of an array to a string using join()');
console.log('Converting ',dogNames,' aaray to strinf using toString() \n result is : ',conversion);

//Reduce all the elemnts of array to a single peice of data/ element
//arguments given to reduce function are a function and initial value of acuumulator
const sum=numbers.reduce((accumulator,currentValue)=>{return accumulator+currentValue;},0);
console.log('sum of numbers ',numbers,' is : ',sum);