import React from 'react'

const itemServicos = props => {
    return (
        <div >
            <div className='col-sm-4'>
                <img src={props.conteudo.imagem} className='imgTamanho'/>
                <h3>{props.conteudo.titulo}</h3>
                <h5>{props.conteudo.subTitulo}</h5>
            </div>
        </div>
    )
}

export default itemServicos

/*OBS: esse arquivo n ta sendo usado ainda, ele é pra ser criado dps que 
 os dados estao sincrnizados com o fire base */