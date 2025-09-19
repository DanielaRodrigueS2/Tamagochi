import './Home.css'
import Botao from '../components/Botao'
import Ovo from '../components/Ovo';
import Status from '../components/Status';
import MenuLateral from '../components/MenuLateral';
import Login from '../components/Login';
import Registro from '../components/Registro'
import { FaEgg, FaHamburger, FaFutbol, FaBath, FaBed, FaGamepad} from 'react-icons/fa';
import { useEffect, useState } from 'react';

function Home(){

    const [botaoApertado, setBotaoApertado] = useState('');
    const [menuLogin, setMenuLogin] = useState(true);
    const [menuRegistro, setMenuRegistro] = useState(false)
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    //Função para armazenar o token no local storage
    const armazenaToken = (token) =>{
        localStorage.setItem('token', token);
        setToken(token);
    }

    useEffect(() =>{
        const validarToken = async () => {

            const tokenSalvo = localStorage.getItem('token');
            if(tokenSalvo){
                try{
                    const res = await fetch('http://localhost:3000/validate',{
                    headers:{Authorization: `Bearer ${tokenSalvo}`}
                })
            
                if(!res.ok) throw new Error("Token inválido");

                const data = await res.json();

                setUser(data);
                setToken(tokenSalvo);
                armazenaToken(token)
                setMenuLogin(false);

                }
                catch(error){
                    console.log(error);
                    localStorage.removeItem('token');
                    setMenuLogin(true)
                    setUser(null)
                }
            }
        }

        validarToken();

    }, [])



    return(
        <div className='estrutura'>
            <div className={`principal ${menuLogin ? 'blurred' : ''}`}>
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
            
            <MenuLateral blur={menuLogin} menu = {botaoApertado} ></MenuLateral>
            
            {menuLogin && (
                <Login armazenaToken={armazenaToken} setMenu={setMenuLogin} setMenuRegis={setMenuRegistro}></Login>
            )}

            {menuRegistro && (
                <Registro setMenu={setMenuRegistro} setMenuLog={setMenuLogin}></Registro>
            )}
            
        </div>
        
    )

}

export default Home