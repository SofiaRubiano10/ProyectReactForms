import { useContext } from "react";
import { useFormik } from "formik";
import FormContext from "../context/FormContext";
import { educationSchema } from "../schemas/educationSchema";

const Education = () => {
  const { setStep, educationForm, setEducationForm } = useContext(FormContext);
  const onSubmit = () => {
    setEducationForm(values);
    setStep("happiness");
  };
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: educationForm,
    validationSchema: educationSchema,
    onSubmit,
  });

  return (
    <main>
      <h3>Education</h3>
      <div className="card">
        <form onSubmit={handleSubmit} autoComplete="off" noValidate>
          <fieldset>
            <label htmlFor="educationl">Educational level</label>
            <select
              id="educationl"
              value={values.educationl}
              onChange={handleChange}
              onBlur={handleBlur}
            >
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
            </select>
            {errors.educationl && <p className="error">{errors.educationl}</p>}
          </fieldset>
          <fieldset>
            <label htmlFor="nameins">
              Name of the educational institution:
            </label>
            <input
              type="text"
              id="nameins"
              value={values.nameins}
              onChange={handleChange}
              onBlur={handleBlur}
              autoFocus
              required
            />
            {errors.nameins && <p className="error">{errors.nameins}</p>}
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
            <button type="submit">Next</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Education;
