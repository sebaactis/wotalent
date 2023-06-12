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
        <section className="panelSection container">
            <h1 className="fw-bold titlePanel my-3">Panel</h1>
            <div className="line"></div>

            <form className="formPanel" onSubmit={handleSubmit}>
                <div className="formPanelDiv">
                    <label className="fw-bold fs-5" htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                </div>

                <div className="formPanelDiv">
                    <label className="fw-bold fs-5" htmlFor="descripcion">Descripcion</label>
                    <textarea name="descripcion" id="descripcion" onChange={(e) => setDescripcion(e.target.value)} value={descripcion} row="10" cols="60" />
                </div>

                <div className="formPanelDiv">
                    <label className="fw-bold fs-5" htmlFor="codigo">Codigo</label>
                    <input type="text" name="codigo" id="codigo" onChange={(e) => setCodigo(e.target.value)} value={codigo} />
                </div>



                <button className="buttonPanel"> Cargar </button>
            </form>

        </section>
    )
}

export default PanelBusquedas;