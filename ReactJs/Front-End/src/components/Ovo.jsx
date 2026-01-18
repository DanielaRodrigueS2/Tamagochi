import './Ovo.css'
import Ovo_normal from "../sprites/Ovos/Ovo_normal.gif"
import Ovo_rachando from "../sprites/Ovos/Ovo_rachando.gif"
import tubaraoparado from "../sprites/Tubarao/tubaraoparado.gif"
import { useDroppable } from '@dnd-kit/core';
import { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { usarItem, alterarSprite, incrementar } from '../redux/tamagochiSlice';

function Ovo({ultimoItem}){

    //const [sprite, setSprite] = useState(Ovo_normal);
    //const [cliques, setCliques] = useState(0);
    const dispatch = useDispatch();
    const cliques = useSelector(state => state.tamagochi.cliques);
    const sprite = useSelector(state => state.tamagochi.sprite)

    const verificaCliques = () =>{

        if (contagem >= 25 && sprite !== tubaraoparado){
            setSprite(Ovo_rachando);

            setTimeout(() => {
                nascimento()
            }, "3000");
        }
    }

    const nascimento = () =>{
        setSprite(tubaraoparado)
    }

 
    const {isOver, setNodeRef} = useDroppable({
        id: 'tamagochi'
    });
    const style ={
        color: isOver ? 'green' :undefined,
    };
 

    return(
        <div ref={setNodeRef} style={style}>
            <img src={sprite} alt="Ovo" className="Ovo_normal" onClick={verificaCliques}/>
        </div>
        
    );


}

export default Ovo