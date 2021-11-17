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
	clearContent();
	taskToDisplay.forEach((element) => {
		if (element.projectSelected == currentSelected) {
			const subTaskDiv = document.createElement("div");
			subTaskDiv.classList.add("sub-task");

			const checkBox = document.createElement("input");
			checkBox.setAttribute("type", "checkbox");
			checkBox.setAttribute("name", "sub-task");
			checkBox.addEventListener("click", changeStatus);
			subTaskDiv.appendChild(checkBox);

			function changeStatus() {
				const selectedItem = taskToDisplay
					.map((x) => x.UUID)
					.indexOf(element.UUID);
				if (taskToDisplay[selectedItem].completedStatus == "false") {
					taskToDisplay[selectedItem].completedStatus = "true";
					// saveToLocalStorage();
					lineThrough();
				} else if (taskToDisplay[selectedItem].completedStatus == "true") {
					taskToDisplay[selectedItem].completedStatus = "false";
					// saveToLocalStorage();
					lineThrough();
				}
			}

			function lineThrough() {
				let tempTaskText = document.querySelectorAll(".sub-task-text");
				let tempTaskDueDate = document.querySelectorAll(".sub-task-due-date");
				let tempTaskDescription = document.querySelectorAll(
					".sub-task-description"
				);
				let tempCheckBox = document.querySelectorAll('input[type="checkbox"]');
				for (let i = 0; i < taskToDisplay.length; i++) {
					if (taskToDisplay[i].completedStatus == "false") {
						if (tempCheckBox[i] == undefined) {
							return;
						}
						tempCheckBox[i].removeAttribute("checked");
						tempTaskText[i].style.textDecoration = "none";
						tempTaskDueDate[i].style.textDecoration = "none";
						tempTaskDescription[i].style.textDecoration = "none";
					} else if (taskToDisplay[i].completedStatus == "true") {
						if (tempCheckBox[i] == undefined) {
							return;
						}
						tempCheckBox[i].setAttribute("checked", null);
						tempTaskText[i].style.textDecoration = "line-through";
						tempTaskDueDate[i].style.textDecoration = "line-through";
						tempTaskDescription[i].style.textDecoration = "line-through";
					}
				}
			}

			const subTaskInfo = function (classDef, text) {
				const tempPara = document.createElement("p");
				tempPara.classList.add(classDef);
				tempPara.innerText = text;
				tempPara.style.backgroundColor = taskPriority();
				subTaskDiv.appendChild(tempPara);
			};

			function taskPriority() {
				switch (element.formPriority) {
					case "Low":
						return "#66ff66";
					case "Medium":
						return "#ffff66";
					case "High":
						return "#ff6666";
				}
			}
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
				modal.style.display = "block";
				addTaskForm(taskToDisplay[editItem]);
				deleteTask();
			}

			function deleteTask() {
				const deleteItem = taskToDisplay
					.map((x) => x.UUID)
					.indexOf(element.UUID);
				taskArray.splice(deleteItem, 1);
				displayTask(taskArray, currentSelected);
			}

			const trashCan = document.createElement("i");
			trashCan.classList.add("fas", "fa-trash-alt", "trash");
			trashCan.addEventListener("click", deleteTask);
			subTaskDiv.appendChild(trashCan);

			content.appendChild(subTaskDiv);

			const subTaskDesc = document.createElement("div");
			subTaskDesc.classList.add("sub-task-description");
			content.appendChild(subTaskDesc);

			const descP = document.createElement("p");
			descP.innerText = element.formTextArea;
			subTaskDesc.appendChild(descP);
			lineThrough();
		} else return;
	});
}

export { displayTask, clearContent };
