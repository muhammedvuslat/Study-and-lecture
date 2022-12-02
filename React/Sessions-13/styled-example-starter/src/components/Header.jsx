import Button from "./styles/Button.styled";
import Flex from "./styles/Flex.styled";
import StyledHeader, { Image, Logo, Nav } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Logo src="./images/logo.png" />
        <div>
          <Button color="#A62440">Apply Courses</Button>
          <Button bg="#A62440">Talk to Adviser</Button>
        </div>
      </Nav>
      <Flex>
        <div>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            possimus minima eius ea dolore debitis, suscipit neque ullam ipsa
            sapiente, delectus a, sint nulla iste voluptatem aspernatur?
            Perspiciatis, temporibus molestias.
          </p>
          <Button bg="#A62440">Start Your New Carier</Button>
        </div>
        <Image src="./images/hero.jpg"></Image>
      </Flex>
    </StyledHeader>
  );
};

export default Header;
