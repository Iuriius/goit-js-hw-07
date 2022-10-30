import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

const markup = galleryItems.map(img => `<div class="gallery__item">
    <a class="gallery__link" href="${img.original}" target="_blank" rel="noopener noreferrer">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</div>`).join('');
galleryList.insertAdjacentHTML('beforeend', markup);

galleryList.addEventListener('click', e => {
  if (e.target.nodeName !== 'IMG') return;
  const instance = basicLightbox.create(`<img src=${e.target.dataset.source} alt=${e.target.alt}/>`);
  instance.show();
});