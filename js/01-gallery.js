import { galleryItems } from './gallery-items.js';
console.log(galleryItems)
// Change code below this line

const gallery = document.querySelector(".gallery")
const markup = galleryItems
    .map((item) => `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
  </div>`)
    .join("");
  
gallery.insertAdjacentHTML("afterbegin", markup);

const selectImage = (event) => {
    event.preventDefault();
    const modalImage = event.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${modalImage}">
    `);
    instance.show();
    
    document.addEventListener("keydown", event => {
        if (event.key === 'Escape') {
            instance.close();
            document.removeEventListener("keydown", selectImage)
        }
    })
}
gallery.addEventListener("click", selectImage);
