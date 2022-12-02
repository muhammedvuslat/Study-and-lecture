import styled, { css } from "styled-components";
// Her props için ayrı style işlemleri gerçekleştirmek istersek css'i import etmemiz gerekli

const StyledLink = styled.a`
  font-size: 1rem;
  text-decoration: none;
  &:hover {
    opacity: 0.5;
  }
  ${(props) =>
    props.secondary &&
    css`
      background: lightblue;
      color: crimson;
      padding: 0.4rem;
    `}
`;

export default StyledLink;
