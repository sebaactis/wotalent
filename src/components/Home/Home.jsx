import proceso from '../../assets/images/proceso.jpg';

const Home = () => {
  return (
    <main className="mainHome">
      <div className="imgDiv">
        <div className="textImgDiv">
          <p>Somos wo talent...</p>
          <p>Buscamos tu candidato...</p>
        </div>
      </div>
      <div>
        <img src={proceso} width={500} height={500} />
      </div>
    </main>
  )
}

export default Home;