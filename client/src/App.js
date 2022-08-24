import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
//import LandingPage from './components/LandingPage';
import Home from './components/Home'; 
import Currencies from './components/Currencies'; 
import DetailCurrency from './components/DetailCurrency';
import Delete from './components/Delete';

//deploy
//try and catch
//corregir nombres y console.log



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        {/*<Route exact path='/' element={<LandingPage/>}/>*/}
        <Route path='/Home' element={<Home />}/>
        <Route path='/Currencies' element={<Currencies />}/>
        <Route path='/DetailCurrency/:id' element={<DetailCurrency/>}/>
        <Route path='/Delete' element={<Delete />}/>
      </Routes>     
    </div>
    </BrowserRouter>
  );
}

export default App;