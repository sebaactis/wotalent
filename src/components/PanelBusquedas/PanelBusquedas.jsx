import { useState } from "react";
import Swal from 'sweetalert2'

const PanelBusquedas = () => {

    const [nombre, setNombre] = useState("");
    const [resumen, setResumen] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [codigo, setCodigo] = useState("");
    const [dcodigo, setDcodigo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const busqueda = { nombre, resumen, descripcion, codigo }

        fetch('https://wotalent.glitch.me/api/busquedas', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(busqueda)
        })
            .then(response => response.json())
            .then(data => console.log('Respuesta', data))
            .catch(error => console.log('Error', error));


        Swal.fire({
            title: 'Busqueda Agregada',
            icon: 'success',
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#DF2B5C'
        })

        setNombre("")
        setResumen("")
        setDescripcion("")
        setCodigo("")

    }

    const handleDelete = (e) => {
        e.preventDefault();

        const busqueda = { codigo: dcodigo }

        fetch('https://wotalent.glitch.me/api/busquedas', {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(busqueda)
        })
            .then(response => response.json())
            .then(data => console.log('Respuesta', data))
            .catch(error => console.log('Error', error));


        Swal.fire({
            title: 'Busqueda Eliminada',
            icon: 'success',
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#DF2B5C'
        }
        )

        setDcodigo("")
    }


    return (
        <section className="panelSection container">
            <h1 className="fw-bold titlePanel my-3">Panel</h1>
            <div className="line"></div>

            <form className="formPanel" onSubmit={handleSubmit}>
                <div className="formPanelDiv">
                    <label className="fw-bold fs-5" htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                </div>

                <div className="formPanelDiv">
                    <label className="fw-bold fs-5" htmlFor="resumen">Resumen</label>
                    <textarea maxLength={100} name="resumen" id="resumen" onChange={(e) => setResumen(e.target.value)} value={resumen} row="10" cols="60" />
                </div>

                <div className="formPanelDiv">
                    <label className="fw-bold fs-5" htmlFor="descripcion">Descripcion</label>
                    <textarea name="descripcion" id="descripcion" onChange={(e) => setDescripcion(e.target.value)} value={descripcion} row="30" cols="90" />
                </div>

                <div className="formPanelDiv">
                    <label className="fw-bold fs-5" htmlFor="codigo">Codigo</label>
                    <input type="text" name="codigo" id="codigo" onChange={(e) => setCodigo(e.target.value)} value={codigo} />
                </div>

                <button className="buttonPanel" disabled={nombre === "" || resumen === "" || descripcion === "" || codigo === ""}> Cargar </button>

                <label className="fw-bold fs-5" htmlFor="dcodigo">Ingrese un codigo para eliminar una busqueda</label>
                <input className="inputDelete" type="text" name="dcodigo" id="dcodigo" onChange={(e) => setDcodigo(e.target.value)} value={dcodigo} />
                <button onClick={handleDelete} className="buttonPanel" disabled={dcodigo === ""}> Eliminar</button>

            </form>

        </section>
    )
}

export default PanelBusquedas;