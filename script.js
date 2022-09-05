
function calculate(numOne, operator, numTwo){

    console.log(numOne);
    console.log(numTwo);


    var sum = parseInt(numOne) + parseInt(numTwo);
    var subtract = numOne-numTwo;
    var multiply = numOne*numTwo;
    var divide = numOne/numTwo;
    var power = Math.pow(numOne, numTwo);
  

    if (operator == "-" || operator == "subtract"){
        //alertThem(subtract);
        showAnswer(subtract);
    }else if (operator == "+" || operator == "add"){
        //alertThem(sum);
        showAnswer(sum);
    }else if (operator == "*" || operator == "multiply"){
        //alertThem(multiply);
        showAnswer(multiply);
    }else if (operator == "/" || operator == "divide"){
        //alertThem(divide);
        showAnswer(divide);
    }else if (operator == "^" || operator == "power"){
        //alertThem(power);
        showAnswer(power);
    }


}

/*function alertThem(answer){
    console.log(answer);
    alert("Answer is: "+answer);

}*/

function changeBackground(){

    var chosenBackground = Math.floor(Math.random()*10)+1;
    console.log(chosenBackground);
    if (chosenBackground == 1){
        document.body.style.backgroundColor = 'lightgreen';
    }else if (chosenBackground == 2){
        document.body.style.backgroundColor = 'lightblue';
    }else if (chosenBackground == 3){
        document.body.style.backgroundColor = 'white';
    }else if (chosenBackground == 4){
        document.body.style.backgroundColor = 'lightgrey';
    }else if (chosenBackground == 5){
        document.body.style.backgroundColor = 'lightcyan';
    }else if (chosenBackground == 6){   
        document.body.style.backgroundColor = 'lightseagreen';
    }else if (chosenBackground == 7){
        document.body.style.backgroundColor = 'lightyellow';
    }else if (chosenBackground == 8){
        document.body.style.backgroundColor = 'goldenrodyellow';
    }else if (chosenBackground == 9){
        document.body.style.backgroundColor = 'lightcoral';
    }else if (chosenBackground == 10){
        document.body.style.backgroundColor = 'lightpink';
    }

}

function showAnswer(answer){

    document.getElementById("show-answer").innerHTML = answer;
    
}