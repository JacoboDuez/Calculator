

let numButton = document.getElementsByClassName("button-number");

let displayValue = "";

function updateDisplay(){
    if (displayValue===""){
        document.getElementById('display').innerHTML = "0";
    }
    else{
        document.getElementById('display').innerHTML =  displayValue;
    }
}

function appendNumber(newNumber){
    displayValue += newNumber;
    updateDisplay();
}


function operate(operator){ 
            if ( displayValue !== 0 && !isNaN(displayValue.charAt(displayValue.length-1))){
                displayValue +=operator;
                updateDisplay();
            }
}

function calculate(){
    console.log(displayValue);
    let possibleOperator = displayValue.substring(displayValue.length,displayValue.length);
    let proceed  =  false;
    switch (possibleOperator){
        case "+","-","*","/":
            proceed =  false;
        default:
            proceed =  true;
    }
    if(length(displayValue)>0  && !isNaN(displayValue.charAt(displayValue.length-1))){
        try{
            const result =  eval(displayValue);
            displayValue =  result.toString();
            updateDisplay();
        }
        catch(error){
            displayValue =  "Error";
            updateDisplay();
        }
    }
    else{
        l=0;
    }
}

function clearDisplay(){
    displayValue = "";
    updateDisplay();
}


function toggleSign(){
    if(isNaN(displayValue.substring(0,1))){
        displayValue = displayValue.replace("-","");
    }   
    else{
        displayValue = "-"  +  displayValue;
    }
}

function percent(){
    displayValue=parseInt(displayValue);
    displayValue= displayValue / 100;
}