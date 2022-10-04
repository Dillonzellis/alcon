const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.menu')

const subMenuLists = document.querySelectorAll('.sub-menu-list')
const arr = [...subMenuLists]
const active = document.querySelectorAll('.active')

const subMenuWrapper = document.querySelector('.sub-menu-wrapper')



const bankNav = document.querySelector('.bank')
const bankSub = document.querySelector('.bank-sub')

const checkingSub = document.querySelector('.checking-sub')

const borrowNav = document.querySelector('.borrow')
const borrowSub = document.querySelector('.borrow-sub')

const solutionsNav = document.querySelector('.solutions')
const solutionsSub = document.querySelector('.solutions-sub')

const ratesNav = document.querySelector('.rates')
const ratesSub = document.querySelector('.rates-sub')

const aboutNav = document.querySelector('.about')
const aboutSub = document.querySelector('.about-sub')

const applyNav = document.querySelector('.apply')
const applySub = document.querySelector('.apply-sub')

const loginNav = document.querySelector('.login')
const loginSub = document.querySelector('.login-sub')


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")

    if (bankSub.classList.contains("active")) {
        bankSub.classList.remove("active")
    }

    if (borrowSub.classList.contains("active")) {
        borrowSub.classList.remove("active")
    }

    if (solutionsSub.classList.contains("active")) {
        solutionsSub.classList.remove("active")
    }

    if (ratesSub.classList.contains("active")) {
        ratesSub.classList.remove("active")
    }

    if (aboutSub.classList.contains("active")) {
        aboutSub.classList.remove("active")
    }

    if (applySub.classList.contains("active")) {
        applySub.classList.remove("active")
    }

    if (loginSub.classList.contains("active")) {
        loginSub.classList.remove("active")
    }

})


// bankNav.addEventListener("mouseout", () => {
//     console.log('mouse out');
// })


//add multiple listeners with help function
// const addMultipleListeners = (el, types, listener, options, useCapture) => {
//     types.forEach(type =>
//       el.addEventListener(type, listener, options, useCapture)
//     );
//   };

//   addMultipleListeners(
//     document.querySelector('.my-element'),
//     ['click', 'mousedown'],
//     () => { console.log('hello!') }
//   );


bankNav.addEventListener("mouseover", () => {
    bankSub.classList.toggle("active")

    //remove all active classes from sub-menu-list
    subMenuLists.forEach((list) => {
        if (list.classList.contains('bank-sub')) {
            // console.log('hit');
        } else {
            list.classList.remove('active')
        }
    })
})

bankNav.addEventListener("click", () => {
    bankSub.classList.toggle("active")

    //remove all active classes from sub-menu-list
    subMenuLists.forEach((list) => {
        if (list.classList.contains('bank-sub')) {
            // console.log('hit');
        } else {
            list.classList.remove('active')
        }
    })
})

borrowNav.addEventListener("mouseover", () => {
    borrowSub.classList.toggle("active")

    //remove all active classes from sub-menu-list
    subMenuLists.forEach((list) => {
        if (list.classList.contains('borrow-sub')) {
            console.log('hit');
        } else {
            list.classList.remove('active')
        }
    })
})

borrowNav.addEventListener("click", () => {
    borrowSub.classList.toggle("active")

    //remove all active classes from sub-menu-list
    subMenuLists.forEach((list) => {
        if (list.classList.contains('borrow-sub')) {
            console.log('hit');
        } else {
            list.classList.remove('active')
        }
    })
})

solutionsNav.addEventListener("mouseover", () => {
    solutionsSub.classList.toggle("active")

    //remove all active classes from sub-menu-list
    subMenuLists.forEach((list) => {
        if (list.classList.contains('solutions-sub')) {
            console.log('hit');
        } else {
            list.classList.remove('active')
        }
    })
})

solutionsNav.addEventListener("click", () => {
    solutionsSub.classList.toggle("active")

    //remove all active classes from sub-menu-list
    subMenuLists.forEach((list) => {
        if (list.classList.contains('solutions-sub')) {
            console.log('hit');
        } else {
            list.classList.remove('active')
        }
    })
})

ratesNav.addEventListener("mouseover", () => {
    ratesSub.classList.toggle("active")

    //remove all active classes from sub-menu-list
    subMenuLists.forEach((list) => {
        if (list.classList.contains('rates-sub')) {
            console.log('hit');
        } else {
            list.classList.remove('active')
        }
    })
})

ratesNav.addEventListener("click", () => {

    ratesSub.classList.toggle("active")

    //remove all active classes from sub-menu-list
    subMenuLists.forEach((list) => {
        if (list.classList.contains('rates-sub')) {
            console.log('hit');
        } else {
            list.classList.remove('active')
        }
    })
})

aboutNav.addEventListener("mouseover", () => {
    aboutSub.classList.toggle("active")

    //remove all active classes from sub-menu-list
    subMenuLists.forEach((list) => {
        if (list.classList.contains('about-sub')) {
            console.log('hit');
        } else {
            list.classList.remove('active')
        }
    })
})

aboutNav.addEventListener("click", () => {
    aboutSub.classList.toggle("active")

    //remove all active classes from sub-menu-list
    subMenuLists.forEach((list) => {
        if (list.classList.contains('about-sub')) {
            console.log('hit');
        } else {
            list.classList.remove('active')
        }
    })
})

applyNav.addEventListener("click", () => {
    applySub.classList.toggle("active")

    //remove all active classes from sub-menu-list
    subMenuLists.forEach((list) => {
        if (list.classList.contains('apply-sub')) {
            console.log('hit');
        } else {
            list.classList.remove('active')
        }
    })
})

loginNav.addEventListener("click", () => {
    loginSub.classList.toggle("active")

    //remove all active classes from sub-menu-list
    subMenuLists.forEach((list) => {
        if (list.classList.contains('login-sub')) {
            console.log('hit');
        } else {
            list.classList.remove('active')
        }
    })
})



// const offset = 5000;
//Add scroll event listener to the page
// window.addEventListener("scroll", () => {
    //If the page is scrolled by 50px or more
//     if (pageYOffset > offset) {

//         hamburger.classList.remove("active")
//         navMenu.classList.remove("active")

//         bankSub.classList.remove("active")
//         borrowSub.classList.remove("active")
//         solutionsSub.classList.remove("active")
//     }
// });