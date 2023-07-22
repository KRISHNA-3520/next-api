import { styled } from "styled-components";

const Title = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

function CSSCSTYLE() {
  return <Title>STYLED COMPONENT</Title>;
}

export default CSSCSTYLE;
