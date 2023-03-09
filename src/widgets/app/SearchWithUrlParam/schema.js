import * as yup from "yup";

const searchSchema = yup.object().shape({
  query: yup.string().min(2, "please enter at min 3 characters"),
});

export default searchSchema;
