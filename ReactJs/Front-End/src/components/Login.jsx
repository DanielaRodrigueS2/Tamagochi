import './Login.css'
import { useState } from 'react'

function Login(props){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const {erro, setErro} = useState('abacaxi');

    const handleSubmit = async (e) =>{
        e.preventDefaut();
        
        const dadosUser = {
            email: email,
            senha: senha,
        }
        try{

            const resposta = await fetch('http://localhost:3000/login', {method: 'POST' ,body: JSON.stringify(dadosUser)});

            if(!resposta.ok){
                const erro = await resposta.json();
                setErro(erro);
                console.log(erro);
                return;
            }

            const dados = await resposta.json();
            const token = dados.token;
            const user = dados.usuario;            
            props.armazenaToken(token)

        }
        catch(erro){
            console.error('Erro ao realizar login')
        }
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

                <h2>{erro}</h2>
                <button>Realizar Cadastro</button>
            
        </div>

    )

}

export default Login