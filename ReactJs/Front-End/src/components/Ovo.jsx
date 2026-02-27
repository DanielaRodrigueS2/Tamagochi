import './Ovo.css'
import { useDroppable } from '@dnd-kit/core';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { usarItem, alterarSprite, incrementar } from '../redux/tamagochiSlice';

function Ovo(props){

    const dispatch = useDispatch();
    const cliques = useSelector(state => state.tamagochi.cliques);
    const sprite = useSelector(state => state.tamagochi.sprite);

    const verificaCliques = () =>{
        dispatch(incrementar());
        console.log(cliques);
        if (cliques >= 25 && sprite == 'Ovo_normal.gif'){

            dispatch(alterarSprite('Ovo_rachando.gif'));

            setTimeout(() => {
                dispatch(alterarSprite('tubaraoparado.gif'));
            }, 3000);
        }
    }

    const usouItem = () =>{

        dispatch(usarItem({
            fome: props.ultimoItem.fome,
            energia: props.ultimoItem.energia,
            felicidade: props.ultimoItem.felicidade,
        }));

        console.log(props.ultimoItem.tipo);
        switch (props.ultimoItem.tipo) {
            case 1:
            case 2:
                spriteTemporarioComida();
                break;
            
            case 3:
                spriteTemporarioBanho();
                break;

            case 4:
                spriteTemporarioDormir();
                break;

            case 5:
                spriteTubaraoBrincar();
                break;
            default:
                break;
        }

    }

    const spriteTemporarioComida = () =>{
        dispatch(alterarSprite('tubaraofeliz.gif'));
        setTimeout(() =>{
            dispatch(alterarSprite('tubaraoparado.gif'));
        }, 2000)
    }

    const spriteTemporarioBanho = () =>{
        dispatch(alterarSprite('tubaraobanho.gif'));
        setTimeout(() =>{
            dispatch(alterarSprite('tubaraoparado.gif'));
        },4000)
    }

    const spriteTemporarioDormir = () =>{
        dispatch(alterarSprite('tubaraodormindo.gif'));
        setTimeout(() =>{
            dispatch(alterarSprite('tubaraoparado.gif'));
        }, 6000)
    }

    const spriteTubaraoBrincar = () =>{
        dispatch(alterarSprite('tubaraoenfeitado.gif'));
        setTimeout(() =>{
            dispatch(alterarSprite('tubaraoparado.gif'));
        }, 4000)
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

    
 

    return(
        <div ref={setNodeRef} style={style} className='Ovo_Principal'>
            <img src={`Sprites/${sprite}`} alt="Ovo" className="Ovo_normal" onClick={verificaCliques}/>
        </div>
        
    );


}

export default Ovo