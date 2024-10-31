reverse=(array)=>{
    let s=0,e=array.length-1;
    while(s<=e){
     let temp=array[s];
     array[s++]=array[e];
     array[e--]=temp;
    }
 return array;
}

var prompt=require(`prompt-sync`)();
let size=prompt("Enter the size of an array--> ")
let array=new Array(size);
let userInput=prompt("Enter the element of an array--> ")
array=userInput.split(" ");

let newArr=reverse(array);
process.stdout.write("After reverse the Array--> "); 
for(let i=0;i<size;i++){
    process.stdout.write(+newArr[i]+" ");
}