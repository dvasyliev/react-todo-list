import * as Yup from "yup";
import { PRIORITIES } from "../constants/priorities";

export function getTodoSchema() {
  return Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name should have min length of 3 characters")
      .max(50, "Name should have max length of 50 characters"),
    description: Yup.string().max(
      200,
      "Description should have max length of 200 characters"
    ),
    deadline: Yup.string(),
    priority: Yup.string()
      .required("Priority is not valid value")
      .oneOf(Object.keys(PRIORITIES), "Priority is not valid value"),
  });
}
