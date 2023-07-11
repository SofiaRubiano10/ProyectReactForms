import { useContext } from "react";
import FormContext from "../context/FormContext";
const Music = () => {
  const { setStep } = useContext(FormContext);
  return (
    <main>
      <h3>Music</h3>
      <div className="card">
        <form autoComplete="off">
          <fieldset>
            <label htmlFor="name">Name of your favorite artist</label>
            <input type="text" id="name" autoFocus required />
            <p className="error">Required</p>
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
            <input type="range" id="volume" name="volume" min="0" max="11" />
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
          </div>
        </form>
      </div>
    </main>
  );
};

export default Music;
