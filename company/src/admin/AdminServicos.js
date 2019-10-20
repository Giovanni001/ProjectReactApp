import React, { Component } from 'react'
import config, {storage} from '../firebase-config'


class AdminServicos extends Component {
    constructor(props) {
        super(props)

        /* this.gravaServico = this.gravaServico.bind(this) */
    }

    /* gravaServico(e) {
        const itemServico = {
            titulo: this.titulo.value,
            subtitulo: this.subtitulo.value
        }

        console.log(this.titulo.value, this.subtitulo.value)

        const ref = storage.ref(name)

        ref.put()

        e.preventDefault()
    } */

    

    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>Realize um serviço !</h1>

                <form onSubmit={this.gravaServico}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Titulo</label>
                        {/*gravando a referencia do input titulo no this.titulo, ou seja quando o usuario enviar o formulario, ele pegara o dado que foi inserido no campo titulo e enviara ao backend*/}
                        <input type="text" className="form-control" id="titulo" placeholder="Titulo" ref={(ref) => this.titulo = ref}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Sub Titulo</label>
                        <textarea className="form-control" id="subtitulo" rows="3" ref={(ref) => this.subtitulo = ref} ></textarea>
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Imagem</label>
                        <input type="file" className="form-control-file" id="imagem"  />
                    </div> */}
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        )

    }
}

export default AdminServicos
