import React from 'react';

import './Cursos.css'
import CursosHeader from './CursosHeader';
import Titulo from '../Titulo/Titulo';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Inicio from '../Inicio/Inicio';

export default function Cursos(){
    return(
        <div>
            <CursosHeader/>
            
            <Titulo texto="Seção de Cursos da Empresa"/>

            <div className="cursos">
            <mainCursos>
                <Switch>
                <Route exact path="/" render={(props) => <Inicio/>}></Route>

                </Switch>
            </mainCursos>

        
            </div>
        </div>
    )
}

