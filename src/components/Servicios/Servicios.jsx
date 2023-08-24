import React, { useEffect } from 'react'
/* import { RiUserSearchLine } from 'react-icons/ri'
import { BsFileEarmarkMedical } from 'react-icons/bs' */
import { BiRightArrow } from 'react-icons/bi'
import { useAnimation, motion } from 'framer-motion'

const Servicios = () => {
  const animateParagraphs = () => {
    const controls = useAnimation()

    useEffect(() => {
      controls.start(() => ({
        x: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4 }
      }))
    }, [controls])

    return controls
  }

  const controls = animateParagraphs()

  return (
    <section className="serviciosSection container">
      <h1 className="fw-bold titleServicios my-3">Servicios</h1>
      <div className="line"></div>

      <div className="services my-2 d-flex flex-column gap-4">
        <article className="d-flex flex-column gap-4">
          <div className="d-flex gap-3 subTitleDiv">
            {/* <span> <RiUserSearchLine className="fs-4 servicesIcon" /> </span>
            <h4 className="fw-bold">
              Selección de personal
            </h4> */}
            <div className="imgDiv3">
              <h1 className="text-center fw-bold"> Selección de personal</h1>
            </div>
          </div>

          <div className="selectionDiv fs-5 d-flex flex-column gap-3 mx-2">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={controls}
              className="d-flex gap-3">
              <span > <BiRightArrow /></span>
              <p className="p1">
                En <span className="fw-bold selectionWord">WO Talent </span>brindamos el servicio de búsqueda y selección de personal.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={controls}
              className="d-flex gap-3">
              <span > <BiRightArrow /></span>
              <p className="p2">
              Nuestro objetivo es encontrar al candidato perfecto que se ajuste a la búsqueda y a la cultura de <br/> tu empresa para lograr resultados exitosos.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={controls}
              className="d-flex gap-3">
              <span > <BiRightArrow /></span>
              <p className="p3">
                Nuestro equipo de expertos se especializa en diferentes áreas para comprender las necesidades <br/> específicas de cada cliente.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={controls}
              className="d-flex gap-3">
              <span > <BiRightArrow /></span>
              <p className="p4">Nos caracterizamos por ser estratégicos y eficientes utilizando métodos efectivos de selección.

              </p>
            </motion.div>

          </div>

        </article>
        <article>
          <div className="d-flex gap-3 subTitleDiv ">
            {/* <span> <BsFileEarmarkMedical className="fs-4 servicesIcon" /> </span> */}
            {/* <h4 className="fw-bold">
              Examenes psicotécnicos
            </h4> */}
            <div className="imgDiv2">
              <h1 className="text-center fw-bold"> Examenes psicotécnicos</h1>
            </div>
          </div>

          <motion.p initial={{ x: -100, opacity: 0 }}
            animate={controls}
            className="fs-5 py-4">
            Proximamente...
          </motion.p>

        </article>

      </div>

    </section>
  )
}

export default Servicios
