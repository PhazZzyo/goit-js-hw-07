import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = [];

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

// function zoomImage(event) {
//   const { target } = event;
  
//   if (target.classList.contains("gallery__image")) {
//     event.preventDefault();

//     let isModalOpen = false;

//     const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">
//       `,
//       { onClose: () => document.removeEventListener("keyup", closeModal) }
//     );

//     isModalOpen = instance.show();

//     if (isModalOpen) {
//       document.addEventListener("keyup", closeModal);
//     }

//     function closeModal(event) {
//       if (event.key === "Escape") {
//         instance.close();
//       }
//     }
//   }
// }

function zoomImage(event) {
    const { target } = event;
    if (target.classList.contains("gallery__image")) {
        event.preventDefault();
        basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">`).show();
        document.addEventListener("keydown", closeModal);
        
        function closeModal(event) {
        if (event.key === "Escape") {
            basicLightbox.close();
            document.removeEventListener("keydown", closeModal)
      }
    }
    }
}