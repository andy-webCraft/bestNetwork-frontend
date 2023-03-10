import * as yup from "yup";
import { validateUrl } from "shared/lib/regExp";

export const profileSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  location: yup.string().required("required"),
  occupation: yup.string().notRequired(),
  picture: yup.string().notRequired(),
  links: yup.object().shape({
    github: yup.string().matches(validateUrl, "Enter correct url").notRequired(),
    facebook: yup.string().matches(validateUrl, "Enter correct url").notRequired(),
    twitter: yup.string().matches(validateUrl, "Enter correct url").notRequired(),
    linkedin: yup.string().matches(validateUrl, "Enter correct url").notRequired(),
  }),
});

export const getInitialValuesProfile = (user) => {
  const {
    firstName, lastName, picturePath, location, occupation, links,
  } = user;
  return {
    firstName, lastName, picturePath, picture: "", location, occupation, links,
  };
};
