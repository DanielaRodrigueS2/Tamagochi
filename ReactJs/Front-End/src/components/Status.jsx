import './Status.css'
import { useSelector } from 'react-redux';
import { SlEnergy } from "react-icons/sl";
import { FaFish, FaGrin} from "react-icons/fa";
import { useEffect, useState } from 'react';

function Status(props){
    
    const fome = useSelector(state => state.tamagochi.fome);
    const energia = useSelector(state => state.tamagochi.energia)
    const alegria = useSelector(state => state.tamagochi.felicidade)

    const retornaCor = (valor) =>{
        if (valor >= 70) return 'green';
        if (valor < 70 && valor >= 30) return 'yellow';
        return 'red';
    }


    useEffect(() =>{
        console.log(fome, energia, alegria);
    },[fome, energia, alegria])

    return(
        <div className='Status'>
            <div className='barras'>
                <FaFish size={19} className='Icon'/>
                <progress style={{accentColor: retornaCor(fome)}} className='barra' value={fome} max='100'></progress>
            </div>
            <div className='barras'>
                <SlEnergy size={19} className='Icon'/>
                <progress style={{accentColor: retornaCor(energia)}}  className='barra' value={energia} max='100'></progress>
            </div>
            <div className='barras'>
                <FaGrin size={19} className='Icon'/>
                <progress  style={{accentColor: retornaCor(alegria)}} className='barra' value={alegria} max='100'></progress>
            </div>
        </div>
    );
}

export default Status