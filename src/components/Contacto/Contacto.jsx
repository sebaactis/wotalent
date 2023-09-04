/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { RiMailSendLine } from 'react-icons/ri'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import { IoPeople } from 'react-icons/io5'
import Swal from 'sweetalert2'

const Contacto = () => {
  const [nombreApellido, setNombreApellido] = useState('')
  const [apellido, setApellido] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')
  const [consulta, setConsulta] = useState('')

  const handleName = (e) => setNombreApellido(e.target.value)
  const handleEmpresa = (e) => setEmpresa(e.target.value)
  const handleTelefono = (e) => setTelefono(e.target.value)
  const handleEmail = (e) => setEmail(e.target.value)
  const handleConsulta = (e) => setConsulta(e.target.value)

  const enviarConsulta = (e) => {
    e.preventDefault()

    const objConsulta = {
      nombreApellido,
      apellido,
      empresa,
      telefono,
      email,
      consulta
    }

    fetch('https://wotalent.glitch.me/api/busquedas/contacto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(objConsulta)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))

    setNombreApellido('')
    setApellido('')
    setEmpresa('')
    setTelefono('')
    setEmail('')
    setConsulta('')

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

            <label htmlFor="name">Nombre y Apellido <span className="astObg">*</span></label>
            <input onChange={handleName} value={nombreApellido} required="required" type="text" name="apellido">
            </input>

          </div>
          <div className="formDiv">

            <label htmlFor="email">Email <span className="astObg">*</span></label>
            <input onChange={handleEmail} value={email} type="email" name="email">
            </input>
          </div>
          <div className="formDiv">

            <label htmlFor="empresa">Empresa</label>
            <input onChange={handleEmpresa} value={empresa} type="text" name="empresa">
            </input>

          </div>
          <div className="formDiv">

            <label htmlFor="telefono">Teléfono</label>
            <input onChange={handleTelefono} value={telefono} type="tel" name="telefono">
            </input>

          </div>

          <div className="formDiv">
            <label htmlFor="consulta">Consulta <span className="astObg">*</span> </label>
            <textarea className="fw-bold" onChange={handleConsulta} value={consulta} cols="60" name="consulta"></textarea>

          </div>
          <p className="camposObligatorios"> <span>*</span> Campos Obligatorios</p>
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
            <div className="d-flex gap-3 justify-content-start">
              <a href="https://www.linkedin.com/company/cowotalent/" target="_blank" rel="noreferrer">
                <BsLinkedin className="linkedinLogo" />
              </a>
              <p >Linkedin</p>
            </div>
            <div className="d-flex gap-3 justify-content-start">
              <a href="https://www.instagram.com/wo.talent/" target="_blank" rel="noreferrer">
                <BsInstagram className="linkedinLogo" />
              </a>
              <p >Instagram</p>
            </div>
          </div>

        </div>

      </article>
    </section>
  )
}

export default Contacto
