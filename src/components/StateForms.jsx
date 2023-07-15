import { useContext } from "react";
import FormContext from "../context/FormContext";
import StateForm from "./StateForm";

const StateForms = () => {
  const { stateForms } = useContext(FormContext);

  return (
    <>
      <div className="state">
        <StateForm state={stateForms.personalDataForm} />
        <StateForm state={stateForms.hobbysForm} />
        <StateForm state={stateForms.educationForm} />
        <StateForm state={stateForms.happinessForm} />
        <StateForm state={stateForms.musicForm} />
      </div>
    </>
  );
};

export default StateForms;
