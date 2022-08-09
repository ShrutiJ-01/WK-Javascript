//Javscript Array destructoring
const colorArr = ["red", "yellow", "blue", "green", "white", "black"];

const [first, second] = colorArr;
console.log(first, second);
console.log('-----');


// JavaScript Object Destructuring
let person = {
    fnm: 'shruti',
    job: 'Intern',
    age: 20
};

let { fnm, age, job } = person;

console.log(fnm);
console.log(age);
console.log(job);

//Destructoring function arguments
let displayDetails = ({ fnm, age }) => {
    console.log('----- destructoring function arguments');
    console.log(fnm); 
    console.log(age); 
    console.log('-----');
};

displayDetails(person);

let person1 = {
    fnm: 'shriya',
    job: 'teacher',
    nationality: 'Canadian',
    age: 23
};
//sign a default value while destructuring
function defaultValuesDisplay() {
    console.log('----- default avlues in destructoring');
    let { fnm, nationality = "indian", job } = person1;
    console.log(fnm);
    console.log(nationality);
    console.log(job);
    console.log('-----');
}
defaultValuesDisplay();
//Null object destructoring
function getPerson() {
    random = Math.floor(Math.random() * 1) + 1;
    if (random) {
        return null;
    } else {
        return person1
    }
}
function displayObject() {
    let { fnm, age} = getPerson() || {}; 
    console.log('----- Nunll object destructing');
    console.log(fnm);
    console.log(age);
    console.log('-----');

}

//Using rest operator to get n-2 languages as separate object
let languages = {
    language1: 'Java',
    language2: 'JavaScript',
    language3: 'C',
    language4: 'Python',
    language5: 'C#',
    language6: 'C++',
    language7: 'Ruby'
};

let { language1, language2, ...otherLanguages } = languages;
console.log('----- Rest Operator');
console.log(language1);
console.log(language2);
console.log(otherLanguages);
console.log('-----');

//Assigning object keys
let users = {
    Paul: 'Software Engineer',
    Mike: 'Senior Software Engineer',
    George: 'Team Lead'
  };
  
  let userKey = 'Mike';
  let { [userKey] : selectedUser } = users;
  console.log('----- assigning object keys');
  console.log(selectedUser); 
  console.log('-----');

  //Combined arrays and object destructoring
  let tech = [
    { id: 1, nm: 'Java' }, 
    { id: 2, nm: 'JavaScript' },
    { id: 3, nm: 'C' }, 
    { id: 4, nm: 'Python' },
    { id: 5, nm: 'C#' },
    { id: 6, nm: 'C++' },
    { id: 7, nm: 'Ruby' }
  ];
  
  let [, , , { nm }, , , ] = tech;//used commas to skip array objects
  console.log('----- Destructoring nested objects');
  console.log(nm) 
  console.log('-----');