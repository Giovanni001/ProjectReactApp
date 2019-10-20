import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/Cabecalho';
import Inicio from './componentes/Inicio';
import Servicos from './componentes/Servicos'
import Vendas from './componentes/Vendas'
import Precos from './componentes/Precos'
import Contato from './componentes/Contato'

import Admin from './admin/Admin'
import Login from './admin/Login'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Cabecalho />

        {/*Sempre que estiver na rota raiz, carregue o componente Inicio */}
        <Route path='/' exact component={Inicio} />
        <Route path='/servicos' component={Servicos} />
        <Route path='/vendas' component={Vendas} />
        <Route path='/precos' component={Precos} />
        <Route path='/contato' component={Contato} />

        <Route path='/admin' component={Admin} />
        <Route path='/login' component={Login} />

        <Rodape />
      </div>
    </BrowserRouter>
  );
}

export default App;
