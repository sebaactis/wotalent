import React from 'react'
import NavBarItems from './NavBar/NavBarItems'
import logo from '../assets/images/logocowo.png'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="footer row">

      <section className="mailSection col-lg-4 gap-3 d-flex flex-column justify-content-center">
        <article className="d-flex gap-3 justify-content-center align-items-start">
          <AiOutlineMail className="fs-5 mailIcon" />
          <h3 className="fs-6">
            Contacto: <span className="m-2 fw-bold"> info@cowotalent.com.ar </span>
          </h3>

        </article>

        <article className="d-flex gap-3 justify-content-center align-items-start">
          <AiOutlineMail className="fs-5 mailIcon"/>
          <h3 className="fs-6">
            Envia tu CV:<span className="m-2 fw-bold"> seleccion@cowotalent.com.ar </span> 
          </h3>

        </article>

      </section>

      <section className="navbarFooter col-lg-4 d-flex justify-content-center">
        <NavBarItems isInFooter={true} />
      </section>

      <section className="logoSection d-flex flex-column justify-content-center align-items-center col-lg-4">
      <img className="logo" src={logo} alt='logo' />
        <h3 className="fs-6 text-white fw-bold"> © Todos los derechos reservados COWO Talent 2023</h3>
      </section>
    </footer>
  )
}

export default Footer