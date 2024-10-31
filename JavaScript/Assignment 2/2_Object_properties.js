function print(Book){
    console.log("Title: "+Book["title"]);
    console.log("Author: "+Book["author"]);
    console.log("Year: "+Book["year"]);
}

const Book={
    title:"Fundamentals of Data Structure",
    author:"Prof. Anuradha A. Puntambekar",
    year:"2020",
} 

print(Book);