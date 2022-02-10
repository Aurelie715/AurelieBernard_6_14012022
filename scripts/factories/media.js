class MediaFactory {
    renderMedia(media) {
        if (media.hasOwnProperty('image')) {
            return new ImageFactory().createHTML(media);
        } 
        if (media.hasOwnProperty('video')) {
            return new VideoFactory().createHTML(media);
        }
        return null
    }
}

class ImageFactory {
    createHTML(media) {
        const image = document.createElement('img');
        image.setAttribute('src', `assets/medias/${media.image}`);
        return image;
    }
}

class VideoFactory {
    createHTML(media) {
        const video = document.createElement('video');
        video.setAttribute('src', `assets/medias/${media.video}`);
        video.setAttribute("controls", "controls");
        return video;
    }
}