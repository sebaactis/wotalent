import proceso from '../../assets/images/proceso.jpg';
import { motion } from 'framer-motion';

const Home = () => {


  const text = "Somos WO TALENT"
  const text2 = "Buscamos tu candidato ideal"

  return (
    <main className="mainHome">
      <div className="imgDiv">
        <div className="textImgDiv">
          {text.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.1 }}
              className="textLetter"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <div className="textImgDiv">
          {text2.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0. }}
              className="textLetter"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <div className="wrapper">
          <p>WO Talent es: </p>
          <div className="words">
            <span className="textLetter">Palabra 1</span>
            <span className="textLetter">Palabra 2</span>
            <span className="textLetter">Palabra 3</span>
          </div>
        </div>
      </div>
      <div>
        <img src={proceso} width={500} height={500} />
      </div>
    </main>
  )
}

export default Home;