import React from 'react'
import img from '../book.jpg'

const Inicio = props => {
    return (
        <div>
            {/* Container (About Section) */}
            <div id='about' className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-8'>
                        <h2>Sobre o Look Book</h2><br />
                        <h4>Look Book é um aplicativo que conecta pessoas a vendedores que estão dispostos a venderem
                            seus livros de uma forma diferente e intuitiva.</h4><br />
                        <p></p>
                    </div>
                </div>
            </div>
            <div className="jumbotron">
                <h1 className="display-4">O amor a arte da leitura !</h1>
                <p className="lead">Use o nosso site para se conectar a seus livros mais cobiçados e adquira-os de forma rapida e pratica.</p>
                <hr className="my-4" />
            </div>

        </div>
    )
}

export default Inicio