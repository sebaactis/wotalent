import React from 'react'
import { RiUserSearchLine } from 'react-icons/ri'
import { BsFileEarmarkMedical } from 'react-icons/bs'
import { BiRightArrow } from 'react-icons/bi'


const Servicios = () => {
  return (
    <section className="serviciosSection container">
      <h1 className="fw-bold titleServicios my-3">Servicios</h1>
      <div className="line"></div>

      <div className="services my-2 d-flex flex-column gap-4">
        <article className="d-flex flex-column gap-4">
          <div className="d-flex gap-3 subTitleDiv">
            <span> <RiUserSearchLine className="fs-4 servicesIcon" /> </span>
            <h4 className="fw-bold">
              Seleccion de personal
            </h4>
          </div>

          <div className="selectionDiv fs-5 d-flex flex-column gap-3 mx-2">
            <div className="d-flex gap-3">
              <span > <BiRightArrow /></span>
              <p>
                En <span className="fw-bold selectionWord">WO Talent </span>brindamos el servicio de búsqueda y selección de personal para todo tipo de perfiles.
              </p>
            </div>
            <div className="d-flex gap-3">
              <span > <BiRightArrow /></span>
              <p>
                Nuestro objetivo es encontrar al candidato perfecto que se ajuste tanto al puesto solicitado por el cliente (pasarlo a vos) como a la cultura de tu empresa, para lograr resultados exitosos.
              </p>
            </div>
            <div className="d-flex gap-3">
              <span > <BiRightArrow /></span>
              <p>
                Nuestro equipo de expertos se especializa en diferentes áreas para comprender las necesidades específicas de cada cliente.
              </p>
            </div>
            <div className="d-flex gap-3">
              <span > <BiRightArrow /></span>
              <p>Nos enfocamos en encontrar los mejores candidatos de manera rápida y eficiente, utilizando métodos efectivos de selección. Estamos comprometidos en encontrar el talento que tu empresa necesita para crecer y prosperar.

              </p>
            </div>

          </div>

        </article>
        <article>
          <div className="d-flex gap-3 subTitleDiv ">
            <span> <BsFileEarmarkMedical className="fs-4 servicesIcon" /> </span>
            <h4 className="fw-bold">
              Examanes psicotécnicos
            </h4>
          </div>

          <p className="fs-5 py-4">Proximamente...</p>

        </article>

        
      </div>

    </section>
  )
}

export default Servicios