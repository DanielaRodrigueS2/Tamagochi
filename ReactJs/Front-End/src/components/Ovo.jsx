import './Ovo.css'
import Ovo_normal from "../sprites/Ovos/Ovo_normal.gif"
import Ovo_rachando from "../sprites/Ovos/Ovo_rachando.gif"
import tubaraoparado from "../sprites/Tubarao/tubaraoparado.gif"
import { useState } from 'react';

function Ovo(){

    const [sprite, setSprite] = useState(Ovo_normal);
    const [cliques, setCliques] = useState(0);

    const verificaCliques = () =>{

        const contagem = cliques + 1;
        setCliques(contagem);

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

    return(
        <div>
            <img src={sprite} alt="Ovo" className="Ovo_normal" onClick={verificaCliques}/>
        </div>
        
    );


}

export default Ovo