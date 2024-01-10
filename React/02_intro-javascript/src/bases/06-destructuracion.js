//destructuracion

//objeto persona
const persona = {

    nombre: "Niko",
    edad: 35,
    ciudad: "Ibarra",
    clave: 'Iroman',

};

//destructurar el objeto
//const { nombre, edad, ciudad,clave } = persona
//uso de las variables estraidas

//console.log(nombre)
//console.log(ciudad)

// si quiero extraer solo unos elementos diectamente
const retornaPersona = ({ clave, nombre, edad, rango = 'capitan' }) => {
    //console.log(nombre,edad,rango)
    return {
        nombreClave: nombre,
        anios: edad,
        latlng: {
            latitud: 12.1,
            longitud: -23.0
        }
    }

}

//const { nombreClave, anios, latlng: { latitud, longitud } } = retornaPersona(persona);

//console.log(latitud, longitud)

//console.log(nombreClave, anios)

const { nombreClave, anios, latlng } = retornaPersona(persona);
const {latitud,longitud}= latlng
console.log(latitud,longitud)
//console.log(retornaPersona(persona));








//objeto moto
const moto = { llantaMarca: "pireli", barras: "motorex", aceite: 1 }
//desctructurar_moto
const { llantaMarca, barras, aceite } = moto

console.log(barras)
console.log(aceite)

