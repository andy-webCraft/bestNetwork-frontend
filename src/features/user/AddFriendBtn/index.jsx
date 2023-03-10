import { IconButton } from "@mui/material";
import PropTypes from "prop-types";

import { userApi } from "entities/user";
import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";

function AddFriendBtn({ userId, friendId, isFriend }) {
  const [addRemoveFriend, { isLoading }] = userApi.useAddFriendToggleMutation();

  const handleFriendToggle = () => {
    addRemoveFriend({ userId, friendId });
  };

  return (
    <IconButton onClick={handleFriendToggle} disabled={isLoading}>
      {isFriend ? <PersonRemoveOutlined /> : <PersonAddOutlined />}
    </IconButton>
  );
}

AddFriendBtn.propTypes = {
  userId: PropTypes.string.isRequired,
  friendId: PropTypes.string.isRequired,
  isFriend: PropTypes.bool.isRequired,
};

export default AddFriendBtn;
