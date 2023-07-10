const Happiness = () => {
  return (
    <main>
      <h3>Happiness</h3>
      <div className="card">
        <form autoComplete="off">
          <fieldset>
            <label htmlFor="date">
              When was the last time that you felt happy?
            </label>
            <input type="date" id="date" autoFocus required />
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
            <button type="submit">Before</button>
            <button type="submit">Next</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Happiness;
