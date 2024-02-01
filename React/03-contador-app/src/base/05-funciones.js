//funciones 

const saludar = function (nombre) {

    return `hola ${nombre}`
}



console.log('HOLAS', saludar('NIKO'))

const pagar = (salario) => {

    return `fecha de pago ${salario}`


}
console.log("fin de mes", pagar(20))

//tarea
const getUsuarioACTIVO = (nombres)=> 

    ( {
        id: "ADB123",
        username: nombres,
    })


const usuarioActivo= getUsuarioACTIVO("Lucas");
console.log(usuarioActivo);