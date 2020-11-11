const insert = element => container.appendChild(element);

//Creating container
const container = document.createElement('div');
container.classList.add('container');
container.style.padding = '20px 30px';
document.body.appendChild(container);

//Styling container
container.style.width = '900px';
container.style.margin = '50px auto';
container.style.backgroundColor = '#FBF5ED';


//Creating heading 
const h1 = document.createElement('h1');
h1.textContent = 'Document';
h1.style.textAlign = 'center'; 
insert(h1);

//Creating the content
const p1 = `The most damaging thing you learned in school wasn't something you learned in any specific class. It was learning to get good grades.`;

const p2 = `When I was in college, a particularly earnest philosophy grad student once told me that he never cared what grade he got in a class, only what he learned in it. This stuck in my mind because it was the only time I ever heard anyone say such a thing.`;

const p3 = `For me, as for most students, the measurement of what I was learning completely dominated actual learning in college. I was fairly earnest; I was genuinely interested in most of the classes I took, and I worked hard. And yet I worked by far the hardest when I was studying for a test.`;

const p4 = `In theory, tests are merely what their name implies: tests of what you've learned in the class. In theory you shouldn't have to prepare for a test in a class any more than you have to prepare for a blood test. In theory you learn from taking the class, from going to the lectures and doing the reading and/or assignments, and the test that comes afterward merely measures how well you learned.`;

const p5 = `In practice, as almost everyone reading this will know, things are so different that hearing this explanation of how classes and tests are meant to work is like hearing the etymology of a word whose meaning has changed completely. In practice, the phrase "studying for a test" was almost redundant, because that was when one really studied. The difference between diligent and slack students was that the former studied hard for tests and the latter didn't. No one was pulling all-nighters two weeks into the semester.`;

const paragraphs = [p1, p2, p3, p4, p5];

for(let paragraph of paragraphs) {
    let p = document.createElement('p');
    p.textContent = paragraph;
    insert(p);
    p.style.lineHeight = '1.45';
}

//Dark-Light Button
const iconwrapper = document.createElement('div');
const icon = document.createElement('i');
const body = document.querySelector('body');


iconwrapper.style.padding = '30px';
iconwrapper.style.textAlign = 'center'

icon.classList.add('fas', 'fa-moon');
icon.style.fontSize = '30px';
icon.style.cursor = 'pointer';

iconwrapper.appendChild(icon);
insert(iconwrapper)

//Light-Dark mode functionality
icon.addEventListener('click', function() {
    if(this.classList.contains('fas', 'fa-moon')) {
        this.classList.remove('fas', 'fa-moon');
        this.classList.add('far', 'fa-lightbulb');
        body.style.backgroundColor = '#222';    
    }
    else {
        this.classList.remove('far', 'fa-lightbulb');
        this.classList.add('fas', 'fa-moon')   
        body.style.backgroundColor = 'white';
    }
})