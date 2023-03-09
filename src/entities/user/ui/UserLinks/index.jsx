import { Link, Skeleton, Tooltip } from "@mui/material";
import FlexBetween from "shared/ui/FlexBetween";
import PropTypes from "prop-types";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const disabledStyle = {
  opacity: "0.5",
  pointerEvents: "none",
};

export function UserLinks({ links }) {
  return (
    <FlexBetween p="1rem 2rem 0" sx={{ "& svg": { fontSize: "1.75rem" } }}>
      <Link href={links.github} target="_blank" sx={!links.github ? disabledStyle : undefined}>
        <Tooltip title="GitHub">
          <GitHubIcon />
        </Tooltip>
      </Link>

      <Link href={links.facebook} target="_blank" sx={!links.facebook ? disabledStyle : undefined}>
        <Tooltip title="Facebook">
          <FacebookOutlinedIcon />
        </Tooltip>
      </Link>

      <Link href={links.twitter} target="_blank" sx={!links.twitter ? disabledStyle : undefined}>
        <Tooltip title="Twitter">
          <TwitterIcon />
        </Tooltip>
      </Link>

      <Link href={links.linkedin} target="_blank" sx={!links.linkedin ? disabledStyle : undefined}>
        <Tooltip title="LinkedIn">
          <LinkedInIcon />
        </Tooltip>
      </Link>
    </FlexBetween>
  );
}

UserLinks.propTypes = {
  links: PropTypes.shape({
    github: PropTypes.string,
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    linkedin: PropTypes.string,
  }),
};

UserLinks.defaultProps = {
  links: {
    github: null,
    facebook: null,
    twitter: null,
    linkedin: null,

  },
};

export function UserLinksSkeleton() {
  const linkItem = (
    <Skeleton variant="circular" width="30px" height="30px" />
  );

  return (
    <FlexBetween p="1rem 2rem 0">
      {linkItem}
      {linkItem}
      {linkItem}
      {linkItem}
    </FlexBetween>
  );
}
