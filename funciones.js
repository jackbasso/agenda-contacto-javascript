const guardarContacto = (db, contacto) => {
    db.setItem(contacto.id, JSON.stringify(contacto)) // setItem requiere 2 parametros key + value
    window.location.href = '/' //redirección forzada a pagina, es una forma primitiva por usar js puro
}

const cargarContactos = (db, parentNode) => {
    let claves = Object.keys(db) // array con todas las claves
    //console.log(claves)
    for (clave of claves){
        let contacto = JSON.parse(db.getItem(clave))
        //console.log(contacto.numero)
        crearContacto(parentNode, contacto, db)
    }
}

const crearContacto = (parentNode, contacto, db) => {
// Añadiendo HTML
    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let numeroContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span')

// Añadiendo el contenido    
    nombreContacto.innerHTML = contacto.nombre
    numeroContacto.innerHTML = contacto.numero
    direccionContacto.innerHTML = contacto.direccion
    iconoBorrar.innerHTML = 'delete_forever' //string pa q me reconozca q es un google icon

// Añadiendo las clases
    divContacto.classList.add('tareas')
    iconoBorrar.classList.add('material-icons', 'icono')
// Añadiendo función borrado eliminando del db y retornando al index
    iconoBorrar.onclick = () => {
        db.removeItem(contacto.id)
        window.location.href = '/'
    }


// Añadiendo al hijo que toca
    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconoBorrar)

// Añadiendo al nodo padre
    parentNode.appendChild(divContacto) //listado de tareas
}
