import Language from "./Language";
import Container from "react-bootstrap/Container";

const Card = () => {
  return (
    <Container style={{ background: "#f48b29" }}>
      <h1>Languages</h1>
      <Language />
    </Container>
  );
};

export default Card;
