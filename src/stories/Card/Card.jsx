import Texto from "../Texto/Texto";
import "./Card.css";
const Card = () => {
  return (
    <div className="card__info">
      <Texto texto="Resume of you data" nivel={1} textColor="#fff2f2" />
      <Texto texto="Name: " nivel={4} textColor="#333333" />
      <Texto texto="Surname: " nivel={4} textColor="#333333" />
      <Texto texto="Age: " nivel={4} textColor="#333333" />
    </div>
  );
};

export default Card;
