import './MenuLateral.css'
import MenuLateralSwiper from './MenuLateralSwiper'
import { useState, useEffect} from 'react'


function MenuLateral(props){

    const [itens, setItens] = useState(null);
    const [dadosSwiper, setDadosSwiper] = useState([]);

    const getItens = async () =>{
        try{
            const resposta = await fetch('http://localhost:3000/itens');
            
            if(!resposta.ok){
                const erro = await resposta.json();
                console.log(erro);
                return;
            }

            const dados = await resposta.json();
            setItens(dados);
        }
        catch(erro){
            console.log("Erro ao retornara itens", erro);
        }
    }

    const itensSwiper = async (tipo) =>{
        let listaTemporaria = [];

        for(let i=0;i< itens.length;i++){

            if(itens[i].tipo === tipo){
                listaTemporaria.push(itens[i]);
            }
        }
        console.log(listaTemporaria);
        setDadosSwiper(listaTemporaria);
    };

    useEffect(() =>{
        getItens();
    }, []);
    
    useEffect(() =>{
        if (!itens) return;
        
        let tipo = 0;
        switch (props.menu) {
            case 'Ovos':
                tipo = 0;
                break;
            
            case 'Comidas':
                tipo = 1;
                break;

            case 'Brinquedos':
                tipo = 2;
                break;
            
            case 'Banho':
                tipo = 3;
                break;

            case 'Dormir':
                tipo = 4;
                break;

            case 'Jogos':
                tipo = 5;
                break;
        
            default:
                break;
        }
        
        itensSwiper(tipo);
    }, [props.menu, itens])



    return(
        <div className={`Principal ${props.blur? 'blurred' : ''}`}>
            <div className='NomeMenu'>
                <h2>{props.menu}</h2>
            </div>
            <div className='Elementos'>
                <MenuLateralSwiper itens={dadosSwiper} className="MenuLateralSwipper2"></MenuLateralSwiper>
            </div>
            <div className='Rodape'>

            </div>
        </div>

    );

}

export default MenuLateral