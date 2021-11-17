import { displayTask } from "./task-func";
import { displayProject } from "./project-func";

let taskArray;
let projectArray;

function loadLocalStorage() {
	taskArray = JSON.parse(localStorage.getItem("taskArray"));
	projectArray = JSON.parse(localStorage.getItem("projectArray"));
	if (taskArray == null) {
		taskArray = [];
	} else {
		displayTask(taskArray, "Default");
	}
	if (projectArray == null) {
		projectArray = ["Default"];
	} else {
		displayProject(projectArray);
	}
}

function saveToLocalStorage() {
	localStorage.setItem("taskArray", JSON.stringify(taskArray));
	localStorage.setItem("projectArray", JSON.stringify(projectArray));
}

export { loadLocalStorage, saveToLocalStorage, taskArray, projectArray };
