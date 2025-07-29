// const grade1 = prompt("Enter your first grade");
// const grade2 = prompt("Enter your second grade");
// const grade3 = prompt("Enter your third grade");
const grades = []
for( let i=0; i< 3;i++) {
    const score = Number(prompt("enter your grade 1-100"));
    grades.push(score);
}
function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

function assignGrade(gradeAverage){
    if (gradeAverage >= 90){
        return "A";
    } else if (gradeAverage >= 80){
        return "B";
    } else if (gradeAverage >= 70){
        return "C";
    } else if (gradeAverage >= 60) {
        return "D";
    } else {
        return "F"
    }
}
const average = calculateAverage(grades[0],grades[1],grades[2]);
const letterGrade = assignGrade(average);

console.log(`This is the average of the three: ${average}`);
console.log(`This is the letter grade for your average scores: ${letterGrade}`);
