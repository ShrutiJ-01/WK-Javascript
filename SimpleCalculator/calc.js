let a = "";
let b = "";
let expression = [];
let answer = "";

function clearScr() {
    document.getElementById("screen").innerHTML="";
    a="";
    b="";
    expression=[];

}
function pushSymbol(symbol) {

    expression.push(symbol);
    if (expression.length > 1) {
        a = '';
        document.getElementById('screen').innerHTML = a;
    }

    for (let index = 0; index < expression.length; index++) {
        a=a+expression[index];
        
    }
    console.log("pushSymbol() : expressions array contains : ", expression);
    document.getElementById('screen').innerHTML = a;


}
function getAnswer() {
    document.getElementById("screen").innerHTML="";
    console.log('inside evaluate()');
    
    for(i=0; i<expression.length ; i++){

		b += expression[i];						
	}
    answer=eval(b);
    document.getElementById('screen').innerHTML = answer;

    expression=[];
    b="";

    expression.push(answer.toString());
    console.log("getAnswer() : expressions array contains : ", expression);

}