import { useContext } from "react";
import FormContext from "../context/FormContext";
const Education = () => {
  const { setStep } = useContext(FormContext);
  return (
    <main>
      <h3>Education</h3>
      <div className="card">
        <form autoComplete="off">
          <fieldset>
            <label htmlFor="educationl">Educational level</label>
            <select id="educationl">
              <option value="">Select your educational level</option>
              <option value="inicial">Initial</option>
              <option value="preschool">Preschool</option>
              <option value="primaryb">Primary bacic</option>
              <option value="basichs">Basic high school</option>
              <option value="half">Half</option>
              <option value="superior">Superior</option>
              <option value="master">Master degree</option>
              <option value="doctorate">Doctorate</option>
              <option value="postdoc">Postdoc</option>
              <p className="error">Required</p>
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="nameins">
              Name of the educational institution:
            </label>
            <input type="text" id="nameins" autoFocus required />
            <p className="error">Required</p>
          </fieldset>

          <div className="card__buttons">
            <button
              onClick={() => {
                setStep("hobbys");
              }}
              type="submit"
            >
              Before
            </button>
            <button
              onClick={() => {
                setStep("happiness");
              }}
              type="submit"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Education;
