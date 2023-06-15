import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const BusquedaDetail = () => {

    const [busqueda, setBusqueda] = useState({});

    const { codigo } = useParams();

    useEffect(() => {

        const obtenerBusqueda = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/busquedas/detalle/${codigo}`)
                const data = await response.json();
                setBusqueda(data.payload);
            }
            catch (e) {
                console.log(e);
            }
        }

        obtenerBusqueda();

    }, [])

    return (
        <section className="busquedaDetalleSection container">
            <h1 className="fw-bold titleBusquedasDetalle my-3">Detalle de busqueda</h1>
            <div className="line"></div>
            <div className="itemsCont d-flex flex-column gap-3">

                <article>
                    <h3 className="fw-bold">Nombre</h3>
                    <p >{busqueda.nombre}</p>
                </article>

                <article>
                    <h3 className="fw-bold">Descripcion</h3>
                    <p>{busqueda.descripcion}</p>
                </article>

            </div>

            <Link to="/busquedas"> <button className="buttonBusquedaDetalle fw-bold"> Volver a busquedas </button> </Link>
        </section>
    )
}

export default BusquedaDetail