import { useState, useEffect } from "react";
import { Divider } from "@mui/material";
import PropTypes from "prop-types";

import {
  userApi, UserInfo, UserLinks, UserTitle,
} from "entities/user";
import WidgetWrapper from "shared/ui/WidgetWrapper";
import MobileCollapse from "shared/ui/MobileCollapse";
import UserWidgetSkeleton from "./skeleton";

function UserWidget({ targetUserId, currentUser = null }) {
  const [user, setUser] = useState(currentUser);
  const { data, isFetching } = userApi.useGetUserQuery(
    { userId: targetUserId },
    { skip: currentUser },
  );
  useEffect(() => {
    if (!currentUser) setUser(data);
    else setUser(currentUser);
  }, [data, currentUser]);

  if (isFetching || !user) return <UserWidgetSkeleton />;

  return (
    <WidgetWrapper>
      <UserTitle
        firstName={user.firstName}
        lastName={user.lastName}
        picturePath={user.picturePath}
      />

      <MobileCollapse>
        <Divider sx={{ paddingY: "0.5rem" }} />
        <UserInfo
          email={user.email}
          location={user.location}
          occupation={user.occupation}
          viewedProfile={user.viewedProfile}
          impressions={user.impressions}
        />

        <Divider />

        <UserLinks links={user.links} />
      </MobileCollapse>
    </WidgetWrapper>
  );
}

UserWidget.propTypes = {
  targetUserId: PropTypes.string.isRequired,
  currentUser: PropTypes.oneOfType([PropTypes.bool,
    PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      picturePath: PropTypes.string,
      email: PropTypes.string,
      location: PropTypes.string,
      occupation: PropTypes.string,
      viewedProfile: PropTypes.number,
      impressions: PropTypes.number,
      links: PropTypes.objectOf(PropTypes.string),
    }),
  ]),
};

UserWidget.defaultProps = {
  currentUser: null,
};

export default UserWidget;
