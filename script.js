let numberBtn = document.querySelectorAll(".number-btn")
let operatorBtn = document.querySelectorAll(".operator-btn")
let displayOperation = document.querySelector("#display-operation")
let displayResult = document.querySelector("#display-result")
let clearBtn = document.querySelector("#clear-btn")
let deleteBtn = document.querySelector("#delete-btn")
let decimalBtn = document.querySelector("#decimal")
let numberArr = [0, 1, 2, 3,4,5,6,7,8,"9"]
console.log(operatorBtn)
for(let i = 0; i < numberBtn.length; i++){
    //displayResult.textContent = ""
    numberBtn[i].onclick = function(){
        
        let attr = this.getAttribute("data-number");
        let content = displayOperation.textContent;
        temporaryHolder = "";
        let lastIndex = content.length
        if(content[lastIndex-1] == "=" | content[lastIndex-1] == "=" | content[lastIndex-1] == "+" 
        | content[lastIndex-1] == "*" | content[lastIndex-1] == "/"  ){
            console.log("it is true, it has a symbol ending ")
              
        } 
        if(displayResult.textContent == 0){
            displayResult.textContent = attr  
          //displayOperation.textContent += attr 
        }else{
            displayResult.textContent += attr 
            //displayOperation.textContent += attr 
        }
        
    }
    
}
//Decimal Button
decimalBtn.onclick = function(){
    let content = displayResult.textContent
    console.log(content[content.length-1])
    if(content.includes(".")){
        console.log("yes include '.'")
        return
    }
    if(content[content.length-1] != "."){
      displayResult.textContent += "."  
    }

    
}
// divide Button
operatorBtn[0].onclick = function(){
    changeBackground(operatorBtn[1])
    evaluate("÷", divide)
}
// Multiply Button
operatorBtn[1].onclick = function(){
    changeBackground(operatorBtn[1])
    evaluate("x", multiply)
}
// Subtract Button
operatorBtn[2].onclick = function(){
    changeBackground(operatorBtn[2])
    evaluate("-", subtract())
}

// Equal Button
operatorBtn[3].onclick = function(){
    let content = displayOperation.textContent
    let lastIndex = content.length
    console.log("lastindex: ", content[lastIndex-1])

    
   //if(content[lastIndex-1] !== "+" && content[lastIndex-1] !==  "=" && content[lastIndex-1] !== "-" && content[lastIndex-1] !== "/" && content[lastIndex-1] !==  "*" && displayOperation.textContent !==  "" ){
    if(content[lastIndex-1] !== "=" && displayResult.textContent !==  ""  ){
        displayOperation.textContent += displayResult.textContent + "="
        displayResult.textContent = operate()
    }
    
    changeBackground(operatorBtn[3])
    }

operatorBtn[4].onclick = function(){

    changeBackground(operatorBtn[4])
    evaluate("+", add())
}



function operate(){
    let total = 0;
    let contentArr = (displayOperation.textContent).split("")
    symbol = contentArr.find(num => num == "+" || num === "-" || num === "*" || num === "/")
    contentArr = (displayOperation.textContent).split(symbol)
    firstNum = parseFloat(contentArr[0])
    secondNum = parseFloat(displayResult.textContent)

    if( symbol == "+"){
        total = add(firstNum, secondNum)
    }else if(symbol == '-'){
        total = subtract(firstNum, secondNum)
    }else if(symbol == "÷"){
        total = divide(firstNum, secondNum)
    } else if( symbol = "x"){
        total = multiply(firstNum, secondNum)
    }
    console.log("Total: ", total)
    //displayResult.textContent = total;
    contentArr.length = 0;
    //console.log("secondARR", contentArr)
    return total
}


function evaluate(symbol, operation){
    if(symbol == "+"){
        operation = function s(num1, num2){ return add(num1, num2)}
    } else if(symbol == "-"){
        operation = function s(num1, num2){ return subtract(num1, num2)}
    } else if(symbol == "*"){
        operation = function s(num1, num2){ return multiply(num1, num2)}
    } else if(symbol == "/"){
        operation = function s(num1, num2){ return divide(num1, num2)}
    }

    let content = displayOperation.textContent;
    let lastIndex = content.length
    //console.log(content[lastIndex-1])
    let contentArr = content.split(symbol);
    console.log("contentArr", contentArr)
    resultTotal = operation(contentArr[0], displayResult.textContent )
    //if the last index of display operaion is not that symbol, change the symbol, and also if there is nothing in the isplayresult
    console.log("Content: ", content)
     // if the last index is not equal to the symbol add the symbol
        //if the last index is not equal to symbol and displayresult is not equal 
        //to nothing, i want to add the resulttoal to displayoperation + symbol
        if(content.length >= 2 && displayResult.textContent != "" && content[lastIndex-1] != "="){
            console.log("length: ", content.length)
            console.log("HERE 1.1")
           
         displayOperation.textContent =  operate() + symbol;
         
         displayResult.textContent = ""
           } 
        else if(content.length >= 2 && displayResult.textContent != "" && content[lastIndex-1] == "="){
            console.log("length: ", content.length)
            console.log("HERE 1.1")
           
         displayOperation.textContent =  displayResult.textContent + symbol;
         
         displayResult.textContent = ""
           } 
    else if(displayResult.textContent != "" && content[lastIndex-1] == symbol){
        console.log("here am I ")
      displayOperation.textContent  = resultTotal +  symbol
    displayResult.textContent = ""
    }
    else if(content[lastIndex-1] != symbol && displayResult.textContent == "" ){
        let replaced = content.slice(0,-1) + symbol
        //content.replace(content[lastIndex-1], symbol)
        console.log("last element:", replaced)
        displayOperation.textContent = replaced
        
    } 
           
        
        else if(content[lastIndex-1] != symbol){
        console.log("cont arr:", contentArr)
        console.log("HERE 1")
       
     displayOperation.textContent +=  displayResult.textContent + symbol;
     
     displayResult.textContent = ""
    }
    

   else if(content[lastIndex - 1] === "="){
        console.log("HERE 3")
        console.log("include =: ", true);
       let total = displayResult.textContent ;
        displayOperation.textContent = total + symbol;
        displayResult.textContent = ""
        
    }

}


function add(num1, num2){
    let total = parseFloat(num1) + parseFloat(num2);
    return total
    
}

function subtract(num1, num2){
    let total = parseFloat(num1) - parseFloat(num2);
    return total
}

function divide(num1, num2){
    let total = num1 / num2;
    return total
}

function multiply(num1, num2){
    let total = num1* num2 ;
    return total
}

clearBtn.onclick = function(){
    clear()
}

function clear(){
    displayOperation.textContent = ""
    displayResult.textContent = 0
}

// delete btn
deleteBtn.onclick = function(){
    deleteResult()
    
}

function deleteResult(){
    //console.log(displayResult.textContent.length)
    let arr = Array.from(displayResult.textContent)
   //console.log("Delete:", arr)
    arrPop = arr.pop()
  displayResult.textContent = arr.join("")
  displayOperation.textContent = ""
 
   

}


function changeBackground(btn){
for(let i = 0; i< operatorBtn.length; i++){
    if(operatorBtn[i] == btn){
        operatorBtn[i].style.background = "var( --primary-blue)"
    }else {
        operatorBtn[i].style.background = "var( --primary-white)"
    }
}
}

