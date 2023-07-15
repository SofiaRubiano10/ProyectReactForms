import { useContext } from "react";
import { useFormik } from "formik";
import FormContext from "../context/FormContext";
import { hobbysSchema } from "../schemas/hobbysSchema";

const Hobbys = () => {
  const { setStep, hobbysForm, setHobbysForm } = useContext(FormContext);
  const onSubmit = () => {
    setHobbysForm(values);
    setStep("education");
  };
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: hobbysForm,
    validationSchema: hobbysSchema,
    onSubmit,
  });
  return (
    <>
      <h3>Hobbys</h3>
      <div className="card">
        <form onSubmit={handleSubmit} autoComplete="off" noValidate>
          <fieldset>
            <label htmlFor="hobbys"> Principal hobby:</label>
            <select
              id="hobbys"
              value={values.hobbys}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Select your hobbys</option>
              <option value="dance">Dance</option>
              <option value="read">Read</option>
              <option value="sports">Sports</option>
              <option value="shopping">Shopping</option>
              <option value="cook">Cook</option>
              <option value="play">Play</option>
              <option value="sing">Sing</option>
              <option value="travel">Travel</option>
            </select>
            {errors.hobbys && <p className="error">{errors.hobbys}</p>}
          </fieldset>
          <fieldset>
            <legend>How often do you do it?</legend>
            <div className="card__radio">
              <input type="radio" id="never" name="frecuency" value="never" />
              <label htmlFor="never">Never</label>

              <input
                type="radio"
                id="sometimes"
                name="frecuency"
                value="sometimes"
              />
              <label htmlFor="sometimes">Sometimes</label>

              <input type="radio" id="always" name="frecuency" value="always" />
              <label htmlFor="always">Always</label>
            </div>
          </fieldset>
          <fieldset>
            <label htmlFor="hobbys"> Secondary hobby:</label>
            <select
              id="hobbys2"
              value={values.hobbys2}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Select your hobbys</option>
              <option value="dance">Dance</option>
              <option value="read">Read</option>
              <option value="sports">Sports</option>
              <option value="shopping">Shopping</option>
              <option value="cook">Cook</option>
              <option value="play">Play</option>
              <option value="sing">Sing</option>
              <option value="travel">Travel</option>
            </select>
            {errors.hobbys2 && <p className="error">{errors.hobbys2}</p>}
          </fieldset>
          <fieldset>
            <legend>How often do you do it?</legend>
            <div className="card__radio">
              <input type="radio" id="never" name="frecuency2" value="never" />
              <label htmlFor="never">Never</label>

              <input
                type="radio"
                id="sometimes"
                name="frecuency2"
                value="sometimes"
              />
              <label htmlFor="sometimes">Sometimes</label>

              <input
                type="radio"
                id="always"
                name="frecuency2"
                value="always"
              />
              <label htmlFor="always">Always</label>
            </div>
          </fieldset>

          <div className="card__buttons">
            <button
              onClick={() => {
                setStep("personaldata");
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

export default Hobbys;
