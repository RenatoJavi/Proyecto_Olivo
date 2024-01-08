//template string

const nombre = "niko"
const apellido ="Salazar"
const nomCompleto= ` Hola mundo  ${nombre}`;
console.log(nomCompleto)

function getSaludo (nombre){

    return `Hello companero ${nombre}`;
}



console.log(`${getSaludo('Kiko')}`)