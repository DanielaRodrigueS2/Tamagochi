import { useState } from "react"
import './NomeTama.css'

function NomeTama(props){

    const [nome, setNome] = useState('')

    const handleSubmit = async (e) => {
        const dadosTamagochi = {nome: nome, fome: 50, energia: 50, felicidade: 50, sprite: 1}
        e.preventDefault();
        try{
            const token = localStorage.getItem('token');
            const res = await fetch(`http://localhost:3000/tamagochi`, {
                method: 'POST',
                body: JSON.stringify(dadosTamagochi),
                headers:{
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            })

            if(!res.ok){
                const erro = await res.json();
                console.error('Erro ao criar tamagochi', erro);
                return;
            }

            const novoTamagochi = await res.JSON();
            console.log('Tamagochi foi criado com sucesso :3', novoTamagochi);


            if(props.onCriado){
                props.onCriado(novoTamagochi);
            }


        }
        catch(erro){
            console.error("Erro ao criar tamagochi", erro);
        }
    }

    return(
        <div className="NomeTama">
            <form onSubmit={handleSubmit}>
                <label>Digite o nome do seu tamagochi: </label>
                <input type="text"  value={nome} onChange={(e) => setNome(e.target.value)}/>
                <button type="submit">Confirmar</button>
            </form>
        </div>

    );
}

export default NomeTama