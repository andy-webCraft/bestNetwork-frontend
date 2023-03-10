import { useState } from "react";
import { Formik } from "formik";
import {
  Box, Button, IconButton, Typography,
} from "@mui/material";

import { authApi } from "entities/auth";
import TextInput from "shared/ui/TextInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { initialValuesLogin, loginSchema } from "./schema";

function LoginForm() {
  const [showPass, setShowPass] = useState(false);
  const [loginUser, { isLoading }] = authApi.useLoginUserMutation();

  const toggleShowPass = () => {
    setShowPass(!showPass);
  };

  const handleFormSubmit = (values) => {
    const { email, password } = values;
    loginUser({ email, password });
  };

  return (
    <Formik
      initialValues={initialValuesLogin}
      validationSchema={loginSchema}
      onSubmit={handleFormSubmit}
    >
      {({
        values, errors, touched, handleBlur, handleChange, handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box display="grid" gap="2rem" textAlign="center">
            <Typography variant="h2" fontSize={30} textAlign="center">
              Login
            </Typography>

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
              LOGIN
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}

export default LoginForm;
