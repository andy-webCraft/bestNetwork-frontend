import { IconButton } from "@mui/material";
import PropTypes from "prop-types";

import { postApi } from "entities/post";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

function DeletePostBtn({ postId }) {
  const [deletePost, { isLoading }] = postApi.useDeletePostMutation();

  const handleDeletePost = () => {
    deletePost({ postId });
  };

  return (
    <IconButton onClick={handleDeletePost} disabled={isLoading}>
      <DeleteOutlinedIcon />
    </IconButton>
  );
}

DeletePostBtn.propTypes = { postId: PropTypes.string.isRequired };

export default DeletePostBtn;
