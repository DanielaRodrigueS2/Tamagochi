import { useState } from 'react';
import './MenuConfig.css'
import { useSelector } from 'react-redux';

function MenuConfig(props){

    const tamagochi = useSelector(state => state.tamagochi);

    const menuLogin = () =>{
        props.setMenu(false);
        props.setMenuLog(true);
    }

    const updateTamagochi = async () =>{
        try{
            const resposta = await fetch(`http://localhost:3000/tamagochi`,{
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

    return(
        <div className='menuConfig'>
            <h1>Configurações</h1>
            <button onClick={updateTamagochi}>Salvar</button>
            <button>Reiniciar</button>
            <button onClick={menuLogin}>Tela de Login</button>
            <button onClick={() => props.setMenu(false)}>Fechar Menu</button>
        </div>
    );

}

export default MenuConfig;