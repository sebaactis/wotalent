import { useState } from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { RiMailSendLine } from 'react-icons/ri'

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
  }


  return (
    <section className="contactoSection container">
      <h1 className="fw-bold titleContacto my-3">Contacto</h1>
      <div className="line"></div>
      <article className="row">

        <form onSubmit={enviarConsulta} className="form col-lg-7">
          <div className="titleDiv">
            <AiOutlineQuestionCircle className="contactIcon" />
            <h3 className="titleContact">¡Realizá tu consulta aqui!</h3>
          </div>

          <div className="formDiv">

            <label for="name">Nombre</label>
            <input onChange={handleName} value={nombre} required="required" type="text" name="apellido">
            </input>

          </div>

          <div className="formDiv">

            <label for="apellido">Apellido</label>
            <input onChange={handleApellido} value={apellido} type="text" name="apellido">
            </input>

          </div>
          <div className="formDiv">

            <label for="empresa">Empresa</label>
            <input onChange={handleEmpresa} value={empresa} type="text" name="empresa">
            </input>

          </div>
          <div className="formDiv">

            <label for="telefono">Telefono</label>
            <input onChange={handleTelefono} value={telefono} type="tel" name="telefono">
            </input>

          </div>
          <div className="formDiv">

            <label for="email">Email</label>
            <input onChange={handleEmail} value={email} type="email" name="email">
            </input>
          </div>

          <div className="formDiv">
            <label for="consulta">Consulta</label>
            <textarea className="fw-bold" onChange={handleConsulta} value={consulta} row="10" cols="60" name="consulta"></textarea>

          </div>

          <button className="buttonContacto"> Enviar </button>
        </form>

        <div className="col-lg-5 contactoCv">
          <RiMailSendLine className="contactoCvIcon" />
          <h2 className="titleContactoCv">Tambien podés enviar tu CV a <span className="fw-bold">seleccion@cowotalent.com.ar</span></h2>
        </div>

      </article>
    </section>
  )
}

export default Contacto