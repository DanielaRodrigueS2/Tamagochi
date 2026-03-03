import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ResetPassword from './pages/ResetPassword'
import ResetPasswordRequest from './pages/ResetPasswordRequest';
import Home from "./pages/Home";
import './App.css'

function App(){
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/passwordReset' element={<ResetPassword/>}/>
        <Route path='/passwordResetRequest' element={<ResetPasswordRequest/>}/>
      </Routes>
    </BrowserRouter>
  );

}

export default App
