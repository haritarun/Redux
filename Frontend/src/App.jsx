import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount
} from "./Features/Counter/CounterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        +5
      </button>
    </div>
  );
}

export default App;


