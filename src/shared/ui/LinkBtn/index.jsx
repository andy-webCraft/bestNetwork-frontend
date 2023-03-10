import { ButtonBase } from "@mui/material";
import { styled } from "@mui/system";

const LinkBtn = styled(ButtonBase)({
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "inherit",
  transition: "opacity 0.1s ease-in",
  "&:hover": {
    opacity: "0.7",
  },
});

export default LinkBtn;
