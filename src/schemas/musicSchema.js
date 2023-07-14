import * as Yup from "yup";

export const musicSchema = Yup.object().shape({
  name: Yup.string().required("Text name required"),
  volume: Yup.number().min(1).max(15).default(3).required("Volume required"),
});
