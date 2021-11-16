import { addTaskForm, taskArray } from "./task-form.js";
import { content } from "../index.js";
import { modal } from "./modal.js";

function clearContent() {
	while (content.hasChildNodes()) {
		content.removeChild(content.firstChild);
	}
	return content;
}

function displayTask(taskToDisplay, currentSelected) {
	console.log(`Current selected is ${currentSelected}`);
	console.log("DISPLAY TASK IS BEING RAN");

	clearContent();
	taskToDisplay.forEach((element) => {
		if (element.projectSelected == currentSelected) {
			const subTaskDiv = document.createElement("div");
			subTaskDiv.classList.add("sub-task");

			const checkBox = document.createElement("input");
			checkBox.setAttribute("type", "checkbox");
			checkBox.setAttribute("name", "sub-task");
			subTaskDiv.appendChild(checkBox);

			const subTaskInfo = function (classDef, text) {
				const tempPara = document.createElement("p");
				tempPara.classList.add(classDef);
				tempPara.innerText = text;
				subTaskDiv.appendChild(tempPara);
			};
			const pTaskText = new subTaskInfo("sub-task-text", element.formInputText);
			const pTaskDueDate = new subTaskInfo(
				"sub-task-due-date",
				element.formattedFormDueDate
			);

			const ellipsis = document.createElement("i");
			ellipsis.classList.add("fas", "fa-ellipsis-h", "options");
			ellipsis.addEventListener("click", editTask);
			subTaskDiv.appendChild(ellipsis);

			function editTask() {
				const editItem = taskToDisplay.map((x) => x.UUID).indexOf(element.UUID);
				// TODO needs to call delete
				console.log("editTask is running!");
				modal.style.display = "block";
				addTaskForm(taskToDisplay[editItem]);
			}
			function deleteTask() {
				const deleteItem = taskToDisplay.map((x) => x.UUID).indexOf(element.UUID);
				console.log(deleteItem)
				taskArray.splice(deleteItem, 1);
				console.log(taskArray)
				console.log(currentSelected)
				displayTask(taskArray, currentSelected);
			}

			const trashCan = document.createElement("i");
			trashCan.classList.add("fas", "fa-trash-alt", "trash");
			trashCan.addEventListener(
				"click",
				deleteTask
			);
			subTaskDiv.appendChild(trashCan);

			content.appendChild(subTaskDiv);

			const subTaskDesc = document.createElement("div");
			subTaskDesc.classList.add("sub-task-description");
			content.appendChild(subTaskDesc);

			const descP = document.createElement("p");
			descP.innerText = element.formTextArea;
			subTaskDesc.appendChild(descP);

			// TODO GET THIS SHIT WORKING, LINE-THROUGH
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
		} else return;
	});
}



export { displayTask, clearContent };
