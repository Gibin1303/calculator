//display in calculator 

function displayContent(content){
    result.value += content
 }
 
 // clear Data
 
 function clearCalcData(){
    result.value =""
 }
 
 //backspace
 
 function removeCalc(){
     result.value =result.value.slice(0,-1)
 }
 
 //evaluation
 function calcOut(){
     result.value =eval(result.value)
 }
 