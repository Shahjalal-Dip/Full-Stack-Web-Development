let sumMixedArray=(array)=>{
    let sum=0;
 array.forEach(element => {
    if(typeof(element)==typeof(sum)){
     sum+=element;
    }
 });
 return sum;
}

let array=[1,2,"wh",3,"hh",true,4,false,'c',90];

console.log("Sum of Numeric Number: "+sumMixedArray(array));
