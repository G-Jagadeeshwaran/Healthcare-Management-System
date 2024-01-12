import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Plogin from './pages/plogin';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="Home" element={<Home></Home>}></Route>
        <Route path='Plogin' element={<Plogin></Plogin>}></Route>
      </Routes>
    </div>
  );
}

export default App;
