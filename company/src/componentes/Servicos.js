import React, { Component } from 'react'
import config from '../firebase-config'
import ItemServicos from './ItemServicos'

class Servicos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            servicos: {
                titulo: 'POWER',
                subTitulo: 'Poderosas empresas aliadas'
            }
        }

        config.syncState('servicos', {
            context: this,
            state: 'servicos',
            asArray: false
        })
    }

        
    

    render() {
        return (
            <div>
                <div className='jumbotron text-center'>
                    <h1>Look Book</h1>
                    <p>Um aplicativo especializado em livros</p>
                </div>

                <div id='services' className='container-fluid text-center'>
                    <h2>Serviços</h2>
                    <h4>O que nos oferecemos</h4>
                    <br />
                    <div className='row '>

                        
                            {  Object.keys(this.state.servicos)
                            .map(key => {
                                return <ItemServicos key={key} conteudo={this.state.servicos[key]} />
                            })  }
                        

                       
                    </div>
                </div>
            </div>
        )
    }
}




export default Servicos