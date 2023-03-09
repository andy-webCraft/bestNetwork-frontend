import { Divider } from "@mui/material";
import WidgetWrapper from "shared/ui/WidgetWrapper";
import { UserInfoSkeleton, UserLinksSkeleton, UserTitleSkeleton } from "entities/user";

function UserWidgetSkeleton() {
  return (
    <WidgetWrapper>
      <UserTitleSkeleton />

      <Divider sx={{ paddingY: "0.5rem" }} />

      <UserInfoSkeleton />

      <Divider sx={{ paddingY: "0.5rem" }} />

      <UserLinksSkeleton />
    </WidgetWrapper>
  );
}

export default UserWidgetSkeleton;
