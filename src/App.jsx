import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../src/sass/main.scss';
import Home from './components/Home/Home';
import QuienesSomos from './components/QuienesSomos/QuienesSomos';
import Servicios from './components/Servicios/Servicios';
import Contacto from './components/Contacto/Contacto';
import Busquedas from './components/Busquedas/Busquedas';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {

  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/quienes-somos" element={<QuienesSomos />} />
        <Route exact path="/servicios" element={<Servicios />} />
        <Route exact path="/busquedas" element={<Busquedas />} />
        <Route exact path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
