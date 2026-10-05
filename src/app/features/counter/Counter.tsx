import { useDispatch, useSelector } from "react-redux";
import {
  incrementByOne,
  decrementByOne,
  incrementByValue,
  resetAll,
} from "./counterSlice";
import { useState } from "react";

export default function Counter() {
    // used to read data from redux store state.
  const count = useSelector((state) => state.counter.count);
  // used to send (actions) to the redux store to trigger the state updates.
  const dispatch = useDispatch();

  const [valueByUser, setValueByUser] = useState(0);
  const addedValue = Number(valueByUser) || 0;

  const reset = () => {
    setValueByUser(0);
    dispatch(resetAll());
  };

  return (
    <div>
      <h1>Current Count : {count}</h1>
      <button
        onClick={() => {
          dispatch(incrementByOne());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrementByOne());
        }}
      >
        -
      </button>
      <div>
        <input
          type="text"
          value={addedValue}
          onChange={(e) => setValueByUser(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByValue(addedValue))}>
          Add Value
        </button>
        <button onClick={reset}>Reset All</button>
      </div>
    </div>
  );
}
