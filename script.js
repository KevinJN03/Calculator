let numberBtn = document.querySelectorAll(".number-btn")
let operatorBtn = document.querySelectorAll(".operator-btn")
let displayOperation = document.querySelector("#display-operation")
let displayResult = document.querySelector("#display-result")
let clearBtn = document.querySelector("#clear-btn")
let deleteBtn = document.querySelector("#delete-btn")
let temporaryHolder = ""
let first
let second;
let operator;

function operate(symbol,firstNum,secondNum){
    if( symbol == "+"){
        return add(firstNum, secondNum)
    }else if(symbol == '-'){
        return subtract(firstNum, secondNum)
    }else if(symbol == "/"){
        return divide(firstNum, secondNum)
    } else if( symbol = "*"){
        return multiply(firstNum, secondNum)
    }

}


for(let i = 0; i < numberBtn.length; i++){
    numberBtn[i].onclick = function(){
        //displayResult.textContent =""
        let attr = this.getAttribute("data-number");
        
        if(displayResult.textContent == 0){
            displayResult.textContent = attr  
        }else{
            displayResult.textContent += attr 
        }
       
    }
    
}

operatorBtn[0].onclick = function(){
    
changeBackground(operatorBtn[0])
}

operatorBtn[1].onclick = function(){
    
    changeBackground(operatorBtn[1])
    }
    
operatorBtn[1].onclick = function(){

    changeBackground(operatorBtn[1])
}

operatorBtn[2].onclick = function(){
    
    changeBackground(operatorBtn[2])
    }

operatorBtn[3].onclick = function(){

    changeBackground(operatorBtn[3])
    }
        
    

operatorBtn[4].onclick = function(){
    console.log("hi")
add()
changeBackground(operatorBtn[4])
evaluate()
}

function add(){
    
    console.log("Add() is clicked")
       displayOperation.textContent += displayResult.textContent + "+" 
       
       displayResult.textContent = ""
        //operatorBtn[4].style.background = "red"
}

function subtract(num1, num2){
    let total = num1 - num2;
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


deleteBtn.onclick = function(){
    deleteResult()
}

function deleteResult(){
    //console.log(displayResult.textContent.length)
    let arr = Array.from(displayResult.textContent)
   //console.log("Delete:", arr)
    arrPop = arr.pop() 
  displayResult.textContent = arr.join("")
   

}

function equal() {

let total = parseFloat(numArr[0]) + parseFloat(numArr[1])
totalArr.push(total)
console.log("Here is total: ", totalArr[0])


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

function evaluate(){

    if(displayOperation.textContent.includes("+")){
        console.log("it is true")
    }
}