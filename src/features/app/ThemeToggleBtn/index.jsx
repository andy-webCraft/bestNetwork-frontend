import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";

import { appModel } from "entities/app";
import { DarkMode, LightMode } from "@mui/icons-material";

function ThemeToggleBtn() {
  const { mode } = useSelector(appModel.getState);

  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(appModel.modeToggle());
  };

  return (
    <IconButton onClick={handleThemeToggle}>{mode === "dark" ? <DarkMode /> : <LightMode />}</IconButton>
  );
}

export default ThemeToggleBtn;
