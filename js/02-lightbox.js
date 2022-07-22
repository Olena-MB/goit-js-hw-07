import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryImg = document.querySelector('.gallery');

//Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const imagesMarkup = galleryItems
.map(({preview,original,description}) => 
`<li class = "gallery__item">
<a class = "gallery__item" href = "${original}">
<img class = "gallery__image"
  src = "${preview}"
  alt = "${description}"/>
</a></li>`).join("");

galleryImg.insertAdjacentHTML('afterbegin', imagesMarkup);

let gallery = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

console.log(galleryItems);