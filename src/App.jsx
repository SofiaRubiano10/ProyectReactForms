import { useState } from "react";
import PersonalData from "./components/PersonalData";
import Hobbys from "./components/Hobbys";
import Education from "./components/Education";
import Happiness from "./components/Happiness";
import Music from "./components/Music";
import FormContext from "./context/FormContext";
import Final from "./components/Final";
import StateForms from "./components/StateForms";

function App() {
  const [stateForms, setStateForms] = useState({
    personalDataForm: "actual",
    hobbysForm: "bloqueado",
    educationForm: "bloqueado",
    happinessForm: "bloqueado",
    musicForm: "bloqueado",
  });
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
  const [happinessForm, setHappinessForm] = useState({
    date: "2023-07-10",
  });
  const [musicForm, setMusicForm] = useState({
    name: "",
  });
  return (
    <FormContext.Provider
      value={{
        step,
        setStep,
        stateForms,
        setStateForms,
        personalDataForm,
        setPersonalDataForm,
        hobbysForm,
        setHobbysForm,
        educationForm,
        setEducationForm,
        musicForm,
        setMusicForm,
        happinessForm,
        setHappinessForm,
      }}
    >
      <div className="container">
        <StateForms />
        {step === "personaldata" && <PersonalData />}
        {step === "hobbys" && <Hobbys />}
        {step === "education" && <Education />}
        {step === "happiness" && <Happiness />}
        {step === "music" && <Music />}
        {step === "final" && <Final />}
      </div>
    </FormContext.Provider>
  );
}

export default App;
