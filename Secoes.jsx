import React from "react";
import "./Secoes.css"

export default function Secoes() {
    return (
        <div>
            <div className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <a href="#inicio"> Nosso canal </a> </li>
                        <li> <a href="#cursos"> Cursos</a> </li>
                        <li> <a href="#contatos"> Contatos </a> </li>
                        <li> <a href="#parceiros"> Parceiros </a> </li>
                        <li> <a href="#missao">  Missão</a> </li>
                        <li> <a href="#sobre">  Sobre</a> </li>
                    </ul>
                </nav>
            </div>

            <section id="inicio">
                <h2> Nosso canal </h2>
                <aside className="aside">
                        <a href="#inicio" id = "inicio2"> Nosso canal </a> 
                        <a href="#cursos" id = "cursos2"> Cursos</a> 
                        <a href="#contatos" id = "contatos2"> Contatos </a> 
                        <a href="#parceiros" id = "parceiros2"> Parceiros </a>
                        <a href="#missao" id = "missao2"> Missão</a> 
                        <a href="#sobre" id = "sobre2"> Sobre</a> 
                </aside>
            </section>

            <section id='inicio'>
                <h2> Inicio </h2>
            </section>
            <section id='cursos'>
                <h2> Cursos </h2>
            </section>
            <section id='contatos'>
                <h2> Contatos </h2>
            </section>
            <section id='parceiros'>
                <h2> Parceiros </h2>
            </section>
            <section id='missao'>
                <h2> Missão </h2>
            </section>
            <section id='sobre'>
                <h2> Sobre </h2>
            </section>

            <a class = 'voltarTopo' href = ".menu">Topo</a> 
            <a class = 'irInicio' href = "#inicio"> Inicio</a> 
            <a class = 'irCursos' href = "#cursos">Cursos</a> 
            <a class = 'irContatos' href = "#contatos">Contatos</a> 
            <a class = 'irParceiros' href = "#parceiros">Parceiros</a> 
            <a class = 'irMissao' href = "#missao">Missão</a> 
            <a class = 'irSobre' href = "#sobre">Sobre</a> 
                   
            <footer>
                <h3> Rodapé </h3>
            </footer>
        </div>
    )
}
/* class voltar topo -- linha <a> voltar para cima menu */