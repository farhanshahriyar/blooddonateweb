import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/parts/Navbar'
import Footer from './components/parts/Footer'
import About from './components/pages/About'
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp'
import Login from './components/pages/Login'
import Request from './components/pages/Request'
import Donate from './components/pages/Donate'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/request" element={<Request></Request>}></Route>
        <Route path="/donate" element={<Donate></Donate>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
