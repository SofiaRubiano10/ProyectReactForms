import { useContext } from "react";
import FormContext from "../context/FormContext";

const Final = () => {
  const { personalDataForm } = useContext(FormContext);
  return (
    <main>
      <div className="card">
        <h1>Personal data</h1>
        {personalDataForm.name}
        {personalDataForm.surname}
        {personalDataForm.age}
      </div>

      <h3>Thanks for your participation</h3>
    </main>
  );
};

export default Final;
