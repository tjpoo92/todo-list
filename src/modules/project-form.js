import { closeModal, modalContent } from "./modal.js";
import { displayProject } from "./project-func.js";

let projectArray = ["Default"];

function submitAddProjectForm() {
	const formInputText = document.querySelector("#project-name").value;

	const addProjectFactory = (formInputText) => {
		const tempValue = formInputText
		return tempValue;
	};

	const newProject = addProjectFactory(formInputText);

	projectArray.push(newProject)
	
	return console.log(projectArray);
}

const addProjectForm = () => {
	const form = document.createElement("form");
	form.setAttribute("action", "#");
	form.classList.add("project-form");

	const inputText = document.createElement("input");
	inputText.setAttribute("type", "text");
	inputText.setAttribute("name", "project-name");
	inputText.setAttribute("id", "project-name");
	inputText.setAttribute("placeholder", "Project Name");
	inputText.setAttribute("autocomplete", "off");
	inputText.setAttribute("required", "true");
	form.appendChild(inputText);

	const button = document.createElement("button");
	button.setAttribute("type", "submit");
	button.classList.add("center");
	button.innerText = "Submit";
	button.classList.add("submit-add-project");
	form.appendChild(button);

	modalContent.appendChild(form);

	form.addEventListener("submit", (event) => {
		submitAddProjectForm();
		event.preventDefault();
		closeModal();
		displayProject(
			projectArray[projectArray.length - 1]
		);
	});
};

export { addProjectForm };
