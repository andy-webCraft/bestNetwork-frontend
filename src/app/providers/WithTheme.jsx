import { useMemo } from "react";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";

import themeSettings from "app/theme";
import { appModel } from "entities/app";

function WithTheme({ children }) {
  const { mode } = useSelector(appModel.getState);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

WithTheme.propTypes = { children: PropTypes.arrayOf(PropTypes.element).isRequired };

export default WithTheme;
