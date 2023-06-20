import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react'
import { BiRightArrow } from 'react-icons/bi'

const QuienesSomos = () => {

  const animateParagraphs = () => {
    const controls = useAnimation();

    useEffect(() => {
      controls.start(() => ({
        x: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4 }
      }));
    }, [controls]);

    return controls;
  };

  const controls = animateParagraphs();

  return (

    <section className="quienesSomosMain container">
      <h1 className="fw-bold titleQuienes my-3">¿Quiénes Somos?</h1>
      <div className="line"></div>
      <div className="paragraphs my-2 d-flex flex-column gap-4">

        <motion.article
          initial={{ x: -100, opacity: 0 }}
          animate={controls}
          className="fw-bold fs-5 d-flex gap-3">
          <span className="arrowText"> <BiRightArrow /></span>
          <p>
            Somos una consultora de Recursos Humanos conformada por un equipo de profesionales altamente capacitados en Gestión de <span className="wordQuienes">Recursos Humanos</span> y <span className="wordQuienes">Psicología.</span>
          </p>

        </motion.article>
        <motion.article
          initial={{ x: -100, opacity: 0 }}
          animate={controls}
          className="fw-bold fs-5 d-flex gap-3">
          <span className="arrowText"> <BiRightArrow /></span>
          <p>
            Nos especializamos en la selección de personal para todo tipo de perfiles, trabajando con diversas organizaciones. Nuestro objetivo principal es satisfacer las necesidades de nuestros clientes y establecer relaciones a largo plazo.
          </p>
        </motion.article>
        <motion.article
          initial={{ x: -100, opacity: 0 }}
          animate={controls}
          className="fw-bold fs-5 d-flex gap-3">
          <span className="arrowText"> <BiRightArrow /></span>
          <p initial={{ opacity: 0 }}
            animate={controls}>
            Adoptamos un enfoque personalizado y proactivo, comprometiéndonos a encontrar a los mejores candidatos para cada posición.
          </p>
        </motion.article>
        <motion.article
          initial={{ x: -100, opacity: 0 }}
          animate={controls}
          className="fw-bold fs-5 d-flex gap-3">
          <span className="arrowText"> <BiRightArrow /></span>
          <p>
            Nos apasiona ser el puente entre tu empresa y los candidatos ideales.
          </p>
        </motion.article>
        <motion.article
          initial={{ x: -100, opacity: 0 }}
          animate={controls}
          className="fw-bold fs-5 d-flex gap-3">
          <span className="arrowText"> <BiRightArrow /></span>
          <p>

            Nuestra <span className="wordQuienes">honestidad</span>, <span className="wordQuienes">agilidad</span> y  <span className="wordQuienes">transparencia</span>  son nuestras principales características distintivas en el proceso de reclutamiento.
          </p>
        </motion.article>

      </div>

    </section>
  )
}

export default QuienesSomos