const backgroundForm = document.querySelector(".background-form");

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    backgroundForm.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    backgroundForm.style.display = "none";
}
