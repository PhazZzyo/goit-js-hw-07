import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = [];

const zoomImage = (event) => {
    const { target } = event;
        
    if (target.classList.contains("gallery__image")) {
        event.preventDefault();
        let isModalOpen = false;
        
        const modalClose = (event) => {
            if (event.key === "Escape") {
                instance.close();
            }            
        }

        const instance = basicLightbox.create(
            `<img width="1400" height="900" src="${event.target.dataset.source}">`,
            { onClose: () => document.removeEventListener("keydown", modalClose)});
        
        isModalOpen = instance.show();        
    
        if (isModalOpen) { document.addEventListener("keydown", modalClose) };                       
    }
}

galleryItems.forEach(element => {
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery__item");

    const galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery__link");
    galleryLink.href = element.original;

    const galleryImage = document.createElement("img");
    galleryImage.src = element.preview;
    galleryImage.classList.add("gallery__image");
    galleryImage.dataset.source = element.original;
    galleryImage.alt = element.description;

    galleryLink.append(galleryImage);
    galleryItem.append(galleryLink);
    galleryMarkup.push(galleryItem);
});

galleryRef.append(...galleryMarkup);

galleryRef.addEventListener("click", zoomImage);