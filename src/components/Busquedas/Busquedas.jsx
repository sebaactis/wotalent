import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

const Busquedas = () => {

  const [busquedas, setBusquedas] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await fetch('https://wotalent.glitch.me/api/busquedas');
        const data = await response.json();
        setBusquedas(data.payload);
      }

      catch (err) {
        console.log(err);
      }

      finally {
        setLoading(false);
      }
    };

    obtenerDatos();

    return () => setLoading(true);
  }, [3000])


  if (loading) {
    return (

      <div>
        <HashLoader
          color={"#DF2B5C"}
          size={100}
          className="spinnerBusqueda"
        />
      </div>

    )

  }

  return (
    <section className="busquedasSection container">
      <h1 className="fw-bold titleBusquedas my-3">Busquedas</h1>
      <div className="line"></div>

      <div className="busquedasItems">
        {busquedas.map((busqueda) => {
          return (
            <Card className="cardBusqueda" key={busqueda.nombre}>
              <Card.Body className="cardBody">
                <Card.Title className="cardTitle">{busqueda.nombre}</Card.Title>
                <Card.Text>
                  {busqueda.resumen}
                </Card.Text>
                <Link to={`/busquedas/detalle/${busqueda.codigo}`}>
                  <button className="buttonCard">Ver Detalles </button>
                </Link>
              </Card.Body>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

export default Busquedas