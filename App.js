import {BrowserRouter,Routes,Route} from 'react-router-dom';

import './App.css';
import Register from './Component/Register';
import Login from './Component/login';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
