const hamburger = document.querySelector('.hamburger')
const navBar = document.querySelector('.navbar')

const header = document.querySelector('.header')

//PX offset when the navbar activates
const offset = 50;

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active')

    navBar.classList.toggle('active')
})


//Add scroll event listener to the page
window.addEventListener("scroll", () => {
    //If the page is scrolled by 50px or more
    if (pageYOffset > offset) {
      //Activate navbar
      header.classList.add('header-active');  
    } else {
      //Deactivate navbar
      header.classList.remove('header-active');
    }
  });