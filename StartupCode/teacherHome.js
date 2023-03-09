function addStudent() {
    const studentList = document.querySelector('#main-page');

    const student = document.createElement('div'); //the main div for the student
    student.classList.add('student');

    const name = document.createElement('div'); 
    name.classList.add('student-info');
    name.textContent = "Student Name"; 

    student.appendChild(name); //adds the student name to the main student div


    const buttons = document.createElement('span'); //creates the span for the buttons
    buttons.classList.add('buttons');

    const goodButton = document.createElement('button');
    const okayButton = document.createElement('button');
    const badButton = document.createElement('button');

    goodButton.classList.add('btn', 'circle', 'good');
    okayButton.classList.add('btn', 'circle', 'okay');
    badButton.classList.add('btn', 'circle', 'bad');

    buttons.appendChild(goodButton);
    buttons.appendChild(okayButton);
    buttons.appendChild(badButton);

    student.appendChild(buttons);//adds buttons to the student div
    

    studentList.appendChild(student);

}