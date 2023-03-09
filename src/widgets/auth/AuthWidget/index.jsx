import { useState } from "react";
import { Typography } from "@mui/material";

import LoginForm from "widgets/auth/LoginForm";
import RegisterForm from "widgets/auth/RegisterForm";
import { LOGIN, REGISTER } from "shared/lib/vars";
import WidgetWrapper from "shared/ui/WidgetWrapper";

function AuthWidget() {
  const [formType, setFormType] = useState(LOGIN);

  const toggleFormType = () => {
    setFormType(formType === LOGIN ? REGISTER : LOGIN);
  };

  return (
    <WidgetWrapper>
      {formType === LOGIN ? <LoginForm /> : <RegisterForm submitCallback={toggleFormType} />}

      <Typography
        onClick={toggleFormType}
        sx={{
          textAlign: "center",
          textDecoration: "underline",
          mt: "2rem",
          "&:hover": { cursor: "pointer" },
        }}
      >
        {formType === LOGIN
          ? "Don't have a account? Click here to register"
          : "Have a account? Click to sing up"}
      </Typography>
    </WidgetWrapper>
  );
}

export default AuthWidget;
