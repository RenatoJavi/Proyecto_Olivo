//import { Fragment } from "react";
//LOS componentes tienen propiedades `props`
import PropTypes from 'prop-types';



const PrimeraApp = ({ saludo, subtitulo }) => {



    //const saludo = 'hola mundo'//{ nombre: 'Xavi', edad:2}
    //console.log(props);
    return (
        <> {/* Fragment<>va vacio */}
            <h1> {saludo}</h1>
            <p>{subtitulo}</p>
            {/* <pre>{JSON.stringify(saludo,null,2)}</pre>//para imprimir objetos */}
            <p>"HOLA Mona lisa"</p>
        </>
    );

}
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    //otra:PropTypes.string.isRequired
};
PrimeraApp.defaultProps = {
    subtitulo: 'soy un subtitulo'
}




export default PrimeraApp;