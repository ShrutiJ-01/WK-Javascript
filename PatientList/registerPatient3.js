//Expand the patient registration application to include classes
//and make use of getters and setters to acess feilds

let patient_list = [];//List of registered Patient Objects
let pateintSet = new Set(patient_list); //set containing generated UIDs


function generateUID() {//function that generates and returns new UID
    let uid = Math.floor(Math.random() * 99999) + 1;
    while (true) {
        if (!pateintSet.has(uid)) {//if the uid doesn't exist in the set break loop
            pateintSet.add(uid);
            break;
        }
        //else continue generating new number
        uid = Math.floor(Math.random() * 6) + 1;
    }
    return uid;
}

//Patient class to encapsulate all patient data
class Patient {

    #uid;
    #firstName;
    #lastName;
    #gender;
    #age;

    constructor() {
        this.#uid = generateUID();
    }

    get UID(){
        return this.#uid;
    }
    get FirstName(){
        return this.#firstName;
    }
    get LastName(){
        return this.#lastName;
    }
    get Gender(){
        return this.#gender;
    }
    get Age(){
        return this.#age;
    }

    set FirstName(firstName){
        this.#firstName = firstName;
    }
    set LastName(lastName){
        this.#lastName = lastName;
    }
    set Gender(gender){
        this.#gender = gender;
    }
    set Age(age){
        this.#age = age;
    }
    
}

function registerPatient() {
    //getting HTML elements by their ID
    const patientTable = document.getElementById("registeredPatientsTable");
    const firstNameField = document.getElementById("firstNameFeild");
    const lastNameField = document.getElementById("lastNameFeild");
    const ageField = document.getElementById("ageField");
    const genderField = document.getElementById("genderField");

    //creating a Patient object and adding it to the list
    newPatient = new Patient();
    newPatient.FirstName=firstNameField.value;
    newPatient.LastName=lastNameField.value;
    newPatient.Age=Number(ageField.value);
    newPatient.Gender= genderField.value;

    patient_list.push(newPatient);


    //clearing feilds
    firstNameField.value = "";
    lastNameField.value = "";
    genderField.value = "";
    ageField.value = "";

    //insert new row in Patients table
    let newRow = patientTable.insertRow();
    let items=[newPatient.UID,newPatient.FirstName,newPatient.LastName,newPatient.Gender,newPatient.Age];
    for (let index = 0; index < 5; index++) {
        let newCell = newRow.insertCell(index);
        let newText = document.createTextNode(items[index]);
        newCell.appendChild(newText);        
    }

}

