import React from "react";
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';// crear una ruta
//import PrimeraApp from "./PrimeraApp";//importar modulo para la ruta
import './index.css'; //estilo
import CounterApp from './CounterApp';
const root = createRoot(document.getElementById('app'));// app que esta en el index.html

//root.render(<PrimeraApp saludo="hola vaca loca" />);
root.render(<CounterApp value={0} />);




















//const saludo = <h1>Hola mundo</h1>;
//console.log(saludo);

//const divRoot = document.querySelector('#app');
//const root = createRoot(document.getElementById('app'));
//const root = createRoot(document.querySelector('#app'));


//root.render(<PrimeraApp />);
//ReactDOM.render(<PrimeraApp />, divRoot);
//createRoot.render(saludo,divRoot);