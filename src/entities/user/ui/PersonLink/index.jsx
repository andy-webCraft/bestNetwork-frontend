import { useNavigate } from "react-router-dom";
import {
  Avatar, Box, Skeleton, Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import LinkBtn from "shared/ui/LinkBtn";

export function PersonLink({
  personId, firstName, lastName, subtitle, userPicturePath,
}) {
  const navigate = useNavigate();

  return (
    <Box display="flex" alignItems="center">
      <LinkBtn onClick={() => navigate(`/user/${personId}`)}>
        <Avatar src={userPicturePath} alt={firstName} />
      </LinkBtn>

      <Box ml="1rem">
        <LinkBtn onClick={() => navigate(`/user/${personId}`)}>{`${firstName} ${lastName}`}</LinkBtn>
        <Typography variant="subtitle2">{subtitle}</Typography>
      </Box>
    </Box>
  );
}

PersonLink.propTypes = {
  personId: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  userPicturePath: PropTypes.string.isRequired,
};

export function PesronLinkSkeleton() {
  return (
    <Box display="flex" alignItems="center">
      <Skeleton variant="circular" width="40px" height="40px" />

      <Box ml="1rem">
        <Skeleton variant="text" width="150px" />
        <Skeleton variant="text" width="100px" />
      </Box>
    </Box>
  );
}
