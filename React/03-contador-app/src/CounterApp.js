//usar snipet rafcp rafc rafce

import PropTypes from 'prop-types';
import React, { useState } from 'react';






const __CounterApp__ = ({ value }) => {

    const [counter, setCounter] = useState(1);//[valor1,valor2] 
    //el primer elemento del arreglo, que está en el STATE `nombre`
    // Y el segundo objeto dentro de ese arreglo, 
    //es una funcion que normalmente se le pone `setNombre`
    //console.log(nombre, setNombre);

    //evento handleAdd manejar
    const handleEstado = () => {
        //  setCounter(counter + 1 );//suma 2  al counter
        setCounter(c => c + 1);


        //return () => console.log("Hola mundo");

    }

    const handleReset = () => {

        //setCounter(value)
        setCounter(c=>c=0)
    }

    const handleRestar = () => {

        setCounter(c => c - 1)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button onClick={handleEstado}>+1</button>
            <button onClick={handleReset}>reset</button>
            <button onClick={handleRestar}>-1</button>

        </>
    );

}

__CounterApp__.propTypes = {
    value: PropTypes.number //de tipo number
}
export default __CounterApp__;