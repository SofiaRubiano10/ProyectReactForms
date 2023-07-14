import { useContext } from "react";
import FormContext from "../context/FormContext";
import StateForm from "./StateForm";

const StateForms = () => {
  const { stateForms } = useContext(FormContext);
  console.log(stateForms);
  return (
    <>
      <StateForm state={stateForms.personalDataForm} />
      <StateForm state={stateForms.hobbysForm} />
      <StateForm state={stateForms.educationForm} />
      <StateForm state={stateForms.happinessForm} />
      <StateForm state={stateForms.musicForm} />
    </>
  );
};

export default StateForms;
