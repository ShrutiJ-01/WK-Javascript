//Grade Calculator
//Conditonals and Switch case handsOn


function calculateGrade() {//function to calculate marks
    let averageMarks = 0;
    let grade = '';

    const remarkPara = document.querySelector(".remarks");
    const englishField = document.getElementById('english');
    const mathField = document.getElementById('math');
    const scienceField = document.getElementById('science');
    const resultField = document.getElementById('gradeResult');

    const englishMarks = Number(englishField.value);
    const mathMarks = Number(mathField.value);
    const scienceMarks = Number(scienceField.value);

    averageMarks = (englishMarks + mathMarks + scienceMarks) / 3;

    if (averageMarks >= 80 && averageMarks <= 100) {
        grade = 'A';
    } else if (averageMarks >= 50 && averageMarks < 80) {
        grade = 'B';
    } else if (averageMarks >= 35 && averageMarks < 50) {
        grade = 'C';
    } else if (averageMarks < 35 && averageMarks >= 0) {
        grade = 'D';
    } else {
        grade = 'Please enter valid marks';
    }

    resultField.value = grade;

    switch (grade) {
        case 'A':
            remarkPara.textContent = "Excellent! Keep it up.";
            break;
        case 'B':
            remarkPara.textContent = "Well Done! Can do better.";
            break;
        case 'C':
            remarkPara.textContent = "Need to work hard.";
            break;
        case 'D':
            remarkPara.textContent = "Uh oh! Better Luck next time.";
            break;
        default:
            remarkPara.textContent = "That looks strange to me.";            
            break;
    }

    //clearing the entry feilds
    englishField.value = "";
    mathField.value = "";
    scienceField.value = "";
}


