async function getPhotographers() {
  // Penser à remplacer par les données récupérées dans le json
  // const photographers = [
  //     {
  //         "name": "Ma data test",
  //         "id": 1,
  //         "city": "Paris",
  //         "country": "France",
  //         "tagline": "Ceci est ma data test",
  //         "price": 400,
  //         "portrait": "account.png"
  //     },
  //     {
  //         "name": "Autre data test",
  //         "id": 2,
  //         "city": "Londres",
  //         "country": "UK",
  //         "tagline": "Ceci est ma data test 2",
  //         "price": 500,
  //         "portrait": "account.png"
  //     },
  // ]
  const response = await fetch("/data/photographers.json");
  return await response.json();
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const { city, country, tagline, price, id } = photographer;
    p.textContent = `${city}, ${country}`;
    p.classList.add("photographer-location");
    p2.textContent = tagline;
    p2.classList.add("photographer-tagline");
    p3.textContent = `${price}€/jour`;
    p3.classList.add("photographer-price");
    userCardDOM.appendChild(p);
    userCardDOM.appendChild(p2);
    userCardDOM.appendChild(p3);
    photographersSection.appendChild(userCardDOM);
    userCardDOM
      .querySelector("img")
      .addEventListener(
        "click",
        () => redirectToPhotographer(id)
      );
    userCardDOM
      .querySelector("h2")
      .addEventListener(
        "click",
        () => redirectToPhotographer(id)
      );
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

function redirectToPhotographer(id) {
  window.location.href = `/photographer.html?id=${id}`;
}

init();
