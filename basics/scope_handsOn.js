let myName="Shruti";//global variable so they can be accesed anywhere.

function displayFormattedDetails() {
    //local variable myLastName. belongs to the function block. 
    //It cannot be accesed outside the function
    //scopr of this variable is only this function
    //hence we cannot print the firstc haracter of last name in displayPerson()
    let myLastName="Jawale";
    console.log("---------");
    console.log("First Name : ",myName);
    console.log("---------");  
    console.log("---------");
    console.log("Last Name : ",myLastName);
    console.log("---------");   
}
function displayPerson(){
    {
        //variable age belongs to this block only and is 
        //not accesible outside the block
        //so when we try to print birth year we get the error age is not defined
        let age=20;
        console.log("Age : ", age);
    }

    displayFormattedDetails();
    //console.log("First character of last name : ",myLastName.charAt(0));
    //console.log("Birth year : ",(2022-age));
}

displayPerson();
