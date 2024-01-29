import { BREAKPOINTS, styled } from "../../styles";
import { HTMLAttributes } from "react";

const ClicksVisualisation = styled(
  ({
    amount,
    ...props
  }: { amount: number } & HTMLAttributes<HTMLDivElement>) => {
    return (
      <div {...props}>
        {amount > 0 ? (
          <>
            {[...Array(amount)].map((_, index) => (
              <div key={index} className="click-block">
                Click
              </div>
            ))}
          </>
        ) : (
          "How many clicks can you do per two seconds?"
        )}
      </div>
    );
  },
)`
  --padding: 1rem;
  --block-height: 2rem;
  --block-margin: 0.5rem;

  padding: var(--padding);
  line-height: 2rem;
  width: 100%;
  font-size: 1rem;
  text-align: center;
  min-height: calc(
    var(--padding) * 2 + var(--block-height) * 4 + var(--block-margin) * 8
  ); // save space for the game message

  .click-block {
    --border: 2px;

    font-size: 0.8rem;
    height: var(--block-height);
    line-height: calc(var(--block-height) - 2 * var(--border));
    margin: var(--block-margin);
    border-radius: 0.5rem;
    border: var(--border) solid ${(props) => props.theme.palette.primary};
    width: 3rem;
    display: inline-block;
    text-align: center;
    color: ${(props) => props.theme.palette.primary};
    font-weight: bold;
    text-transform: uppercase;
  }

  @media (${BREAKPOINTS.tablet}) {
    --block-height: 2.5rem;

    font-size: 1.5rem;
    line-height: 2.5rem;
    min-height: calc(
      var(--padding) * 2 + var(--block-height) * 2 + var(--block-margin) * 4
    ); // on a bigger screen user doesn't need so much space, it's impossible to click so fast to take up all the space

    .click-block {
      font-size: 1rem;
      width: 4rem;
      height: var(--block-height);
    }
  }
`;

export default ClicksVisualisation;
