import { SelectHTMLAttributes } from "react";
import { styled } from "../../styles";
import { WithTestId } from "../../types";
import { buttonCommons } from "../Button/buttonStyles";
export type Option = { label: string; value: string };

interface Select extends SelectHTMLAttributes<HTMLSelectElement>, WithTestId {
  id: string;
  label: string;
  options: Option[];
}

const Select = ({ id, label, options, onChange, testId, ...props }: Select) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select id={id} data-testid={testId} onChange={onChange} {...props}>
        {options.map(({ value, label }, id) => (
          <option value={value} key={id}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
};

export default styled(Select)`
  ${buttonCommons};

  min-width: 4rem;
  text-transform: capitalize;
  padding-right: 2rem;

  &:hover {
    background-color: ${(props) =>
      `${props.theme.components.button.colors.hover}20`};
    border-color: ${(props) => props.theme.components.button.colors.hover};
  }

  &:active {
    border-color: ${(props) => props.theme.components.button.colors.active};
  }
`;
