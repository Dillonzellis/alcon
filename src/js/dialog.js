
const accountModal = document.querySelector('#account-modal')
const openAccountModal = document.querySelector('#open-account-modal')
const closeAccountModal = document.querySelector('#account-close')

openAccountModal.addEventListener('click', ()=>{
    accountModal.showModal();
})

closeAccountModal.addEventListener('click', ()=>{
    accountModal.close();
})


const newModal = document.querySelector('#new-modal')
const openModalNew = document.querySelector('#open-modal-new')
const closeModalNew = document.querySelector('#new-close')

openModalNew.addEventListener('click', ()=>{
    newModal.showModal();
})

closeModalNew.addEventListener('click', ()=>{
    newModal.close();
})

function visitPage(){
    window.location="https://a11y-dialog.netlify.app/installation"
}

