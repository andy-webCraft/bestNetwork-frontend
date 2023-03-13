import { Grid } from "@mui/material";
import PropTypes from "prop-types";

export function LeftColumn({ children }) {
  return (
    <Grid item container direction="column" rowGap={4} xl={3} lg={4} md={7} sm={10} xs={12}>
      {children}
    </Grid>
  );
}

LeftColumn.displayName = "LeftColumn";

LeftColumn.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

LeftColumn.defaultProps = {
  children: undefined,
};

export function CenterColumn({ children }) {
  return (
    <Grid item container direction="column" rowGap={4} lg={5} md={7} sm={10} xs={12}>
      {children}
    </Grid>
  );
}
CenterColumn.displayName = "CenterColumn";

CenterColumn.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

CenterColumn.defaultProps = {
  children: undefined,
};

export function RightColumn({ children }) {
  return (
    <Grid item container direction="column" rowGap={4} lg={3} sx={{ display: { lg: "block", xs: "none" } }}>
      {children}
    </Grid>
  );
}

RightColumn.displayName = "RightColumn";

RightColumn.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

RightColumn.defaultProps = {
  children: undefined,
};
