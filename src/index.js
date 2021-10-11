import { addProjectForm } from "./modules/project-form.js";
import { addTaskForm } from "./modules/task-form.js";
import { modal } from "./modules/modal.js";

const addProjectButton = document.querySelector(".add-project");

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
const projectIcons = document.querySelectorAll(".i-project");
const sidebarContent = document.querySelectorAll(".project");

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

export { sidebar, addProjectButton };
