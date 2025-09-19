import { useState } from "react"
import './NomeTama.css'

function NomeTama(props){

    const [nome, setNome] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefaut();
        
    }

    return(
        <div className="NomeTama">
            <form onSubmit={handleSubmit}>
                <label>Digite o nome do seu tamagochi: </label>
                <input type="text"  value={nome} onChange={(e) => setNome(e.target.value)}/>
                <button type="submit">Confirmar</button>
            </form>
        </div>

    );
}

export default NomeTama