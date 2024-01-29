import { BREAKPOINTS, styled } from "../styles";

/*
 * Use Content for improving UX for desktop screen size.
 * Header, Footer and Main components use Content to achieve
 * the same content width with the same dimensions of a page
 * which grows with the screen only to desired point
 * */

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 0.5rem;
  display: flex;
  justify-self: center;

  @media (${BREAKPOINTS.tablet}) {
    width: ${(props) => props.theme.components.content.width};
    padding: 1.5rem;
  }
`;

export default Content;
