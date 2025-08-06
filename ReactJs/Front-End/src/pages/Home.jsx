import './Home.css'
import Botao from '../components/Botao'
import Ovo from '../components/Ovo';
import Status from '../components/Status';
import MenuLateral from '../components/MenuLateral';
import Login from '../components/Login';
import { FaEgg, FaHamburger, FaFutbol, FaBath, FaBed, FaGamepad} from 'react-icons/fa';
import { useState } from 'react';

function Home(){

    const [botaoApertado, setBotaoApertado] = useState('')

    return(
        <div className='estrutura'>
            <div className='principal'>
                <div className='menuTop'> 
                    <Botao Icon={FaEgg} onClick={()=> setBotaoApertado('Ovos')}/>
                    <Botao Icon={FaHamburger} onClick={()=> setBotaoApertado('Comidas')}/>
                    <Botao Icon={FaFutbol} onClick={()=> setBotaoApertado('Brinquedos')}/>
                </div>

                <div className='tela'>
                    <Status></Status>
                    <Ovo></Ovo>
                </div>

                <div className='menuBottom'>
                    <Botao Icon={FaBath} onClick={()=> setBotaoApertado('Banho')}/>
                    <Botao Icon={FaBed} onClick={()=> setBotaoApertado('Dormir')}/>
                    <Botao Icon={FaGamepad} onClick={()=> setBotaoApertado('Jogos')}/>
                </div>

            </div>

            <MenuLateral menu = {botaoApertado}></MenuLateral>

            <Login></Login>
            
        </div>
        
    )

}

export default Home