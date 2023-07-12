let studentFirstName = "Brandon";
let studentLastName = "N";
let grade1 = 53;
let grade2 = 96;
let grade3 = 65;
let grade4 = 74;
let passingGrade = 80;




function avg() {
    let totalGrades = 4;
    let avg = [(grade1 + grade2 + grade3 + grade4) / totalGrades];
    document.getElementById("demo").innerHTML = avg;
};


function changeLastName(){
    let studentLastName = "Newman";
    document.getElementById("demo2").innerHTML = studentLastName;
}

console.log ("Brandon Newman has an average grade of 72");





function pass() {
const myAvg = 72;
const passingGrade = 80;
let greeting;

        if (myAvg >= passingGrade) {
            greeting = "Yes";
        } else {
            greeting = "No";
        }
document.getElementById("demo3").innerHTML = greeting;
}




