import './Registro.css'
import { use, useState } from 'react'

function Registro(props){

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [validarSenha, setValidarSenha] = useState('');
    const [erro, setErro] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        if(senha !== validarSenha){
            setErro('Senhas deve ser iguais');
            return;
        }
        
        const dadosUser = {
            nome: nome,
            email: email,
            senha: senha
        }

        try{

            const resposta = await fetch('http://localhost:3000/register',{
                method : 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(dadosUser)
            });

            if(!resposta.ok){
                const erro = await resposta.json();
                setErro(erro.erro || "Ocorreu um erro inesperado");
                console.log(erro);
                return;
            };

            const dados = await resposta.json();
            console.log('Cadastro realizado com sucesso');
            alert('Usuário cadastrado com sucesso');

        }
        catch(error){
            console.log('Erro ao realizar login', error);
        }
    }

    const telaLogin = () =>{
        props.setMenu(false);
    }

    return(

        <div className='Registro'>
            <h2>Tela de Cadastro</h2>
            <form  onSubmit={handleSubmit} className='formsRegistro'>
                <label>Nome</label>
                <input value={nome} onChange={(e) => setNome(e.target.value)}></input>
                <label>Email</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label>Senha</label>
                <input type='password' value={senha} onChange={(e) => setSenha(e.target.value)}></input>
                <label>Confirmar senha</label>
                <input type='password' value={validarSenha} onChange={(e) => setValidarSenha(e.target.value)}></input>
                <button type='submit'>Realizar Cadastro</button>
            </form>
            <div className='Base'>
                <h2 className='MsgErro'>{erro}</h2>
                <button onClick={telaLogin} className='botaoToLogin'>Tela de Login</button>
            </div>
        </div>

    )
}

export default Registro