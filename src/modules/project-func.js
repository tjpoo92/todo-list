const addProjectButton =document.querySelector(".add-project")

addProjectButton.addEventListener("click", () => { 
	modal.style.display = "block";
	addProjectForm();
});

function displayProject(projectToDisplay) {

	const projectLabel = document.createElement("label")


	const projectInput = document.createElement("input")
		projectInput.setAttribute("type","radio")
		projectInput.setAttribute("name","radio-button")
		projectInput.checked= true;
		projectLabel.appendChild(projectInput)

	const projectDiv = document.createElement("div")
		projectLabel.appendChild(projectDiv)


	//TODO Randomize icon that will be showing
	// Put info in array then randomize index
	const projectInfo = function (classDef, text){
		const tempPara = document.createElement("p")
		tempPara.classList.add(classDef)
		tempPara.innerText = text
		projectDiv.appendChild(tempPara)
		
	};
	const pProjectText = new projectInfo("project",projectToDisplay.formInputText);

	sidebar.insertBefore(projectLabel, addProjectButton)
		console.table(projectArray)
	}