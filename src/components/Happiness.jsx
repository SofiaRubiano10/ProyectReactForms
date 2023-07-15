import { useContext } from "react";
import { useFormik } from "formik";
import FormContext from "../context/FormContext";
import { happinessSchema } from "../schemas/happinessSchema";

const Happiness = () => {
  const {
    setStep,
    happinessForm,
    setHappinessForm,
    stateForms,
    setStateForms,
  } = useContext(FormContext);
  const onSubmit = () => {
    setHappinessForm(values);
    setStep("music");
    setStateForms({
      ...stateForms,
      happinessForm: "diligenciado",
      musicForm: "actual",
    });
  };
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: happinessForm,
    validationSchema: happinessSchema,
    onSubmit,
  });
  return (
    <>
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
    </>
  );
};

export default Happiness;
