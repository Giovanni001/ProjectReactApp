import React, {Component} from 'react'
import config from '../firebase-config'
import ItemPortifolio from './ItemPortifolio'

class Vendas extends Component {
    constructor(props) {
        super(props) 

        //criando um estado do componente Portifolio e add no fire base
        this.state = {
            portifolio: {
                titulo: 'Paris',
                descricao: 'Cidade luz'
            }
        }

        //sincronizando o portifolio criado com o bd
        config.syncState('portifolio', {
            context: this,
            state: 'portifolio',
            asArray: false
        })
    }

        render() {
            return (
                <div>
                    {/* Container (Portfolio Section) */}
                    <div id='portfolio' className='container-fluid text-center bg-grey'>
                        <h2>Vendas de Livros</h2><br />
                        <h4>O que nós vendemos </h4>
                        <div className='row text-center '>
                            
                            {   /*Dentro de portifolio nos podemos acessar as suas chaves, com isso
                                é possivel usar um loop para percorrer as mesmas e com isso exibir cada
                                chave com seu respectivo conteudo do componente Portifolio
                                
                                Comando que retorna as chaves:
                                <p>{JSON.stringify(Object.keys(this.state.portifolio))}</p>*/

                                Object.keys(this.state.portifolio)
                                .map(key => {
                                    return <ItemPortifolio key={key} conteudo={this.state.portifolio[key]}/>
                                })
                            }
                           
                        </div><br />
        
                        <h2>O que nossos cliente dizem</h2>
                        <div id='myCarousel' className='carousel slide text-center' data-ride='carousel'>
                            {/* Indicators */}
                            <ol className='carousel-indicators'>
                                <li data-target='#myCarousel' data-slide-to='0' className='active'></li>
                                <li data-target='#myCarousel' data-slide-to='1'></li>
                                <li data-target='#myCarousel' data-slide-to='2'></li>
                            </ol>
        
                            {/* Wrapper for slides */}
                            <div className='carousel-inner' role='listbox'>
                                <div className='item active'>
                                    <h4>'This company is the best. I am so happy with the result!'<br /><span>Michael Roe, Vice President, Comment Box</span></h4>
                                </div>
                                <div className='item'>
                                    <h4>'One word... WOW!!'<br /><span>John Doe, Salesman, Rep Inc</span></h4>
                                </div>
                                <div className='item'>
                                    <h4>'Could I... BE any more happy with this company?'<br /><span>Chandler Bing, Actor, FriendsAlot</span></h4>
                                </div>
                            </div>
        
                            {/* Left and right controls */}
                            <a className='left carousel-control' href='#myCarousel' role='button' data-slide='prev'>
                                <span className='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
                                <span className='sr-only'>Previous</span>
                            </a>
                            <a className='right carousel-control' href='#myCarousel' role='button' data-slide='next'>
                                <span className='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
                                <span className='sr-only'>Next</span>
                            </a>
                        </div>
                    </div>
                </div>
        
            )
        }
    }
    

    

export default Vendas