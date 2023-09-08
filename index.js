
// Captura de elementos HTML
const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#lista');
const elemento = document.querySelector('#elemento');
const input = document.querySelector('#input');
const botonEnter = document.querySelector('#boton-enter');

// Clases
const check = 'fa-check-circle';
const uncheck = 'fa-circle';
const lineThrougt = 'line-through';

let LIST;

let id = 0;


//Creación de fecha actualizada
const FECHA = new Date();

fecha.innerHTML = FECHA.toLocaleDateString('es', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
});


//Función Agregar Tarea
function agregarTarea(tarea, id, realizado, eliminado){
    if (eliminado) {return} // Si existe eliminado es true si no es false

    //Si realizado true check, false uncheck
    const REALIZADO = realizado ? check : uncheck; 

    const LINE = realizado ? lineThrougt : '';

    const elemento = `
                    <li id="elemento">
                        <i class="far ${REALIZADO} co" 
                           data="realizado" 
                           id="${id}"
                        ></i>
                        <p class="text ${LINE}">${tarea}</p>
                        <i class="fas fa-trash de"
                           data="eliminado" 
                           id="${id}"
                        ></i>
                    </li>
    
    `

    
}


//Función Tarea Realizada
function tareaRealizada(elemento){


}


//Función Tarea Eliminada
function tareaEliminada(element){

}

//Crear eventos para el enter en el input y el click en el boton
botonEnter.addEventListener('click', ()=>{
    const tarea = input.value;

    if (tarea) {
        agregarTarea(tarea, id, false, false);
        LIST.push({
            nombre: tarea,
            id: id,
            realizado: false,
            eliminado: false
        });

        //Falta almacenamiento

        input.value = '';
        id++;   
    };
});

document.addEventListener('keyup', function(event){
    if (event.key == 'Enter'){
        const tarea = input.value;

        if (tarea) {
            agregarTarea(tarea, id, false, false);
            LIST.push({
                nombre: tarea,
                id: id,
                realizado: false,
                eliminado: false
            });

            //Falta almacenamiento

            input.value = '';
            id++;  
        };
    };
});


// Evento para cambiar estado de la tarea y eliminar tarea





//Get local Storage