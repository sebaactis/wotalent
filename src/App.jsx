import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import '../src/sass/main.scss';
import Home from './components/Home/Home';
import QuienesSomos from './components/QuienesSomos/QuienesSomos';
import Servicios from './components/Servicios/Servicios';
import Contacto from './components/Contacto/Contacto';
import Busquedas from './components/Busquedas/Busquedas';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import PanelBusquedas from './components/PanelBusquedas/PanelBusquedas';
import BusquedaDetail from './components/Busquedas/BusquedaDetail';
import Login from './components/Login/Login';
import { useEffect, useState } from 'react';

function App() {

  const [accessToken, setAccessToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      setAccessToken(true);
    }
  }, [accessToken])

  return (

    <BrowserRouter>
      <NavBar accessToken={accessToken} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/quienes-somos" element={<QuienesSomos />} />
        <Route exact path="/servicios" element={<Servicios />} />
        <Route exact path="/busquedas" element={<Busquedas />} />
        <Route exact path="/busquedas/detalle/:codigo" element={<BusquedaDetail />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path="/login" element={accessToken ? <Navigate to="/panel" /> : <Login setAccessToken={setAccessToken} />} />
        <Route exact path="/panel" element={accessToken ? <PanelBusquedas /> : <Navigate to="/login" />} />
      </Routes>
      <Footer accessToken={accessToken} setAccessToken={setAccessToken} />
    </BrowserRouter>

  )
}

export default App
