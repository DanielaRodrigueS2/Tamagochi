function Botao({Icon,onClick}){
    
    const Estilo = {

        margin: '10px',
        padding: '12px',
        borderRadius: '50%',
        border: 'none',
        backgroundColor: '#ffe0e0',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.6s',
    };
    
    return(
        <button onClick={onClick} style={Estilo}>
            {Icon && <Icon size={24}/>}
        </button>


    );

}

export default Botao