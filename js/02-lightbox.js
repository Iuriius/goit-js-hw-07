import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');
const markup = galleryItems.map(img => `<div class="gallery__item">
    <a class="gallery__item" href="${img.original}">
  <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
</a>
</div>`).join('');
galleryList.insertAdjacentHTML('beforeend', markup);
new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, });