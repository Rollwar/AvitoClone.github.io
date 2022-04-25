'use strict';

const dataBase = [];


const modalAdd = document.querySelector(".modal__add"),
    addAd = document.querySelector(".add__ad"),
    modalBtnSubmit = document.querySelector('.modal__btn-submit'),
    modalSubmit = document.querySelector('.modal__submit'),
    modalCatalog = document.querySelector('.catalog'),
    modalItem = document.querySelector('.modal__item'),
    modalBtnWarning = document.querySelector('.modal__btn-warning');

const elementsModalSubmit = [...modalSubmit.elements].filter(elem => elem.tagName !== 'BUTTON');
 
modalSubmit.addEventListener('input', event =>{
    const validForm = elementsModalSubmit.every(elem => elem.value);
    modalBtnSubmit.disabled = !validForm;
    modalBtnWarning.style.display = validForm ? 'none' : '';

});

modalSubmit.addEventListener('submit',event =>{
    event.preventDefault();
    const itemObject = {};
    for (const elem of elementsModalSubmit) {
        itemObject[elem.name] = elem.value;
    }

    dataBase.push(itemObject);
    modalSubmit.reset();

});

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
    };
});

modalItem.addEventListener("click", event =>{
    const target = event.target;

    if(target.classList.contains('modal__close') ||
    target === modalItem){
        modalItem.classList.add('hide');
    };
});

modalCatalog.addEventListener("click", event =>{

    const target = event.target;

    if(target.closest('.card')){
        modalItem.classList.remove('hide');
    };

});

document.addEventListener("keydown", event => {
    if(event.code === 'Escape' ){
        modalAdd.classList.add('hide');
        modalItem.classList.add('hide');
    };
});

