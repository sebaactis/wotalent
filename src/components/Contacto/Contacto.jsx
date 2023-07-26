import { useState } from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { RiMailSendLine } from 'react-icons/ri'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import { IoPeople } from "react-icons/io5";
import Swal from 'sweetalert2';



const Contacto = () => {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [consulta, setConsulta] = useState("");

  const handleName = (e) => setNombre(e.target.value);
  const handleApellido = (e) => setApellido(e.target.value);
  const handleEmpresa = (e) => setEmpresa(e.target.value);
  const handleTelefono = (e) => setTelefono(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleConsulta = (e) => setConsulta(e.target.value);

  const enviarConsulta = (e) => {
    e.preventDefault();

    const objConsulta = {
      nombre,
      apellido,
      empresa,
      telefono,
      email,
      consulta
    }

    fetch('https://wotalent.glitch.me/api/busquedas/contacto', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(objConsulta)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

    setNombre("")
    setApellido("")
    setEmpresa("")
    setTelefono("")
    setEmail("")
    setConsulta("")

    Swal.fire({
      title: 'Consulta Enviada',
      icon: 'success',
      confirmButtonText: 'Cerrar',
      confirmButtonColor: '#DF2B5C'
  })

  }

  return (
    <section className="contactoSection container">
      <h1 className="fw-bold titleContacto my-3">Contacto</h1>
      <div className="line"></div>
      <article className="row">

        <form onSubmit={enviarConsulta} className="form col-lg-7">
          <div className="titleDiv">
            <AiOutlineQuestionCircle className="contactIcon" />
            <h3 className="titleContact">Hacenos tu consulta</h3>
          </div>

          <div className="formDiv">

            <label htmlFor="name">Nombre</label>
            <input onChange={handleName} value={nombre} required="required" type="text" name="apellido">
            </input>

          </div>

          <div className="formDiv">

            <label htmlFor="apellido">Apellido</label>
            <input onChange={handleApellido} value={apellido} type="text" name="apellido">
            </input>

          </div>
          <div className="formDiv">

            <label htmlFor="empresa">Empresa</label>
            <input onChange={handleEmpresa} value={empresa} type="text" name="empresa">
            </input>

          </div>
          <div className="formDiv">

            <label htmlFor="telefono">Telefono</label>
            <input onChange={handleTelefono} value={telefono} type="tel" name="telefono">
            </input>

          </div>
          <div className="formDiv">

            <label htmlFor="email">Email</label>
            <input onChange={handleEmail} value={email} type="email" name="email">
            </input>
          </div>

          <div className="formDiv">
            <label htmlFor="consulta">Consulta</label>
            <textarea className="fw-bold" onChange={handleConsulta} value={consulta} row="10" cols="60" name="consulta"></textarea>

          </div>

          <button className="buttonContacto"> Enviar </button>
        </form>

        <div className="col-lg-5 contactoCv">
          <div className="mailTextContacto">
            <RiMailSendLine className="contactoCvIcon" />
            <h2 className="titleContactoCv">Envianos tu CV <span className="fw-bold">seleccion@wotalent.com.ar</span></h2>
          </div>
          <div className="mailTextRedes">
            <IoPeople className="contactoRedesIcon" />
            <h2 className="fs-4"> Seguinos en nuestras redes </h2>
          </div>
          <div className="redesContacto">
            <a href="https://www.linkedin.com/company/cowotalent/" target="_blank">
              <BsLinkedin className="linkedinLogo" />
            </a>
            <a href="https://www.instagram.com/wo.talent/" target="_blank">
              <BsInstagram className="linkedinLogo" />
            </a>
          </div>

        </div>

      </article>
    </section>
  )
}

export default Contacto