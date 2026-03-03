import './ResetPassword.css'
import { useState } from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';


function ResetPassword(){

    const [erro, setErro] =useState('erro');
    const [senha, setSenha] = useState('')

    const [searchParams] = useSearchParams()
    const navigate = useNavigate();

    const id = searchParams.get('id');
    const token = searchParams.get('token');


    const handleSubmit = async (e) =>{
        if (!senha) {
            setErro('senha inválida');
            return;
        }

        const payload = {
            senha: senha
        }

        try{
            const resposta = await fetch(`http://localhost:3000/resetPassword/${id}/${token}`,{
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(payload)
            });

            if(!resposta.ok){
                const erro = await resposta.json();
                setErro(erro.error || 'Erro inesperado');
                console.log(erro);
                return;
            }

            const mensagem = await resposta.json();
            alert(mensagem);
            navigate('/')
        }
        catch(erro){

        }

    }

    return(
        <div className="ResetPassword">
            <form onSubmit={handleSubmit}>
                <label onChange={(e) => setSenha(e.target.value)}>Nova Senha</label>
                <input type="password"></input>
                <p>{erro}</p>
                <button type="submit">Alterar Senha</button>
            </form>
        </div>
    )
}

export default ResetPassword