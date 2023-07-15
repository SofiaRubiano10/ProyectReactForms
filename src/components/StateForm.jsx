import PropTypes from "prop-types";

const StateForm = ({ state }) => {
  return (
    <>
      {state === "actual" && <span> 🟦 </span>}
      {state === "diligenciado" && <span> 💚 </span>}
      {state === "bloqueado" && <span> ❤️ </span>}
    </>
  );
};

StateForm.propTypes = {
  state: PropTypes.string,
};
export default StateForm;
