//Expand the patient registration application to include more details
// and display the details in a table format

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

    uid;
    firstName;
    lastName;
    gender;
    age;

    constructor(firstName, lastName, age, gender) {
        this.uid = generateUID();
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
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
    newPatient = new Patient(firstNameField.value, lastNameField.value, Number(ageField.value), genderField.value);
    patient_list.push(newPatient);

    //clearing feilds
    firstNameField.value = "";
    lastNameField.value = "";
    genderField.value = "";
    ageField.value = "";

    //insert new row in Patients table
    let newRow = patientTable.insertRow();
    let index=0;//maintaining index of the column in the table
    for (const key in newPatient) {
        let newCell = newRow.insertCell(index);
        let newText = document.createTextNode(newPatient[key]);
        newCell.appendChild(newText);
        index++;
    }

}

