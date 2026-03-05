import { useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

// Componente dedicado a exeução de scripts relacionados ao tamagochi
function ScriptsTamagochi({token}){

    const tamagochi = useSelector(state => state.tamagochi);
    const [intervalo, setIntervalo] = useState(60000);

    // Função de update automatico
    const updateTamagochi = async () =>{
        try{
            const resposta = await fetch(`http://localhost:3000/tamagochi`,{
                method: 'PUT',
                headers:{
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(tamagochi)});

            const data = await resposta.json();
            console.log(resposta);
            console.log('Salvo com sucesso');

        }
        catch(error){
            console.log('Erro ao salvar', error);
        }


    }

    // Use Effect para salvamento automatico
    useEffect(() =>{
        
        if (!token) return;
        
        const primeiraFuncao = () =>{
            updateTamagochi();
            novoIntervalo();
        }

        const timer = setTimeout(primeiraFuncao, intervalo);

        return () => clearTimeout(timer);
        
    },[intervalo, tamagochi]);

    // Funcao para resetar intervalo
    const novoIntervalo = () =>{

        const intervaloNovo = Math.floor(Math.random() * 500) + 60000;
        setIntervalo(intervaloNovo);
    }

    return null;

}

export default ScriptsTamagochi;