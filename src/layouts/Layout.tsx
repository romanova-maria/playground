import { HTMLAttributes, PropsWithChildren } from "react";
import { styled } from "../styles";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { Outlet } from "../router";
import { useNavigation } from "react-router-dom";
import { Loading } from "../components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-areas: "header" "main" "footer";
  grid-template-rows: ${(props) =>
    `${props.theme.components.header.height} auto ${props.theme.components.footer.height}`};

  ${Header} {
    grid-area: header;
  }

  ${Main} {
    grid-area: main;
  }

  ${Footer} {
    grid-area: footer;
  }
`;

/*
 * Layout component contains a common structure for all the pages
 *
 * */
const Layout = ({
  children,
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => {
  const { state } = useNavigation();
  return (
    <Container {...props}>
      <Header />
      <Main>{state === "loading" ? <Loading /> : <Outlet />}</Main>
      <Footer />
    </Container>
  );
};

export default Layout;
