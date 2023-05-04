import styled from "styled-components";

export const SectionFeaturesStyled = styled.section`
  display: flex;
  flex-direction: column-reverse;
  text-align: center;
  gap: 1em;

  img {
    width: 100%;
  }
  h3 {
    font-size: 2em;
  }
  article {
    padding: 0 3em;
  }

  .desktop {
    display: none;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      display: block;
    }
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    display: grid;
    grid-template-columns: 50% 40%;
    justify-content: space-between;
    align-items: center;

    ${({ inverted }) =>
      !inverted
        ? ""
        : `
      grid-template-columns: 40% 50%;
      margin-right: 40em;
      width: 100%;
      img{
        order:-1;
      }

      article{
        padding: 0 0 0 12em;
      }
     
  `}

    .mobile {
      display: none;
    }
    img.desktop {
      width: 140%;
    }

    article {
      text-align: left;
      padding: 12em;
      padding-right: 0;

      h3 {
        font-size: 2em;
      }
      p {
        font-size: 1em;
        line-height: 2;
      }
    }
  }
`;

export const SectionFeaturesCenterStyled = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  align-items: center;
  margin-top: 200px;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    display: flex;
    flex-direction: row;
  }

  img {
    width: 90%;
    position: absolute;
    top: -180px;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 40%;
    }
  }

  .wrapper {
    border: none;
    border-radius: 0 100px 0 100px;
    height: 70vh;
    background-image: linear-gradient(
      to bottom right,
      ${({ theme }) => theme.gradients.veryDarkGrayBlue},
      ${({ theme }) => theme.gradients.veryDarkDesaturatedBlue}
    );
    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 100vw;
    }

    article {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      background-image: url("/images/bg-pattern-circles.svg");
      background-repeat: no-repeat;
      background-size: 150vw;
      height: 100%;
      border-radius: 0 100px 0 100px;
      background-position-x: center;
      background-position-y: -240px;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        background-size: 100%;
        height: 100%;
        padding: 0 2em;
        border-radius: 0 100px 0 100px;
        background-position-x: -470px;
        background-position-y: -1170px;
        text-align: left;
      }
    }

    @media (min-width: ${({ theme }) => theme.desktop}) {
      .features {
        width: 40vw;
        align-self: end;
      }
    }

    h3,
    p {
      color: ${({ theme }) => theme.colors.white};
    }

    h3 {
      font-size: 2em;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 2.8em;
      }
    }

    p {
      margin-bottom: 8em;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 1em;
        line-height: 2;
      }
    }
  }
`;
