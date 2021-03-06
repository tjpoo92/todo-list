import { addProjectButton, sidebar } from "../index.js";
import { clearContent, displayTask } from "./task-func.js";
import { projectArray, taskArray } from "./local-storage";

let i = 0;

function clearSideBar() {
	const sidebarNodes = document.querySelectorAll("label");
	console.log(sidebarNodes);
	for (let i = 1; i < sidebarNodes.length; i++) {
		sidebar.removeChild(sidebarNodes[i]);
	}
	return sidebar;
}

function displayProject(projectToDisplay) {
	clearSideBar();
	const iconArray = [
		"fa-apple-alt",
		"fa-store-alt",
		"fa-tree",
		"fa-chess-king",
		"fa-feather-alt",
		"fa-cat",
		"fa-chess-queen",
		"fa-code",
		"fa-dice-d6",
		"fa-gem",
		"fa-ice-cream",
		"fa-plane",
		"fa-rocket",
		"fa-wrench",
		"fa-book",
		"fa-dog",
		"fa-calendar-alt",
		"fa-wallet",
		"fa-atom",
		"fa-bomb",
		"fa-bolt",
		"fa-spa",
		"fa-paper-plane",
		"fa-marker",
	];
	console.log(projectToDisplay);
	projectToDisplay.forEach((element) => {
		if (element == "Default") {
			return;
		} else {
			const projectLabel = document.createElement("label");

			const projectInput = document.createElement("input");
			projectInput.setAttribute("type", "radio");
			projectInput.setAttribute("name", "radio-button");
			projectInput.checked = true;
			projectLabel.appendChild(projectInput);

			const projectDiv = document.createElement("div");

			projectLabel.appendChild(projectDiv);
			const projectIcon = document.createElement("i");

			const selectedIcon = iconSelector();
			function iconSelector() {
				if (i < 25) {
					i++;
					return iconArray[i];
				} else {
					return (i = 0);
				}
			}
			projectIcon.classList.add("fas");
			projectIcon.classList.add(`${selectedIcon}`);
			projectIcon.classList.add("i-project");
			projectDiv.appendChild(projectIcon);
			const projectInfo = function (classDef, text) {
				const tempPara = document.createElement("p");
				tempPara.classList.add(classDef);
				tempPara.innerText = text;
				projectDiv.appendChild(tempPara);
				projectDiv.addEventListener("click", () => {
					let currentSelected = element;
					displayTask(taskArray, currentSelected);
				});
			};
			const pProjectText = new projectInfo("project", `${element}`);

			sidebar.insertBefore(projectLabel, addProjectButton);
		}
		clearContent();
	});
}

export { displayProject, clearSideBar };
