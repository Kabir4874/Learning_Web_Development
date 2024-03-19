import { useDispatch, useSelector } from "react-redux";
import { dec, inc } from "./states/reducers";

function App() {
  const currState = useSelector((state) => state.number);
  const disPatch = useDispatch();
  return (
    <div style={{ widows: "100%" }}>
      <h1>React Redux Tutorial</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>{currState}</h1>
        <div>
          <button onClick={() => disPatch(inc(10))}>Increment</button>
          <button onClick={() => disPatch(dec(5))}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
