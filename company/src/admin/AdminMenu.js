import React from 'react'
import {Link} from 'react-router-dom'

const AdminMenu = props => {
    return (
        <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action active">Seleciona uma opção</a>
            <Link to='/admin/vendas' className="list-group-item list-group-item-action">Vendas</Link>
            <Link to='/admin/servicos' className="list-group-item list-group-item-action">Serviços</Link>

        </div>
    )
}

export default AdminMenu