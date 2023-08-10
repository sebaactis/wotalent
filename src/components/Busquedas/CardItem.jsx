/* eslint-disable react/prop-types */
import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const CardItem = ({ busqueda }) => {
  return (
        <Card className="cardBusqueda">
            <Card.Body className="cardBody">
                    <Card.Title className="cardTitle">{busqueda.nombre}</Card.Title>
                <Card.Text className="cardText">
                    {busqueda.resumen}
                </Card.Text>
                <Link to={`/busquedas/detalle/${busqueda.codigo}`}>
                    <button className="buttonCard">Ver Detalles </button>
                </Link>
            </Card.Body>
        </Card>
  )
}

export default CardItem
