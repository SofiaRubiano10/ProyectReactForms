import * as Yup from "yup";

export const personalDataSchema = Yup.object().shape({
  name: Yup.string().required("Text name required"),
  surname: Yup.string().required("Text surname required"),
  age: Yup.number().required("age required"),
});
