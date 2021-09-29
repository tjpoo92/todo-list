const modal = document.querySelector(".add-modal");
const addTaskButton = document.querySelector(".add-task")
const span = document.querySelector("span");
const addProjectButton =document.querySelector(".add-project")
const modalContent = document.querySelector(".modal-content")

addTaskButton.addEventListener("click", () => {
	modal.style.display = "block";
	addTask();
});

addProjectButton.addEventListener("click", () => {
	modal.style.display = "block";
	addProject();
});

span.addEventListener("click", () => {
	modal.style.display = "none";
	while (modalContent.hasChildNodes() && modalContent.lastChild !== span){
		modalContent.removeChild(modalContent.lastChild)
	}
});

const projects = document.querySelector(".fa-tasks");
const sidebar = document.querySelector(".side-bar");
const sidebarContent = document.querySelectorAll(".project");
const projectIcons = document.querySelectorAll(".i-project");
const subTask = document.querySelector("#sub-task");
const subTaskText = document.querySelector(".sub-task-text");

projects.addEventListener("click", () => {
	collapseSidebar();
	sidebar.classList.toggle("display");
});

function collapseSidebar() {
	if (sidebar.classList.contains("display")) {
		for (let i = 0; i < sidebarContent.length; i++) {
			sidebarContent[i].classList.add("hidden");
		}
		for (let j = 0; j < projectIcons.length; j++) {
			projectIcons[j].classList.add("center");
		}
	} else {
		for (let i = 0; i < sidebarContent.length; i++) {
			sidebarContent[i].classList.remove("hidden");
		}
		for (let j = 0; j < projectIcons.length; j++) {
			projectIcons[j].classList.remove("center");
		}
	}
}
// subTask.addEventListener("click", () => {
// 	if (subTask.checked == true) {
// 		subTaskText.style.textDecoration = "line-through";
// 	} else {
// 		subTaskText.style.textDecoration = "none";
// 	}
// });


const addTask = (() => {

const form = document.createElement("form");
	form.setAttribute("action", "#")
	form.classList.add("task-form")

const inputText = document.createElement("input")
	inputText.setAttribute("type","text")
	inputText.setAttribute("name","task-name")
	inputText.setAttribute("id","task-name")
	inputText.setAttribute("placeholder","Task Name")
	inputText.setAttribute("autocomplete","off")
	inputText.setAttribute("required", "true")
	form.appendChild(inputText)

const textarea = document.createElement("textarea")
	textarea.setAttribute("name","task-description")
	textarea.setAttribute("id","task-description")
	textarea.setAttribute("row","4")
	textarea.setAttribute("placeholder","Task Description")
	form.appendChild(textarea)

const br = document.createElement("br")
	form.appendChild(br)

const inputDate = document.createElement("input")
	inputDate.setAttribute("type","date")
	inputDate.setAttribute("name","due-date")
	inputDate.setAttribute("id","due-date")
	inputDate.setAttribute("required", "true")
	form.appendChild(inputDate)

const select = document.createElement("select")
	select.setAttribute("name", "priority")
	select.setAttribute("id","priority")
	form.appendChild(select)

const optionLow = document.createElement("option")
	optionLow.setAttribute("value","low")
	optionLow.innerText= "Low";
	select.appendChild(optionLow)

const optionMed = document.createElement("option")
	optionLow.setAttribute("value","medium")
	optionLow.innerText= "Medium";
	select.appendChild(optionMed)

const optionHigh = document.createElement("option")
	optionLow.setAttribute("value","high")
	optionLow.innerText= "High";
	select.appendChild(optionHigh)

const button = document.createElement("button")
	button.setAttribute("type","button")
	button.classList.add("center")
	button.innerText="Submit"
	form.appendChild(button)

modalContent.appendChild(form);
});


const addProject = (() => {

const form = document.createElement("form");
	form.setAttribute("action", "#")
	form.classList.add("project-form")
	
const inputText = document.createElement("input")
	inputText.setAttribute("type","text")
	inputText.setAttribute("name","project-name")
	inputText.setAttribute("id","project-name")
	inputText.setAttribute("placeholder","Project Name")
	inputText.setAttribute("autocomplete","off")
	inputText.setAttribute("required", "true")
	form.appendChild(inputText)
		
const button = document.createElement("button")
	button.setAttribute("type","button")
	button.classList.add("center")
	button.innerText="Submit"
	form.appendChild(button)
			
modalContent.appendChild(form);
});