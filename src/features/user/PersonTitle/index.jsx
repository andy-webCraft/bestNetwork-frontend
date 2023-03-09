import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { authModel } from "entities/auth";
import { PersonLink } from "entities/user";
import AddFriendBtn from "features/user/AddFriendBtn";
import FlexBetween from "shared/ui/FlexBetween";

function PersonTittle({
  personId, firstName, lastName, subtitle, userPicturePath,
}) {
  const { user } = useSelector(authModel.getState);
  const isCurrentUser = user._id === personId;
  const isFriend = user.friends.includes(personId);

  return (
    <FlexBetween>
      <PersonLink
        personId={personId}
        firstName={firstName}
        lastName={lastName}
        subtitle={subtitle}
        userPicturePath={userPicturePath}
      />

      {!isCurrentUser && <AddFriendBtn userId={user._id} friendId={personId} isFriend={isFriend} />}
    </FlexBetween>
  );
}

PersonTittle.propTypes = {
  personId: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  userPicturePath: PropTypes.string.isRequired,
};

export default PersonTittle;
