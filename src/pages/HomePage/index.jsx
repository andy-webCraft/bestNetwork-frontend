import { useSelector } from "react-redux";

import {
  CenterColumn, GridThreeCol, LeftColumn, RightColumn,
} from "app/layouts/GridThreeCol";
import { authModel } from "entities/auth";
import AddPostWidget from "widgets/post/AddPostWidget";
import AdvertWidget from "widgets/advert/AdvertWidget";
import PostsListWidget from "widgets/post/PostsListWidget";
import FriendsWidget from "widgets/user/FriendsWidget";

function HomePage() {
  const { user } = useSelector(authModel.getState);

  return (
    <GridThreeCol>
      <LeftColumn>
        <FriendsWidget targetUserId={user._id} />
      </LeftColumn>

      <CenterColumn>
        <AddPostWidget />
        <PostsListWidget targetUserId={user._id} feed />
      </CenterColumn>

      <RightColumn>
        <AdvertWidget />
      </RightColumn>
    </GridThreeCol>
  );
}

export default HomePage;
