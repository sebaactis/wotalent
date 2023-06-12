import { useState } from "react";

const PanelBusquedas = () => {

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [codigo, setCodigo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const busqueda = { nombre, descripcion, codigo }

        fetch('http://localhost:8080/api/busquedas', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(busqueda)
        })
            .then(response => response.json())
            .then(data => console.log('Respuesta', data))
            .catch(error => console.log('Error', error));
    }

    return (
        <section className="contactoSection container">
            <h1 className="fw-bold titleContacto my-3">Panel</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} />

                <label htmlFor="descripcion">Descripcion</label>
                <input type="text" name="descripcion" id="descripcion" onChange={(e) => setDescripcion(e.target.value)} value={descripcion} />

                <label htmlFor="codigo">Codigo</label>
                <input type="text" name="codigo" id="codigo" onChange={(e) => setCodigo(e.target.value)} value={codigo} />
                <button> Cargar </button>
            </form>

        </section>
    )
}

export default PanelBusquedas;