import { Col, Row, Text } from "widgets";
import { useAppDispatch, useAppSelector } from "hooks";
import { useTranslation } from "hooks/translate";
import { useState } from "react";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";

function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState("2");
  const { t } = useTranslation("common");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <Col>
      <Text as="h1">{t("h1")}</Text>
      <Row>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </Row>
      <Row>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </button>
        <button onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </button>
        <button onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </button>
      </Row>
    </Col>
  );
}

export default Counter;
