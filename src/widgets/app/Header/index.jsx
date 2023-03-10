import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  AppBar, Avatar, Box, Divider, IconButton, Menu, MenuItem, Toolbar, Typography,
} from "@mui/material";

import { authModel } from "entities/auth";
import ThemeToggleBtn from "features/app/ThemeToggleBtn";
import LogoutBtn from "features/auth/LogoutBtn";
import FlexBetween from "shared/ui/FlexBetween";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const { user } = useSelector(authModel.getState);
  const isAuth = useSelector(authModel.isAuth);

  const navigate = useNavigate();
  const anchorMenuRef = useRef(null);

  const toggleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <AppBar color="primary" enableColorOnDark position="fixed">
      <Toolbar sx={{ p: "0.5rem 2rem" }}>
        <Box
          width="100%"
          display="flex"
          justifyContent={isAuth ? "space-between" : "center"}
          alignItems="center"
        >
          <Typography
            variant="h1"
            fontSize={30}
            fontWeight={700}
            onClick={() => navigate("/")}
            sx={{ "&:hover": { cursor: "pointer" } }}
          >
            Best Network
          </Typography>

          {isAuth && (
            <FlexBetween gap="1rem">
              <ThemeToggleBtn />

              <IconButton ref={anchorMenuRef} onClick={toggleOpenMenu}>
                <Avatar src={user.picturePath} alt={user.firstName} />
              </IconButton>

              <Menu anchorEl={anchorMenuRef.current} open={openMenu} onClose={toggleOpenMenu}>
                <Typography p="0 0.5rem 0.5rem">{`${user.firstName} ${user.lastName}`}</Typography>
                <Divider />

                <MenuItem onClick={toggleOpenMenu}>
                  <Typography onClick={() => navigate(`/user/${user._id}`)}>Profile</Typography>
                </MenuItem>
                <MenuItem onClick={toggleOpenMenu}>
                  <Typography onClick={() => navigate("/search")}>Search user</Typography>
                </MenuItem>
                <MenuItem onClick={toggleOpenMenu}>
                  <Typography onClick={() => navigate(`/user/${user._id}/edit`)}>Edit Profile</Typography>
                </MenuItem>
                <MenuItem onClick={toggleOpenMenu}>
                  <LogoutBtn />
                </MenuItem>
              </Menu>
            </FlexBetween>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
