import './MenuLateral.css'
import MenuLateralSwiper from './MenuLateralSwiper'
import { useState, useEffect} from 'react'


function MenuLateral(props){

    const [itens, setItens] = useState(null);
    const [dadosSwiper, setDadosSwiper] = useState([]);

    const getItens = async () =>{
        try{
            const resposta = await fetch('https://localhost/itens');

            if(!resposta.ok){
                const erro = await resposta.json();
                console.log(erro);
                return;
            }

            const dados = await reposta.json();
            setItens(dados);
        }
        catch(erro){
            console.log("Erro ao retornara itens", erro);
        }
    }

    const itensSwiper = async () =>{
        for(i=0;i< itens.length;i++){
            switch (itens[i].tipo) {
                case 1:
                    
                    break;
            
                default:
                    break;
            }
        }
    }

    useEffect(() =>{
        getItens();
    }, [])

    return(
        <div className={`Principal ${props.blur? 'blurred' : ''}`}>
            <div className='NomeMenu'>
                <h2>{props.menu}</h2>
            </div>
            <div className='Elementos'>
                <MenuLateralSwiper itens={dadosSwiper}></MenuLateralSwiper>
            </div>
            <div className='Rodape'>

            </div>
        </div>

    );

}

export default MenuLateral