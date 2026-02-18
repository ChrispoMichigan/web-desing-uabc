// tomar elementos del DOM
const todoInputPersonal = document.getElementById("inputTextPersonal");
const addTaskBtnPersonal = document.getElementById("addBtnPersonal");
const taskListPersonal = document.getElementById("taskListPersonal");
const taskErrorPersonal = document.getElementById("taskErrorPersonal");

const todoInputProfessional = document.getElementById("inputTextProfessional");
const addTaskBtnProfessional = document.getElementById("addBtnProfessional");
const taskListProfessional = document.getElementById("taskListProfessional");
const taskErrorProfessional = document.getElementById("taskErrorProfessional");

function isValidation(task, errorContainer){
    let validation = true; // variable
    errorContainer.textContent="";
    if(task === ""){
        validation=false;
        //alert("Hey! you need to add a task");
        errorContainer.textContent="The field must not be empty!";
    }
    return validation;
}

function registerPersonal(){
    let task = todoInputPersonal.value;//getting the value

    if(isValidation(task, taskErrorPersonal)){
        //create the HTML
        let li = document.createElement("li");
        li.innerHTML = `${task}`;
        taskListPersonal.appendChild(li);
        todoInputPersonal.value=""; // clear the input
    }    
}

function registerProfessional(){
    let task = todoInputProfessional.value;//getting the value

    if(isValidation(task, taskErrorProfessional)){
        //create the HTML
        let li = document.createElement("li");
        li.innerHTML = `${task}`;
        taskListProfessional.appendChild(li);
        todoInputProfessional.value=""; // clear the input
    }    
}

function init(){
    // event handler
    addTaskBtnPersonal.addEventListener('click', registerPersonal);

    addTaskBtnProfessional.addEventListener('click', registerProfessional);
    
}

window.onload = init; // wait to render the HTML
