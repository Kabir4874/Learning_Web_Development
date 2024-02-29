import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  console.log(firstName);
  console.log(lastName);
  function changeFirstNameHandler(event) {
    // console.log("Printing First Name:");
    // console.log(event.target.value);
    setFirstName(event.target.value);
  }
  function changeSecondNameHandler(event) {
    // console.log("Printing Last Name:");
    // console.log(event.target.value);
    setLastName(event.target.value);
  }
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="First Name"
          onChange={changeFirstNameHandler}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          onChange={changeSecondNameHandler}
        />
      </form>
    </div>
  );
}

export default App;
