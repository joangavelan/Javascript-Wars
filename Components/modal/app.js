const $open = document.querySelector('.trigger');
const $modal = document.querySelector('.modal');
const $close = document.querySelector('.close');

const main = () => {
    $open.addEventListener('click', () => {
        $modal.classList.add('open');
    })
    
    $close.addEventListener('click', () => {
        $modal.classList.remove('open');
    })
    
    window.addEventListener('click', event => {
        if(event.target === $modal) {
            $modal.classList.remove('open');
        }
    })
}

main();