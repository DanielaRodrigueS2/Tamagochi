import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ResetPassword from './pages/ResetPassword'
import Home from "./pages/Home";
import './App.css'

function App(){
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/passwordReset' element={<ResetPassword/>}/>
      </Routes>
    </BrowserRouter>
  );

}

export default App
