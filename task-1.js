import pictures from './gallery-items.js';

const gallery = document.querySelector('.js-gallery');
const modal = document.querySelector('.js-lightbox');
const close = document.querySelector('[data-action="close-lightbox"]');
const modalImg = document.querySelector('.lightbox__image');

const galleryOfPictures = pictures.map(({preview, original, description}) => {
  return `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`;
}).join('');

gallery.insertAdjacentHTML('beforeend', galleryOfPictures);

gallery.addEventListener('click', isModalOpen);
modal.addEventListener('click', clickOnBackdrop);
window.addEventListener('keydown', downOnESC);

function isModalOpen (evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  };
  close.addEventListener('click', isModalClose, {once:true});
  evt.preventDefault();
  modal.classList.add('is-open');
  modalImg.src = evt.target.dataset.source;
  modalImg.alt = evt.target.alt;
  // window.addEventListener('keydown', onKeyLeafDown);
}

function isModalClose () {
  modal.classList.remove('is-open');
  modalImg.src = '';
  modalImg.alt = '';
};

function clickOnBackdrop (evt) {
  if (evt.target.nodeName !== 'DIV') {
    return;
  };
  modal.classList.remove('is-open');
  modalImg.src = '';
  modalImg.alt = '';
};

function downOnESC(evt) {
  if (evt.code !== 'Escape') {
    return;
  };
  modal.classList.remove('is-open');
  modalImg.src = '';
  modalImg.alt = '';
};

// function onKeyLeafDown(evt) {
//   if (evt.code == 'ArrowRight') {
//     const rightNeighbor =  gallery.childNodes.nextSibling;
//     console.log(gallery.childNodes.nextSibling);
//     modalImg.src = rightNeighbor.dataset.source;
//     modalImg.alt = rightNeighbor.alt;
//   };
// };
