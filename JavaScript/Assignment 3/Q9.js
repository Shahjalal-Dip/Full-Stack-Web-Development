let  countVowels = word =>{
        const vowels = 'aeiouAEIOU';
        return Array.from(word).reduce((count, char) => {
          return vowels.includes(char) ? count + 1 : count;
        },0);
}

var prompt=require(`prompt-sync`)();
let word=prompt("Enter the Sentence or Word--> ");
console.log("Inside vowel: "+countVowels(word));