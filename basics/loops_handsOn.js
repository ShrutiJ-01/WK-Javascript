function calculateSum() {
    let sum_while=0;
    let sum_for=0;
    const whileResultPara = document.querySelector(".whileResult");
    const forResultPara = document.querySelector(".forResult");
    const numberField = document.querySelector(".numberField");

    let number=Number(numberField.value);
    let number_copy=number;

    while (number_copy > 0) {
        sum_while += number_copy;
        number_copy--;
    }

    for (let index = 1; index <= number; index++) {
        sum_for+=index;        
    }

    whileResultPara.textContent=`Result from while Loop is : ${sum_while}`;
    forResultPara.textContent=`result from for Loop is : ${sum_for}`;

}