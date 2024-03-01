import { useNavigate } from "react-router-dom";

const Labs = () => {
  const navigate = useNavigate();
  function clickHandler() {
    // !Move to About Page
    navigate("/about");
  }
  return (
    <div>
      <div>This is Lab Page</div>
      <button onClick={clickHandler}>Move to About Page</button>
    </div>
  );
};

export default Labs;
