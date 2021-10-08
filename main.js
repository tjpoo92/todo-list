// // TODO Form submission, previously have grabbed with queryselector.value (see Library project)
// // Then created an object (would use factory function)
// // Pushed object onto an array and displayed array


// const modal = document.querySelector(".add-modal"); //moved to modal.js
// const addTaskButton = document.querySelector(".add-task") //moved to task-func.js
// const span = document.querySelector("span"); //moved to modal.js
// const addProjectButton =document.querySelector(".add-project") //moved to project-func.js
// const modalContent = document.querySelector(".modal-content") //moved to modal.js
// const content = document.querySelector(".content") //moved to task-func.js


// addTaskButton.addEventListener("click", () => { //moved to task-func.js
// 	modal.style.display = "block";
// 	addTaskForm();
// });

// addProjectButton.addEventListener("click", () => { //moved to project-func.js
// 	modal.style.display = "block";
// 	addProjectForm();
// });

// span.addEventListener("click", closeModal); //moved to modal.js

// function closeModal(){ //moved to modal.js
// 	modal.style.display = "none";
// 	clearForm();
// }; 

// function clearForm() { //moved to modal.js
// 	while (modalContent.hasChildNodes() && modalContent.lastChild !== span){
// 		modalContent.removeChild(modalContent.lastChild)
// }}

// const projects = document.querySelector(".fa-tasks"); //moved to side-bar-func.js
// const sidebar = document.querySelector(".side-bar"); //moved to side-bar-func.js
// const sidebarContent = document.querySelectorAll(".project"); //moved to side-bar-func.js
// const projectIcons = document.querySelectorAll(".i-project"); //moved to side-bar-func.js


// projects.addEventListener("click", () => { //moved to side-bar-func.js
// 	collapseSidebar();
// 	sidebar.classList.toggle("display");
// });

// function collapseSidebar() { //moved to side-bar-func.js
// 	if (sidebar.classList.contains("display")) {
// 		for (let i = 0; i < sidebarContent.length; i++) {
// 			sidebarContent[i].classList.add("hidden");
// 		}
// 		for (let j = 0; j < projectIcons.length; j++) {
// 			projectIcons[j].classList.add("center");
// 		}
// 	} else {
// 		for (let i = 0; i < sidebarContent.length; i++) {
// 			sidebarContent[i].classList.remove("hidden");
// 		}
// 		for (let j = 0; j < projectIcons.length; j++) {
// 			projectIcons[j].classList.remove("center");
// 		}
// 	}
// }


// let taskArray = []; //moved to add-task.js

// const addTaskForm = (() => { //moved to add-task.js

// const form = document.createElement("form");
// 	form.setAttribute("action", "#")
// 	form.classList.add("task-form")

// const inputText = document.createElement("input")
// 	inputText.setAttribute("type","text")
// 	inputText.setAttribute("name","task-name")
// 	inputText.setAttribute("id","task-name")
// 	inputText.setAttribute("placeholder","Task Name")
// 	inputText.setAttribute("autocomplete","off")
// 	inputText.required = true;
// 	form.appendChild(inputText)

// const textarea = document.createElement("textarea")
// 	textarea.setAttribute("name","task-description")
// 	textarea.setAttribute("id","task-description")
// 	textarea.setAttribute("row","4")
// 	textarea.setAttribute("placeholder","Task Description")
// 	form.appendChild(textarea)

// const br = document.createElement("br")
// 	form.appendChild(br)

// const inputDate = document.createElement("input")
// 	inputDate.setAttribute("type","date")
// 	inputDate.setAttribute("name","due-date")
// 	inputDate.setAttribute("id","due-date")
// 	inputDate.required = true;
// 	form.appendChild(inputDate)

// const select = document.createElement("select")
// 	select.setAttribute("name", "priority")
// 	select.setAttribute("id","priority")
// 	form.appendChild(select)

// const Selector = function (priority){
// 	const tempOption = document.createElement("option")
// 	tempOption.setAttribute = () => ("value", priority)
// 	tempOption.innerText= priority
// 	select.appendChild(tempOption)
	
// };
// const optionLow = new Selector("Low");
// const optionMed = new Selector("Medium");
// const optionHigh = new Selector("High");

// const button = document.createElement("button")
// 	button.setAttribute("type","submit")
// 	button.classList.add("center")
// 	button.innerText="Submit"
// 	button.classList.add("submit-add-task")
// 	form.appendChild(button)

// modalContent.appendChild(form);

// form.addEventListener("submit", (event)=> {
// 	submitAddTaskForm()
// 	event.preventDefault()
// 	closeModal()
// 	displayTask(taskArray[taskArray.length == 0 ? 0 : taskArray.length - 1])
// })
// form.removeEventListener("submit", (event)=> {
// 	submitAddTaskForm()
// 	event.preventDefault()
// 	closeModal()
// 	displayTask(taskArray[taskArray.length == 0 ? 0 : taskArray.length - 1])
// })
// });

// function displayTask(taskToDisplay) { //moved to task-func.js


// 	const subTaskDiv = document.createElement("div")
// 	subTaskDiv.classList.add("sub-task")

