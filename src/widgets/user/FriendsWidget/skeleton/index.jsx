import { List, ListItem, Skeleton } from "@mui/material";
import { PesronLinkSkeleton } from "entities/user";
import FlexBetween from "shared/ui/FlexBetween";
import WidgetWrapper from "shared/ui/WidgetWrapper";

function FriendsWidgetSkeleton() {
  return (
    <WidgetWrapper>
      <FlexBetween>
        <Skeleton variant="text" width="100px" />
        <Skeleton variant="text" width="70px" />
      </FlexBetween>

      <List sx={{ "& li": { display: "block" } }}>
        <ListItem>
          <FlexBetween>
            <PesronLinkSkeleton />
            <Skeleton variant="circular" width="2rem" height="2rem" />
          </FlexBetween>
        </ListItem>
        <ListItem>
          <FlexBetween>
            <PesronLinkSkeleton />
            <Skeleton variant="circular" width="2rem" height="2rem" />
          </FlexBetween>
        </ListItem>
        <ListItem>
          <FlexBetween>
            <PesronLinkSkeleton />
            <Skeleton variant="circular" width="2rem" height="2rem" />
          </FlexBetween>
        </ListItem>
      </List>
    </WidgetWrapper>
  );
}

export default FriendsWidgetSkeleton;
