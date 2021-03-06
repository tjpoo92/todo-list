import { addProjectForm } from "./modules/project-form.js";
import { addTaskForm } from "./modules/task-form.js";
import { modal } from "./modules/modal.js";
import { collapseSidebar } from "./modules/navbar-func.js";
import { displayTask, clearContent } from "./modules/task-func.js";
import { loadLocalStorage, taskArray } from "./modules/local-storage.js";
import { clearSideBar } from "./modules/project-func.js";

const addProjectButton = document.querySelector(".add-project");
const content = document.querySelector(".content");

addProjectButton.addEventListener("click", () => {
	modal.style.display = "block";
	addProjectForm();
});

const addTaskButton = document.querySelector(".add-task");

addTaskButton.addEventListener("click", () => {
	modal.style.display = "block";
	addTaskForm();
});

const defaultProject = document.querySelector("#default");
defaultProject.addEventListener("click", () => {
	clearContent();
	displayTask(taskArray, "Default");
});

const projects = document.querySelector(".fa-tasks");
const sidebar = document.querySelector(".side-bar");

projects.addEventListener("click", () => {
	collapseSidebar();
	sidebar.classList.toggle("display");
});

loadLocalStorage();

export { addProjectButton, content, sidebar };
