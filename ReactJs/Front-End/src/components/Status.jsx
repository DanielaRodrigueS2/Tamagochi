import './Status.css'
import { useDispatch, useSelector } from 'react-redux';
import { SlEnergy } from "react-icons/sl";
import { FaFish, FaGrin} from "react-icons/fa";
import { useEffect, useState } from 'react';
import { reducaoAutmatica } from '../redux/tamagochiSlice';

function Status(props){
    
    const dispatch = useDispatch();
    const fome = useSelector(state => state.tamagochi.fome);
    const energia = useSelector(state => state.tamagochi.energia)
    const alegria = useSelector(state => state.tamagochi.felicidade)

    const retornaCor = (valor) =>{
        if (valor >= 70) return 'green';
        if (valor < 70 && valor >= 30) return 'yellow';
        return 'red';
    }

    useEffect(() =>{
        const timer = setInterval(()=>{
            dispatch(reducaoAutmatica());
        }, 2000)

        return () => clearInterval(timer);
    }, [dispatch]);


    return(
        <div className='Status'>
            <div className='barras'>
                <FaFish size={19} className='Icon'/>
                <progress style={{accentColor: retornaCor(fome)}}  title={`Fome: ${fome}`} className='barra' value={fome} max='100'></progress>
            </div>
            <div className='barras'>
                <SlEnergy size={19} className='Icon'/>
                <progress style={{accentColor: retornaCor(energia)}} title={`Energia: ${energia}`} className='barra' value={energia} max='100'></progress>
            </div>
            <div className='barras'>
                <FaGrin size={19} className='Icon'/>
                <progress  style={{accentColor: retornaCor(alegria)}} title={`Felicidade: ${alegria}`} className='barra' value={alegria} max='100'></progress>
            </div>
        </div>
    );
}

export default Status