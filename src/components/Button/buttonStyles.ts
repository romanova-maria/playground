/*
 * Css object encapsulates specific styles, so it is easier to refactor and read.
 * It keeps the component clean, so it's easier to understand
 * what is going on in the component.
 * Also, it can be exported and reused if needed. For instance, it can be used for
 * styling a third party library.
 * For instance, it can be the case when the app uses CMS and the authorisation
 * goes directly from there. In this case developer can export the app button
 * styles and apply them to authorisation form
 * */
import { css, focusStyles } from "../../styles";

export const primaryStyles = css`
  background: ${(props) => props.theme.components.button.colors.primary};
  border-color: ${(props) => props.theme.components.button.colors.primary};

  &:hover {
    background-color: ${(props) => props.theme.components.button.colors.hover};
    border-color: ${(props) => props.theme.components.button.colors.hover};
  }

  &:active {
    background-color: ${(props) => props.theme.components.button.colors.active};
    border-color: ${(props) => props.theme.components.button.colors.active};
  }
`;

export const dangerStyles = css`
  background: ${(props) => props.theme.palette.danger};
  border-color: ${(props) => props.theme.palette.danger};

  &:hover {
    background-color: ${(props) => props.theme.colors.darkRed};
    border-color: ${(props) => props.theme.colors.darkRed};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.theDarkestRed};
    border-color: ${(props) => props.theme.colors.theDarkestRed};
  }
`;

/*
 * Common styles can be encapsulated in reusable objects.
 * According to the design system (my random wish) all the elements
 * should have common appearance with a button. So, the object contains a rule set
 * with some styles which is used here and also used for other places, e.g. Select component.
 * It can be moved to styles/helpers.ts section, if Button component is not
 * the reference to styles anymore
 *  */
export const buttonCommons = css`
  height: ${(props) => props.theme.components.button.height};
  border-radius: 0.4rem;
  padding: 0.75rem 0.375rem;
  font-size: 1rem;
  white-space: nowrap;

  /* A11y: adding focus styles because button is an interactive element */
  ${focusStyles};
`;
