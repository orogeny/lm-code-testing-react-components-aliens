import "./App.css";
import { W12MForm, W12MFormData } from "./components/W12MForm";

function App() {
  const handleSubmit = (formData: W12MFormData) => {
    console.log("application submitted: ", formData);
  };

  return (
    <>
      <h1>W-12-M :- APPLICATION TO SPARE PLANET FROM DESTRUCTION</h1>
      <W12MForm onSubmit={handleSubmit} />
    </>
  );
}

export default App;
