import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";

function ScrollToTopBtn() {
  const [show, setShow] = useState(false);

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
        position: "fixed", bottom: "2.5rem", right: "2.5rem", zIndex: "500",
      }}
    >
      <ArrowCircleUpOutlinedIcon fontSize="large" />
    </IconButton>
  );
}

export default ScrollToTopBtn;
