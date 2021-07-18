// Arreglos Listados
let radio = [
  {hora:"11:00",especialista:"Ignacio Schulz",paciente:"Francisca Rojas",rut:"9878782-1",prevision:"Fonasa"},
  {hora:"11:30",especialista:"Federico Subercaseaux",paciente:"Pamela Estrada",rut:"15345241-3",prevision:"Isapre"},
  {hora:"15:00",especialista:"Fernando Wurthz",paciente:"Armando Luna",rut:"16445345-9",prevision:"Isapre"},
  {hora:"15:30",especialista:"Ana Maria Godoy",paciente:"Manuel Godoy",rut:"17666419-0",prevision:"Fonasa"},
  {hora:"16:00",especialista:"Patricia Suazo",paciente:"Ramon Ulloa",rut:"14989389-K",prevision:"Fonasa"}
];

let trauma = [
  {hora:"8:00",especialista:"Maria Paz Altuzarra",paciente:"Paula Sanchez",rut:"15554774-5",prevision:"Fonasa"},
  {hora:"9:00",especialista:"Rene Poblete",paciente:"Anna Gellona",rut:"13123329-7",prevision:"Isapre"},
  {hora:"9:30",especialista:"Maria Solar",paciente:"Ramiro Andrade",rut:"12221451-K",prevision:"Fonasa"},
  {hora:"10:00",especialista:"Raul Araya",paciente:"Angelica Navas",rut:"15444147-9",prevision:"Isapre"},
  {hora:"10:00",especialista:"Raul Loyola",paciente:"Carmen Isla",rut:"10112348-3",prevision:"Isapre"},
  {hora:"10:30",especialista:"Maria Arriagada",paciente:"Ana Klapp",rut:"17879423-9",prevision:"Isapre"},
  {hora:"10:30",especialista:"Antonio Larenas",paciente:"Pablo Loayza",rut:"13453234-1",prevision:"Isapre"},
  {hora:"11:00",especialista:"Alejandro Badilla",paciente:"Felipe Mardones",rut:"1547423-6",prevision:"Isapre"},
  {hora:"11:30",especialista:"Cecilia Budnik",paciente:"Diego Marre",rut:"16554741-K",prevision:"Fonasa"},
  {hora:"12:00",especialista:"Arturo Cavagnaro",paciente:"Cecilia Mendez",rut:"9747535-8",prevision:"Isapre"},
  {hora:"12:00",especialista:"Matias Aravena",paciente:"Susana Poblete",rut:"14345656-6",prevision:"Fonasa"},
  {hora:"12:30",especialista:"Andres Kanacri",paciente:"Marcial Suazo",rut:"11254785-5",prevision:"Isapre"},
];

let dental = [
  {hora:"08:30",especialista:"Andrea Zuñiga",paciente:"Macela Retamal",rut:"11123425-6",prevision:"Isapre"},
  {hora:"11:00",especialista:"Maria Pia Zañartu",paciente:"Angel Muñoz",rut:"9878789-2",prevision:"Isapre"},
  {hora:"11:30",especialista:"Scarlett Witting",paciente:"Mario Kast",rut:"7998789-5",prevision:"Fonasa"},
  {hora:"13:00",especialista:"Francisco Von Teuber",paciente:"Karin Fernandez",rut:"18887662-K",prevision:"Fonasa"},
  {hora:"13:30",especialista:"Eduardo Viñuela",paciente:"Hugo Sanchez",rut:"17665461-4",prevision:"Fonasa"},
  {hora:"14:00",especialista:"Raquel Villaseca",paciente:"Ana Sepulveda",rut:"14441281-0",prevision:"Isapre"},
];

// ***************************************

//Options Button
let optionsBtn = document.getElementById('optionsBtn')
// Table Head 
let thead = document.getElementById('thead')
// Table Body
let tbody = document.getElementById('tbody');
// h2 Information Area title
let infoArea = document.getElementById('infoArea')
// h5 First & Last Patient information
let flPatient = document.getElementById('firstLastPatient')
// <p> Error Patient Delete
let deleteError = document.getElementById('errorDeletePatient')

