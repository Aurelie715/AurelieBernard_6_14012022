const backgroundForm = document.querySelector(".background-modal");
const modal = document.getElementById("contact_modal");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const message = document.getElementById("message");
const send = document.querySelector(".contact_button");
const form = document.querySelector("form");

async function getPhotographers() {
  const response = await fetch("./data/photographers.json");
  return await response.json();
}

async function displayData() {
  const data = await getPhotographers();
  const photographer = data.photographers.find(
    (photographer) => photographer.id === id
  );

  displayPhName(photographer)
}

function displayPhName() {
    const name = document.querySelector(".photographer-info > h2");
    document.querySelector(".modal-title").innerHTML = `Contactez-moi <br> ${name.textContent}`;
}


function displayModal() {
  modal.style.display = "block";
  backgroundForm.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
  backgroundForm.style.display = "none";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log(firstName.value);
  console.log(lastName.value);
  console.log(email.value);
  console.log(message.value);
});

displayData()
