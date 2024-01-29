import { BREAKPOINTS, styled } from "../../../styles";

const SettingsArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;

  @media (${BREAKPOINTS.tablet}) {
    flex-direction: row;
    gap: 2rem;
  }
`;

export default SettingsArea;
