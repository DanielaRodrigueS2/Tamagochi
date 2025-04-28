import './Home.css'
import Botao from '../components/Botao'
import Ovo from '../components/Ovo';
import { FaEgg, FaHamburger, FaFutbol, FaBath, FaBed, FaGamepad} from 'react-icons/fa';


function Home(){

    return(
        <div className='principal'>
            <div className='menuTop'> 
                <Botao Icon={FaEgg} onClick={()=> console.log('Apertou botao')}/>
                <Botao Icon={FaHamburger} onClick={()=> console.log('Apertou botao')}/>
                <Botao Icon={FaFutbol} onClick={()=> console.log('Apertou botao')}/>
            </div>

            <div className='tela'>
                <Ovo></Ovo>
            </div>

            <div className='menuBottom'>
                <Botao Icon={FaBath} onClick={()=> console.log('Apertou botao')}/>
                <Botao Icon={FaBed} onClick={()=> console.log('Apertou botao')}/>
                <Botao Icon={FaGamepad} onClick={()=> console.log('Apertou botao')}/>
            </div>
        </div>
    )

}

export default Home