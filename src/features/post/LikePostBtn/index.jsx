import { IconButton } from "@mui/material";
import PropTypes from "prop-types";

import { postApi } from "entities/post";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function LikePostBtn({ postId, isLiked }) {
  const [likePost, { isLoading }] = postApi.useLikePostToggleMutation();

  const handleLikeToggle = () => {
    likePost({ postId });
  };

  return (
    <IconButton color={isLiked ? "primary" : "default"} onClick={handleLikeToggle} disabled={isLoading}>
      {isLiked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
    </IconButton>
  );
}

LikePostBtn.propTypes = {
  postId: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
};

export default LikePostBtn;
