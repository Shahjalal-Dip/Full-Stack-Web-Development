let  reverseWords=(sentence)=>{
    let word=sentence.split(' ');
    let arrWord=word.map(element => {
      return element.split('').reverse().join(''); //reverse every word
    });
    return arrWord.join(' ');
}
var prompt=require(`prompt-sync`)();
let sentence=prompt("Enter the sentence--> ");
console.log("After Word reverse result: "+reverseWords(sentence));