let numStudents = 0;
let students = []; 
const theStudent = 
{
    number:"0",
    question:""
}

function addStudent() {
    const theStudent = new Object();
    theStudent.number = numStudents;

    const studentList = document.querySelector('#main-page');

    const student = document.createElement('div'); //the main div for the student
    student.classList.add('student');

    const name = document.createElement('div'); 
    name.classList.add('student-info');
    name.textContent = "Student Name"; 

    const question = document.createElement('div');
    question.classList.add('question');
    question.textContent = "Question will go here";
    theStudent.question = question.textContent;

    console.log(theStudent.number);
    console.log(theStudent.question);
    students.push(theStudent);

    name.appendChild(question); //adds the question child to the name div

    student.appendChild(name); //adds the student name with the question child to the main student div

    const buttons = document.createElement('span'); //creates the span for the buttons
    buttons.classList.add('buttons');

    const responseButton = document.createElement('button');

    responseButton.classList.add('btn', 'btn-primary', 'response-btn');
    responseButton.type = "submit";
    responseButton.id = numStudents;
    responseButton.textContent = "Give Answer";
    responseButton.onclick = makeModal;

    buttons.appendChild(responseButton);

    student.appendChild(buttons);//adds buttons to the student div
    

    studentList.appendChild(student);
    ++numStudents;
}

function setName(){
    const userName = document.querySelector('#teacherName');
    userName.textContent = "Welcome " + localStorage.getItem('teacherName');
}

function makeModal(clicked_id){
    const num = clicked_id;
    console.log(num);
    const modal = document.getElementById("theModal");
    modal.style.display = "block";
    const question = students[0].question;
    console.log(question);
}

function closeModal(){
    const modal = document.getElementById("theModal");
    modal.style.display = "none";
}

setName();