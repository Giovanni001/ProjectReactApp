import React from 'react'
import {Link}from 'react-router-dom'

const Cabecalho = props => {
    return (
        <nav className='navbar navbar-default navbar-fixed-top'>
            <div className='container'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    {/* <Link className='navbar-brand' to='/' > Logo </Link>  */}
                </div>
                <div className='collapse navbar-collapse' id='myNavbar'>
                    <ul className='nav navbar-nav navbar-center'>
                        <li> <Link to='/'>Inicio</Link> </li>
                        <li> <Link to='/servicos'>Serviços</Link> </li>
                        <li> <Link to='/vendas'>Vendas</Link> </li>
                        <li> <Link to='/precos'>Preços</Link> </li>
                        <li> <Link to='/contato'>Contato</Link> </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Cabecalho