import PropTypes from "prop-types";
import "./Texto.css";

const Texto = ({ texto, nivel, textColor }) => {
  const estilo = {
    color: textColor,
  };

  if (nivel === 1) return <h1 style={estilo}>{texto}</h1>;
  if (nivel === 2) return <h2 style={estilo}>{texto}</h2>;
  if (nivel === 3) return <h3 style={estilo}>{texto}</h3>;
  if (nivel === 4) return <h4 style={estilo}>{texto}</h4>;
  if (nivel === 5) return <h5 style={estilo}>{texto}</h5>;
  if (nivel === 6) return <h6 style={estilo}>{texto}</h6>;

  return <h1>{texto}</h1>;
};

Texto.propTypes = {
  texto: PropTypes.string,
  nivel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  textColor: PropTypes.string,
};

Texto.defaultProps = {
  texto: "título",
  nivel: 1,
  textColor: "#000",
};
export default Texto;
