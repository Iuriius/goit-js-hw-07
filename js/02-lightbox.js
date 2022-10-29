import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
console.log(SimpleLightbox);

const galleryList = document.querySelector('.gallery');
new SimpleLightbox('.gallery a', { /* options */ });
const markup = galleryItems.map(img => `<div class="gallery__item">
    <a class="gallery__item" href="${img.original}">
  <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
</a>
</div>`).join('');
galleryList.insertAdjacentHTML('beforeend', markup);

galleryList.on('show.simplelightbox', function () {
});

galleryList.addEventListener('click', e => {
    if (e.target.nodeName !== 'IMG') return;
    const instance = basicLightbox.create(`<img src=${e.target.dataset.source} alt=${e.target.alt}/>`);
    instance.show();
});