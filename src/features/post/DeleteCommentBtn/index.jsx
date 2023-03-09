import { IconButton } from "@mui/material";
import PropTypes from "prop-types";

import { postApi } from "entities/post";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

function DeleteCommentBtn({ commentId }) {
  const [deleteComment, { isLoading }] = postApi.useDeleteCommentMutation();

  const handleDeleteComment = () => {
    deleteComment({ commentId });
  };

  return (
    <IconButton size="small" onClick={handleDeleteComment} disabled={isLoading}>
      <DeleteOutlinedIcon fontSize="small" />
    </IconButton>
  );
}

DeleteCommentBtn.propTypes = { commentId: PropTypes.string.isRequired };

export default DeleteCommentBtn;
