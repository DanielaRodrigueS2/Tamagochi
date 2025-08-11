import './Registro.css'
import { useState } from 'react'

function Registro(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [validarSenha, setValidarSenha] = useState('');
    const {erro, setErro} = useState('abacaxi');

    return(

        <div className='Registro'>
            <form  onSubmit={handleSubmit} className='forms'>
                <label>Email</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label>Senha</label>
                <input type='password' value={senha} onChange={(e) => setSenha(e.target.value)}></input>
                <input type='password' value={validarSenha} onChange={(e) => setValidarSenha(e.target.value)}></input>
                <button type='submit'>Realizar Login</button>
            </form>

                <h2>{erro}</h2>
                <button>Login</button>
            
        </div>

    )
}