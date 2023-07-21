import { motion } from 'framer-motion';

const Grafico = ({icono, titulo, descripcion}) => {
  return (
    <motion.article className="graficoArticle"
    initial={{opacity: 0, y: -100}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.5, duration: 0.3}}
    >

        <img className="iconoGrafico" src={icono} />
        <h4 className="tituloGrafico">{titulo}</h4>
        <p className="descGrafico">{descripcion}</p>

    </motion.article>
  )
}

export default Grafico