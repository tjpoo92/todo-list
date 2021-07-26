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
