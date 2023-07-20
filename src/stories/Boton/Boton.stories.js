import Boton from "./Boton";

export default { component: Boton, title: "Atoms/Boton" };

//Storys
export const Primary = {
  args: {
    label: "Primary",
    hover: false,
  },
};
export const Hover = {
  args: {
    label: "Hover",
    hover: true,
  },
};

export const Large = {
  args: {
    label: "Grande",
    hover: false,
    size: "large",
  },
};
export const Medium = {
  args: {
    label: "Mediano",
    hover: false,
    size: "medium",
  },
};
export const Small = {
  args: {
    label: "Pequeñito",
    hover: true,
    size: "small",
  },
};
