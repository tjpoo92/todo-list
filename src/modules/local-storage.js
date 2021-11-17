import { taskArray } from "./task-form";
import { displayTask } from "./task-func";

function loadLocalStorage() {
	let tempTaskArray = JSON.parse(localStorage.getItem("taskArray"));
	if (tempTaskArray == null) {
		return;
	} else {
		displayTask(tempTaskArray, "Default");
	}
}

function saveToLocalStorage() {
	localStorage.setItem("taskArray", JSON.stringify(taskArray));
}

export { loadLocalStorage, saveToLocalStorage };
