const bank = document.querySelector('#bank');
const borrow = document.querySelector('#borrow');
const solutions = document.querySelector('#solutions');
const rates = document.querySelector('#rates');
const about = document.querySelector('#about');
const apply = document.querySelector('#apply');
const login = document.querySelector('#login');

const menuItemsArr = document.querySelectorAll('.menu-item')


const arr = [...menuItemsArr]
console.log(arr);

bank.addEventListener('click', () => {
    bank.classList.toggle('active')

    arr.forEach((item) => {
        if (item.classList.contains('bank')) {
            console.log('bank class');
        } else {
            item.classList.remove('active')
        }
    })
})

borrow.addEventListener('click', () => {
    borrow.classList.toggle('active')

    arr.forEach((item) => {
        if (item.classList.contains('borrow')) {
            console.log('borrow class');
        } else {
            item.classList.remove('active')
        }
    })
})

solutions.addEventListener('click', () => {
    solutions.classList.toggle('active')

    arr.forEach((item) => {
        if (item.classList.contains('solutions')) {
            console.log('solutions class');
        } else {
            item.classList.remove('active')
        }
    })
})

rates.addEventListener('click', () => {
    rates.classList.toggle('active')

    arr.forEach((item) => {
        if (item.classList.contains('rates')) {
            console.log('rates class');
        } else {
            item.classList.remove('active')
        }
    })
})

about.addEventListener('click', () => {
    about.classList.toggle('active')

    arr.forEach((item) => {
        if (item.classList.contains('about')) {
            console.log('about class');
        } else {
            item.classList.remove('active')
        }
    })
})

apply.addEventListener('click', () => {
    apply.classList.toggle('active')

    arr.forEach((item) => {
        if (item.classList.contains('apply')) {
            console.log('apply class');
        } else {
            item.classList.remove('active')
        }
    })
})

login.addEventListener('click', () => {
    login.classList.toggle('active')

    arr.forEach((item) => {
        if (item.classList.contains('login')) {
            console.log('login class');
        } else {
            item.classList.remove('active')
        }
    })
})




// const allDropdowns = document.querySelectorAll('.sub-menu-1')
// const DROP_CLASS = 'drop';
// const navbar = document.querySelector('.navbar');


// navbar.addEventListener('click', ({
//     target
// }) => {
//     if (!target.classList.contains('menu-item')) return;

//     const parent = target.parentNode;
//     const navItems = parent
//         .querySelector('.sub-menu-1');

//     allDropdowns.forEach(el => el !== navItems && el.classList.remove(DROP_CLASS));

//     if (navItems) {
//         navItems.classList.toggle(DROP_CLASS);
//     }
// });