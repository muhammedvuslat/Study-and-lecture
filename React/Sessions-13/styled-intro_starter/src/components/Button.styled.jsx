import styled from "styled-components";

const Button = styled.button`
  width: 7rem;
  /* background-color: pink; */
  /* color: white; */
  background-color: ${(props) => (props.primary ? "white" : "purple")};
  /* color: ${(props) => (props.primary ? "purple" : "white")}; */
  /* yukardaki gibi props.primary kullanmak yerine aiağıdaki gibi havada destructring yapabilir */
  color: ${({ primary }) => (primary ? "purple" : "white")};
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border: 1px solid purple;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.1rem;
  &:hover {
    transform: scale(0.97);
  }
`;

export default Button;

export const TomatoButton = styled(Button)`
  /* Buttonun bütün özelliklerinin TomatoButton da dageçerli olması ve sadece belirtilen özelliklerin farklı olması için styled(Button) ile özelliklerin geleceği değişken belirtilir */
  background-color: ${({ primary }) => (primary ? "white" : "tomato")};
  color: ${({ primary }) => (primary ? "tomato" : "white")};
  border: 1px solid green;
`;
