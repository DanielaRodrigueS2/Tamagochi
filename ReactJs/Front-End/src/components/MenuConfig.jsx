import './MenuConfig.css'

function MenuConfig(props){

    return(
        <div className='menuConfig'>
            <h1>Configurações</h1>
            <button>Salvar</button>
            <button>Reiniciar</button>
            <button>Tela de Login</button>
            <button onClick={() => props.setMenu(false)}>Fechar Menu</button>
        </div>
    );

}

export default MenuConfig;