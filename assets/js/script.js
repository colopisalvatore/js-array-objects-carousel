// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come sempre focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

console.log('JS OK!');

const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];
    console.log('images', images)

// CAROUSELL

const rowWrapper = document.querySelector('.row-cont');
let activeElement = 0;

images.forEach((element, i) => {

    let domContainer = document.createElement('div');
    domContainer.classList.add('col-12', 'w-100', 'carou-img-cont');

    domContainer.innerHTML = `<img src="${element.url}" alt="${element.title}">
    <div class="img-text text-end">
        <h2>${element.title}</h2>
        <p>${element.description}</p>
    </div>
    `;
    
    rowWrapper.append(domContainer);
    
});


let domImgCont = document.querySelectorAll('.carou-img-cont');
let content = '';
images.forEach((element, i) => {

    if ( i == activeElement) {
        domImgCont[0].classList.add('active');

    }
    
    console.log(domImgCont);

    
});

// BUTTON
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('d-flex', 'justify-content-between', 'buttonContainer');

buttonContainer.innerHTML = `<a href="#prev" role="button">
	<i class="btn-next fa-solid fa-chevron-left"></i>
</a>
<a href="#prev" role="button">
	<i class="btn-prev fa-solid fa-chevron-right"></i>
</a>
`;

rowWrapper.append(buttonContainer);

console.log(buttonContainer);


const buttonNext = document.querySelector('.btn-next');
const buttonPrev = document.querySelector('.btn-prev');
const buttonStart = document.querySelector('.btn-start');
const buttonStop = document.querySelector('.btn-stop');

const clock = setInterval(autoPlay, 3000, domImgCont);


buttonNext.addEventListener('click', function(){

    autoPlay(domImgCont);

});

buttonPrev.addEventListener('click', function(){

    domImgCont[activeElement].classList.remove('active');
    activeElement--;

    if ( activeElement == -1){
        activeElement = images.length -1;
    }

    domImgCont[activeElement].classList.add('active');

});


buttonStop.addEventListener('click', function(){

    clearTimeout(clock);

});

buttonStart.addEventListener('click', function(){

    setInterval(autoPlay, 3000, domImgCont);

});



// FUNCTION

function autoPlay(contentToDisplay) {
    contentToDisplay[activeElement].classList.remove('active');
    activeElement++;

    if ( activeElement == images.length){
        activeElement = 0;
    }

    contentToDisplay[activeElement].classList.add('active');
};