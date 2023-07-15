import PropTypes from "prop-types";
import { AiOutlineCheckCircle } from "react-icons/ai";

const StateForm = ({ state }) => {
  return (
    <>
      {state === "actual" && (
        <span>
          <AiOutlineCheckCircle
            style={{ color: "#3774d1", fontSize: "3rem" }}
          />
        </span>
      )}
      {state === "diligenciado" && (
        <span>
          {" "}
          <AiOutlineCheckCircle
            style={{ color: "#00c52b", fontSize: "3rem" }}
          />{" "}
        </span>
      )}
      {state === "bloqueado" && (
        <span>
          {" "}
          <AiOutlineCheckCircle
            style={{ color: "#e64961", fontSize: "3rem" }}
          />{" "}
        </span>
      )}
    </>
  );
};

StateForm.propTypes = {
  state: PropTypes.string,
};
export default StateForm;
