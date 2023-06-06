import React from 'react'
import imgMain from '../../assets/images/mainImagen.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="mainHome">
      <div>
        <h3 className="fs-1"> Encontra el trabajo que estas buscando! </h3>
        <p className="fs-1">Sigamos impulsando el <span className="talentWord fw-bold">talento</span></p>
        <button className="mainButton"><Link className="mainButtonLink" to="/busquedas">Ver Busquedas</Link></button>
        
      </div>
      <img className="imgMain" src={imgMain} alt="imagen de gente trabajando" />
      


    </main>
  )
}

export default Home;