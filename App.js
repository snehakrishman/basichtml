import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Add from './Component/Add';
import List from './Component/List';

function App(){
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Add/>}/>
      <Route path='/List' element={<List/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
