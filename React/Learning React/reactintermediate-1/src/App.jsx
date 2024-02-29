import { useState } from "react";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // console.log(firstName);
  // console.log(lastName);
  // function changeFirstNameHandler(event) {
  // console.log("Printing First Name:");
  // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }
  // function changeSecondNameHandler(event) {
  // console.log("Printing Last Name:");
  // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  console.log(formData.email);
  function changeHandler(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="First Name"
          onChange={changeHandler}
          name="firstName"
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Last Name"
          onChange={changeHandler}
          name="lastName"
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={changeHandler}
          name="email"
        />
      </form>
    </div>
  );
}

export default App;
