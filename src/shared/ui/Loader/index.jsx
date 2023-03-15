import { Box, CircularProgress } from "@mui/material";

function Loader() {
  return (
    <Box height="100%" display="flex" justifyContent="center" alignItems="center" margin="auto">
      <CircularProgress />
    </Box>
  );
}

export default Loader;
