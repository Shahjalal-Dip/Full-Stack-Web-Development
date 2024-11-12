let filterPrimes=(array)=>{
 let prime=array.filter((element)=>{
    let bool = true;
    if(element==1){
        bool=false;
    }
    for(let i=2;i<element;i++){
     if(element%i==0&&element!=2){
      bool=false;
     }
    }if(bool){
        return element;
    } 
 });
 return prime;
}
var prompt=require(`prompt-sync`)();
let array;
let userInput=prompt("Enter the element of an array--> ");
array=userInput.split(" ");
console.log("All Prime elements: "+filterPrimes(array));