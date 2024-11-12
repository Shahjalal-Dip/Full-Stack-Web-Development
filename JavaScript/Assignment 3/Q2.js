let sumArray=(array)=>{
    let sum=0;
    array.forEach(element => {
       sum+=parseInt(element); //string to int
    });
    return sum;
}
var prompt=require(`prompt-sync`)();
let array;
let userInput=prompt("Enter the element of an array--> ");
array=userInput.split(" ");
console.log("Sum of all elements: "+sumArray(array));