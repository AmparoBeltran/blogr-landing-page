import styled from "styled-components";

export const HeroStyled = styled.header`
  display: flex;
  flex-direction: column;

  text-align: center;
  height: 70vh;
  border: none;
  border-radius: 0 0 0 100px;
  background-image: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.gradients.veryLightRed},
    ${({ theme }) => theme.gradients.lightRed}
  );

  .wrapper {
    display: flex;
    flex-direction: column;
    background-image: url("/images/bg-pattern-intro-mobile.svg");
    background-repeat: no-repeat;
    padding: 3.5em 2em;
    height: 90%;
    border-radius: 0 0 0 100px;
    background-position-x: 40%;
    background-position-y: -420px;
    background-size: 360vw;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      background-position-x: 30%;
      background-position-y: -1930px;
      background-size: 200vw;
    }
  }

  .cta {
    margin: auto;
  }

  .cta p {
    color: ${({ theme }) => theme.colors.white};

    padding: 2em;
  }

  .cta-btns {
    display: flex;
    justify-content: center;
    gap: 1em;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    h1 {
      font-size: 7em;
      margin-bottom: 0;
      br {
        display: none;
      }
    }
    .cta {
      display: flex;
      flex-direction: column;
      gap: 2em;

      .btn {
        font-size: 1.5em;
        margin-top: 40px;

        cursor: pointer;
      }
      .cta-btns {
        .primary:hover {
          background-color: ${({ theme }) => theme.colors.veryLightRed};
          color: ${({ theme }) => theme.colors.white};
        }
        .secondary:hover {
          background-color: ${({ theme }) => theme.colors.white};
          color: ${({ theme }) => theme.colors.veryLightRed};
        }
      }
    }
    .cta p {
      font-size: 2em;
      padding: 0;
    }
  }
`;
