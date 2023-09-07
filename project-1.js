let contactos = ["Moises Carrillo", "Maria Paula", "Rene descartes"]

function añadirContacto(contacto) {
    contactos.push(contacto);
}

añadirContacto("Baruch Spinoza");

function borrarContacto(contacto) {
    contactos.splice(contactos.indexOf(contacto), 1);
}

borrarContacto("Maria Paula");

function imprimirContactos() {
        for (let contacto of contactos) {
            console.log(contacto)
        }
}

imprimirContactos();
