import React from 'react'

const Contacto = () => {
  return (
    <section className="contactoSection container">
      <h1 className="fw-bold titleContacto my-3">Contacto</h1>
      <div className="line"></div>
      <article className="row">

        <form className="form col-lg-8">
          <h3>Realiza tu consulta</h3>
          <div className="formDiv">

            <label for="name">Nombre</label>
            <input required="required" type="text" name="apellido">
            </input>

          </div>

          <div className="formDiv">

            <label for="apellido">Apellido</label>
            <input type="text" name="apellido">
            </input>

          </div>
          <div className="formDiv">

            <label for="empresa">Empresa</label>
            <input type="text" name="empresa">
            </input>

          </div>
          <div className="formDiv">

            <label for="telefono">Telefono</label>
            <input type="tel" name="telefono">
            </input>

          </div>
          <div className="formDiv">

            <label for="email">Email</label>
            <input type="email" name="email">
            </input>
          </div>

          <div className="formDiv">
            <label for="consulta">Consulta</label>
            <textarea row="10" cols="60"  name="consulta"></textarea>

          </div>

        <button> Enviar </button>
        </form>

        <div className="col-lg-4 contactoCv">
          <h2>O envia tu CV a seleccion@cowotalent.com.ar</h2>
        </div>

      </article>
    </section>
  )
}

export default Contacto