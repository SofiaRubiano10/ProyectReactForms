import { useContext } from "react";
import { useFormik } from "formik";
import FormContext from "../context/FormContext";
import { happinessSchema } from "../schemas/happinessSchema";

const Happiness = () => {
  const { setStep, happinessForm, setHappinessForm } = useContext(FormContext);
  const onSubmit = () => {
    setHappinessForm(values);
    setStep("music");
  };
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: happinessForm,
    validationSchema: happinessSchema,
    onSubmit,
  });
  return (
    <main>
      <h3>Happiness</h3>
      <div className="card">
        <form onSubmit={handleSubmit} autoComplete="off" noValidate>
          <fieldset>
            <label htmlFor="date">
              When was the last time that you felt happy?
            </label>
            <input
              type="date"
              id="date"
              autoFocus
              required
              value={values.date}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            TODO:no está guardando fecha
            {errors.date && <p className="error">{errors.date}</p>}
          </fieldset>
          <fieldset>
            <legend>Do you do anything to make yourself happy? </legend>
            <div className="card__radio">
              <input type="radio" id="yes" name="acts" value="yes" />
              <label htmlFor="yes">Yes</label>

              <input type="radio" id="no" name="acts" value="no" />
              <label htmlFor="no">No</label>
            </div>
          </fieldset>
          <div className="card__buttons">
            <button
              onClick={() => {
                setStep("education");
              }}
              type="submit"
            >
              Before
            </button>
            <button type="submit">Next</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Happiness;
