import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// const instance = basicLightbox.create(
//     document.querySelector('#template')
// )
console.log(basicLightbox);

const gallery = basicLightbox.create(`
	<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>
`);
// const instance = basicLightbox.create(`
// 	<h1>Not closable</h1>
// 	<p>It's not possible to close this lightbox with a click.</p>
// `, {
//     closable: false
// })
// const instance = basicLightbox.create(
//     document.querySelector('#template')
// );
gallery.show();