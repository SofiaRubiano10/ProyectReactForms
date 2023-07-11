import { useContext } from "react";
import FormContext from "../context/FormContext";

const ContactData = () => {
  const { setStep } = useContext(FormContext);
  return (
    <main>
      <h3>Contact Data</h3>
      <div className="card">
        <form autoComplete="off">
          <fieldset>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <p className="error">Valid email required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="phone">Mobile Phone</label>
            <input
              type="tel"
              id="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              autoFocus
            />
            <p className="error">Required</p>
          </fieldset>
          <div className="card__buttons">
            <button
              onClick={() => {
                setStep("music");
              }}
              type="submit"
            >
              Before
            </button>
            <button
              onClick={() => {
                setStep("personaldata");
              }}
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ContactData;
