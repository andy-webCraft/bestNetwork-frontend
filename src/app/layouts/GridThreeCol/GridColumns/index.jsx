import { Grid } from "@mui/material";
import { isValidElement, useMemo } from "react";
import PropTypes from "prop-types";

function GridColumns({ children }) {
  const slots = useMemo(() => {
    const collections = {
      left: [],
      center: [],
      right: [],
    };

    const handleChild = (child) => {
      if (!isValidElement(child)) return;

      switch (child.type.name) {
        case "LeftColumn": {
          collections.left.push(child);
          break;
        }
        case "CenterColumn": {
          collections.center.push(child);
          break;
        }
        case "RightColumn": {
          collections.right.push(child);
          break;
        }
        default:
          break;
      }
    };

    if (Array.isArray(children)) children.forEach(handleChild);
    else handleChild(children);

    return collections;
  }, [children]);

  return (
    <Grid container justifyContent="center" spacing={4}>
      {slots.left}
      {slots.center}
      {slots.right}
    </Grid>
  );
}

GridColumns.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

GridColumns.defaultProps = {
  children: undefined,
};

export default GridColumns;
