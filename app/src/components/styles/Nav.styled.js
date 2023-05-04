import styled from "styled-components";

export const NavStyled = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.veryDarkDesaturatedBlue};

  nav {
    position: relative;

    .menu {
      display: none;
    }

    hr {
      width: 100%;
      border-top: 1px solid hsl(240deg 12.17% 95.41%);
    }

    &.open {
      button {
        display: inline-block;
      }
      .menu {
        display: flex;
        flex-direction: column;
        background-color: ${({ theme }) => theme.colors.white};
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        gap: 1em;
        border: none;
        border-radius: 5px;
        padding: 1em 2em;
        position: absolute;
        right: 0;
        top: 4em;
        width: calc(100vw - 8em);
      }
      button.dropbtn {
        color: ${({ theme }) => theme.colors.veryDarkDesaturatedBlue};
        font-size: 1em;
      }
    }
    .dropdown {
      display: flex;
      flex-direction: column;

      .dropdown-content {
        display: none;
        /* display: flex; */
        flex-direction: column;
        padding: 1em 2em;
        gap: 1em;
        background-color: hsl(240deg 12.17% 95.41%);
        border: none;
        border-radius: 5px;
        margin: 10px 0;
      }

      &:hover .dropdown-content {
        display: flex;
      }

      &:hover .dropdown-target img {
        transform: rotate(180deg);
      }
    }
    .mobile {
      color: ${({ theme }) => theme.colors.white};
      width: max-content;
      align-self: center;
      margin-top: 10px;
      padding: 1em 2.5em;
    }
  }

  button {
    background: transparent;
    border: none;
  }

  .mobile {
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.veryLightRed},
      ${({ theme }) => theme.colors.lightRed}
    );
    color: ${({ theme }) => theme.colors.white};
  }

  .icon-close {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    padding: 2em 6em;
    align-items: center;
    gap: 6em;
    max-width: 2000px;
    width: 100%;
    margin: 0 auto;

    img {
      height: fit-content;
      width: 8%;
    }
    .icon-menu {
      display: none;
    }
    nav {
      width: 100%;
      button {
        color: ${({ theme }) => theme.colors.white};
        font-size: 1.5em;
        cursor: pointer;
      }
      .menu {
        display: flex;
        align-items: center;
        width: 100%;
        gap: 2em;
      }
      hr {
        display: none;
      }

      .dropdown {
        display: block;
        position: relative;
        padding-block: 1em;
        cursor: pointer;
        button:hover {
          text-decoration: underline;
          font-weight: 700;
        }

        .dropdown-content {
          position: absolute;
          a:hover {
            font-weight: 700;
          }
        }

        .dropdown-target {
          display: flex;
          align-items: center;
        }

        .dropdown-target .mobile-arrow {
          display: none;
        }
        .dropdown-target .desktop-arrow {
          display: inline;
        }
      }
      .desktop-login {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: auto;
        gap: 2em;
        & a {
          color: ${({ theme }) => theme.colors.white};
          font-size: 1.5em;
        }

        .btn.primary {
          padding: 0.8em 1.5em;
          background-image: none;
          background-color: ${({ theme }) => theme.colors.white};
          color: ${({ theme }) => theme.colors.lightRed};
          :hover {
            text-decoration: none;
            background-color: ${({ theme }) => theme.colors.veryLightRed};
            color: ${({ theme }) => theme.colors.white};
          }
        }
      }
    }
  }
`;
