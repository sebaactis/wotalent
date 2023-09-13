/* eslint-disable react/react-in-jsx-scope */
import { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import { SessionContext } from '../../context/SessionContext'
import { BeatLoader } from 'react-spinners'

const Login = () => {
  const { setAccessToken } = useContext(SessionContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [boton, setBoton] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const obtenerDatos = () => {
      const usuario = { email, password }

      fetch('https://wotalent.glitch.me/api/session/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario)
      })
        .then(response => response.json())
        .then(data => {
          if (data.accessToken) {
            setAccessToken(true)
            localStorage.setItem('accessToken', data.accessToken)
            return
          }
          Swal.fire({
            title: 'Usuario o contraseña erronea',
            icon: 'error',
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#DF2B5C'
          })

          setBoton(false)
        })
        .catch(error => {
          console.error(error)
        })
    }

    obtenerDatos()
  }

  return (
    <section className="container sectionLogin">

      <h1 className="fw-bold titleLogin my-3">Login</h1>
      <div className="line"></div>

      <form className="formContainer" onSubmit={handleSubmit}>

        <div className="formLoginDiv">
          <label htmlFor="email"> Email </label>
          <input onChange={(e) => setEmail(e.target.value)} value={email} required="required" type="text" name="email">
          </input>
        </div>
        <div className="formLoginDiv">
          <label htmlFor="password"> Contraseña </label>
          <input onChange={(e) => setPassword(e.target.value)} value={password} required="required" type="text" name="password">
          </input>
        </div>

        <button disabled={email === '' || password === ''} onClick={() => setBoton(!boton)}> {boton ? <BeatLoader color={'white'} size={'8px'} /> : 'Ingresar'} </button>
      </form>

    </section>
  )
}

export default Login
