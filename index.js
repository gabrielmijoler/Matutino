import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {BrowserRouter} from 'react-router-dom'

import App from "./componentes/App/App";


ReactDOM.render(
  <BrowserRouter>
  <div className="geral">

    <App/>

  </div>,
  </BrowserRouter>,

  document.getElementById('root')
);