// 	const checkBox = document.createElement("input")
// 	checkBox.setAttribute("type","checkbox")
// 	checkBox.setAttribute("name","sub-task")
// 	// remove if not needed, shouldn't be using ID on generic created node
// 	// checkBox.setAttribute("id","sub-task")
// 	subTaskDiv.appendChild(checkBox)

// 	const subTaskInfo = function (classDef, text){
// 		const tempPara = document.createElement("p")
// 		tempPara.classList.add(classDef)
// 		tempPara.innerText= text
// 		subTaskDiv.appendChild(tempPara)
		
// 	};
// 	const pTaskText = new subTaskInfo("sub-task-text",taskToDisplay.formInputText);
// 	const pTaskDueDate = new subTaskInfo("sub-task-due-date",taskToDisplay.formDueDate);

// 	const ellipsis = document.createElement("i")
// 	ellipsis.classList.add("fas","fa-ellipsis-h","options")
// 	subTaskDiv.appendChild(ellipsis)

// 	const trashCan = document.createElement("i")
// 	trashCan.classList.add("fas","fa-trash-alt","trash")
// 	subTaskDiv.appendChild(trashCan)

// 	content.appendChild(subTaskDiv)

// 	const subTaskDesc = document.createElement("div")
// 	subTaskDesc.classList.add("sub-task-description")
// 	content.appendChild(subTaskDesc)

// 	const descP = document.createElement("p")
// 	descP.innerText = taskToDisplay.formTextArea
// 	subTaskDesc.appendChild(descP)

// 	// TODO GET THIS SHIT WORKING, UNDERLINING
// 	// refactor into own function, add trash and setting functionality
// 	// const subTask = document.querySelectorAll(".sub-task");
// 	// const subTaskText = document.querySelectorAll(".sub-task-text");
// 	// for (let i = 0; i < subTask.length; i++) {
// 	// 	subTask[i].addEventListener("click", () => {
// 	// 		console.log(subTask[i])
// 	// if (subTask[i].checked == true) {
// 	// 		subTaskText[i].style.textDecoration = "line-through";
// 	// 	} else {
// 	// 		subTaskText[i].style.textDecoration = "none";
// 	// 	}
// 	// 	});
		
// 	}

	
	


// function submitAddTaskForm() { //moved to add-task.js
	
// const formInputText = document.querySelector("#task-name").value;
// const formTextArea = document.querySelector("#task-description").value;
// const formDueDate = document.querySelector("#due-date").value;
// const formPriority = document.querySelector("#priority").value;

// const addTaskFactory = (formInputText, formTextArea, formDueDate, formPriority) => {
// 	return {formInputText, formTextArea, formDueDate, formPriority}
// }

// const newTask = addTaskFactory(formInputText, formTextArea, formDueDate,formPriority)

// return taskArray.push(newTask)
// }

// let projectArray = [{formInputText: "Default"}] //moved to add-project.js

// const addProjectForm = (() => { //moved to add-project.js

// const form = document.createElement("form");
// 	form.setAttribute("action", "#")
// 	form.classList.add("project-form")
	
// const inputText = document.createElement("input")
// 	inputText.setAttribute("type","text")
// 	inputText.setAttribute("name","project-name")
// 	inputText.setAttribute("id","project-name")
// 	inputText.setAttribute("placeholder","Project Name")
// 	inputText.setAttribute("autocomplete","off")
// 	inputText.setAttribute("required", "true")
// 	form.appendChild(inputText)
		
// const button = document.createElement("button")
// 	button.setAttribute("type","submit")
// 	button.classList.add("center")
// 	button.innerText="Submit"
// 	button.classList.add("submit-add-project")
// 	form.appendChild(button)
			
// modalContent.appendChild(form);

// form.addEventListener("submit", (event)=> {
// 	submitAddProjectForm()
// 	event.preventDefault()
// 	closeModal()
// 	displayProject(projectArray[projectArray.length == 0 ? 0 : projectArray.length - 1])
// })
// });

// function submitAddProjectForm() { //moved to add-project.js
// 	const formInputText = document.querySelector("#project-name").value;
	
// 	const addProjectFactory = (formInputText) => {
// 		return {formInputText}
// 	}

// 	const newProject = addProjectFactory(formInputText)

// 	return projectArray.push(newProject)
// }


// function displayProject(projectToDisplay) { //moved to project-func.js

// 	const projectLabel = document.createElement("label")


// 	const projectInput = document.createElement("input")
// 		projectInput.setAttribute("type","radio")
// 		projectInput.setAttribute("name","radio-button")
// 		projectInput.checked= true;
// 		projectLabel.appendChild(projectInput)

// 	const projectDiv = document.createElement("div")
// 		projectLabel.appendChild(projectDiv)


// 	//TODO Randomize icon that will be showing
// 	// Put info in array then randomize index
// 	const projectInfo = function (classDef, text){
// 		const tempPara = document.createElement("p")
// 		tempPara.classList.add(classDef)
// 		tempPara.innerText = text
// 		projectDiv.appendChild(tempPara)
		
// 	};
// 	const pProjectText = new projectInfo("project",projectToDisplay.formInputText);

// 	sidebar.insertBefore(projectLabel, addProjectButton)
// 		console.table(projectArray)
// 	}



