import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Login } from './routes/Login';
import {Home} from './routes/Home'
import { Address } from './privateroutes/Address';
import { NavBar } from './Components/Navbar/NavBar';
import { Footer } from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Login/>}/>
        <Route path='/profile' element={<Address/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
