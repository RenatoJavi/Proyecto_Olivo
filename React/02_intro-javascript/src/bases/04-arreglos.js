// Definición de un arreglo de números
const numeros = [1, 2, 3, 4, 5];

// Acceso a elementos del arreglo
console.log("Primer número:", numeros[0]);
console.log("Segundo número:", numeros[1]);

const arreglo=[2,4,6,8,10,1000];
console.log(arreglo[3])

const arregl= new Array(99,2,3,44,5,6);
console.log(arregl[2])




console.log(arregl); // Imprimirá: [1, 2, 3]


const arreglo2=new Array()

arreglo2.push(1);
arreglo2.push(10);
arreglo2.push(100);
console.log(arreglo2)

// Agregar elementos al arreglo

const arreglito =[5,10,15,20,25,30];

let arreglo3=[...arreglito,5];
console.log(arreglo3)

const duplicar=arreglo.map(arreglo=> arreglo*2);
console.log(duplicar)