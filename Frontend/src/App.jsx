import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount
} from "./Features/Counter/CounterSlice";



function App() {
  const count = useSelector((state) => state.counter.value);
  const users = useSelector((state) => state.user.users);
  console.log("Users:", users);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {
          users.map(user => (
            <li key= {user.id}>{user.name}</li>
          ))
        }
      </ul>
      <button onClick={()=>dispatch}></button>
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


