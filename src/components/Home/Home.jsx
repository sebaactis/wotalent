/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CardHome from './CardHome'
import atraccion from '../../assets/images/atraccion.png'
import definicion from '../../assets/images/definicion.png'
import entrevistaCliente from '../../assets/images/entrevistaClientes.png'
import entrevistaSector from '../../assets/images/entrevistaSector.png'
import estrategia from '../../assets/images/estrategia.png'
import preseleccionTalento from '../../assets/images/preseleccionTalento.png'
import seguimiento from '../../assets/images/seguimiento.png'
import { useInView } from 'react-intersection-observer'

const Home = () => {
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
              transition={{ delay: index * 0.05, duration: 0.1 }}
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
        <motion.div
        ref={ref}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        transition={{ delay: 0.5, duration: 0.4 }}
        variants={fadeInAnimation}
        className="firstRow">
          <CardHome imagen={definicion} texto={'Definimos el perfil ideal para tu empresa, identificando las habilidades y cualidades necesarias'} />
          <CardHome imagen={estrategia} texto={'Creamos una estrategia de búsqueda personalizada para encontrar a los mejores candidatos que se ajusten a tu perfil'} />
          <CardHome imagen={atraccion} texto={'Atraemos talento de alto nivel utilizando diversas fuentes y técnicas de reclutamiento para atraer a los mejores profesionales'} />
        </motion.div>
        <motion.div
        ref={ref}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        transition={{ delay: 0.9, duration: 0.4 }}
        variants={fadeInAnimation}
        className="secondRow">
          <CardHome imagen={preseleccionTalento} texto={'Realizamos una minuciosa preselección de candidatos, evaluando sus habilidades y experiencia.'} />
          <CardHome imagen={entrevistaSector} texto={'Evaluamos a los candidatos para garantizar su idoneidad y alinearlos con tus necesidades'} />
          <CardHome imagen={entrevistaCliente} texto={'Facilitamos entrevistas entre clientes y candidatos, asegurando una comunicación efectiva.'} />
          <CardHome imagen={seguimiento} texto={'Manteniendo un seguimiento cercano y proporcionando feedback continuo, garantizamos una colaboración exitosa a largo plazo'} />

        </motion.div>

      </div>

    </main>
  )
}

export default Home
