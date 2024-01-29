import { PropsWithChildren } from "react";
import { WithTestId } from "../../types";
import { styled } from "../../styles";
import { RBButton, RBButtonProps } from "../index";
import { dangerStyles, primaryStyles, buttonCommons } from "./buttonStyles";

/*
 * Object with Variants helps developers to avoid mistakes.
 * Thanks to Type Script, only options from this list can be used for button appearance,
 * so it is impossible to forget to add needed class.
 * */
export const VARIANTS = {
  primary: "primary",
  danger: "danger",
} as const;

export type Variants = (typeof VARIANTS)[keyof typeof VARIANTS];

interface Button extends RBButtonProps, WithTestId, PropsWithChildren {
  variant?: Variants;
  ariaLabel: string; // To ensure that every button is accessible. Despite the fact that if a button has a name,
  // then this is the aria label for the button
}

/*
 * The component helps to encapsulate logic and appearance of the button.
 *
 * variant - helps to be sure that buttons won't have random styles here and there.
 * testId - helps to communicate with QA. Have to be required and added to all
 * interactive components. If QA team works with data-testid only, then dev team
 * can change component markup without concerns. At the same time, if testId was changed,
 * then dev team have to inform QA team and put a comment about changes
 * to the pull request
 * ariaLabel - must be required for button element, works for a11y
 * */
const Button = ({
  children,
  variant = VARIANTS.primary,
  testId,
  ariaLabel,
  ...props
}: Button) => {
  return (
    <RBButton
      variant={variant}
      aria-label={ariaLabel}
      data-testid={testId}
      {...props}
    >
      {children}
    </RBButton>
  );
};

/*
 * React Bootstrap button is used, but located only inside the component.
 * Therefore, the component has all the advantages of third party library button,
 * but encapsulates the dependency.
 * With that it is easier to change/update components library
 * With that approach it is clear what styles were overwritten.
 *  */

export default styled(Button)`
  && {
    ${buttonCommons};
    text-transform: uppercase;
    font-weight: bold;
    max-width: 20rem;

    &.btn-${VARIANTS.primary} {
      ${primaryStyles};
    }

    &.btn-${VARIANTS.danger} {
      ${dangerStyles};
    }
  }
`;
