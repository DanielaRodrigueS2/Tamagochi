import { useState } from 'react';
import './MenuConfig.css'
import { useSelector } from 'react-redux';

function MenuConfig(props){

    const tamagochi = useSelector(state => state.tamagochi);
    const [musica, setMusica] = useState(true);

    const menuLogin = () =>{
        props.setMenu(false);
        props.setMenuLog(true);
    }

    const updateTamagochi = async () =>{
        try{
            const resposta = await fetch(`https://tamagochi-dvli.onrender.com/tamagochi`,{
                method: 'PUT',
                headers:{
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(tamagochi)});

            const data = await resposta.json();
            console.log(resposta);
            console.log('Salvo com sucesso');

        }
            catch(error){
                console.log('Erro ao salvar', error);
        }


    }

    const gerenciaMusica = () =>{
        console.log(musica);
        if (musica){
            props.setMusicaOn();
            setMusica(false);
        }
        if(!musica){
            props.setMusicaOff();
            setMusica(true);
        }
    }

    return(
        <div className='menuConfig'>
            <h1>Configurações</h1>
            <button onClick={updateTamagochi}>Salvar</button>
            <button>Reiniciar</button>
            <button onClick={menuLogin}>Tela de Login</button>
            <button onClick={gerenciaMusica}>Musica</button>
            <button onClick={() => props.setMenu(false)}>Fechar Menu</button>
        </div>
    );

}

export default MenuConfig;