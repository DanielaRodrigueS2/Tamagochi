import './Login.css'
import { useState } from 'react'

function Login(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefaut();
    }

    return(

        <div className='Login'>
            <form  onSubmit={handleSubmit} className='forms'>
                <label>Email</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label>Senha</label>
                <input type='senha' value={senha} onChange={(e) => setSenha(e.target.value)}></input>
                <button type='submit'>Realizar Login</button>
            </form>
            
        </div>

    )

}

export default Login