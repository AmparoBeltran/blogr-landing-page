import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  margin-top: 4em;
  padding: 4em 0;
  background-color: ${({ theme }) => theme.colors.veryDarkBlackBlue};
  border: none;
  border-radius: 0 100px 0 0;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    display: grid;
    grid-template-columns: repeat(5, 10%);
    gap: 5em;
    align-items: flex-start;
    justify-content: center;
    text-align: left;

    a {
      font-size: 1.2em;
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
    }
  }

  img {
    width: 90px;
  }
  h3 {
    margin-top: 0;
    color: ${({ theme }) => theme.colors.white};
  }

  a {
    color: ${({ theme }) => theme.colors.grayishBlue};
  }

  .nav {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
`;
