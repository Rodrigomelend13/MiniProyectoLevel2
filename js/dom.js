/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/
const $ = (selector) => document.querySelector(selector);
const container = $("#push");


const showFilter = (arr) => {
    container.innerHTML = "";
arr.forEach(element => {
    const cards = createNewCard(element);
    container.appendChild(cards);     
})
}

// const showCompleteFilter = (arr) => {
//   container.innerHTML = "";
// arr.forEach(element => {
//   const cards = createNewCard(element);
//   container.appendChild(cards);     
// })
// }




const createNewCard = (Object) => {
    const div = document.createElement('div');
    div.className = 'img-card';
    // aqui escribire para insertar los elementos del card
    div.innerHTML =  `
    <div class="col" id="cards">
    
    <div class="card" id="cards"> <img class="w-100 rounded-4" id="img-card" src="${Object.photo}" alt=" ${Object.city} "> </div>

    
    <div class="information d-flex justify-content-between mt-3">
    <p class="d-flex flex-column gap-3">
    <span class="text-start" id="text-info">${Object.type}</span>
    <span class="text-start" id="text-info1">${Object.title}</span>
    </p>
    <div class="d-flex"> <span class="material-symbols-outlined text-danger">grade</span>${Object.rating}</div>
    </div>
    </div>
    `
    return div 
}



const sumarA = document.getElementById('sumarAdult');
const restarA = document.getElementById('restarAdult');
const restarC = document.getElementById('restarChild');
const sumarC = document.getElementById('sumarChild');

let counterA = 0;
let counterC = 0;

sumarA.addEventListener('click', () => {
    actualizarContador('aumentar');
  });
  
  restarA.addEventListener('click', () => {
    actualizarContador('disminuir');
  });
  
// //       contador para adultos
function actualizarContador(accion) {
    if (accion === "aumentar") {
      if (counterA == 10) return;
      counterA++;
    } else if (accion === "disminuir") {
      if (counterA == 0) return;
      counterA--;
    }
    document.getElementById("textoAdult").innerHTML = counterA;
  }


  sumarC.addEventListener('click', () => {
    actualizarContadorChild('aumentar');
  });
  
  restarC.addEventListener('click', () => {
    actualizarContadorChild('disminuir');
  });

  function actualizarContadorChild(accion) {
    if (accion === "aumentar") {
      if (counterC == 10) return;
      counterC++;
    } else if (accion === "disminuir") {
      if (counterC == 0) return;
      counterC--;
    }
    document.getElementById("textoChild").innerHTML = counterC;
  }





export default {
    showFilter,
    $,
}