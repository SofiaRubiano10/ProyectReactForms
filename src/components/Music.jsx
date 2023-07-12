import { useContext } from "react";
import { useFormik } from "formik";
import FormContext from "../context/FormContext";
import { musicSchema } from "../schemas/musicSchema";

const Music = () => {
  const { setStep, musicForm, setMusicForm } = useContext(FormContext);
  const onSubmit = () => {
    setMusicForm(values);
    setStep("final");
  };
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: musicForm,
    validationSchema: musicSchema,
    onSubmit,
  });
  return (
    <main>
      <h3>Music</h3>
      <div className="card">
        <form onSubmit={handleSubmit} autoComplete="off" noValidate>
          <fieldset>
            <label htmlFor="name">Name of your favorite artist</label>
            <input
              type="text"
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              autoFocus
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </fieldset>
          <fieldset>
            <legend>You like to listen to music</legend>
            <div className="card__radio">
              <input type="radio" id="yesMusic" name="like" value="yesMusic" />
              <label htmlFor="yesMusic">Yes</label>

              <input type="radio" id="noMusic" name="like" value="noMusic" />
              <label htmlFor="noMusic">No</label>
            </div>
          </fieldset>
          <fieldset>
            <label htmlFor="volume">Volume</label>
            <input type="range" id="volume" name="volume" min="0" max="15" />
            {errors.volume && <p className="error">{errors.volume}</p>}
          </fieldset>

          <div className="card__buttons">
            <button
              onClick={() => {
                setStep("happiness");
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

export default Music;
