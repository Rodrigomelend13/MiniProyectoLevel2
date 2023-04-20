/* 
Aqui van todas las funciones o variables relacionadas
con la manipulación de los datos de la aplicacion
*/

const getData = async () => {
  // Obytener los datos del archivo 'stays.json'
  const data = fetch('./stays.json')
    .then(response => response.json())
    .then( json => json)
  return data;
}

const getName = (data) => {
  const name = data.map (elem => elem.city);
  console.log(name);
}

const primerFiltro = (arr, inputLocalidades) => {
  let locationFiltrada = arr.filter(elem => elem.city+", Finland" == inputLocalidades);
  return locationFiltrada
}


const segundoFiltro = (arr, guests) => {
  let guestFiltrada = arr.filter(elem => elem.maxGuests >= guests); 
  return guestFiltrada
}

const holdFilter =  (arr, inputLocalidades, guests) => {
  let locationFiltrada = arr.filter(elem => (elem.city+", Finland" == inputLocalidades) && (elem.maxGuests >= guests));
  return locationFiltrada
}




  


export default {
  getData,
  getName,
  primerFiltro,
  segundoFiltro,
  holdFilter,
}