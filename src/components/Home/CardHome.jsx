/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

const CardHome = ({ titulo, imagen, texto }) => {
  return (
        <div className="cardHome">
            <div className="d-flex align-items-center gap-2">
                <img src={imagen} width={41} />
                <h5 className="pt-4 fw-bold">{titulo} </h5>
            </div>

            <p dangerouslySetInnerHTML={{ __html: texto }} />
        </div>
  )
}

export default CardHome
