import React, { Component } from 'react'
import config, { storage } from './../firebase-config'

class AdminPortifolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estaGravando: false
        }

        //ele é necessario para garantir o escopo se torne global, ou seja, que outras funções tenham acesso
        this.gravaPortifolio = this.gravaPortifolio.bind(this)
    }

    gravaPortifolio(e) {
        const itemPortifolio = {
            titulo: this.titulo.value,
            descricao: this.descricao.value,
            imagem: this.imagem
        }

        this.setState({ estaGravando: true })

        //pegando a primeira imagem da lista de arquivos que o file retornou
        const arquivo = itemPortifolio.imagem.files[0]
        const { name, size, type } = arquivo
        console.log(name, size, type)

        //passando o nome do arquivo como referencia dentro do storage
        const ref = storage.ref(name)

        //upa o arquivo para dentro do storage
        ref.put(arquivo).then(img => {
            //apos isso estou pegando a URL do objeto img que foi gerado
            img.ref.getDownloadURL().then(downloadURL => {
                //estou imprimindo o link do que foi gerado do objeto getDonwloadURL
                //console.log(downloadURL)

                const novoPortifolio = {
                    titulo: itemPortifolio.titulo,
                    descricao: itemPortifolio.descricao,
                    imagem: downloadURL
                }

                //colocando dentro do portifolio que foi criado do fire base o novo objeto
                config.push('portifolio', {
                    //o dado que vai ser passado é o novoPortifolio (data=dado)
                    data: novoPortifolio
                })

                this.setState({ estaGravando: false })
            })
        })

        e.preventDefault()

    }

    render() {
        if (this.state.estaGravando) {
            return (
                <div className='alert alert-primary'>
                    <p>Aguarde...</p>
                </div>
            )
        }

        return (

            <div>
                <form onSubmit={this.gravaPortifolio}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Titulo</label>
                        {/*gravando a referencia do input titulo no this.titulo, ou seja quando o usuario enviar o formulario, ele pegara o dado que foi inserido no campo titulo e enviara ao backend*/}
                        <input type="text" className="form-control" id="titulo" placeholder="Titulo" ref={(ref) => this.titulo = ref} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Descrição</label>
                        <textarea className="form-control" id="descricao" rows="3" ref={(ref) => this.descricao = ref}></textarea>
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

export default AdminPortifolio