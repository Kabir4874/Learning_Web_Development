import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactHeader from "./Components/ContactHeader/ContactHeader";
import Navbar from "./Components/Navigation/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ContactHeader/>
      <ContactForm/>
    </>
  );
}

export default App;
