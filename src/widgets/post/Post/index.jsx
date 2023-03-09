import { memo, useState } from "react";
import { useSelector } from "react-redux";
import {
  Box, Divider, IconButton, Typography,
} from "@mui/material";
import PropTypes from "prop-types";

import { authModel } from "entities/auth";
import { PersonLink } from "entities/user";
import { CommentsList, PostImage } from "entities/post";

import AddCommentInPost from "features/post/AddCommentInPost";
import LikePostBtn from "features/post/LikePostBtn";
import DeletePostBtn from "features/post/DeletePostBtn";

import FlexBetween from "shared/ui/FlexBetween";
import getDateFromUTC from "shared/lib/getDateFromTimestamp";
import ImageViewFullscreen from "shared/ui/ImageViewFullscreen";
import WidgetWrapper from "shared/ui/WidgetWrapper";

import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";

const Post = memo(({ post }) => {
  const [openComments, setOpenComments] = useState(false);

  const userId = useSelector(authModel.getUserId);
  const {
    _id: postId, author, description, picturePath, likes, comments, createdAt,
  } = post;

  const isLiked = likes.includes(userId);
  const likesCount = likes.length;
  const commentsCount = comments.length;

  const toggleOpenComments = () => {
    setOpenComments(!openComments);
  };

  return (
    <WidgetWrapper display="flex" flexDirection="column" gap="1rem">
      <PersonLink
        personId={author._id}
        firstName={author.firstName}
        lastName={author.lastName}
        subtitle={author.location}
        userPicturePath={author.picturePath}
      />

      <ImageViewFullscreen>
        <PostImage picturePath={picturePath} />
      </ImageViewFullscreen>

      <Typography variant="body1" whiteSpace="pre-line">
        {description}
      </Typography>

      <Box display="flex" gap="1rem">
        <FlexBetween gap="0.25rem">
          <LikePostBtn postId={postId} isLiked={isLiked} />
          <Typography>{likesCount}</Typography>
        </FlexBetween>

        <FlexBetween gap="0.25rem">
          <IconButton color={openComments ? "primary" : "default"} onClick={toggleOpenComments}>
            {openComments ? <ChatBubbleOutlinedIcon /> : <ChatBubbleOutlineOutlinedIcon />}
          </IconButton>
          <Typography>{commentsCount}</Typography>
        </FlexBetween>

        {userId === author._id && <DeletePostBtn postId={postId} />}

        <Typography variant="caption" margin="auto 0 0 auto">
          {getDateFromUTC(createdAt)}
        </Typography>
      </Box>

      {openComments && (
        <>
          <Box>
            <Divider />
            {comments.length > 0 && <CommentsList comments={comments} />}
          </Box>

          <AddCommentInPost postId={postId} />
        </>
      )}
    </WidgetWrapper>
  );
});

Post.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    author: PropTypes.objectOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    picturePath: PropTypes.string.isRequired,
    likes: PropTypes.arrayOf(PropTypes.string).isRequired,
    comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
