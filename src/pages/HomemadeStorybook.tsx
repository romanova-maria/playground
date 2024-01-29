import {
  ButtonDemonstration,
  TextLinkDemonstration,
} from "../features/HomemadeStorybook";
import { Tab, Tabs } from "../components";
import { styled } from "../styles";
import { textHoverStyles } from "../styles/helpers";

const StyledTabs = styled(Tabs)`
  align-self: flex-start;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;

  .tab-content {
    height: 100%;

    .tab-pane.active {
      height: 100%;
      display: flex;
      align-items: center;
      justify-items: center;
    }
  }

  .nav-link {
    color: ${(props) => props.theme.palette.primary};
    ${textHoverStyles};
  }
`;

const HomemadeStorybookPage = () => {
  return (
    <Container>
      <StyledTabs id="homemade-storybook">
        <Tab eventKey="button" title="Button">
          <ButtonDemonstration />
        </Tab>
        <Tab eventKey="text-link" title="Text Link">
          <TextLinkDemonstration />
        </Tab>
      </StyledTabs>
    </Container>
  );
};

export default HomemadeStorybookPage;
