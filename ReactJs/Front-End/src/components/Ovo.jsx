import './Ovo.css'
import { useDroppable } from '@dnd-kit/core';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { usarItem, alterarSprite, incrementar } from '../redux/tamagochiSlice';

function Ovo({ultimoItem}){

    const dispatch = useDispatch();
    const cliques = useSelector(state => state.tamagochi.cliques);
    const sprite = useSelector(state => state.tamagochi.sprite);
    const [proximoSprite, setProximoSprite] = useState(null)

    const verificaCliques = () =>{
        dispatch(incrementar());
        console.log(cliques);
        if (cliques >= 25 && sprite !== 'tubaraoparado.gif'){

            setProximoSprite('Ovo_rachando.gif');
            dispatch(alterarSprite(proximoSprite));

            setTimeout(() => {
                
                setProximoSprite('tubaraoparado.gif');
                dispatch(alterarSprite(proximoSprite));
            }, "3000");
        }
    }

    const usouItem = () =>{
        dispatch(usarItem({
            fome: ultimoItem.fome,
            energia: ultimoItem.energia,
            felicidade: ultimoItem.felicidade,
        }));
    }


    useEffect(() =>{
        console.log(ultimoItem.fome, ultimoItem.energia, ultimoItem.felicidade);
        if(ultimoItem != null){
            usouItem();
        }
    }, [ultimoItem])

 
    // Drag and drop
    const {isOver, setNodeRef} = useDroppable({
        id: 'tamagochi'
    });
    const style ={
        color: isOver ? 'green' :undefined,
    };
 

    return(
        <div ref={setNodeRef} style={style}>
            <img src={`Sprites/${sprite}`} alt="Ovo" className="Ovo_normal" onClick={verificaCliques}/>
        </div>
        
    );


}

export default Ovo