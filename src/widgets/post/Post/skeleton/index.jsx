import { Box, Skeleton } from "@mui/material";
import { PostImageSkeleton } from "entities/post";
import { PesronLinkSkeleton } from "entities/user";
import WidgetWrapper from "shared/ui/WidgetWrapper";

function PostSkeleton() {
  return (
    <WidgetWrapper>
      <PesronLinkSkeleton />

      <Box marginY="1rem">
        <PostImageSkeleton />
      </Box>

      <Box display="flex" gap="0.5rem">
        <Skeleton variant="circular" width="2rem" height="2rem" />
        <Skeleton variant="text" width="1rem" />
        <Skeleton variant="circular" width="2rem" height="2rem" />
        <Skeleton variant="text" width="1rem" />
      </Box>
    </WidgetWrapper>
  );
}

export default PostSkeleton;
