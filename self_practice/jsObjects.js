
//Creating an object literal
//functions that are part of objects are clled methods,
//so draw() is a method.
let circle={
    radius : 5,
    location:{
        x: 100,
        y:100
    },
    draw: function(){
        console.log('draw');
    }

};

circle.draw();

//Objet literal is not a good way to duplicate it
// if the object has a method
// In this case we use a factory function createCircle()

//Factory Function
function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}


//Constructor Function

//in JS this keyword, if we call a function as a standalone object, this will return the global object
//or the globl object
//If it is called as a method of an object it references the object
//strict mode prevents potential problems.
function Circle(radius){
    this.radius=radius;
    this.draw = function(){
       console.log('draw'); 
    };
}
 const another = new Circle(1);


//Object destructoring
const address={
    street:'sb road',
    city : 'pune',
    country: 'india'
}
//defining new constant st and assigning street property of adress object to it
const {street:st, city:ct, country:cy}=address;
console.log(ct,st,cy);

//spread operator to clone and combine arrays
const first =[1,3,5,7,9];
const second=[2,4,6,8,0];

const cloneFirst=[...first];//clone first array
const combine=[...first,...second];
console.log(cloneFirst);
console.log(combine);

//we can also apply spread operator on objects
const firstobj={name:'Shruti'};
const secondObj={job:'Intern'};

const cloneObj={...firstobj};
const combineObj={...firstobj,...secondObj};

console.log(cloneObj);
console.log(combineObj);


//CLASSES 
//to remove redundacny we have classes
//use class keyword to declare class
//use constructor keyword to define constructor method
//just modify the walk mthod insode the class to modify 
//walk() inside all of person class's objects
class Person{
    constructor(name,height){
        this.name=name;
        this.height=height;
    }

    walk(){
        console.log('walk ',this.name);
    }
}

const rahul = new Person('Rahul','5\'9');
rahul.name = 'Rahul Sharama';
rahul.walk();
console.log(rahul);

//INHERITANCE
//Teacher class inherits the constructor of the person class
//CALL THE SUPER CLASS CONSTRUCTOR IF YOU DEFINE YOUR OWN CONSTRUCTOR
//BY DEFAULT THE SUB CLASS INHERITS CONSTRUCTOR OF SUPER CLASS
class Teacher extends Person{
    constructor(name,height,degree){
        super(name,height);
        this.degree=degree;
    }
    teach(){
        console.log('teach ',this.name,' degree ',this.degree);
    }
}

const teacher = new Teacher('Shruti','5\'6','M.S');
teacher.walk();
teacher.teach();




