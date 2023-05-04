import styled from "styled-components";

export const MainContainerStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  margin-top: 4em;
  text-align: left;

  h2 {
    font-size: 2em;
    margin-bottom: 0;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    h2 {
      font-size: 4em;
    }
  }
`;
