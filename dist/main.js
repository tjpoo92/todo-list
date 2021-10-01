// TODO Form submission, previously have grabbed with queryselector.value (see Library project)
// Then created an object (would use factory function)
// Pushed object onto an array and displayed array


const modal = document.querySelector(".add-modal");
const addTaskButton = document.querySelector(".add-task")
const span = document.querySelector("span");
const addProjectButton =document.querySelector(".add-project")
const modalContent = document.querySelector(".modal-content")
const content = document.querySelector(".content")


addTaskButton.addEventListener("click", () => {
	modal.style.display = "block";
	addTaskForm();
	
});

addProjectButton.addEventListener("click", () => {
	modal.style.display = "block";
	addProjectForm();
});

span.addEventListener("click", closeModal);

function closeModal(){
	modal.style.display = "none";
	// FIXME: clearForm function
	while (modalContent.hasChildNodes() && modalContent.lastChild !== span){
		modalContent.removeChild(modalContent.lastChild)
}}

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

let taskArray = [];

const addTaskForm = (() => {

const form = document.createElement("form");
	form.setAttribute("action", "#")
	form.classList.add("task-form")

const inputText = document.createElement("input")
	inputText.setAttribute("type","text")
	inputText.setAttribute("name","task-name")
	inputText.setAttribute("id","task-name")
	inputText.setAttribute("placeholder","Task Name")
	inputText.setAttribute("autocomplete","off")
	inputText.required = true;
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
	inputDate.required = true;
	form.appendChild(inputDate)

const select = document.createElement("select")
	select.setAttribute("name", "priority")
	select.setAttribute("id","priority")
	form.appendChild(select)

const Selector = function (priority){
	const tempOption = document.createElement("option")
	tempOption.setAttribute = ()=>("value", priority)
	tempOption.innerText= priority
	select.appendChild(tempOption)
	
};
const optionLow = new Selector("Low");
const optionMed = new Selector("Medium");
const optionHigh = new Selector("High");

const button = document.createElement("button")
	button.setAttribute("type","submit")
	button.classList.add("center")
	button.innerText="Submit"
	button.classList.add("submit-add-task")
	form.appendChild(button)

modalContent.appendChild(form);

form.addEventListener("submit", (event)=> {
	submitAddTaskForm()
	event.preventDefault()
	closeModal()
	displayTask(taskArray[taskArray.length == 0 ? 0 : taskArray.length - 1])
})
});
function displayTask(taskToDisplay) {


	const subTaskDiv = document.createElement("div")
	subTaskDiv.classList.add("sub-task")

	const checkBox = document.createElement("input")
	checkBox.setAttribute("type","checkbox")
	checkBox.setAttribute("name","sub-task")
	checkBox.setAttribute("id","sub-task")
	subTaskDiv.appendChild(checkBox)

	const subTaskInfo = function (classDef, text){
		const tempPara = document.createElement("p")
		tempPara.classList.add(classDef)
		tempPara.innerText= text
		subTaskDiv.appendChild(tempPara)
		
	};
	const pTaskText = new subTaskInfo("sub-task-text",taskToDisplay.formInputText);
	const pTaskDueDate = new subTaskInfo("sub-task-due-date",taskToDisplay.formDueDate);

	const ellipsis = document.createElement("i")
	ellipsis.classList.add("fas","fa-ellipsis-h","options")
	subTaskDiv.appendChild(ellipsis)

	const trashCan = document.createElement("i")
	trashCan.classList.add("fas","fa-trash-alt","trash")
	subTaskDiv.appendChild(trashCan)

	content.appendChild(subTaskDiv)

	const subTaskDesc = document.createElement("div")
	subTaskDesc.classList.add("sub-task-description")
	content.appendChild(subTaskDesc)

	const descP = document.createElement("p")
	descP.innerText =taskToDisplay.formTextArea
	subTaskDesc.appendChild(descP)


}

function submitAddTaskForm() {
	
const formInputText = document.querySelector("#task-name").value;
const formTextArea = document.querySelector("#task-description").value;
const formDueDate = document.querySelector("#due-date").value;
const formPriority = document.querySelector("#priority").value;

const addTaskFactory = (formInputText, formTextArea, formDueDate, formPriority) => {
	return {formInputText, formTextArea, formDueDate, formPriority}
}

const newTask = addTaskFactory(formInputText, formTextArea, formDueDate,formPriority)

return taskArray.push(newTask)
}

const addProjectForm = (() => {

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
	button.classList.add("submit-add-project")
	form.appendChild(button)
			
modalContent.appendChild(form);
});