import styled from "styled-components";

const Button = styled.button`
  background: ${({ bg }) => bg || "white"};
  color: ${({ color }) => color || "white"};
  border: 1px solid #a62440;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 1rem 1rem;
  font-size: 1.1rem;
  margin-right: 0.5rem;
  margin: 2rem 0.5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.79;
    transform: scale(0.95);
  }
`;

export default Button;
