//demonstrating methods of string in Javascript
let string = 'Shruti Jawale';

//length property returns lemgth of a string
console.log('Length of string using length property : ',string.length);

//geting a charater at specified position
console.log('CharAt 3rd position using CharAt() : ',string.charAt(2));
console.log('Second character string using square bracket notation',string[1]);
console.log('Last character : ',string.charAt(string.length-1));

let browserName = 'Google Chrome';
let browserName2= 'Microsoft Edge';
console.log('input string is : ',browserName);

if (browserName.includes('Chrome')) {
    console.log('Found Chrome in the string');
} else {
    console.log('No Chrome in teh String');
}

if(browserName.startsWith('Microsoft')){
    console.log('This doesnot start with microsoft');
}
if(browserName2.endsWith('Edge')){
    console.log('This string ends with Edge');
}

//Finding index of characters and substrings

console.log('Index of soft in ',browserName2, ' is : ', browserName2.indexOf('soft'));
console.log('Index of e in ',browserName,' is : ',browserName.indexOf('e'));
console.log('Last index of e in ',browserName,' is : ',browserName.lastIndexOf('e'));

//to take substring suse slice function

console.log('Substring from index 2 to 6 ',browserName,' is : ',browserName.slice(2,6));