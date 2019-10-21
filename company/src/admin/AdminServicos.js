import React, { Component } from 'react'
import config, {storage} from './../firebase-config'

class AdminServicos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estaGravando: false
        }

        this.gravaServico = this.gravaServico.bind(this) 
    }

    gravaServico(e) {
        const itemServico = {
            titulo: this.titulo.value,
            subTitulo: this.subTitulo.value,
            imagem: this.imagem
        }
        this.setState({ estaGravando: true })

        //console.log(this.titulo.value, this.subTitulo.value)

        const arquivo = itemServico.imagem.files[0]
        const { name, size, type } = arquivo
        console.log(name, size, type)


        const ref = storage.ref(name)

        ref.put(arquivo).then(img => {
            img.ref.getDownloadURL().then(downloadURL => {

                const novoServico = {
                    titulo: itemServico.titulo,
                    subTitulo: itemServico.subTitulo,
                    imagem: downloadURL
                }
                config.push('servicos', {
                    data: novoServico
                })

                this.setState({ estaGravando: false })
            })
        })

        e.preventDefault()
    }
    

    

    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>Realize um serviço !</h1>

                <form onSubmit={this.gravaServico} >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Titulo</label>
                        {/*gravando a referencia do input titulo no this.titulo, ou seja quando o usuario enviar o formulario, ele pegara o dado que foi inserido no campo titulo e enviara ao backend*/}
                        <input type="text" className="form-control" id="titulo" placeholder="Titulo" ref={(ref) => this.titulo = ref}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Sub Titulo</label>
                        <input type="text" className="form-control" id="subTitulo" placeholder="Titulo" ref={(ref) => this.subTitulo = ref}  />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Imagem</label>
                        <input type="file" className="form-control-file" id="imagem" ref={(ref) => this.imagem = ref} />
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        )

    }
}

export default AdminServicos
