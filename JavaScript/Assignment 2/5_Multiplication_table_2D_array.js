multiplicationTable=(n)=>{
    let array = new Array(n); // Create an array for rows
    for (let i = 0; i < n; i++) {
        array[i] = new Array(n).fill(0); // Create each row with columns and fill with default values (e.g., 0)
    }
    let num=1;
    for(let r=0;r<n;r++){
        for(let c=0;c<n;c++){
          array[r][c]=num++;
        } 
    }   
           
 return array; 
}

var prompt=require(`prompt-sync`)();
let num=prompt("Enter a number--> ")

let table=multiplicationTable(num);
process.stdout.write("Here is the 2D Array--> "); 
console.log(table);