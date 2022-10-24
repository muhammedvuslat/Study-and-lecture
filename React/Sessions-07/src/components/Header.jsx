import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import reactLogo from "../assets/react.svg";
const Header = () => {
  return (
    <Container>
      <Image src={reactLogo} fluid width="250px"></Image>
    </Container>
  );
};

export default Header;
