import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Plogin from './pages/plogin';
import Psignup from './pages/psignup';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="Home" element={<Home></Home>}></Route>
        <Route path='Plogin' element={<Plogin></Plogin>}></Route>
        <Route path='Psignup' element={<Psignup></Psignup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
