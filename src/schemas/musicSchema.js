import * as Yup from "yup";

export const musicSchema = Yup.object().shape({
  name: Yup.string().required("Text name required"),
});
