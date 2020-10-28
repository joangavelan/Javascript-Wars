//Global
const container = document.querySelector('.container');

//Creating and appending the title
const h1El = document.createElement('h1');
const title = 'Javascript'
h1El.textContent = title;
container.appendChild(h1El)
h1El.classList.add('align-center');

//Creating and appending the introduction text
const content = document.createElement('div');

const p1 = `JavaScript (JS) es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase. Si bien es más conocido como un lenguaje de scripting (secuencias de comandos) para páginas web, y es usado en muchos entornos fuera del navegador, tal como Node.js, Apache CouchDB y Adobe Acrobat. JavaScript es un lenguaje de programación basada en prototipos, multiparadigma, de un solo hilo, dinámico, con soporte para programación orientada a objetos, imperativa y declarativa (por ejemplo programación funcional). Lee más en acerca de JavaScript.`;

const p2 = `Esta sección está dedicada al lenguaje JavaScript en sí, y no a las partes que son específicas de las páginas web u otros entornos host. Para información acerca de APIs específicas para páginas Web, consulta APIs Web y DOM.`;

const p3 = `El estándar para JavaScript es ECMAScript. A partir del 2012, todos los navegadores modernos soportan completamente ECMAScript 5.1. Los navegadores viejos soportan al menos ECMAScript 3. Desde Junio 17, 2015, ECMA International publico la sexta versión principal de ECMAScript, que oficialmente se llama ECMAScript 2015, y que inicialmente se denominó ECMAScript 6 o ES6. Desde entonces, los estándares ECMAScript están en ciclos de lanzamiento anuales. Esta documentación hace referencia a la última versión preliminar, que actualmente es ECMAScript 2020.`;

const p4 = `No confundas JavaScript con el lenguaje de programación Java. Ambos "Java" y "JavaScript"  son marcas o marcas registradas de Oracle en los Estados Unidos y otros países, Sin embargo, los dos lenguajes de programación tienen sintaxis, semántica y usos muy diferentes.`;

const paragraphs = [p1, p2, p3, p4];

for(let paragraph of paragraphs) {
    const paragraphEl = document.createElement('p');
    paragraphEl.textContent = paragraph;

    content.appendChild(paragraphEl);
}

container.appendChild(content);
container.firstElementChild.nextElementSibling.classList.add('lh-5');

