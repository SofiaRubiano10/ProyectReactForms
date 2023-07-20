import Texto from "./Texto";

export default {
  component: Texto,
  title: "Atoms/Texto",
  argTypes: {
    nivel: {
      // select, radio, inline-radio
      control: "inline-radio",
    },
  },
};

export const Texto1 = {
  args: {
    texto: "Texto 1",
    nivel: 1,
    textColor: "black",
  },
};
export const Texto2 = {
  args: {
    texto: "Texto 2",
    nivel: 2,
    textColor: "black",
  },
};
export const Texto3 = {
  args: {
    texto: "Texto 3",
    nivel: 3,
    textColor: "black",
  },
};
