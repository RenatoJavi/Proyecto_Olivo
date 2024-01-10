// importa archivo

import { heroes } from "./data/heroes";
import { carros } from './data/autos';
import { nenes } from './data/boys'

export const getHeroById = (id) => {
    return heroes.find(hero => hero.id === id);
}

console.log(getHeroById(2));



const getAutoById = (id) => {

    return carros.find(auto => auto.id === id);
};
console.log(getAutoById(10));



const getAutosPorPais = (pais_origen) => {
    return carros.filter(auto => auto.pais_origen === pais_origen);
};

console.log("pais de origen", getAutosPorPais('Japón'));



const getColor = (color) => {

    return carros.filter(auto => auto.color === color)
}

console.log(getColor('Negro'))

//encontrar finf
//filtrar fiter
//filtra ninos

export const getEdadBoy = (edad) => {

    return nenes.filter(infante => infante.edad === edad)

};

console.log(getEdadBoy(8))






