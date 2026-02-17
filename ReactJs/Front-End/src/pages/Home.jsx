import './Home.css'
import Botao from '../components/Botao'
import Ovo from '../components/Ovo';
import Status from '../components/Status';
import MenuLateral from '../components/MenuLateral';
import Login from '../components/Login';
import Registro from '../components/Registro'
import MenuConfig from '../components/MenuConfig';
import { FaEgg, FaHamburger, FaFutbol, FaBath, FaBed, FaGamepad, FaRegSun, FaGithub, FaLinkedin} from 'react-icons/fa';
import { use, useEffect, useState } from 'react';
import { DndContext } from '@dnd-kit/core';

function Home(){

    const [botaoApertado, setBotaoApertado] = useState('');
    const [menuLogin, setMenuLogin] = useState(true);
    const [menuRegistro, setMenuRegistro] = useState(false);
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [isDropped, setIsDropped] = useState(false);
    const [ultimoItem, setUltimoItem] = useState(null)

    //Função para armazenar o token no local storage
    const armazenaToken = (token) =>{
        localStorage.setItem('token', token);
        setToken(token);
    }
    
    function handleDragEnd(event){
        
        if (event.over && event.over.id === 'tamagochi'){
            setIsDropped(true);
            console.log('Dropou');
            setUltimoItem(event.active.data.current);
            console.log(ultimoItem)
        }

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

            <header className={`header ${menuLogin ? 'blurred' : ''}`}>
                <Botao Icon={FaRegSun} className='botaoConfiguracoes'></Botao>
                <a href="https://github.com/DanielaRodrigueS2" target='_blank' rel="noopener noreferrer"> <Botao Icon={FaGithub} className='botaoGitHub'></Botao></a>
                <a href="https://www.linkedin.com/in/daniela-rodrigues-2b956b295/" target='_blank' rel="noopener noreferrer"> <Botao Icon={FaLinkedin} className='botaoLinkedin'></Botao></a>
            </header>

            <div className='menusTamagochi'>
                <DndContext onDragEnd={handleDragEnd}>
                    <div className={`principal ${menuLogin ? 'blurred' : ''}`}>
                        <div className='menuTop'> 
                            <Botao Icon={FaEgg} onClick={()=> setBotaoApertado('Ovos')}/>
                            <Botao Icon={FaHamburger} onClick={()=> setBotaoApertado('Comidas')}/>
                            <Botao Icon={FaFutbol} onClick={()=> setBotaoApertado('Brinquedos')}/>
                        </div>

                        <div className='tela'>
                            <Status></Status>
                            <Ovo ultimoItem={ultimoItem}></Ovo>
                        </div>

                        <div className='menuBottom'>
                            <Botao Icon={FaBath} onClick={()=> setBotaoApertado('Banho')}/>
                            <Botao Icon={FaBed} onClick={()=> setBotaoApertado('Dormir')}/>
                            <Botao Icon={FaGamepad} onClick={()=> setBotaoApertado('Jogos')}/>
                        </div>

                    </div>
                
                    <MenuLateral blur={menuLogin} menu = {botaoApertado} ></MenuLateral>

                </DndContext>
                
            </div>


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