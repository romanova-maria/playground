import { HTMLAttributes, PropsWithChildren } from "react";
import Content from "./Content";
import { BREAKPOINTS, styled } from "../styles";

const Main = ({
  children,
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLElement>) => {
  return (
    <main {...props}>
      <Content>{children}</Content>
    </main>
  );
};

export default styled(Main)`
  display: flex;
  justify-content: center;

  ${Content} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media (${BREAKPOINTS.tablet}) {
      gap: 2rem;
    }
  }
`;
