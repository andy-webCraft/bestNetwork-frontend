import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { authModel } from "entities/auth";
import {
  CenterColumn, GridThreeCol, LeftColumn, RightColumn,
} from "app/layouts/GridThreeCol";
import UserWidget from "widgets/user/UserWidget";
import FriendsWidget from "widgets/user/FriendsWidget";
import PostsListWidget from "widgets/post/PostsListWidget";

function ProfilePage() {
  const { id: targetId } = useParams();
  const { user } = useSelector(authModel.getState);

  const isUserProfile = user._id === targetId;

  return (
    <GridThreeCol>
      <LeftColumn>
        <UserWidget targetUserId={targetId} currentUser={isUserProfile && user} />
        <FriendsWidget targetUserId={targetId} />
      </LeftColumn>

      <CenterColumn>
        <PostsListWidget userId={targetId} />
      </CenterColumn>

      <RightColumn />
    </GridThreeCol>
  );
}

export default ProfilePage;
