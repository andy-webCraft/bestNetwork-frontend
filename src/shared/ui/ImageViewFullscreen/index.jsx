import { Box, Modal } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";

function ImageViewFullscreen({ children }) {
  const [fullscreen, setFullscreen] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);

  const fullscreenOpen = (e) => {
    if (!e.target.src) return;

    setImgSrc(e.target.src);
    setFullscreen(true);
  };

  const fullscreenClose = (e) => {
    if (e.target.nodeName === "IMG") return;

    setImgSrc(null);
    setFullscreen(false);
  };

  return (
    <>
      <Box onClick={fullscreenOpen}>{children}</Box>
      <Modal open={fullscreen} onClose={fullscreenClose}>
        <Box
          maxWidth="600px"
          width="80%"
          display="flex"
          border="none"
          overflow="hidden"
          onClick={fullscreenClose}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            "& > img": {
              maxWidth: "100%",
              maxHeight: "90vh",
              display: "inline-block",
              borderRadius: "0.75rem",
              margin: "auto",
            },
            "&:focus": { outline: "none" },
          }}
        >

          <img src={imgSrc} alt="modal-img" />
        </Box>
      </Modal>
    </>
  );
}

ImageViewFullscreen.propTypes = { children: PropTypes.element.isRequired };

export default ImageViewFullscreen;
