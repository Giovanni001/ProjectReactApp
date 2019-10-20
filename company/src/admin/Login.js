import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {auth} from './../firebase-config'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estaAutenticado: false,
            estaLogando: false,
            erro: false
        }

        this.email = null
        this.senha = null

        this.autenticaUsuario = this.autenticaUsuario.bind(this)
    }

    autenticaUsuario() {
        this.setState({estaLogando: true, erro: false})
        auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
        .then(user => {
            console.log('Usuario Logado: ',user)
            this.setState({estaAutenticado: true})
        })
        .catch(err => {
            console.log('Erro ', err)
            this.setState({erro: true,estaAutenticado: false, estaLogando: false})
        })
    }

    render() {
        if(this.state.estaAutenticado){
            return <Redirect to='/admin' />
        }

        return (
            <div style={{padding: '50px' }}>
                <div className="form-group" style={{ paddingTop: '50px'}}>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" name='email' ref={ref => this.email = ref} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" name='senha' ref={ref => this.senha = ref} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    {/* se der erro, ele mostra a msg de erro pois está usando o && */}
                    {this.state.erro && <p><small>error</small></p>}
                </div>
                <button type="button" disabled={this.state.estaLogando} className="btn btn-primary" onClick={this.autenticaUsuario}>Submit</button>
            </div>

        )
    }
}

export default Login
