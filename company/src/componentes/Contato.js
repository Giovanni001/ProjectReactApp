import React from 'react'

const Contato = props => {
    return(
        <div>
            {/* Container (Contact Section) */}
            <div id='contact' className='container-fluid bg-grey'>
                <h2 className='text-center'>CONTACT</h2>
                <div className='row'>
                    <div className='col-sm-5'>
                        <p>Contate-nos e nós retornaremos em até 24h.</p>
                        <p><span className='glyphicon glyphicon-map-marker'></span>Jundiai, SP</p>
                        <p><span className='glyphicon glyphicon-phone'></span> +11 1515151515</p>
                        <p><span className='glyphicon glyphicon-envelope'></span> myemail@something.com</p>
                    </div>
                    <div className='col-sm-7 '>
                        <div className='row'>
                            <div className='col-sm-6 form-group'>
                                <input className='form-control' id='name' name='name' placeholder='Name' type='text' required />
                            </div>
                            <div className='col-sm-6 form-group'>
                                <input className='form-control' id='email' name='email' placeholder='Email' type='email' required />
                            </div>
                        </div>
                        <textarea className='form-control' id='comments' name='comments' placeholder='Comment' rows='5'></textarea><br />
                        <div className='row'>
                            <div className='col-sm-12 form-group'>
                                <button className='btn btn-default pull-right' type='submit'>Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contato