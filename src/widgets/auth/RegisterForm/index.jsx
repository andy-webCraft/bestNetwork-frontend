import {
  Box, Button, IconButton, Typography,
} from "@mui/material";
import { authApi } from "entities/auth";
import ImageDropbox from "shared/ui/ImageDropbox";
import { Formik } from "formik";
import { useState } from "react";
import TextInput from "shared/ui/TextInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PropTypes from "prop-types";
import serializeFormData from "shared/lib/serializeFormData";
import { initialValuesRegister, registerSchema } from "./schema";

function RegisterForm({ submitCallback }) {
  const [showPass, setShowPass] = useState(false);
  const [registerUser, { isLoading }] = authApi.useRegisterUserMutation();

  const toggleShowPass = () => {
    setShowPass(!showPass);
  };

  const handleFormSubmit = (values, onSubmitProps) => {
    const formData = serializeFormData(values);

    registerUser({ formData })
      .unwrap()
      .then(() => {
        onSubmitProps.resetForm();
        if (submitCallback) submitCallback();
      });
  };

  return (
    <Formik
      initialValues={initialValuesRegister}
      validationSchema={registerSchema}
      onSubmit={handleFormSubmit}
    >
      {({
        values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box display="grid" gap="2rem" textAlign="center">
            <Typography variant="h2" fontSize={30} textAlign="center">
              Register
            </Typography>

            <TextInput
              label="First Name"
              name="firstName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
              error={Boolean(touched.firstName) && Boolean(errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextInput
              label="Last Name"
              name="lastName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
              error={Boolean(touched.lastName) && Boolean(errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />

            <TextInput
              label="Location"
              name="location"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.location}
              error={Boolean(touched.location) && Boolean(errors.location)}
              helperText={touched.location && errors.location}
            />

            <TextInput
              label="Occupation"
              name="occupation"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.occupation}
              error={Boolean(touched.occupation) && Boolean(errors.occupation)}
              helperText={touched.occupation && errors.occupation}
            />

            <ImageDropbox
              imageValue={values.picture}
              setImageValue={(imageValue) => {
                setFieldValue("picture", imageValue);
              }}
            />

            <TextInput
              label="Email"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextInput
              label="Password"
              name="password"
              type={showPass ? "text" : "password"}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={toggleShowPass}>
                    {showPass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />

            <Button type="submit" variant="contained" disabled={isLoading} sx={{ marginX: "auto" }}>
              REGISTER
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}

RegisterForm.propTypes = { submitCallback: PropTypes.func.isRequired };

export default RegisterForm;
