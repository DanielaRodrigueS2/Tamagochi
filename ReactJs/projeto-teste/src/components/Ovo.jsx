import './Ovo.css'
import Ovo_normal from "../sprites/Ovo_normal.gif"
import Ovo_rachando from "../sprites/Ovo_rachando.gif"
import BichoNormal from "../sprites/BichoNormal.gif"
import { useState } from 'react';

function Ovo(){

    const [sprite, setSprite] = useState(Ovo_normal);
    const [cliques, setCliques] = useState(0);

    const verificaCliques = () =>{

        const contagem = cliques + 1;
        setCliques(contagem);

        if (contagem >= 25 && sprite !== BichoNormal){
            setSprite(Ovo_rachando);

            setTimeout(() => {
                nascimento()
            }, "3000");
        }
    }

    const nascimento = () =>{
        setSprite(BichoNormal)
    }

    return(
        <div>
            <img src={sprite} alt="Ovo" className="Ovo_normal" onClick={verificaCliques}/>
        </div>
        
    );


}

export default Ovo