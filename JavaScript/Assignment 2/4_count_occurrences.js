countOccurrences=(array)=>{
    const obj={};
    for(let i=0;i<array.length;i++){
      obj[array[i]]=0;
    }   
    for(let i=0;i<array.length;i++){
        obj[array[i]]++;
      }        
 return obj;
}

var prompt=require(`prompt-sync`)();
let userInput=prompt("Enter the element of an array--> ")
let array=userInput.split(" ");

let obj=countOccurrences(array);
process.stdout.write("After Count Occurrences--> "); 
console.log(obj);
