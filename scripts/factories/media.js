// eslint-disable-next-line no-unused-vars
class MediaFactory {
  renderMedia(media) {
    // eslint-disable-next-line no-prototype-builtins
    if (media.hasOwnProperty("image")) {
      return new ImageFactory().createHTML(media);
    }
    // eslint-disable-next-line no-prototype-builtins
    if (media.hasOwnProperty("video")) {
      return new VideoFactory().createHTML(media);
    }
    return null;
  }
}

class ImageFactory {
  createHTML(media) {
    const image = document.createElement("img");
    image.setAttribute("src", `assets/medias/${media.image}`);
    image.setAttribute("alt", `${media.alt}`);
    return image;
  }
}

class VideoFactory {
  createHTML(media) {
    const video = document.createElement("video");
    video.removeAttribute("controls");
    const source = document.createElement("source");
    source.setAttribute("src", `assets/medias/${media.video}`);
    source.setAttribute("type", "video/mp4");
    video.appendChild(source);

    return video;
  }
}
