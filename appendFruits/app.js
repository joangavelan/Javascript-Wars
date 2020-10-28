const myList = document.querySelector('.myList');

//Apple
const appleEl = document.createElement('li');
appleEl.textContent = 'Apple';

//Appending it to the list
myList.appendChild(appleEl);

//Creating an array of fruits
const fruits = ['Mango', 'Banana', 'Orange', 'Strawberry'];

for(let fruit of fruits) {
    let fruitEl = document.createElement('li')
    fruitEl.textContent = fruit;

    myList.appendChild(fruitEl);
}
