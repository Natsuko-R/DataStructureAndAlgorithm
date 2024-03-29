let students = [
    { id: 260, name: "Kyle" },
    { id: 729, name: "Susan" },
    { id: 42, name: "Frank" },
    { id: 74, name: "Jessica" },
    { id: 491, name: "Ally" }
];

function sortStudentsByID() {
    // Don't modify this function
    students.sort(
        function byID(s1, s2) {
            return s1.id - s2.id;
        }
    );
    return students;
};

// modify / move this function
function getStudentsByName(students) {
    students = students.slice()
    return sortStudentsByName()

    function sortStudentsByName() {
        // Don't modify this function
        students.sort(
            function byName(s1, s2) {
                if (s1.name < s2.name) return -1;
                else if (s1.name > s2.name) return 1;
                else return 0;
            }
        );
        return students;
    };

};
// modify / move this function
function getStudentsByID(curStudents) {
    var origStudents = curStudents;
    students = curStudents.slice();
    var newStudents = sortStudentsByID();
    students = origStudents;
    return newStudents;
};

var studentsTest1 = getStudentsByName(students);
console.log(studentsTest1[0].name === "Ally");
console.log(studentsTest1[1].name === "Frank");
console.log(studentsTest1[2].name === "Jessica");
console.log(studentsTest1[3].name === "Kyle");
console.log(studentsTest1[4].name === "Susan");

var studentsTest2 = getStudentsByID(students);
console.log(studentsTest2[0].id === 42);
console.log(studentsTest2[1].id === 74);
console.log(studentsTest2[2].id === 86);
console.log(studentsTest2[3].id === 86);
