import { Button, BUTTON_VARIANTS } from "../../components/Button";
import { BREAKPOINTS, styled } from "../../styles";

const POINTS_VARIANTS = {
  bad: "bad",
  average: "average",
  good: "good",
} as const;

type PointsVariants = (typeof POINTS_VARIANTS)[keyof typeof POINTS_VARIANTS];

const CurrentPoints = styled.div<{ $evaluation?: PointsVariants }>`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: ${({ $evaluation, ...props }) =>
    $evaluation
      ? $evaluation === POINTS_VARIANTS.bad
        ? props.theme.palette.danger
        : $evaluation === POINTS_VARIANTS.good
        ? props.theme.palette.success
        : props.theme.palette.primary
      : props.theme.palette.primary};
`;

const RecordContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  gap: 1rem;

  @media (${BREAKPOINTS.tablet}) {
    gap: 1.5rem;
  }
`;

const getEvaluation = (record: number) => {
  if (record <= 5) {
    return POINTS_VARIANTS.bad;
  } else if (record <= 10) {
    return POINTS_VARIANTS.average;
  } else {
    return POINTS_VARIANTS.good;
  }
};

const Result = ({
  record,
  current,
  onReload,
}: {
  record: number;
  current: number;
  onReload: () => void;
}) => {
  const evaluation = getEvaluation(current);
  return (
    <>
      <CurrentPoints $evaluation={evaluation} data-testid="current-points">
        {current}
      </CurrentPoints>
      <RecordContainer data-testid="record">
        <CurrentPoints>Record: {record}</CurrentPoints>
        {!!record && (
          <Button
            variant={BUTTON_VARIANTS.danger}
            onClick={onReload}
            testId="reset-record"
            ariaLabel="Reset the record"
          >
            Reset
          </Button>
        )}
      </RecordContainer>
    </>
  );
};

export default Result;
