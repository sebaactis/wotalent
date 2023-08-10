import { useEffect, useState } from 'react'
import { HashLoader } from 'react-spinners';
import CardItem from './CardItem';

const Busquedas = () => {

  const [busquedas, setBusquedas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await fetch('https://wotalent.glitch.me/api/busquedas');
        const data = await response.json();
        setBusquedas(data.payload);
      }

      catch (err) {
        console.log(err);
      }

      finally {
        setLoading(false);
      }
    };

    obtenerDatos();

    return () => setLoading(true);
  }, [])

  if (loading) {
    return (
      <section className="busquedasSection container">
        <h1 className="fw-bold titleBusquedas my-3">Búsquedas</h1>
        <div className="line"></div>
        <div className="busquedasTexts">
        <h3 className="fs-1"> Estás a un paso de tu próxima oportunidad </h3>
          <p className="fs-1">¡Sigamos impulsando el <span className="talentWord fw-bold">talento!</span></p>
        </div>
        <div>
          <HashLoader
            color={"#992244"}
            size={100}
            className="spinnerBusqueda"
          />
        </div>
      </section>
    )
  }

  return (
    <section className="busquedasSection container">
      <h1 className="fw-bold titleBusquedas my-3">Búsquedas</h1>
      <div className="line"></div>
      <div className="busquedasTexts">
      <h3 className="fs-1"> Estás a un paso de tu próxima oportunidad </h3>
        <p className="fs-1">¡Sigamos impulsando el <span className="talentWord fw-bold">talento!</span></p>
      </div>
      <div className="busquedasItems">
        {busquedas.map((busqueda) => {
          return (
            <CardItem key={busqueda._id} busqueda={busqueda} />
          )
        })}
      </div>
    </section>
  )
}

export default Busquedas