import NavBarItems from '../NavBar/NavBarItems'
import logo from '../../assets/images/wologo.png'
import { AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const Footer = ({ accessToken, setAccessToken }) => {

  const handleSession = () => {

    const token = localStorage.getItem('accessToken')

    fetch('https://wotalent.netlify.app/api/session/logout', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },

    })
      .then(response => response.json())
      .then(data => {
        Swal.fire({
          title: 'Cerraste sesion correctamente',
          icon: 'success',
          confirmButtonText: 'Cerrar'
        })
      })
      .catch(error => console.log('Error', error));

    localStorage.removeItem('accessToken')

    setAccessToken(false);
  }

  return (
    <footer className="footer">

      <section className="row">
        <section className="mailSection col-lg-4 gap-3 d-flex flex-column justify-content-center">
          <article className="d-flex gap-3 justify-content-center align-items-start">
            <AiOutlineMail className="mailIcon" />
            <h3 className="fs-6">
              Contacto: <span className="m-2 fw-bold"> info@wotalent.com.ar </span>
            </h3>

          </article>

          <article className="seleccionDivFooter d-flex gap-3 justify-content-center align-items-start">
            <AiOutlineMail className=" mailIcon" />
            <h3 className="fs-6">
              Envia tu CV:<span className="m-2 fw-bold"> seleccion@wotalent.com.ar </span>
            </h3>

          </article>

        </section>

        <section className="navbarFooter col-lg-4 d-flex justify-content-center">
          <NavBarItems isInFooter={true} />
        </section>

        <section className="logoSection d-flex flex-column justify-content-center align-items-center col-lg-4">
          <img className="logo" src={logo} alt='logo' />
          <h3 className="derechosText text-white fw-bold"> © Todos los derechos reservados COWO Talent 2023</h3>
          {accessToken ? <button onClick={handleSession}> Cerrar Sesion </button> : <Link to="/login"> <button> Login </button> </Link>}
        </section>
      </section>
    </footer>
  )
}

export default Footer