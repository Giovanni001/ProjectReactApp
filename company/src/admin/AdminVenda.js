import React, { Component } from 'react'
import config, { storage } from '../firebase-config'

class AdminVenda extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estaGravando: false
        }

        //ele é necessario para garantir o escopo se torne global, ou seja, que outras funções tenham acesso
        this.gravaVenda = this.gravaVenda.bind(this)
    }

    gravaVenda(e) {
        const itemVenda = {
            titulo: this.titulo.value,
            descricao: this.descricao.value,
            imagem: this.imagem,
        }

        this.setState({ estaGravando: true })

        //Uma lista de arquivos que ele pode receber
        //pegando a primeira imagem da lista de arquivos que o file retornou
        const arquivo = itemVenda.imagem.files[0]
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

                const novaVenda = {
                    titulo: itemVenda.titulo,
                    descricao: itemVenda.descricao,
                    imagem: downloadURL,
                }

                //colocando dentro do portifolio que foi criado do fire base o novo objeto
                config.push('vendas', {
                    //o dado que vai ser passado é o novaVenda (data=dado)
                    data: novaVenda
                })

                this.setState({ estaGravando: false })
            })
        })

        e.preventDefault()

    }

    render() {
        if (this.state.estaGravando) {
            return (
                <div className="spinner-border text-dark" role="status">
                    <span className="sr-only">Carregando...</span>
                </div>
            )
        }

        return (

            <div>
                <form onSubmit={this.gravaVenda}>
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

export default AdminVenda