import { Box, Skeleton } from "@mui/material";
import PropTypes from "prop-types";

export function PostImage({ picturePath }) {
  if (!picturePath) return undefined;

  return (
    <Box display="flex" borderRadius="0.75rem" overflow="hidden">
      <img width="100%" height="auto" src={picturePath} alt="post-img" />
    </Box>
  );
}

PostImage.propTypes = { picturePath: PropTypes.string };
PostImage.defaultProps = { picturePath: false };

export function PostImageSkeleton() {
  return <Skeleton variant="rounded" width="100%" height="400px" sx={{ borderRadius: "0.75rem" }} />;
}
