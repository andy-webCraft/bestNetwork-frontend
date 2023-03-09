import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { List, ListItem, Typography } from "@mui/material";
import PropTypes from "prop-types";

import { userApi } from "entities/user";
import PersonTittle from "features/user/PersonTitle";
import FlexBetween from "shared/ui/FlexBetween";
import WidgetWrapper from "shared/ui/WidgetWrapper";
import MobileCollapse from "shared/ui/MobileCollapse";
import LinkBtn from "shared/ui/LinkBtn";
import FriendsWidgetSkeleton from "./skeleton";

function FriendsWidget({ targetUserId }) {
  const { data, isLoading } = userApi.useGetFriendsQuery({ userId: targetUserId });

  const navigate = useNavigate();

  const friendsList = useMemo(() => (data
    ? data.map(({
      _id, firstName, lastName, location, picturePath,
    }) => (
      <ListItem key={_id}>
        <PersonTittle
          personId={_id}
          firstName={firstName}
          lastName={lastName}
          subtitle={location}
          userPicturePath={picturePath}
        />
      </ListItem>
    ))
    : []), [data]);

  if (isLoading) return <FriendsWidgetSkeleton />;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography>Friends</Typography>

        <LinkBtn onClick={() => navigate("/search")}>find friends</LinkBtn>
      </FlexBetween>

      <MobileCollapse>
        <List sx={{ "& li": { display: "block" } }}>
          {friendsList.length ? (
            friendsList
          ) : (
            <Typography>
              You don&apos;t have any friends... Add someone to start a friendship
            </Typography>
          )}
        </List>
      </MobileCollapse>
    </WidgetWrapper>
  );
}

FriendsWidget.propTypes = {
  targetUserId: PropTypes.string.isRequired,
};

export default FriendsWidget;
