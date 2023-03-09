import { Box, Skeleton } from "@mui/material";
import PropTypes from "prop-types";

export function AdvertImage({ picturePath }) {
  return (
    <Box
      height="200px"
      borderRadius="0.75rem"
      marginY="0.75rem"
      overflow="hidden"
      sx={{
        position: "relative",
        "& > img": {
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        },
      }}
    >
      <img width="auto" height="100%" src={picturePath} alt="advert-img" />
    </Box>
  );
}

AdvertImage.propTypes = {
  picturePath: PropTypes.string.isRequired,
};

export function AdvertImageSkeleton() {
  return (
    <Skeleton
      variant="rounded"
      width="100%"
      height="200px"
      sx={{ borderRadius: "0.75rem", marginY: "0.75rem" }}
    />
  );
}
