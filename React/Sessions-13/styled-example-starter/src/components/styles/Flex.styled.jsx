import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
    text-align: center;
  } ;
`;

export default Flex;
