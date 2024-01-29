import { useMemo, useState } from "react";
import {
  Button,
  BUTTON_VARIANTS,
  ButtonVariants,
  Checkbox,
} from "../../components";
import { Select, SelectOption } from "../../components";
import Container from "./helpers/Container";
import SettingsArea from "./helpers/SettingsArea";
interface ButtonState {
  variant: ButtonVariants;
  disabled: boolean;
}

const ButtonDemonstration = () => {
  const [buttonState, setButtonState] = useState<ButtonState>({
    variant: BUTTON_VARIANTS.primary,
    disabled: false,
  });

  const buttonVariants = useMemo((): SelectOption[] => {
    const options: SelectOption[] = [];
    for (const variant in BUTTON_VARIANTS) {
      options.push({ value: variant, label: variant });
    }
    return options;
  }, []);

  return (
    <Container>
      <Button ariaLabel="New button" testId="new-btn" {...buttonState}>
        New Button
      </Button>

      <SettingsArea>
        <Select
          id="btn-variants"
          label="Button appearance:"
          options={buttonVariants}
          testId="btn-variants-select"
          onChange={(event) =>
            setButtonState({
              ...buttonState,
              variant: event.target.value as ButtonVariants,
            })
          }
        />
        <Checkbox
          id="disabled-toggle"
          label="Disable"
          testId="disabled-toggle"
          onChange={(event) =>
            setButtonState({ ...buttonState, disabled: event.target.checked })
          }
        />
      </SettingsArea>
    </Container>
  );
};

export default ButtonDemonstration;
