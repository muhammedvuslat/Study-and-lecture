import Button, { TomatoButton } from "./components/Button.styled";
import Container from "./components/Container.styled";
import HeaderText from "./components/HeaderText.styled";
import StyledLink from "./components/Link.styled";
// import işlemimnde Button default ile export edildiğinden normal TomatoButton export const ile yapıldığı için süslü içerisinde dir

const App = () => {
  return (
    <>
      <Container bg="grey">
        {/* container componentine grey probu gönderildi */}
        {/* <Container bg> */}
        {/* container componentine sadece bg yi gönderdiği için grey rengini değil kırmızı yı alacaktır */}
        <HeaderText color="red"> Styled Component</HeaderText>
        <Button primary>Save</Button>
        {/* primary bir prop ismi olup değişkenlik gösterebilir ek olarak yukarıdaki sade yazım ile primary={primary} aynıdır */}
        <Button>Click</Button>
        {/* Oluşturulan TomatoButton componenti Button dan yaratılmışdır  */}
        <TomatoButton>Send</TomatoButton>
        <TomatoButton primary>Submit</TomatoButton>
      </Container>
      <Container>
        <StyledLink href="https://www.google.com" target="_blank">
          Go side
        </StyledLink>
      </Container>
    </>
  );
};

export default App;
