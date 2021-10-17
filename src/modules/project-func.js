import { addProjectButton, sidebar } from "../index.js";
import { clearContent, displayTask } from "./task-func.js";
import { taskArray } from "./task-form.js";

function displayProject(projectToDisplay) {
	const projectLabel = document.createElement("label");

	const projectInput = document.createElement("input");
	projectInput.setAttribute("type", "radio");
	projectInput.setAttribute("name", "radio-button");
	projectInput.checked = true;
	projectLabel.appendChild(projectInput);

	const projectDiv = document.createElement("div");

	projectLabel.appendChild(projectDiv);

	//TODO Randomize icon that will be showing
	// Put info in array then randomize index
	const projectInfo = function (classDef, text) {
		const tempPara = document.createElement("p");
		tempPara.classList.add(classDef);
		tempPara.innerText = text;
		projectDiv.appendChild(tempPara);
		projectDiv.addEventListener("click", () => {
			// let currentSelected = "TEXT";
			displayTask(taskArray, "TEXT");
		});
	};
	const pProjectText = new projectInfo("project", `${projectToDisplay}`);

	sidebar.insertBefore(projectLabel, addProjectButton);

	clearContent();
}

export { displayProject };
