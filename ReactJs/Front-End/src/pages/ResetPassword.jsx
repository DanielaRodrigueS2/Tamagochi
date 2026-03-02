import './ResetPassword.css'
import { useState } from 'react'


function ResetPassword(){

    const [erro, setErro] =useState('erro')

    const handleSubmit = () =>{

    }

    return(
        <div className="ResetPassword">
            <form onSubmit={handleSubmit}>
                <label>Nova Senha</label>
                <input type="password"></input>
                <p>{erro}</p>
                <button type="submit">Alterar Senha</button>
            </form>
        </div>
    )
}

export default ResetPassword