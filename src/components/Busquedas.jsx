import React from 'react'
import Card from 'react-bootstrap/Card';

const Busquedas = () => {

  const busquedas = [
    {
      title: "Empleado Administrativo",
      description: "Empleado administrativo de 9 a 18hs para empresa importante de seguros"
    },
    {
      title: "Empleado Administrativo",
      description: "Empleado administrativo de 9 a 18hs para empresa importante de seguros"
    },
    {
      title: "Empleado Administrativo",
      description: "Empleado administrativo de 9 a 18hs para empresa importante de seguros"
    },
    {
      title: "Empleado Administrativo",
      description: "Empleado administrativo de 9 a 18hs para empresa importante de seguros"
    },
    {
      title: "Empleado Administrativo",
      description: "Empleado administrativo de 9 a 18hs para empresa importante de seguros"
    },
    {
      title: "Empleado Administrativo",
      description: "Empleado administrativo de 9 a 18hs para empresa importante de seguros"
    },
    {
      title: "Empleado Administrativo",
      description: "Empleado administrativo de 9 a 18hs para empresa importante de seguros"
    },
    {
      title: "Empleado Administrativo",
      description: "Empleado administrativo de 9 a 18hs para empresa importante de seguros"
    },
    {
      title: "Empleado Administrativo",
      description: "Empleado administrativo de 9 a 18hs para empresa importante de seguros"
    }


  ];

  return (
    <section className="busquedasSection container">
      <h1 className="fw-bold titleBusquedas my-3">Busquedas</h1>
      <div className="line"></div>

      <div className="busquedasItems">
        {busquedas.map((busqueda) => {
          return (
            <Card className="cardBusqueda" key={busqueda.title}>
              <Card.Body className="cardBody">
                <Card.Title className="cardTitle">{busqueda.title}</Card.Title>
                <Card.Text>
                  {busqueda.description}
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