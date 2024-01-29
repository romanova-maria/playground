import { styled } from "../../../styles";
import SettingsArea from "./SettingsArea";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  ${SettingsArea} {
    margin-top: 3rem;
  }
`;

export default Container;
