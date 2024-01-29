import { styled } from "../styles";
import Content from "./Content";
import { TextLink } from "../components/TextLink";
import { HTMLAttributes } from "react";

const Footer = (props: HTMLAttributes<HTMLElement>) => {
  return (
    <footer {...props}>
      <Content>
        <div>
          Github link to{" "}
          <TextLink
            to="https://github.com/romanova-maria/playground"
            testId="playground"
          >
            playground
          </TextLink>
        </div>
      </Content>
    </footer>
  );
};

export default styled(Footer)`
  width: 100vw;
  height: 100%;
  display: grid;
  background: ${(props) => props.theme.components.footer.bgColor};

  ${Content} {
    justify-content: center;
    align-items: center;
  }
`;
