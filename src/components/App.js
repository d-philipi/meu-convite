import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicial from '../Pages/Inicial/Inicial';
import Convidados from '../Pages/Convidados/Convidados';
import Presentes from '../Pages/Presentes/Presentes';
import Header from './Header/Header';
import Timer from './Timer/Timer';
import Menu from './Menu/Menu';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Inicial/>}/>
      <Route path='/convidados' element={<Convidados/>}/>
      <Route path='/presentes' element={<Presentes/>}/>
    </Routes>
    <Menu/>
    </BrowserRouter>
    
  );
}

export default App;
