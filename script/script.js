'use strict';

const modalAdd = document.querySelector(".modal__add"),
    addAd = document.querySelector(".add__ad"),
    modalBtnSubmit = document.querySelector('.modal__btn-submit'),
    modalSubmit = document.querySelector('.modal__submit'),
    modalCatalog = document.querySelector('.catalog'),
    modalItem = document.querySelector('.modal__item');

addAd.addEventListener("click", () => {
    modalAdd.classList.remove('hide');
    modalBtnSubmit.disabled = true;
});

modalAdd.addEventListener("click", event => {
    const target = event.target;

    if(target.classList.contains('modal__close') ||
    target === modalAdd){
        modalAdd.classList.add('hide');
        modalSubmit.reset();
    }
});

modalItem.addEventListener("click", event =>{
    const target = event.target;

    if(target.classList.contains('modal__close') ||
    target === modalItem){
        modalItem.classList.add('hide');
    }
})

modalCatalog.addEventListener("click", event =>{

    const target = event.target;

    if(target.closest('.card')){
        modalItem.classList.remove('hide');
   }

});

document.addEventListener("keydown", (event) => {
    if(event.which == "27"){
        modalAdd.classList.add('hide');
        modalItem.classList.add('hide');
    }
});

