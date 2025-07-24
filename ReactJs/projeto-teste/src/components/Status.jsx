import './Status.css'
import { useState } from 'react'
import { SlEnergy } from "react-icons/sl";
import { FaFish, FaGrin} from "react-icons/fa";

function Status(props){
    
    const [fome, setFome] = useState(20)
    const [energia, setEnergia] = useState(20)
    const [alegria, seteAlegria] = useState(20)


    return(
        <div className='Status'>
            <div className='barras'>
                <FaFish size={18}/>
                <progress className='barra' value={fome} max='100'></progress>
            </div>
            <div className='barras'>
                <SlEnergy size={18}/>
                <progress className='barra' value={energia} max='100'></progress>
            </div>
            <div className='barras'>
                <FaGrin size={18}/>
                <progress className='barra' value={alegria} max='100'></progress>
            </div>
        </div>
    );
}

export default Status