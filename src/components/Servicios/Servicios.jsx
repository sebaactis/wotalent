import React, { useEffect } from 'react'
/* import { BiRightArrow } from 'react-icons/bi' */
import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi'
import { useAnimation, motion } from 'framer-motion'

const Servicios = () => {
  const animateParagraphs = () => {
    const controls = useAnimation()

    useEffect(() => {
      controls.start(() => ({
        x: 0,
        opacity: 1,
        transition: { delay: 1.5, duration: 0.6 }
      }))
    }, [controls])

    return controls
  }

  const controls = animateParagraphs()

  return (
    <section className="serviciosSection">
      {/* <h1 className="fw-bold titleServicios my-3">Servicios</h1> */}
      {/* <div className="line"></div> */}

      <div className="services my-2 d-flex flex-column gap-4">
        <article className="d-flex flex-column gap-4">
          <div className="d-flex gap-3 subTitleDiv">
            {/* <span> <RiUserSearchLine className="fs-4 servicesIcon" /> </span> */}
            {/* <h4 className="fw-bold">
              Selección de personal
            </h4> */}
            <div className="imgSeleccion">
              <h1 className="titleSeleccion"> Selección de personal </h1>
            </div>
          </div>

          <div className="selectionDiv fs-5">
            <motion.section
              initial={{ x: -100, opacity: 0 }}
              animate={controls}
              className="d-flex justify-content-center align-items-center gap-5">
              <FiChevronsRight className="fs-1 m-5" color="#DF2B5C" />
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={controls}
                className="d-flex gap-3">

                <p className="p1">
                  {/*  <span > <BiRightArrow /></span> */}
                  En <span className="fw-bold selectionWord">WO Talent </span>brindamos el servicio de búsqueda y selección de personal
                </p>
              </motion.div>
              <FiChevronsLeft className="fs-1 m-5" color="#DF2B5C" />
            </motion.section>
            <motion.section
              initial={{ x: -100, opacity: 0 }}
              animate={controls}
              className="d-flex justify-content-center align-items-center gap-5">
              <FiChevronsRight className="fs-1 m-5" color="#DF2B5C" />
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={controls}
                className="d-flex gap-3">
                {/* <span > <BiRightArrow /></span> */}
                <p className="p2">
                  Nuestro objetivo es encontrar al candidato perfecto que se ajuste a la búsqueda y a la cultura de <br /> tu empresa para lograr resultados exitosos.
                </p>
              </motion.div>
              <FiChevronsLeft className="fs-1 m-5" color="#DF2B5C" />
            </motion.section>
            <motion.section
              initial={{ x: -100, opacity: 0 }}
              animate={controls}
              className="d-flex justify-content-center align-items-center gap-5">
                <FiChevronsRight className="fs-1 m-5" color="#DF2B5C" />
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={controls}
                className="d-flex gap-3">
                {/* <span > <BiRightArrow /></span> */}
                <p className="p3">
                  Nuestro equipo de expertos se especializa en diferentes áreas para comprender las necesidades <br /> específicas de cada cliente.
                </p>
              </motion.div>
              <FiChevronsLeft className="fs-1 m-5" color="#DF2B5C" />
            </motion.section>
            <motion.section
              initial={{ x: -100, opacity: 0 }}
              animate={controls}
              className="d-flex justify-content-center align-items-center gap-5">
                <FiChevronsRight className="fs-1 m-5" color="#DF2B5C" />
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={controls}
              className="d-flex gap-3">
              {/* <span > <BiRightArrow /></span> */}
              <p className="p4">Nos caracterizamos por ser estratégicos y eficientes utilizando métodos efectivos de selección.

              </p>
            </motion.div>
            <FiChevronsLeft className="fs-1 m-5" color="#DF2B5C" />
            </motion.section>

          </div>

        </article>
        <article>
          <div className="d-flex gap-3 subTitleDiv">
            {/* <span> <BsFileEarmarkMedical className="fs-4 servicesIcon" /> </span>
            <h4 className="fw-bold">
              Examenes psicotécnicos
            </h4> */}
            <div className="imgExamenes">
              <h1 className="examenesTitle">Exámenes Psicotécnicos</h1>
            </div>
          </div>

          <motion.p initial={{ x: -100, opacity: 0 }}
            animate={controls}
            className="fs-5 py-4 px-5">
            Proximamente...
          </motion.p>

        </article>

      </div >

    </section >
  )
}

export default Servicios
