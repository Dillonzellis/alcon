const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.menu')

const bankNav = document.querySelector('.bank')
const bankSub= document.querySelector('.bank-sub')

const checkingSub = document.querySelector('.checking-sub')

const borrowNav = document.querySelector('.borrow')
const borrowSub= document.querySelector('.borrow-sub')

const solutionsNav = document.querySelector('.solutions')
const solutionsSub= document.querySelector('.solutions-sub')


hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")

    if(bankSub.classList.contains("active")){
        bankSub.classList.remove("active")
    }
})

bankNav.addEventListener("click", () =>{
    bankSub.classList.toggle("active")
})

borrowNav.addEventListener("click", () =>{
    borrowSub.classList.toggle("active")
})

solutionsNav.addEventListener("click", () =>{
    solutionsSub.classList.toggle("active")
})



const offset = 5000;  
  //Add scroll event listener to the page
  window.addEventListener("scroll", () => {
    //If the page is scrolled by 50px or more
    if (pageYOffset > offset) {
     
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")

      bankSub.classList.remove("active")
      borrowSub.classList.remove("active")
      solutionsSub.classList.remove("active")
    }
  });

