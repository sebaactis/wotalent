/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'

const Grafico = ({ icono, titulo, descripcion, width, padding, margin }) => {
  return (
    <motion.article style={ { paddingTop: `${padding}rem` }} className="graficoArticle"
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.3 }}
    >

        <img src={icono} width={width} />
        <h4 style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: '80%', marginTop: `${margin}rem` }} >{titulo}</h4>
        <p className="descGrafico">{descripcion}</p>

    </motion.article>
  )
}

export default Grafico
