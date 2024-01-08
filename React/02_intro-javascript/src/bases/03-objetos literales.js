//objetos literales

// Definición de un objeto con llaves y valores
const persona = {
  nombre: "Juan",
  edad: 25,
  ciudad: "villa Malecon"
};

// Acceso a los valores utilizando las llaves
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Ciudad:", persona.ciudad);
//console.table({persona})
console.log(persona)

const auto={

  marca:"BMW",
  color:"amarillo",
  placa: "QUITO",
  noCircula:"martes",
}
console.log("No circula: ",auto.noCircula)

//para clonar

const persona2={ ...persona }

console.log("persona: ",persona)
console.log("persona 2: ",persona2)