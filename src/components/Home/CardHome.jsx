/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

const CardHome = ({ imagen, texto }) => (
    <div className="cardHome">
        <img src={imagen} width={42} />
        <p>{texto}</p>
    </div>
)

export default CardHome
