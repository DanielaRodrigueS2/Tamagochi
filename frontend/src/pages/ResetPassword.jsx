import './ResetPassword.css'
import { useState } from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';


function ResetPassword(){

    const [erro, setErro] =useState('');
    const [senha, setSenha] = useState('')

    const [searchParams] = useSearchParams()
    const navigate = useNavigate();

    const id = searchParams.get('id');
    const token = searchParams.get('token');


    const handleSubmit = async (e) =>{
        
        e.preventDefault();

        if (!senha) {
            setErro('senha inválida');
            return;
        }

        const payload = {
            senha: senha
        }

        try{
            const resposta = await fetch(`https://tamagochi-dvli.onrender.com/${id}/${token}`,{
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(payload)
            });

            const data = await resposta.json();

            if(!resposta.ok){
                const erro = await resposta.json();
                setErro(erro.error || 'Erro inesperado');
                console.log(erro);
                return;
            }

            alert(data.message);
            navigate('/')
        }
        catch(erro){
            console.log(erro);
        }

    }

    return(
        <div className="ResetPassword">
            <form onSubmit={handleSubmit}>
                <label>Nova Senha</label>
                <input onChange={(e) => setSenha(e.target.value)} value={senha} type="password"></input>
                <p>{erro}</p>
                <button type="submit">Alterar Senha</button>
                <button  type='button' onClick={() => navigate('/')}>Voltar</button>
            </form>
        </div>
    )
}

export default ResetPassword