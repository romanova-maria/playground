import { TextLink } from "../../components";
import Container from "./helpers/Container";
import SettingsArea from "./helpers/SettingsArea";
import { useState } from "react";

const TextLinkDemonstration = () => {
  const [state, setState] = useState({
    text: "Back to Click game",
    href: "..",
  });

  return (
    <Container>
      <TextLink to={state.href} testId="click-game-link">
        {state.text}
      </TextLink>
      <SettingsArea>
        <label htmlFor="link-text">Link text</label>
        <input
          id="link-text"
          type="text"
          onChange={(event) => setState({ ...state, text: event.target.value })}
        />
        <label htmlFor="link-text">Link</label>
        <input
          id="link"
          type="text"
          onChange={(event) => setState({ ...state, href: event.target.value })}
        />
      </SettingsArea>
    </Container>
  );
};

export default TextLinkDemonstration;