function mostrar (response) {
  let templateTHead = `
	    <tr>
	      <th scope="col">#</th>
	      <th scope="col">Hora</th>
	      <th scope="col">Especialista</th>
	      <th scope="col">Paciente</th>
	      <th scope="col">RUT</th>
	      <th scope="col">Prevision</th>
	    </tr>
    `;
  deleteError.innerHTML = ''
  thead.innerHTML = ''
  thead.innerHTML+=templateTHead
  response.forEach(function (item, index) {
    let templateTBody = `
	    <tr>
	      <th scope="row">${index+1}</th>
	      <td>${item.hora}</td>
	      <td>${item.especialista}</td>
	      <td>${item.paciente}</td>
	      <td>${item.rut}</td>
	      <td>${item.prevision}</td>
	    </tr>
    `;
    tbody.innerHTML+=templateTBody

  })

  flPatient.innerHTML = `<b>Primera atención:</b> ${response[0].paciente} - ${response[0].prevision} | <b>Última atención:</b> ${response[response.length-1].paciente} - ${response[response.length-1].prevision}`
}

function showAllList () {
  let allPatients = radio.concat(trauma, dental)
  console.log(allPatients)
  let templateTHead = `
	    <tr>
	      <th scope="col">#</th>
	      <th scope="col">Paciente</th>
	    </tr>
  `;
  thead.innerHTML = ''
  thead.innerHTML += templateTHead

  allPatients.forEach(function(item, index){
    let templateTBody = `
	    <tr>
	     <th scope="row">${index+1}</th>
	     <td>${item.paciente}</td>
	    </tr> 
    `;
    tbody.innerHTML += templateTBody
  })
  flPatient.innerHTML = `Se atendieron a un total de ${allPatients.length} pacientes`;
}

optionsBtn.addEventListener('click', function(){
  //    mostrar(radio)
  let optionsMedical = document.getElementById('optionsMedical').value;
  let optMed = optionsMedical

  if (optMed == 'radiologia') {
    console.log('Escogiste radio')
    infoArea.innerHTML = 'Área de Radiología'
    tbody.innerHTML = ''
    mostrar(radio)
  }
  if (optMed == 'traumatologia') {
    console.log('Escogiste trauma')
    infoArea.innerHTML = 'Área de Traumatología'
    tbody.innerHTML = ''
    mostrar(trauma)
  }
  if (optMed == 'dental'){
    console.log('Escogiste dental')
    infoArea.innerHTML = 'Área Dental'
    tbody.innerHTML = ''
    mostrar(dental)
  }
  if (optMed == 'allList'){
    console.log('Escogiste a todos los pacientes')
    infoArea.innerHTML = 'Listado de todos los pacientes'
    tbody.innerHTML = ''
    showAllList()
  }
  return false
})

//Delete First Patient
const delFirstPatientSelector = document.getElementById('deleteFirstPatient')
const delFirstBtn = document.getElementById('deleteFirstBtn')

const deleteFirstElement = (array) => {
  array.shift()
}

delFirstBtn.addEventListener('click', function(){
  const optionFirst = delFirstPatientSelector.value

  if( optionFirst == 'deleteFirstRadio' ){
    deleteFirstElement(radio)
    deleteError.innerHTML = 'Haga click en "Consultar" para actualizar los cambios.'
    alert('Haga click nuevamente en "consultar" para actualizar los cambios.')
  }
  if( optionFirst == 'deleteFirstTrauma' ){
    deleteFirstElement(trauma)
    deleteError.innerHTML = 'Haga click en "Consultar" para actualizar los cambios.'
    alert('Haga click nuevamente en "consultar" para actualizar los cambios.')
  }
  if( optionFirst == 'deleteFirstDental' ){
    deleteFirstElement(dental)
    deleteError.innerHTML = 'Haga click en "Consultar" para actualizar los cambios.'
    alert('Haga click nuevamente en "consultar" para actualizar los cambios.')
  }
  return false
})

//Delete Last Patient
const delLastPatientSelector = document.getElementById('deleteLastPatient')
const delLastBtn = document.getElementById('deleteLastBtn')

const deleteLastElement = (array) => {
  array.pop()
}

delLastBtn.addEventListener('click', function(){
  const optionLast = delLastPatientSelector.value

  if( optionLast == 'deleteLastRadio' ){
    deleteLastElement(radio)
    deleteError.innerHTML = 'Haga click en "Consultar" para actualizar los cambios.'
    alert('Haga click nuevamente en "consultar" para actualizar los cambios.')
  }
  if( optionLast == 'deleteLastTrauma' ){
    deleteLastElement(trauma)
    deleteError.innerHTML = 'Haga click en "Consultar" para actualizar los cambios.'
    alert('Haga click nuevamente en "consultar" para actualizar los cambios.')
  }
  if( optionLast == 'deleteLastDental' ){
    deleteLastElement(dental)
    deleteError.innerHTML = 'Haga click en "Consultar" para actualizar los cambios.'
    alert('Haga click nuevamente en "consultar" para actualizar los cambios.')
  }
  return false
})
