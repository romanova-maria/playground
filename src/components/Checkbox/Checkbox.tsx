import { InputHTMLAttributes } from "react";
import { focusStyles, styled } from "../../styles";
import { WithTestId } from "../../types";

interface Checkbox extends WithTestId, InputHTMLAttributes<HTMLInputElement> {
  id: string; // id could be used as testId, but then it is more than one particular attribute to think about, so it adds chaos to communication between QA and Dev teams
  label: string;
}

const Input = styled.input`
  height: 2rem;
  width: 2rem;
  accent-color: ${(props) => props.theme.palette.primary};

  ${focusStyles};
`;

const Checkbox = ({
  id,
  label,
  testId,
  onChange,
  className = "",
  ...props
}: Checkbox) => {
  return (
    <div data-testid={testId} className={className}>
      <Input id={id} type="checkbox" onChange={onChange} {...props} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default styled(Checkbox)`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`;
