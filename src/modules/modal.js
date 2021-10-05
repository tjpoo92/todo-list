const span = document.querySelector("span");
const modal = document.querySelector(".add-modal");
const modalContent = document.querySelector(".modal-content") 

span.addEventListener("click", closeModal);

function closeModal(){
	modal.style.display = "none";
	clearForm();
};

function clearForm() {
	while (modalContent.hasChildNodes() && modalContent.lastChild !== span){
		modalContent.removeChild(modalContent.lastChild)
}}

