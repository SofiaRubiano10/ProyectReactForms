const Hobbys = () => {
  return (
    <main>
      <h3>Hobbys</h3>
      <div className="card">
        <form autoComplete="off">
          <fieldset>
            <label htmlFor="hobbys"> Principal hobby:</label>
            <select id="hobbys">
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
            <select id="hobbys">
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
            <button type="submit">Before</button>
            <button type="submit">Next</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Hobbys;
