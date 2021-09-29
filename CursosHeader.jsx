import React from 'react';
import {Link} from "react-router-dom"

import '../Header/Header.css'

export default function CursosHeader() {
    return(
            <header className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <Link to="/">Voltar</Link> </li>
                        <li> <Link to="/cursos">Informatica</Link> </li>
                        <li> <Link to="/contatos">Engenharia</Link> </li>
                        <li> <Link to="/parceiros">Quimica</Link> </li>
                        <li> <Link to="/missao">Administração</Link> </li>
                        <li> <Link to="/sobre">Direito</Link> </li>
                        <li> <Link to="/sobre">Psicologia</Link> </li>
                        <li> <Link to="/sobre">Arquitetura</Link> </li>
                    </ul>
                </nav>
            </header>
    )
}
