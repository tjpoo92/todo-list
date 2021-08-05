const modal = document.querySelector(".add-task-modal");

const btn = document.querySelector("button");

const span = document.querySelector("span");

btn.addEventListener("click", () => {
	modal.style.display = "block";
});

span.addEventListener("click", () => {
	modal.style.display = "none";
});

window.addEventListener("click", (event) => {
	if (event.target == modal) modal.style.display = "none";
});

const projects = document.querySelector(".fa-tasks");
const sidebar = document.querySelector(".side-bar");
const sidebarContent = document.querySelectorAll(".project");
const projectIcons = document.querySelectorAll(".i-project");
const subTask = document.querySelector("#sub-task");
const subTaskText = document.querySelector(".sub-task-text");

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
subTask.addEventListener("click", () => {
	if (subTask.checked == true) {
		subTaskText.style.textDecoration = "line-through";
	} else {
		subTaskText.style.textDecoration = "none";
	}
});
