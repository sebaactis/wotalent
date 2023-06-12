import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';

const Busquedas = () => {

  const [busquedas, setBusquedas] = useState([]);

  useEffect(() => {

    const obtenerDatos = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/busquedas');
        const data = await response.json();
        setBusquedas(data.payload);
      }

      catch (err) {
        console.log(err);
      }
    };

    obtenerDatos();

  }, [])

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
                  {busqueda.descripcion}
                </Card.Text>
                <button className="buttonCard">Postularse!</button>
              </Card.Body>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

export default Busquedas