import Buton from "../buton/Buton";
// import "./Card.css"; //! Cssi modül haline getirdik ⬇
import CardStyle from "./card.module.css";
const Card = ({ language, btn, img }) => {
  return (
    <div className={CardStyle.title}>
      <h1>{language}</h1>
      <img className={CardStyle.images} images src={img} alt="img" />
      <Buton btn={btn} />
    </div>
  );
};
export default Card;
