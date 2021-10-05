const projects = document.querySelector(".fa-tasks");
const sidebar = document.querySelector(".side-bar");

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