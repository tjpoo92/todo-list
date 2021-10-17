import { addProjectForm } from "./modules/project-form.js";
import { addTaskForm } from "./modules/task-form.js";
import { modal } from "./modules/modal.js";
import { collapseSidebar } from "./modules/navbar-func.js";

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

const projects = document.querySelector(".fa-tasks");
const sidebar = document.querySelector(".side-bar");

projects.addEventListener("click", () => {
	collapseSidebar();
	sidebar.classList.toggle("display");
});

export { addProjectButton, content, sidebar };
