//Mettre le code JavaScript lié à la page photographer.html
const params = new URL(document.location).searchParams;
const id = parseInt(params.get("id"));
let totalLikes = 0;

async function getdata() {
  const response = await fetch("./data/photographers.json");
  return await response.json();
}

async function displayData() {
  const data = await getdata();
  const photographer = data.photographers.find(
    (photographer) => photographer.id === id
  );
  const medias = data.media.filter((media) => media.photographerId === id);

  buildHeader(photographer);

  buildMedia(medias);

  buildAside(medias, photographer);
}

function buildHeader(photographer) {
  const factory = photographerFactory(photographer);
  const header = factory.getPhotographerPageHeader();
  const photographerInfos = header.querySelector(".photographer-info");
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
  header.appendChild(buttonContact);
  photographerInfos.appendChild(p);
  photographerInfos.appendChild(p2);
}

function buildMedia(medias) {
  //modifier la classe .photograph-media
  const photographMediaSection = document.querySelector(".photograph-media");
  const mediaFactory = new MediaFactory();
  medias.forEach((media) => {
    const { title, likes, id } = media;
    const mediaHtml = mediaFactory.renderMedia(media);
    const templatePhotographerMedia = `
        <article class="photographer-media" id="media-${id}">
          <a href="#" class="media-image">${mediaHtml.outerHTML}</a>
          <div class="media-info">
            <p class="media-title">${title}</p>
            <div class="media-like">
              <p class="like-number">${likes}</p>
              <i class="like-icon fa-solid fa-heart"></i>
            </div>
          </div>
        </article>
        `;
    photographMediaSection.insertAdjacentHTML(
      "beforeend",
      templatePhotographerMedia
    );
    document.querySelector(`#media-${id} .like-icon`).addEventListener("click", likeMedia)
  });
}

function likeMedia (event) {
  const button = event.currentTarget;
  const likeText = button.previousElementSibling;
  let likeNumber = parseInt(likeText.textContent);
  likeText.textContent = ++likeNumber;
  document.querySelector(".like-totalnumber").textContent = ++totalLikes;
}

function calculateTotalLikes (medias) {
  let sumOfLikes = 0;
  medias.forEach((media) => {
    const { likes } = media;
    sumOfLikes += likes;
  })
  return sumOfLikes;
}

function buildAside (medias, photographer) {
  const photographLikeAside = document.querySelector(".photograph-like");
  const price = photographer.price;
  totalLikes = calculateTotalLikes(medias);
  const templateAside = `
    <div class="total-like">
      <p class="like-totalnumber">${totalLikes}</p>
      <i class="fa-solid fa-heart"></i>
    </div>
    <p class="salary-per-day">${price}€ / jour</p>
  `
  photographLikeAside.insertAdjacentHTML(
    "beforeend",
    templateAside
  );
}

displayData();

