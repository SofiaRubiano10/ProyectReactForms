import * as Yup from "yup";

export const hobbysSchema = Yup.object().shape({
  hobbys: Yup.string().required("Select required"),
  hobbys2: Yup.string().required("Select 2 required"),
});
