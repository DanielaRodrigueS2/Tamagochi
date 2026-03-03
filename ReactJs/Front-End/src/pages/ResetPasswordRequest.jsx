import { useState } from 'react';
import './ResetPasswordRequest.css'
import { useNavigate } from 'react-router-dom';

function ResetPasswordRequest(){

    const [email, setEmail] = useState('')
    const [erro, setErro] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if (!email){
            setErro('Email inválido');
            return;
        }

        const payload ={
            email: email
        }

        try{    

            const resposta = await fetch(`http://localhost:3000/resetPasswordRequest`,{
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(payload)});

            if (!resposta.ok){
                const erro = await resposta.json();
                setErro(erro || 'Erro inesperado');
                return;
            }

            const mensagem = await resposta.json();
            alert(mensagem.mensagem);
            setErro('');
            
        }
        catch(erro){
            console.log(erro);
        }

    }


    return(
        <div className='ResetPasswordRequest'>
            <form onSubmit={handleSubmit} className='formResetPasswordRequest'>
                <label>Email de recuperação</label>
                <input type='email' value={email} onChange={(e) =>setEmail(e.target.value)}></input>
                <p>{erro}</p>
                <button type='submit'>Enviar Email</button>
                <button  type='button' onClick={() => navigate('/')}>Voltar</button>
            </form>
        </div>
    )
}

export default ResetPasswordRequest;