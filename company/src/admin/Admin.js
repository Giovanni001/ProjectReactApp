import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { auth } from './../firebase-config'
import AdminMenu from './AdminMenu'
import AdminPortifolio from './AdminPortifolio'

class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estaLogando: true,
            estaAutenticado: false,
            user: null,
            render: false
        }
    }
    /* o componente carregou */
    componentDidMount() {
        /* verificando se o componente teve uma mudança de estado de autenticação 
           verifica se o usuario esta logado */
        auth.onAuthStateChanged(user => {
            /* se tiver ele grava dentro do estado que ele nao esta mais logando e que ele já esta autenticado */
            this.setState({
                estaLogando: false,
                estaAutenticado: !!user,
                user
            })
        })
    }

    render() {
        //verifica se o usuario existe
        if (this.state.estaLogando) {
            return <p>aguarde... </p>
        }
        //se o usuario nao existir, ele é redirecionado para a rota Login
        if (!this.state.estaAutenticado) {
            return <Redirect to='/login' />
        }



        return (
            <div style={{ padding: '50px' }}>
                <h2>Painel Administrativo</h2>
                <Route path={'/'} component={AdminMenu} />
                <Route path={`${this.props.match.url}/portifolio`} component={AdminPortifolio} />
            </div>
        )
    }
}

export default Admin