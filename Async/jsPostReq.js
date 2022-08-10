//Making post request to the Flask application built in python repo
const patient={
    "age": 50,
    "first_name": "Melora",
    "gender": "Female",
    "last_name": "Hardin",
    "uid": 900086
};

const options={
    method : 'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify(patient)
};
const addPatient = async () => {
    const response = await fetch('http://127.0.0.1:5000/registrations',options);
    const data = await response.json();
    return data;
};
function displayResponse(data) {
    console.log('ASYNC AWAIT getUsers() data recieved : ', data);
    const responsePara=document.querySelector(".response");
    responsePara.textContent=`${data["status"]} ${data["uid"]}`;
}
addPatient().
    then(data => displayResponse(data)).
    catch(err => console.log('error in ASYNC AWAIT : ', err.message));
