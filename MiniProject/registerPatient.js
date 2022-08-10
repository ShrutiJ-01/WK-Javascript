//Connecting Patient Registration application to flask app

let pateintSet = new Set(); //set containing generated UIDs

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
    #first_name;
    #last_name;
    #gender;
    #age;

    constructor() {
        this.#uid = generateUID();
    }

    get uid() {
        return this.#uid;
    }
    get first_name() {
        return this.#first_name;
    }
    get last_name() {
        return this.#last_name;
    }
    get gender() {
        return this.#gender;
    }
    get age() {
        return this.#age;
    }

    set first_name(firstName) {
        this.#first_name = firstName;
    }
    set last_name(lastName) {
        this.#last_name = lastName;
    }
    set gender(gender) {
        this.#gender = gender;
    }
    set age(age) {
        this.#age = age;
    }

    toJson() {
        return {
            "age": this.#age,
            "first_name": this.#first_name,
            "gender": this.#gender,
            "last_name": this.#last_name,
            "uid": this.#uid
        }
    }
}

const sendPatient = async (patient) => {//Function that makes POST request and sends new patient to API
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(patient.toJson())
    };
    console.log("------ POST request sending this : ", options.body);
    const response = await fetch('http://127.0.0.1:5000/registrations', options);
    const data = await response.json();
    console.log("status code : ", response.status);
    return data;
}

function patientsFromJson(jsonData) {//function to convert JSON to array of Patient objects
    let patientList=[];
    let jsonList = jsonData["patients"];
    for (const object of jsonList) {
        //creating a Patient object and adding it to the list
        let patient = new Patient();
        patient.first_name = object["first_name"];
        patient.last_name = object["last_name"];
        patient.age = Number(object["age"]);
        patient.gender = object["gender"];

        patientList.push(patient);
    }
    return patientList;

}

const getRegisteredPatients = async () => {//function that makes GET request and recieves list of patients

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const response = await fetch('http://127.0.0.1:5000/registrations', options);
    const data = await response.json();
    console.log("status code : ", response.status);
    return data;
}

function updateTable() {
    //getting DOM elements
    const patientTable = document.getElementById("registeredPatientsTable");

    //calling function to get datat from api
    getRegisteredPatients().
        then(data => {

            let patients=patientsFromJson(data);//parse json data into array of patient objects

            //remove old rows
            while (patientTable.rows.length > 1) {
                table.deleteRow(1);
            }


            //iterating over recieved data to display in table form
            for (const newPatient of patients) {
                let newRow = patientTable.insertRow();
                let items = [newPatient.uid, newPatient.first_name, newPatient.last_name, newPatient.gender, newPatient.age];
                for (let index = 0; index < 5; index++) {
                    let newCell = newRow.insertCell(index);
                    let newText = document.createTextNode(items[index]);
                    newCell.appendChild(newText);
                }

            }
        }).
        catch(err => console.log('error in ASYNC AWAIT GET patients : ', err.message));
}

function registerPatient() {
    //getting HTML elements by their ID
    const firstNameField = document.getElementById("firstNameFeild");
    const lastNameField = document.getElementById("lastNameFeild");
    const ageField = document.getElementById("ageField");
    const genderField = document.getElementById("genderField");

    //creating a Patient object and adding it to the list
    let newPatient = new Patient();
    newPatient.first_name = firstNameField.value;
    newPatient.last_name = lastNameField.value;
    newPatient.age = Number(ageField.value);
    newPatient.gender = genderField.value;

    sendPatient(newPatient).
        then(data => console.log(`${data["status"]} for id ${data["uid"]}`)).
        catch(err => console.log('error in ASYNC AWAIT POST send patient: ', err.message));


    //clearing feilds
    firstNameField.value = "";
    lastNameField.value = "";
    genderField.value = "";
    ageField.value = "";

    //update table
    updateTable();


}