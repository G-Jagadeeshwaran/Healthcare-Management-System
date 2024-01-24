import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home page/home';
import Plogin from './pages/Patient login/plogin';
import Psignup from './pages/Patient signup/psignup';
import Dlogin from './pages/Doctor login/dlogin';
import Dsignup from './pages/Doctor signup/dsignup';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="Home" element={<Home></Home>}></Route>
        <Route path='Plogin' element={<Plogin></Plogin>}></Route>
        <Route path='Psignup' element={<Psignup></Psignup>}></Route>
        <Route path='Dlogin' element={<Dlogin></Dlogin>}></Route>
        <Route path='Dsignup' element={<Dsignup></Dsignup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
