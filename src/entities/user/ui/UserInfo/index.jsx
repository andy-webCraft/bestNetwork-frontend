import {
  List, ListItem, ListItemIcon, ListItemText, Skeleton,
} from "@mui/material";
import PropTypes from "prop-types";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";

export function UserInfo({
  email, location, occupation, viewedProfile, impressions,
}) {
  return (
    <List sx={{ "& svg": { fontSize: "1.75rem" } }}>
      {email && (
        <ListItem>
          <ListItemIcon>
            <EmailOutlinedIcon />
          </ListItemIcon>
          <ListItemText>
            Email:&nbsp;
            {email}
          </ListItemText>
        </ListItem>
      )}

      {location && (
        <ListItem>
          <ListItemIcon>
            <LocationOnOutlinedIcon />
          </ListItemIcon>
          <ListItemText>
            Location:&nbsp;
            {location}
          </ListItemText>
        </ListItem>
      )}

      {occupation && (
        <ListItem>
          <ListItemIcon>
            <WorkOutlineOutlinedIcon />
          </ListItemIcon>
          <ListItemText>
            Occupation:&nbsp;
            {occupation}
          </ListItemText>
        </ListItem>
      )}

      {viewedProfile && (
        <ListItem>
          <ListItemIcon>
            <VisibilityOutlinedIcon />
          </ListItemIcon>
          <ListItemText>
            Viewed Profile:&nbsp;
            {viewedProfile}
          </ListItemText>
        </ListItem>
      )}

      {impressions && (
        <ListItem>
          <ListItemIcon>
            <ThumbUpAltOutlinedIcon />
          </ListItemIcon>
          <ListItemText>
            Impressions:&nbsp;
            {impressions}
          </ListItemText>
        </ListItem>
      )}
    </List>
  );
}

UserInfo.propTypes = {
  email: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  viewedProfile: PropTypes.number.isRequired,
  impressions: PropTypes.number.isRequired,

};

export function UserInfoSkeleton() {
  const listItem = (
    <ListItem>
      <Skeleton variant="circular" width="30px" height="30px" sx={{ mr: "28px" }} />
      <Skeleton variant="text" width="150px" />
    </ListItem>
  );
  return (
    <List>
      {listItem}
      {listItem}
      {listItem}
      {listItem}
      {listItem}
    </List>
  );
}
