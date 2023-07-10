import { useState } from "react";
import PersonalData from "./components/PersonalData";
import Hobbys from "./components/Hobbys";
import Education from "./components/Education";
import Happiness from "./components/Happiness";
import Music from "./components/Music";
import FormContext from "./context/FormContext";

function App() {
  const [step, setStep] = useState("personaldata");
  return (
    <FormContext.Provider value={{ step, setStep }}>
      <div className="container">
        {step === "personaldata" && <PersonalData />}
        {step === "hobbys" && <Hobbys />}
        {step === "education" && <Education />}
        {step === "happiness" && <Happiness />}
        {step === "music" && <Music />}
      </div>
    </FormContext.Provider>
  );
}

export default App;
