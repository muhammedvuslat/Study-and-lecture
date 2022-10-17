import Buton from "../buton/Buton";
import "./Card.css";
const Card = ({ language, btn, img }) => {
  return (
    <div>
      <h1>{language}</h1>
      <img src={img} alt="img" />
      <Buton btn={btn} />
    </div>
  );
};
export default Card;
