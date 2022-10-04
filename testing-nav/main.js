const hamburger = document.querySelector('.hamburger')
const navBar = document.querySelector('.navbar')

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active')

    navBar.classList.toggle('active')
})