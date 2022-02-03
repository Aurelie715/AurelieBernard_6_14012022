//Mettre le code JavaScript lié à la page photographer.html
const params = new URL(document.location).searchParams;
const id = parseInt(params.get("id"));

async function getPhotographer(id) {
  const response = await fetch("/data/photographers.json");
  const data = await response.json();
  return data.photographers.find((photographer) => photographer.id === id);
}

async function displayData() {
    const photographer = await getPhotographer(id);
    // const photographerHeader = document.querySelector(".photograph-header");
    // const photographerModel = photographerFactory(photographer);
    // const userCardDOM = photographerModel.getUserCardDOM();
    // photographerHeader.appendChild(userCardDOM);
    console.log(photographer);
}


displayData();
