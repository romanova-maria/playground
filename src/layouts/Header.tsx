import Content from "./Content";
import { BREAKPOINTS, styled } from "../styles";
import { HTMLAttributes } from "react";
import { NavLink as RNavLink } from "react-router-dom";
import { textHoverStyles } from "../styles/helpers";

const Link = styled(RNavLink)`
  ${textHoverStyles};

  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

const Header = (props: HTMLAttributes<HTMLElement>) => {
  return (
    <header {...props}>
      <Content>
        <Link className="header-text" to="/">
          Clicks Game
        </Link>
        <Link to="/storybook">Homemade storybook</Link>
        <Link to="/about">About</Link>
      </Content>
    </header>
  );
};

export default styled(Header)`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.components.header.bgColor};
  color: ${(props) => props.theme.palette.primary};
  font-weight: bold;
  font-size: 1.5rem;

  .header-text {
    font-size: 1.5rem;
    ${textHoverStyles};

    @media (${BREAKPOINTS.tablet}) {
      font-size: 2rem;
    }
  }

  ${Content} {
    align-items: center;
    justify-items: center;
    flex-direction: column;

    @media (${BREAKPOINTS.tablet}) {
      justify-items: start;
      flex-direction: row;

      ${Link} {
        &:first-child {
          color: inherit;
        }
        &:not(:first-child) {
          margin-left: 2rem;
        }
      }
    }
  }
`;
