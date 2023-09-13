import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Grafico = ({ icono, titulo, descripcion, width, padding, margin }) => {
  const [ref, inView] = useInView({ triggerOnce: true })

  const fadeInAnimation = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.article style={ { paddingTop: `${padding}rem` }} className="graficoArticle"
    ref={ref}
    initial="hidden"
    animate={inView ? 'visible' : 'hidden'}
    transition={{ delay: 1, duration: 0.3 }}
    variants={fadeInAnimation}
    >

        <img src={icono} width={width} />
        <h4 style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: '80%', marginTop: `${margin}rem` }} >{titulo}</h4>
        <p className="descGrafico">{descripcion}</p>

    </motion.article>
  )
}

export default Grafico
