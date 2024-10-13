/* ******************** FUNCIONES DEL INDEX QUE UTILICE *********************/ 
function añadirClass(elemento, clase){
    elemento.classList.add(clase)
}

function removeClass(elemento, clase){
    elemento.classList.remove(clase)
}

function ponerAnimacion(elemento, nombre, duracion, velocidad, fill){
    elemento.style.animation = `${nombre} ${duracion} ${velocidad} ${fill}`
}

function ponerBackground(elemento, color){
    elemento.style.backgroundColor = color
}

function ponerTransform(elemento, tipo){
    elemento.style.transform = tipo
}

function ponerBoxShadow(elemento, diseño){
    elemento.style.boxShadow = diseño
}
