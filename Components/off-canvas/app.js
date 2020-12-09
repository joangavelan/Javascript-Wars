const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const content = document.querySelector('.content')
const hamburgerBars = document.getElementsByTagName('span');


const toggleNav = () => {
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('open')
        content.classList.toggle('shift')

        for(let item of hamburgerBars) {
            item.classList.toggle('change')
        }
    })
}

toggleNav();