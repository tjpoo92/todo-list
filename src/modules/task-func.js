import { addTaskForm } from "./task-form.js";


function displayTask(taskToDisplay) {

	const content = document.querySelector(".content")
	const subTaskDiv = document.createElement("div")
	subTaskDiv.classList.add("sub-task")

	const checkBox = document.createElement("input")
	checkBox.setAttribute("type","checkbox")
	checkBox.setAttribute("name","sub-task")
	// remove if not needed, shouldn't be using ID on generic created node
	// checkBox.setAttribute("id","sub-task")
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
	descP.innerText = taskToDisplay.formTextArea
	subTaskDesc.appendChild(descP)

	// TODO GET THIS SHIT WORKING, UNDERLINING
	// refactor into own function, add trash and setting functionality
	// const subTask = document.querySelectorAll(".sub-task");
	// const subTaskText = document.querySelectorAll(".sub-task-text");
	// for (let i = 0; i < subTask.length; i++) {
	// 	subTask[i].addEventListener("click", () => {
	// 		console.log(subTask[i])
	// if (subTask[i].checked == true) {
	// 		subTaskText[i].style.textDecoration = "line-through";
	// 	} else {
	// 		subTaskText[i].style.textDecoration = "none";
	// 	}
	// 	});
		
	}
	export{displayTask}