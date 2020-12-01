const $barFill = document.querySelector('.bar__fill');
const $btn = document.querySelector('.btn');

const delay = 1000; 

$btn.addEventListener('click', () => {
    let width = 1;

    setInterval(() => {
        if(width === 100) {
            clearInterval();
        }
        else {
            width++
            $barFill.style.width = width + '%';
        }
    }, 2);
})


// let counter = 0;

// const countTo = num => {
//     setInterval(() => {
//         let limit = num;

//         if(counter === limit) {
//             clearInterval();
//         }
//         else {
//             counter++;
//             console.log(counter)
//         }

// }, 1000)
// }
// countTo(5);