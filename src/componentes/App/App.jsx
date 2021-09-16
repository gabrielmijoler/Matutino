import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Inicio from '../Inicio/Inicio';
import Parceiros from '../Parceiros/index.jsx';
import Cursos from '../Cursos/Cursos.jsx';
import Sobre from '../Sobre/Sobre.jsx';
import Missao from '../Missao/Missao.jsx';
import Contatos from '../Contatos/Contatos.jsx';

function App() {
  return (
  <div>
      
      <Header />
    
    <main>
      <Switch>
        <Route exact path="/" render={(props) => <Inicio/>}></Route>
        <Route exact path="/cursos" render={(props) => <Cursos/>}></Route>
        <Route exact path="/cursos" render={(props) => <Contatos/>}></Route>
        <Route exact path="/parceiros" render={(props) => <Parceiros/>}></Route>
        <Route exact path="/missao" render={(props) => <Missao/>}></Route>
        <Route exact path="/sobre" render={(props) => <Sobre/>}></Route>
        
        

      </Switch>
    </main>
      <Footer />
    
</div>

  );
}

export default App;
