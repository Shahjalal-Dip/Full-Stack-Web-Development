let  capitalizeWords=(sentence)=>{
    let word=sentence.split(' ');
    let arrWord=word.map(element => {
      return element.charAt(0).toUpperCase() + element.slice(1); 
    });
    return arrWord.join(' ');
}
var prompt=require(`prompt-sync`)();
let sentence=prompt("Enter the sentence--> ");
console.log("Result: "+capitalizeWords(sentence));