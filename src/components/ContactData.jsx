import { useContext } from "react";
import FormContext from "../context/FormContext";

const ContactData = () => {
  const { setStep } = useContext(FormContext);
  return (
    <main>
      <h3>Contact Data</h3>
      <div className="card">
        <form autoComplete="off">
          <fieldset>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" autoFocus required />
          </fieldset>
          <fieldset>
            <label htmlFor="surname">Surname:</label>
            <input type="text" id="surname" required />
          </fieldset>
          <fieldset>
            <label htmlFor="">Age:</label>
            <input
              type="number"
              name="age"
              id="age"
              min="1"
              max="99"
              step="1"
              required
            ></input>
          </fieldset>
          <button
            onClick={() => {
              setStep("hobbys");
            }}
            type="submit"
          >
            Next
          </button>
        </form>
      </div>
    </main>
  );
};

export default ContactData;
