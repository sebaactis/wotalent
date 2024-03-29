import { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'

const Servicios = () => {
  const animateParagraphs = () => {
    const controls = useAnimation()

    useEffect(() => {
      controls.start(() => ({
        x: 0,
        opacity: 1,
        transition: { delay: 1, duration: 0.4 }
      }))
    }, [controls])

    return controls
  }

  const controls = animateParagraphs()

  return (
    <section className="serviciosSection">
      <div className="services my-2 d-flex flex-column gap-4">
        <article className="d-flex flex-column gap-4">
          <div className="d-flex gap-3 subTitleDiv">
            <div className="imgSeleccion">
              <h1 className="titleSeleccion"> Selección de personal </h1>
            </div>
          </div>

          <div className="selectionDiv fs-5">

            <section className="selectionSection1">

              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={controls}
                className="d-flex gap-3">

                <p className="p1">
                  En <span className="fw-bold selectionWord">WO Talent </span>brindamos el servicio de búsqueda y selección de personal adecuado para tu empresa.
                </p>
              </motion.div>

              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={controls}
                className="d-flex gap-3">
                <p className="p2">
                  Nuestro objetivo es encontrar al candidato perfecto que se ajuste a la búsqueda y  a la cultura de  tu empresa para lograr resultados exitosos.
                </p>
              </motion.div>

            </section>

            <section className="selectionSection2">

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={controls}
                className="d-flex gap-3">
                <p className="p3">
                  Nuestro equipo se especializa en diferentes áreas para comprender las necesidades específicas de cada cliente.
                </p>
              </motion.div>

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={controls}
                className="d-flex gap-3">
                <p className="p4">Nos destacamos por ser estratégicos y eficientes, empleando métodos efectivos de selección de personal altamente calificado.

                </p>
              </motion.div>

            </section>

          </div>

        </article>
        <article>
          <div className="d-flex gap-3 subTitleDiv">
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
