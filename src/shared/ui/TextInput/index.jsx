import { TextField } from "@mui/material";
import { styled } from "@mui/system";

const TextInput = styled(TextField)(() => ({
  width: "100%",
  "& .MuiInputBase-root ": {
    borderRadius: "1rem",
  },
}));

export default TextInput;
