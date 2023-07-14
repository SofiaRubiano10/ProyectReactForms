import PropTypes from "prop-types";

const StateForm = ({ state }) => {
  return (
    <div>
      {state === "actual" && <span> 🟦 </span>}
      {state === "diligenciado" && <span> 💚 </span>}
      {state === "bloqueado" && <span> ❤️ </span>}
    </div>
  );
};

StateForm.propTypes = {
  state: PropTypes.string,
};
export default StateForm;
