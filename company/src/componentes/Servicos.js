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
    }

        /* config.syncState('servicos', {
            context: this,
            state: 'servicos',
            asArray: false
        })
    } */

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

                        {
                            /* Object.keys(this.state.servicos)
                            .map(key => {
                                return <ItemServicos key={key} conteudo={this.state.servicos[key]} />
                            }) */
                        }

                        <div className='col-sm-4'>
{/*                             <span className='glyphicon glyphicon-off logo-small servicos'></span>*/}                           
                            <h4>{this.state.servicos.titulo}</h4>
                            <p>{this.state.servicos.subTitulo}</p>
                        </div>


                        {/* <div className='col-sm-4'>
                            <span className='glyphicon glyphicon-heart logo-small servicos'></span>
                            <h4>LOVE</h4>
                            <p>Amor a arte de ler livros</p>
                        </div>
                        <div className='col-sm-4'>
                            <span className='glyphicon glyphicon-lock logo-small servicos'></span>
                            <h4>JOB DONE</h4>
                            <p>Trabalho com garantia de conclusão</p>
                        </div> */}
                    </div>
                    <br /><br />
                    {/* <div className='row '>
                        <div className='col-sm-4'>
                            <span className='glyphicon glyphicon-leaf logo-small servicos'></span>
                            <h4>GREEN</h4>
                            <p>Respeitamos o meio ambiente</p>
                        </div>
                        <div className='col-sm-4'>
                            <span className='glyphicon glyphicon-certificate logo-small servicos'></span>
                            <h4>CERTIFIED</h4>
                            <p>Possuimos sertificados confiaveis</p>
                        </div>
                        <div className='col-sm-4'>
                            <span className='glyphicon glyphicon-wrench logo-small servicos'></span>
                            <h4>HARD WORK</h4>
                            <p>Trabalhamos duro para oferecer serviços de qualidade</p>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }


}

export default Servicos