import { useContext } from "react";
import { useFormik } from "formik";
import FormContext from "../context/FormContext";
import { personalDataSchema } from "../schemas/personalDataSchema";

const PersonalData = () => {
  const {
    setStep,
    personalDataForm,
    setPersonalDataForm,
    stateForms,
    setStateForms,
  } = useContext(FormContext);
  const onSubmit = () => {
    setPersonalDataForm(values);
    setStep("hobbys");
    setStateForms({
      ...stateForms,
      personalDataForm: "diligenciado",
      hobbysForm: "actual",
    });
  };
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: personalDataForm,
    validationSchema: personalDataSchema,
    onSubmit,
  });
  return (
    <>
      <h3>Personal Data</h3>
      <div className="card">
        <form onSubmit={handleSubmit} autoComplete="off" noValidate>
          <fieldset>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              autoFocus
              required
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </fieldset>
          <fieldset>
            <label htmlFor="surname">Surname:</label>
            <input
              type="text"
              id="surname"
              required
              value={values.surname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.surname && <p className="error">{errors.surname}</p>}
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
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
            {errors.age && <p className="error">{errors.age}</p>}
          </fieldset>
          <button type="submit">Next</button>
        </form>
      </div>
    </>
  );
};

export default PersonalData;
