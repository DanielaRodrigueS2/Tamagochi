import './Home.css'
import Botao from '../components/Botao'
import { FaEgg, FaHamburger, FaFutbol } from 'react-icons/fa';


function Home(){

    return(
        <div className='principal'>
            <div className='menuTop'> 
                <Botao Icon={FaEgg} onClick={()=> console.log('Apertou botao')}/>
                <Botao Icon={FaEgg} onClick={()=> console.log('Apertou botao')}/>
                <Botao Icon={FaEgg} onClick={()=> console.log('Apertou botao')}/>
            </div>

            <div className='tela'>

            </div>

            <div className='menuBottom'>
                <Botao Icon={FaEgg} onClick={()=> console.log('Apertou botao')}/>
                <Botao Icon={FaEgg} onClick={()=> console.log('Apertou botao')}/>
                <Botao Icon={FaEgg} onClick={()=> console.log('Apertou botao')}/>
            </div>
        </div>
    )

}

export default Home