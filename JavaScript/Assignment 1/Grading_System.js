var prompt = require('prompt-sync')();
let mark = prompt("Enter Marks: ")
if (mark >= 90 && mark <= 100) {
    console.log("You got A")
}

else if (mark >= 80 && mark < 90) {
    console.log("You got B")
}
else if (mark >= 70 && mark < 80) {
    console.log("You got C")
}
else if (mark >= 60 && mark < 70) {
    console.log("You got D")
}

else {
    console.log("F");

}