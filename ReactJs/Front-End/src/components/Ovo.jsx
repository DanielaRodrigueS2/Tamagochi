import './Ovo.css'
import { useDroppable } from '@dnd-kit/core';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { usarItem, alterarSprite, incrementar } from '../redux/tamagochiSlice';

function Ovo(props){

    const dispatch = useDispatch();
    const tamagochi = useSelector(state => state.tamagochi);
    const cliques = useSelector(state => state.tamagochi.cliques);
    const sprite = useSelector(state => state.tamagochi.sprite);
    const [intervalo, setIntervalo] = useState(60000);

    const verificaCliques = () =>{
        dispatch(incrementar());
        console.log(cliques);
        if (cliques >= 25 && sprite !== 'tubaraoparado.gif'){

            dispatch(alterarSprite('Ovo_rachando.gif'));

            setTimeout(() => {
                dispatch(alterarSprite('tubaraoparado.gif'));
            }, "3000");
        }
    }

    const usouItem = () =>{
        dispatch(usarItem({
            fome: props.ultimoItem.fome,
            energia: props.ultimoItem.energia,
            felicidade: props.ultimoItem.felicidade,
        }));

    }


    useEffect(() =>{
        if(props.ultimoItem != null){
            console.log(props.ultimoItem.fome, props.ultimoItem.energia, props.ultimoItem.felicidade);
            usouItem();
            props.setUltimo(null);
        }
    }, [props.ultimoItem])


    // Drag and drop
    const {isOver, setNodeRef} = useDroppable({
        id: 'tamagochi'
    });
    const style ={
        color: isOver ? 'green' :undefined,
    }; 

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
        
        const primeiraFuncao = () =>{
            updateTamagochi();
            novoIntervalo();
        }

        const timer = setTimeout(primeiraFuncao, intervalo);

        return () => clearTimeout(timer);
        
    },[intervalo]);

    // Funcao para resetar intervalo
    const novoIntervalo = () =>{

        const intervaloNovo = Math.floor(Math.random() * 500) + 60000;
        setIntervalo(intervaloNovo);
    }
 

    return(
        <div ref={setNodeRef} style={style} className='Ovo_Principal'>
            <img src={`Sprites/${sprite}`} alt="Ovo" className="Ovo_normal" onClick={verificaCliques}/>
        </div>
        
    );


}

export default Ovo