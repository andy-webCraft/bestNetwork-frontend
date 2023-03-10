import { Skeleton } from "@mui/material";
import { AdvertImageSkeleton } from "entities/advert";
import FlexBetween from "shared/ui/FlexBetween";
import WidgetWrapper from "shared/ui/WidgetWrapper";

function AdvertSkeleton() {
  return (
    <WidgetWrapper>
      <FlexBetween>
        <Skeleton variant="text" width="120px" />
        <Skeleton variant="text" width="70px" />
      </FlexBetween>

      <AdvertImageSkeleton />

      <FlexBetween>
        <Skeleton variant="text" width="80px" />
        <Skeleton variant="text" width="120px" />
      </FlexBetween>

      <Skeleton variant="text" width="100%" height="100px" sx={{ marginY: "0.5rem" }} />
    </WidgetWrapper>
  );
}

export default AdvertSkeleton;
