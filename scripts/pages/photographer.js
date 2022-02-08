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
    const photographerModel = photographerFactory(photographer);
    const dataPhotographer = photographerModel.getDataForPagePhotographer();
    const photographerInfos = dataPhotographer.querySelector(".photographer-info");
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const buttonContact = document.querySelector(".contact_button");
    const { city, country, tagline, price } = photographer;

    p.textContent = `${city}, ${country}`;
    p.classList.add("photographer-city");
    p2.textContent = tagline;
    p2.classList.add("photographer-description");
    p3.textContent = `${price}€/jour`;
    p3.classList.add("photographer-price");
    dataPhotographer.appendChild(buttonContact);
    photographerInfos.appendChild(p);
    photographerInfos.appendChild(p2);
}


displayData();
