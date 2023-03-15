import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Box, CssBaseline, useMediaQuery, useTheme,
} from "@mui/material";
import PropTypes from "prop-types";

import { WithTheme } from "app/providers";
import Header from "widgets/app/Header";
import NotificationsBar from "widgets/app/NotificationsBar";
import { appModel } from "entities/app";
import ScrollToTopBtn from "features/app/ScrollToTopBtn";
import Loader from "shared/ui/Loader";

function MainLayout({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appModel.setMobile(isMobile));
  }, [isMobile]);

  return (
    <WithTheme>
      <CssBaseline />

      <Header />

      <Box
        component="main"
        minWidth="100%"
        minHeight="100%"
        display="flex"
        alignItems="flex-start"
        p={isMobile ? "1rem" : "2rem"}
      >
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </Box>

      <NotificationsBar />
      <ScrollToTopBtn />
    </WithTheme>
  );
}

MainLayout.propTypes = { children: PropTypes.element.isRequired };

export default MainLayout;
