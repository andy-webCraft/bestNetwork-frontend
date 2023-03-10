import { Typography } from "@mui/material";
import { authApi } from "entities/auth";

function LogoutBtn() {
  const [logoutUser] = authApi.useLazyLogoutUserQuery();

  const handleLogout = () => {
    logoutUser();
  };

  return <Typography onClick={handleLogout}>Logout</Typography>;
}

export default LogoutBtn;
