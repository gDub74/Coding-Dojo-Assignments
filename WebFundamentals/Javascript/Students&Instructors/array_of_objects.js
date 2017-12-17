'use strict';

//given an array of objects create a program that outputs: 
//Michael Jordan 
//John Rosales
//Mark Guillen 
//KB Tonel

console.log('part one:')
var students = [ 
    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
]

for (var i=0; i<students.length; i++){
    console.log(students[i].first_name, students[i].last_name);
}



//part 2: given the following dictionary: 
//create a program that prints the following format (including the number of characters combined in each name);
// Students
//1 - MICHAEL JORDAN - 13
//2 - JOHN ROSALES - 11
//3 - MARK GUILLEN - 11
//4 - KB TONEL - 7
//Instructors
//1 - MICHAEL CHOI - 11
//2 - MARTIN PURYEAR - 13


console.log('part two:')
function studentsInstructors(){
    var users = {
        'Students': [ 
            {first_name:  'Michael', last_name : 'Jordan'},
            {first_name : 'John', last_name : 'Rosales'},
            {first_name : 'Mark', last_name : 'Guillen'},
            {first_name : 'KB', last_name : 'Tonel'}
            ],
        'Instructors': [
            {first_name : 'Michael', last_name : 'Choi'},
            {first_name : 'Martin', last_name : 'Puryear'}
            ]
        }
    console.log('Students');     
    for (var i=0;i < users.Students.length; i++){
        var studentNum = 1;
        console.log(studentNum, '-', users.Students[i].first_name, users.Students[i].last_name, '-', users.Students[i].first_name.length+users.Students[i].last_name.length);
        studentNum++;
    }

    console.log('Instructors');
    for (var j=0; j < users.Instructors.length; j++){
        var instrustorNum = 1;
        console.log(instrustorNum, '-', users.Instructors[j].first_name, users.Instructors[j].last_name, '-', users.Instructors[j].first_name.length+users.Instructors[j].last_name.length);
        instrustorNum++;
    }
}

studentsInstructors();


var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
     ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
     ]
    }
   function printThings(){
       for (var group in users) {
           console.log(group)
           for (var i = 0; i < users[group].length; i++) { //users["students"] -> users.students
               var fullname = users[group][i].first_name + users[group].last_name
               console.log(`${i} - ${users[group][i].first_name} ${users[group][i].last_name} - ${fullname.length}`)
           }
       }
   }
   printThings();