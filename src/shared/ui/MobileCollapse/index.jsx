import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Collapse, IconButton } from "@mui/material";
import PropTypes from "prop-types";

import { appModel } from "entities/app";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";

function MobileCollapse({ children }) {
  const isMobile = useSelector(appModel.isMobile);

  const [open, setOpen] = useState(!isMobile);

  useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  const openToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {isMobile && (
        <Box textAlign="center" marginBottom="-0.75rem" onClick={openToggle}>
          <IconButton size="small">
            {open ? <ExpandLessOutlinedIcon fontSize="small" /> : <ExpandMoreOutlinedIcon fontSize="small" />}
          </IconButton>
        </Box>
      )}
      <Collapse in={open}>{children}</Collapse>
    </>
  );
}

MobileCollapse.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default MobileCollapse;
