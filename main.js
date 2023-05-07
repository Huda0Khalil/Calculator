let num = document.querySelectorAll(".num");
let oper = document.querySelectorAll(".operation");
let expInput = document.querySelector(".expInput");
let result = document.querySelector(".result");

for( let i = 0; i<num.length; i++){
  num[i].onclick =  function(){
    console.log(num[i].innerHTML);
   if(result.value == ""){
    expInput.value = expInput.value.concat(num[i].value);
   }
   if(result.value != "" && expInput.value.match(/\D/) ){
    expInput.value = expInput.value.concat(num[i].value);
   }
    console.log(expInput.value);
}
}
for( let i = 0; i<oper.length; i++){
    oper[i].onclick =  function(){
        if(result.value == ""){
            expInput.value = expInput.value.concat(oper[i].value);
        }
        else {
            expInput.value = result.value.concat(oper[i].value);
        }
  }
  }
  
  function DELETE(){
    expInput.value = "";
    result.value = "";
  }
  function EQUAL(){
    result.value = eval(expInput.value);
    console.log(eval(expInput.value));
    expInput.value = result.value;
  }
  function BACK(){
    expInput.value = expInput.value.slice(0,-1);
  }
  
/*
num.onclick = function(){
    console.log(num);
}*/