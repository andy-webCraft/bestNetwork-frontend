import { Avatar, Skeleton, Typography } from "@mui/material";
import PropTypes from "prop-types";
import FlexBetween from "shared/ui/FlexBetween";

export function UserTitle({ firstName, lastName, picturePath }) {
  return (
    <FlexBetween>
      <Avatar src={picturePath} alt={firstName} sx={{ width: "80px", height: "80px" }} />
      <Typography>{`${firstName} ${lastName}`}</Typography>
    </FlexBetween>
  );
}

UserTitle.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  picturePath: PropTypes.string.isRequired,
};

export function UserTitleSkeleton() {
  return (
    <FlexBetween>
      <Skeleton variant="circular" width="80px" height="80px" />
      <Skeleton variant="text" width="100px" />
    </FlexBetween>
  );
}
