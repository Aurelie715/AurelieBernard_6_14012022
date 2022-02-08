function photographerFactory(data) {
  const { name, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    article.appendChild(img);
    article.appendChild(h2);
    return article;
  }

  function getDataForPagePhotographer() {
    const photographerHeader = document.querySelector(".photograph-header");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    const divImg = document.createElement("div");
    const divText = document.createElement("div");
    divImg.classList.add("photographer-photo");
    divText.classList.add("photographer-info");
    h2.textContent = name;
    photographerHeader.appendChild(divImg);
    divImg.appendChild(img);
    photographerHeader.appendChild(divText);
    divText.appendChild(h2);
    return photographerHeader;
  }
  return { name, picture, getUserCardDOM, getDataForPagePhotographer };
}
