import React from 'react'

const ItemVenda = props => {
    return (
        <div className='col-sm-4'>
            <div className='thumbnail'>
                <img src={props.conteudo.imagem} className='imgTamanho'/>
               <p><strong>{props.conteudo.titulo}</strong></p>
               <p>{props.conteudo.descricao}</p>
            </div>
        </div>
    )
}

export default ItemVenda