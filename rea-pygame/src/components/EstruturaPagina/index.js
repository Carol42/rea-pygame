import React from 'react';
import './style.css';

export default function Inicio() {
    return (
        <div className="boxTitulo">
            <h2>Jogos em Python</h2>
            <h1>Pacman em Python com PyGame</h1>
            <img className="imagemPac" src={require("./pacman.jpg")} alt="Pacman"/>
            <div className= "boxTutorial">
                <p>Pacman é jogo extremamente popular. Aqui, demonstraremos o processo de como contrui-lo em python, com o uso da biblioteca PyGame.<br></br>Para tal, deve-se ter conhecimento de Objetos, Classes, Metaclasses, Tuplas, Constantes e Matrizes. </p>
            </div>
            <h1>1.Funções Basicas do Pygame</h1>

        </div>
    );
}