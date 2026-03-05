import './Status.css'
import { useDispatch, useSelector } from 'react-redux';
import { SlEnergy } from "react-icons/sl";
import { FaFish, FaGrin} from "react-icons/fa";
import { useEffect, useState } from 'react';
import { reducaoAutmatica } from '../redux/tamagochiSlice';

function Status(props){
    
    const dispatch = useDispatch();
    const fome = useSelector(state => state.tamagochi.fome);
    const energia = useSelector(state => state.tamagochi.energia);
    const alegria = useSelector(state => state.tamagochi.felicidade);
    const sprite = useSelector(state => state.tamagochi.sprite);

    const retornaCor = (valor) =>{
        if (valor >= 70) return 'green';
        if (valor < 70 && valor >= 30) return '#e6ba1c';
        return 'red';
    }

    useEffect(() =>{
        const timer = setInterval(()=>{
            dispatch(reducaoAutmatica());
        }, 4000)

        return () => clearInterval(timer);
    }, [dispatch]);


    return(
        <div className='Status'>
            <div className='barras'>
                <FaFish size={19} className='Icon'/>
                <div title={`Fome: ${fome}`} className='barra' value={fome} max='100'>
                    <div className='barraValor' style={{width: `${fome}%`, backgroundColor: retornaCor(fome)}}/>
                </div>
            </div>
            <div className='barras'>
                <SlEnergy size={19} className='Icon'/>
                <div title={`Energia: ${energia}`} className='barra' value={energia} max='100'>
                    <div className='barraValor' style={{width: `${energia}%`, backgroundColor: retornaCor(energia)}}/>
                </div>
            </div>
            <div className='barras'>
                <FaGrin size={19} className='Icon'/>
                <div title={`Felicidade: ${alegria}`} className='barra' value={alegria} max='100'>
                    <div className='barraValor' style={{width: `${alegria}%`, backgroundColor: retornaCor(alegria)}}/>
                </div>
            </div>
        </div>
    );
}

export default Status