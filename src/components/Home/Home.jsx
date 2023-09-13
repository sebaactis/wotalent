import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CardHome from './CardHome'
import atraccion from '../../assets/images/atraccion.png'
import definicion from '../../assets/images/definicion.png'
import estrategia from '../../assets/images/estrategia.png'
import { useInView } from 'react-intersection-observer'

const Home = () => {
  const texto1 = 'Creamos una estrategia de búsqueda <strong> personalizada </strong> para encontrar a los mejores candidatos que se ajusten a tu perfil.'
  const texto2 = 'Atraemos <strong> talento de alto nivel </strong> utilizando diversas fuentes y técnicas de reclutamiento para atraer a los mejores profesionales.'
  const texto3 = 'Manteniendo un <strong> seguimiento cercano </strong> y proporcionando feedback continuo, garantizamos una colaboración exitosa a largo plazo.'

  const [ref, inView] = useInView({ triggerOnce: true })

  const fadeInAnimation = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 }
  }

  const text2 = 'Buscamos tu candidato ideal'

  return (
    <main className="mainHome">
      <div className="imgDiv">

        <div className="textImgDiv">
          {text2.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04, duration: 0.1 }}
              className="textLetter"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <Link to="/quienes-somos"> <button className="btnConocenos">CONOCENOS</button> </Link>
        </motion.div>
      </div>
      <div className="homeProcess">
        <h2 className="fw-bold">Ventajas Competitivas</h2>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 2, duration: 0.4 }}
          variants={fadeInAnimation}
          className="firstRow">
          <CardHome titulo={'Estrategia de búsqueda'} imagen={estrategia} texto={texto1} />
          <CardHome titulo={'Atracción del talento'} imagen={atraccion} texto={texto2} />
          <CardHome titulo={'Seguimiento y feedback'} imagen={definicion} texto={texto3} />
        </motion.div>

      </div>

    </main>
  )
}

export default Home
