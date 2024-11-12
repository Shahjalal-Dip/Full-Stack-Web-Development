let findMax=(array)=>{
  let max=array.reduce((e1,e2)=>{
     if(parseInt(e1)>parseInt(e2)){
      return e1;
     }else{
      return e2;
     }
  });
  return max;
}
var prompt=require(`prompt-sync`)();
let array;
let userInput=prompt("Enter the element of an array--> ");
array=userInput.split(" ");
console.log("Maximum Number: "+findMax(array));