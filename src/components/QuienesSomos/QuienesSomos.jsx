/* eslint-disable react/react-in-jsx-scope */
import icono from '../../assets/images/icono.png'
import icono2 from '../../assets/images/icono2.png'
import icono3 from '../../assets/images/icono3.png'

import Grafico from './Grafico'

const QuienesSomos = () => {
  return (

    <section className="quienesSomosMain container">
      <h1 className="fw-bold titleQuienes my-3">¿Quiénes Somos?</h1>
      <div className="line"></div>

      <div className="graficosQuienesSomos">
        <Grafico tamaño={'117px'} icono={icono2} titulo={'Expertos en Recursos Humanos y Psicología'} descripcion={'Somos una consultora de Recursos Humanos conformada por un equipo de profesionales altamente capacitados en Gestión de Recursos Humanos y Psicología.'} />
        <Grafico tamaño={'117px'} icono={icono3} titulo={'Selección personalizada y orientada a resultados'} descripcion={'Nos especializamos en la selección de personal para distintos tipos de perfiles. Adoptamos un enfoque personalizado y proactivo, comprometiéndonos a encontrar a los mejores candidatos para cada posición.'} />
        <Grafico tamaño={'110px'} icono={icono} titulo={'Compromiso, agilidad y pasión'} descripcion={'Nos destacamos por ser el puente entre tu empresa y los candidatos ideales. Estas características nos definen en el proceso de principio a fin a la hora de reclutar.'} />
      </div>

    </section>
  )
}

export default QuienesSomos
