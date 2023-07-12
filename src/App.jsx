import { useState } from "react";
import PersonalData from "./components/PersonalData";
import Hobbys from "./components/Hobbys";
import Education from "./components/Education";
import Happiness from "./components/Happiness";
import Music from "./components/Music";
import FormContext from "./context/FormContext";
import ContactData from "./components/ContactData";

function App() {
  const [step, setStep] = useState("personaldata");
  const [personalDataForm, setPersonalDataForm] = useState({
    name: "",
    surname: "",
    age: 1,
  });
  const [hobbysForm, setHobbysForm] = useState({
    hobbys: "",
    hobbys2: "",
  });
  const [educationForm, setEducationForm] = useState({
    educationl: "",
    nameins: "",
  });
  return (
    <FormContext.Provider
      value={{
        step,
        setStep,
        personalDataForm,
        setPersonalDataForm,
        hobbysForm,
        setHobbysForm,
        educationForm,
        setEducationForm,
      }}
    >
      <div className="container">
        {step === "personaldata" && <PersonalData />}
        {step === "hobbys" && <Hobbys />}
        {step === "education" && <Education />}
        {step === "happiness" && <Happiness />}
        {step === "music" && <Music />}
        {step === "contact" && <ContactData />}
      </div>
    </FormContext.Provider>
  );
}

export default App;
