import React from 'react'
import { BiRightArrow } from 'react-icons/bi'

const QuienesSomos = () => {
  return (
    <section className="quienesSomosMain container">
      <h1 className="fw-bold titleQuienes my-3">¿Quiénes Somos?</h1>
      <div className="line"></div>
      <div className="paragraphs my-2 d-flex flex-column gap-4">

        <article className="fw-bold fs-5 d-flex gap-3">
          <span className="arrowText"> <BiRightArrow /></span>
          <p>
            Somos una consultora de Recursos Humanos conformada por un equipo de profesionales altamente capacitados en Gestión de <span className="wordQuienes">Recursos Humanos</span> y <span className="wordQuienes">Psicología.</span>
          </p>

        </article>
        <article className="fw-bold fs-5 d-flex  gap-3">
          <span className="arrowText"> <BiRightArrow /></span>
          <p>
            Nos especializamos en la selección de personal para todo tipo de perfiles, trabajando con diversas organizaciones. Nuestro objetivo principal es satisfacer las necesidades de nuestros clientes y establecer relaciones a largo plazo.
          </p>
        </article>
        <article className="fw-bold fs-5 d-flex gap-3">
          <span className="arrowText"> <BiRightArrow /></span>
          <p>
            Adoptamos un enfoque personalizado y proactivo, comprometiéndonos a encontrar a los mejores candidatos para cada posición.
          </p>
        </article>
        <article className="fw-bold fs-5 d-flex gap-3">
          <span className="arrowText"> <BiRightArrow /></span>
          <p>
            Nos apasiona ser el puente entre tu empresa y los candidatos ideales.
          </p>
        </article>
        <article className="fw-bold fs-5 d-flex gap-3">
          <span className="arrowText"> <BiRightArrow /></span>
          <p>

            Nuestra <span className="wordQuienes">honestidad</span>, <span className="wordQuienes">agilidad</span> y  <span className="wordQuienes">transparencia</span>  son nuestras principales características distintivas en el proceso de reclutamiento.
          </p>
        </article>

      </div>


    </section>
  )
}

export default QuienesSomos