import * as Yup from "yup";

export const educationSchema = Yup.object().shape({
  educationl: Yup.string().required("Select required"),
  nameins: Yup.string().required("Institution's name required"),
});
