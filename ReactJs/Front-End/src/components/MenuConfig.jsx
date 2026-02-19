import { useState } from 'react';
import './MenuConfig.css'
import { useSelector } from 'react-redux';

function MenuConfig(props){

    const tamagochi = useSelector(state => state.tamagochi);

    const menuLogin = () =>{
        props.setMenu(false);
        props.setMenuLog(true);
    }

    const updateTamagochi = () =>{
        console.log(tamagochi);
        try{
            fetch(`http://3000/tamagochi`,{
                method: 'PATCH',
                headers:{
                    'Content-Type' : 'applications/json',
                    'Authorization' : `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(tamagochi)
            });

            console.log('Salvo com sucesso');

        }
            catch(error){
                console.log('Erro ao salvar')
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