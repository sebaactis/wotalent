import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SessionContext } from '../../context/SessionContext'
import Modal from 'react-modal'
import Swal from 'sweetalert2'

const BusquedaDetail = () => {
  Modal.setAppElement('#root')
  const [busqueda, setBusqueda] = useState({})
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { accessToken } = useContext(SessionContext)
  const { codigo } = useParams()
  const [busquedaEdit, setBusquedaEdit] = useState({})

  const obtenerBusqueda = async () => {
    try {
      const response = await fetch(`https://wotalent.glitch.me/api/busquedas/detalle/${codigo}`)
      const data = await response.json()
      setBusqueda(data.payload)
      setBusquedaEdit(data.payload)
    } catch (e) {
      console.error(e)
    }
  }

  const handleEditar = () => {
    setModalIsOpen(true)
  }

  const handleModalClose = () => {
    setModalIsOpen(false)
  }

  const handleEnvioActualizacion = () => {
    const token = localStorage.getItem('accessToken')

    const data = {
      ...busquedaEdit,
      codigo
    }

    const handleEdit = () => {
      fetch('https://wotalent.glitch.me/api/busquedas', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(data)
      })

        .then(response => response.json())
        .then(data => console.log('Respuesta', data))
        .catch(error => console.log('Error', error))

      Swal.fire({
        title: 'Busqueda Actualizada',
        icon: 'success',
        confirmButtonText: 'Cerrar',
        confirmButtonColor: '#DF2B5C'
      }
      )
      handleModalClose()
    }
    handleEdit()
  }

  useEffect(() => {
    obtenerBusqueda()
  }, [])

  return (
    <section className="busquedaDetalleSection container">
      <h1 className="fw-bold titleBusquedasDetalle my-3">Detalle de búsqueda</h1>
      <div className="line"></div>
      <div className="itemsCont d-flex flex-column gap-3">
        <article>
          <h2 className="fw-bold">{busqueda.nombre}</h2>
        </article>
        <article className="busquedaDetalleDescripcion">
          <p className="busquedaDetalleDescripcionText">{busqueda.descripcion}</p>
        </article>
      </div>
      <Link to="/busquedas"> <button className="buttonBusquedaDetalle fw-bold"> Volver a búsquedas </button> </Link>
      {accessToken ? <button onClick={handleEditar} className="buttonBusquedaDetalle fw-bold"> Editar busqueda </button> : null}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        contentLabel="Editar Información"
      >
        <div className="d-flex flex-column justify-content-center align-items-center gap-2">

          <label className="fw-bold fs-5" htmlFor="nombre">Nombre</label>
          <input className="fs-5" style={{ width: '80%', height: '4rem', borderRadius: '10px', border: 'solid 1px #ccc' }} type='text' defaultValue={busquedaEdit.nombre} name="nombre" id="nombre"
            onChange={(e) => setBusquedaEdit({ ...busquedaEdit, nombre: e.target.value })}
          />

          <label className="fw-bold fs-5" htmlFor="resumen">Resumen</label>
          <input className="fs-5" style={{ width: '80%', height: '4rem', borderRadius: '10px', border: 'solid 1px #ccc' }} type='text' defaultValue={busquedaEdit.resumen} name="resumen" id="resumen"
            onChange={(e) => setBusquedaEdit({ ...busquedaEdit, resumen: e.target.value })}
          />

          <label className="fw-bold fs-5" htmlFor="resumen">Descripcion</label>
          <textarea className="fs-5" style={{ width: '80%', height: '20rem', borderRadius: '3px', border: 'solid 1px #ccc' }} type='text' defaultValue={busquedaEdit.descripcion} name="descripcion" id="descripcion"
            onChange={(e) => setBusquedaEdit({ ...busquedaEdit, descripcion: e.target.value })}
          />

          <button className="btn btn-warning fw-bold" onClick={handleModalClose}>Cancelar</button>

          <button className="btn btn-success fw-bold" onClick={handleEnvioActualizacion}> Enviar actualizacion </button>
        </div>
      </Modal>

    </section>

  )
}

export default BusquedaDetail
