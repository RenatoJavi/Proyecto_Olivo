import { heroesPoder } from './data/heroes'
//import { getHeroById } from './data/importarArchivos';
//promesas
const usoPromesa = new Promise((resolve, reject) => {

    setTimeout(() => {

        const getHeroById = (id) => {
            const foundHeroe = heroesPoder.find(hero => hero.id === id);
            //si foundHeroe `es verdad` 
            if (foundHeroe) {
                console.log('ID encontrado');
                resolve(foundHeroe);

            } else {
                reject('ID no encontrado');
            }
        };
        let id = 5;
        getHeroById(id);//  envio el valor del `id` a la función

    }, 2000);

});

//Uso de la promesa
usoPromesa
    .then((HEROE) => {
        console.log("EXITO niko", HEROE)
    })
    .catch((error) => { console.error("Error", error) });