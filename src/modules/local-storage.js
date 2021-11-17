import { displayTask } from "./task-func";

let taskArray;

function loadLocalStorage() {
	taskArray = JSON.parse(localStorage.getItem("taskArray"));
	if (taskArray == null) {
		taskArray = [];
	} else {
		displayTask(taskArray, "Default");
	}
}

function saveToLocalStorage() {
	localStorage.setItem("taskArray", JSON.stringify(taskArray));
}

export { loadLocalStorage, saveToLocalStorage, taskArray };
