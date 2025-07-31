const students = [];

function addStudents(name, grade) {
    students.push({name, grade})
}

function removeStudent(name) {
    const index = students.findIndex(students => students.name);
    if (index !== -1) {
        students.splice(index, 1);
        console.log(name, " has been removed.")
    }else {
        console.log(name, ' was not found.');
    }
}

function filterTopStudents (minGrade) {
    return students.filter(students => students.grade >= minGrade);
}

function formatStudentList() {
    return students.map((students)=> `${students.name} - Grade: ${students.grade}`);
}

console.log("Student =", students);

//students
addStudents("Alice", 88);
addStudents("Rick", 77);
addStudents("Emily", 99);
addStudents("Minyoo", 81);
addStudents("David", 93);

console.log("STUDENT LIST:");
console.log(formatStudentList());
removeStudent("Rick");

console.log("STUDENTS LIST:")
console.log(formatStudentList());

console.log("TOP STUDENTS:");
console.log(filterTopStudents(90));