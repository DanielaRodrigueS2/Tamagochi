import './Login.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux';

function Login(props){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        const dadosUser = {
            email: email,
            senha: senha,
        }
        try{

            const resposta = await fetch('http://localhost:3000/login', {
                method: 'POST' ,
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(dadosUser)});

            if(!resposta.ok){
                const erro = await resposta.json();
                setErro(erro.erro || "Erro inesperado");
                console.log(erro);
                return;
            }

            const dados = await resposta.json();
            const token = dados.token;
            const user = dados.usuario;
            const tamagochi = dados.tamagochi;
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('tamagochi', JSON.stringify(tamagochi))
            props.armazenaToken(token);

            dispatch(carregarTamagochi(tamagochi));

            props.setMenu(false);

        }
        catch(erro){
            console.error('Erro ao realizar login')
        }
    }

    const Cadastrar = async (e) =>{
        e.preventDefault()
        props.setMenuRegis(true)
    }

    return(

        <div className='Login'>
            <h2>Tela de Login</h2>
            <form  onSubmit={handleSubmit} className='forms'>
                <label>Email</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label>Senha</label>
                <input type='password' value={senha} onChange={(e) => setSenha(e.target.value)}></input>
                <button type='submit'>Realizar Login</button>
            </form>
            <div className='Base'>
                <h3 className='MsgErro'>{erro}</h3>
                <button onClick={Cadastrar} className='RealizarCadastro'>Realizar Cadastro</button>
            </div>
        </div>

    )

}

export default Login