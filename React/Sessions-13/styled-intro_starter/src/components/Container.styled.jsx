import styled from "styled-components";

const Container = styled.div`
  background: ${({ bg }) => bg || "yellow"};
  /* container den gelen prop havada destructuring yapılarak || pipe ile içinde değer var ise değeri yok ise redi background: olarak tanımlattık */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
`;

export default Container;
