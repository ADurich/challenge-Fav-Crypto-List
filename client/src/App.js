import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './components/Home'; 
import DetailCurrency from './components/DetailCurrency';
import FavCurrencies from './components/FavCurrencies';
import Delete from './components/Delete';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/DetailCurrency/:id' element={<DetailCurrency/>}/>
        <Route path='/FavCurrencies' element={<FavCurrencies/>}/>
        <Route path='/Delete' element={<Delete />}/>
      </Routes>     
    </div>
    </BrowserRouter>
  );
}

export default App;