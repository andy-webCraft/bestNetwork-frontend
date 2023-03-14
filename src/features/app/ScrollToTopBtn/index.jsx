import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import { useSelector } from "react-redux";
import { appModel } from "entities/app";

function ScrollToTopBtn() {
  const [show, setShow] = useState(false);

  const isMobile = useSelector(appModel.isMobile);

  const handleListener = () => {
    if (window.scrollY > window.innerHeight) setShow(true);
    else setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleListener);

    return () => window.removeEventListener("scroll", handleListener);
  }, []);

  const hancleScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  if (!show) return undefined;

  return (
    <IconButton
      color="primary"
      onClick={hancleScroll}
      sx={{
        backdropFilter: "blur(2px)",
        position: "fixed",
        bottom: isMobile ? "1rem" : "2.5rem",
        right: isMobile ? "1rem" : "2.5rem",
        zIndex: "500",
      }}
    >
      <ArrowCircleUpOutlinedIcon fontSize="large" />
    </IconButton>
  );
}

export default ScrollToTopBtn;
