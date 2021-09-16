import React from 'react';

import './Titulo.css'

export default function Titulo(props){
    return(
        <div>
            <div className="titulo">

                <h3>{props.texto}</h3>
            
        
            </div>
        </div>
    )
}
