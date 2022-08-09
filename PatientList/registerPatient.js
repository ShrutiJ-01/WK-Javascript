let patient_list=[];
function registerPatient(){
    const errorPara = document.querySelector(".error");
    const patientDisplayPara=document.querySelector(".uniquePatients");
    const patientIdField = document.querySelector(".patientIdField");
    const patientId=patientIdField.value;
    if (patient_list==[]||patient_list.indexOf(patientId)==-1) {
        errorPara.textContent="";  
        patient_list.push(patientId); 
        patientIdField.value="";
        patientIdField.focus();
    } else {
        errorPara.textContent="PatientId already exists";       
        patientIdField.value="";
        patientIdField.focus();
    }
    patientDisplayPara.textContent=patient_list.toString();  
}