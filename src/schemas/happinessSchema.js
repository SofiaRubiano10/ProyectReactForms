import * as Yup from "yup";

export const happinessSchema = Yup.object().shape({
  date: Yup.date().required("Date required"),
});
