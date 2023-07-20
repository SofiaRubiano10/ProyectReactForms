import PropTypes from "prop-types";
import "./Boton.css";

const Boton = ({ label, hover, size, onClick }) => {
  const tipo = hover ? "btn-hover" : "btn-primary";

  return (
    <button
      type="button"
      className={`btn ${tipo} btn-${size}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Boton;

Boton.propTypes = {
  /** Texto a mostrar en el botón */
  label: PropTypes.string,
  /** ¿Tiene aplicado el hover? */
  hover: PropTypes.bool,
  /** ¿Qué tan grande es el botón? */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /** Handler opcional para el evento onClick */
  onClick: PropTypes.func,
};
Boton.defaultProps = {
  label: "Botón",
  hover: false,
  size: "large",
  onClick: undefined,
};
