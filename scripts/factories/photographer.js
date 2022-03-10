function photographerFactory(data) {
  const { name, portrait, alt } = data;

  const picture = `assets/photographers/${portrait}`;
  const altPicture = `assets/photographers/${alt}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", altPicture);
    img.setAttribute("role", "button");
    const h2 = document.createElement("h2");
    h2.textContent = name;
    article.appendChild(img);
    article.appendChild(h2);
    return article;
  }

  function getPhotographerPageHeader() {
    const photographerHeader = document.querySelector(".photograph-header");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", altPicture);
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
  return { name, picture, getUserCardDOM, getPhotographerPageHeader };
}
