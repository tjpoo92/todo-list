import { closeModal, modalContent } from "./modal.js";
import { displayTask, clearContent } from "./task-func.js";
import format from "../../node_modules/date-fns/format";
import { taskArray } from "./local-storage";
import { parseISO } from "date-fns";
import { v1 as uuidv1 } from "uuid";

const addTaskForm = (taskObject) => {
	const form = document.createElement("form");
	form.setAttribute("action", "#");
	form.classList.add("task-form");

	const inputText = document.createElement("input");
	inputText.setAttribute("type", "text");
	inputText.setAttribute("name", "task-name");
	inputText.setAttribute("id", "task-name");
	inputText.setAttribute("placeholder", "Task Name");
	inputText.setAttribute("autocomplete", "off");
	inputText.required = true;

	form.appendChild(inputText);

	const textarea = document.createElement("textarea");
	textarea.setAttribute("name", "task-description");
	textarea.setAttribute("id", "task-description");
	textarea.setAttribute("row", "4");
	textarea.setAttribute("placeholder", "Task Description");

	form.appendChild(textarea);

	const br = document.createElement("br");
	form.appendChild(br);

	const inputDate = document.createElement("input");
	inputDate.setAttribute("type", "date");
	inputDate.setAttribute("name", "due-date");
	inputDate.setAttribute("id", "due-date");
	inputDate.required = true;

	form.appendChild(inputDate);

	const select = document.createElement("select");
	select.setAttribute("name", "priority");
	select.setAttribute("id", "priority");
	form.appendChild(select);

	const Selector = function (priority) {
		const tempOption = document.createElement("option");
		tempOption.setAttribute = () => ("value", priority);
		tempOption.innerText = priority;
		select.appendChild(tempOption);
	};
	const optionLow = new Selector("Low");
	const optionMed = new Selector("Medium");
	const optionHigh = new Selector("High");

	const button = document.createElement("button");
	button.setAttribute("type", "submit");
	button.classList.add("center");
	button.innerText = "Submit";
	button.classList.add("submit-add-task");
	form.appendChild(button);

	modalContent.appendChild(form);

	form.addEventListener("submit", (event) => {
		const projectSelected = submitAddTaskForm();
		const taskToDisplay = projectSelected[1];
		const currentSelected = projectSelected[0];
		event.preventDefault();
		closeModal();
		clearContent();
		displayTask(taskToDisplay, currentSelected);
	});
	if (taskObject == undefined) {
		return;
	} else {
		inputText.value = taskObject.formInputText;
		textarea.value = taskObject.formTextArea;
	}
};

function submitAddTaskForm() {
	const formInputText = document.querySelector("#task-name").value;
	const formTextArea = document.querySelector("#task-description").value;
	const formDueDate = document.querySelector("#due-date").value;
	const formPriority = document.querySelector("#priority").value;
	const projectSelected = document.querySelector("input[type='radio']:checked")
		.nextElementSibling.lastElementChild.innerText;
	const formattedFormDueDate = format(parseISO(formDueDate), "MM-dd-uu");
	const completedStatus = "false";
	const addTaskFactory = (
		projectSelected,
		formInputText,
		formTextArea,
		formattedFormDueDate,
		formPriority,
		completedStatus,
		UUID
	) => {
		return {
			projectSelected,
			formInputText,
			formTextArea,
			formattedFormDueDate,
			formPriority,
			completedStatus,
			UUID,
		};
	};

	const newTask = addTaskFactory(
		projectSelected,
		formInputText,
		formTextArea,
		formattedFormDueDate,
		formPriority,
		completedStatus,
		uuidv1()
	);

	taskArray.push(newTask);

	return [projectSelected, taskArray];
}

export { addTaskForm };
