const modal = document.querySelector('.profile');
const btnOpenModal=document.querySelector('.btn-profile-modal');
const btnCloseModal=document.querySelector('.close-btn');
const btnCloseModal2=document.querySelector('#close-btn');


btnOpenModal.addEventListener("click", ()=>{
    modal.style.display="flex";
});

btnCloseModal.addEventListener("click", ()=>{
    modal.style.display="none";
});

btnCloseModal2.addEventListener("click", ()=>{
    modal.style.display="none";
});