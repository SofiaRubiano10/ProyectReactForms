import { useContext } from "react";
import FormContext from "../context/FormContext";

const Final = () => {
  const {
    personalDataForm,
    hobbysForm,
    educationForm,
    happinessForm,
    musicForm,
  } = useContext(FormContext);
  return (
    <>
      <div className="card">
        <h2>Resume of you data</h2>
        <div className="card__info">
          <h1>Personal data</h1>
          <div className="card__info-info">
            <p>Name: {personalDataForm.name}</p>
            <p>Surname: {personalDataForm.surname}</p>
            <p>Age: {personalDataForm.age}</p>
          </div>
        </div>
        <div className="card__info">
          <h1>Hobbys</h1>
          <div className="card__info-info">
            <p>First hobby: {hobbysForm.hobbys}</p>
            <p>Second hobby: {hobbysForm.hobbys2} </p>
          </div>
        </div>
        <div className="card__info">
          <h1>Education</h1>
          <div className="card__info-info">
            <p>Education level: {educationForm.educationl}</p>
            <p>Institution&apos;s name: {educationForm.nameins}</p>
          </div>
        </div>
        <div className="card__info">
          <h1>Happiness</h1>
          <div className="card__info-info">
            <p>Last time that you felt happy: {happinessForm.date}</p>
          </div>
        </div>
        <div className="card__info">
          <h1>Music</h1>
          <div className="card__info-info">
            <p>Favorite artist&apos;s name: {musicForm.name}</p>
            <p>Valome that you normaly prefer: {musicForm.volume}</p>
          </div>
        </div>
      </div>

      <h3>Thanks for your participation</h3>
    </>
  );
};

export default Final;
