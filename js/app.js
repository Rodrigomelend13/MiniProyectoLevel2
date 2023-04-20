import data from "./data.js"
import dom from "./dom.js"


// Aqui se hizo la funcion para crear las cards de acuerdo a los datos de JSON

const ENLACE = './stays.json';
const datos = await data.getData(ENLACE);

dom.showFilter(datos);


// aqui escribire todo lo que traje del DOM para el modal y luego sus funciones respectivas

const navOption = document.querySelector('#navSearch');
const btnModal = document.querySelector('#openModal');
const location = document.querySelector('#location');
const localidades = document.querySelector('#localidades');
const innerLocalidad = document.querySelector('#innerLocalidad');
const addlocalidad = document.querySelector('#opcionAdd');
const contador = document.querySelector('#contador');
let inputLocalidades = document.querySelector('#inputLocalidades').value;



navOption.addEventListener('click', () =>{
btnModal.click();
});


location.addEventListener('click', () => {
localidades.classList.toggle('d-flex');
if(contador.classList.contains('d-flex')) {
    contador.classList.remove('d-flex');
}
});


guest.addEventListener('click',() => {
contador.classList.toggle('d-flex');
if(localidades.classList.contains('d-flex')) {
    localidades.classList.remove('d-flex');
}
});


let filtro1 = [];



document.querySelectorAll('#localidades  .op').forEach((elem) => {
    elem.addEventListener('click',(event) => {
    event.preventDefault();
    localidades.classList.toggle('d-flex');
    const contenido = event.currentTarget;
    const etiqueta = contenido.querySelector(".etiqueta");
    innerLocalidad.innerHTML=etiqueta.innerHTML;
    addlocalidad.innerHTML=etiqueta.innerHTML;

	//   Para filtro
	inputLocalidades = getLocalidad();

	// Filtrar por ciudad
	const firstFiltro = data.primerFiltro(datos, inputLocalidades);
	dom.showFilter(firstFiltro);
    filtro1 = firstFiltro;

})
});

function getLocalidad() {
	return document.querySelector(".cont-localidad").innerText
}


const submitSearch = document.querySelector('#submitSearch');
const innerGuest = document.querySelector('#innerGuest');
const opcionGuest = document.querySelector('#opcionGuest');
const miniSubmitSearch = document.querySelector('#miniSubmitSearch');




submitSearch.addEventListener('click', () => {
    console.log("hola")
    const valorAdult = document.getElementById("textoAdult").textContent;
    const numeroAdult = parseInt(valorAdult);
    const valorChild = document.getElementById("textoChild").textContent;
    const numeroChild = parseInt(valorChild);
 
    const sumaContador = numeroAdult + numeroChild+" Guests";
 
    innerGuest.innerHTML= `<p class="text-dark p-0 m-0" id="opcionGuest">${sumaContador} </p>`;
    opcionGuest.innerHTML=`<p class="text-dark p-0 m-0" id="opcionGuest">${sumaContador} </p>`;

    // Filtrar por guest
    
	const segundoFiltro = data.segundoFiltro(datos, numeroAdult + numeroChild);
	dom.showFilter(segundoFiltro);
    if (inputLocalidades == "") {
        return
    }
    else {
    const holdArray = data.holdFilter(datos, inputLocalidades, numeroAdult + numeroChild);
    dom.showFilter(holdArray);
    }
})


miniSubmitSearch.addEventListener('click', () => {  
    const valorAdult = textoAdult.textContent;
    const numeroAdult = parseInt(valorAdult);
    const valorChild = textoChild.textContent;
    const numeroChild = parseInt(valorChild);
 
    const sumaContador = numeroAdult + numeroChild+" Guests";
 
    innerGuest.innerHTML= `<p class="text-dark p-0 m-0" id="opcionGuest">${sumaContador} </p>`;
    opcionGuest.innerHTML=`<p class="text-dark p-0 m-0" id="opcionGuest">${sumaContador} </p>`;
 
    const segundoFiltro = data.segundoFiltro(datos, numeroAdult + numeroChild);
	dom.showFilter(segundoFiltro);
    if (inputLocalidades == "") {
        return
    }
    else {
    const holdArray = data.holdFilter(datos, inputLocalidades, numeroAdult + numeroChild);
    dom.showFilter(holdArray);
    }

    })









