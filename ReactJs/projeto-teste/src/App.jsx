import { useState } from "react";

function App(){
  
  const [msg1, setmsg1] = useState('Botão legal abaixo');
  
  const mudarMensagem = () =>{
    setmsg1('Botão atacado')

  };

  return(
    <div>
      <h1>Site Abacaxi</h1>
      <h1>{msg1}</h1>
      <button onClick={mudarMensagem}>Não clique em mim</button>
    </div>


  );

}

export default App
