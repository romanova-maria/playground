import { useCallback, useState } from "react";
import { Button } from "../../components/Button";
import ClicksVisualisation from "./ClicksVisualisation";
import Result from "./Result";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export type Record = number;

const ClicksGame = () => {
  const [record, setRecord] = useLocalStorage<Record>("record", 0);
  const [current, setCurrent] = useState(0);

  const onClick = useCallback(() => {
    setRecord((record) => {
      const updatedCurrent = current + 1;
      return updatedCurrent > record ? updatedCurrent : record;
    });

    setCurrent((current) => current + 1);

    setTimeout(() => {
      setCurrent((prev) => prev - 1);
    }, 2000);
  }, [current]);

  return (
    <>
      <ClicksVisualisation amount={current} />
      <Result record={record} current={current} onReload={() => setRecord(0)} />
      <Button testId="click-btn" onClick={onClick} ariaLabel="Click me">
        Click me
      </Button>
    </>
  );
};

export default ClicksGame;
