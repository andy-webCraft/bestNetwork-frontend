import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Avatar, Box, Skeleton, Typography, useTheme,
} from "@mui/material";
import PropTypes from "prop-types";

import { authModel } from "entities/auth";
import DeleteCommentBtn from "features/post/DeleteCommentBtn";
import FlexBetween from "shared/ui/FlexBetween";
import LinkBtn from "shared/ui/LinkBtn";

export function Comment({ comment }) {
  const {
    _id: commentId,
    author: {
      _id: authotId, firstName, lastName, picturePath,
    },
    description,
  } = comment;

  const userId = useSelector(authModel.getUserId);

  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box width="100%">
      <LinkBtn
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          borderRadius: "0.75rem",
          bgcolor: `${theme.palette.background.default}`,
          pr: "0.5rem",
          mb: "0.5rem",

        }}
        onClick={() => navigate(`/user/${authotId}`)}
      >
        <Avatar src={picturePath} sx={{ width: "1.75rem", height: "1.75rem" }} />

        <Typography fontSize="0.9rem">{`${firstName} ${lastName}`}</Typography>
      </LinkBtn>

      <FlexBetween>
        <Typography paddingX="1rem" whiteSpace="pre-line">
          {description}
        </Typography>

        {userId === authotId && (
          <Box mt="auto">
            <DeleteCommentBtn commentId={commentId} />
          </Box>
        )}
      </FlexBetween>
    </Box>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    author: PropTypes.objectOf(PropTypes.oneOfType(
      [PropTypes.number, PropTypes.string],
    )).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export function CommentSkeleton() {
  return (
    <Box>
      <Box display="flex" gap="0.5rem" mb="0.5rem">
        <Skeleton variant="circular" width="2rem" height="2rem" />
        <Skeleton variant="text" width="100px" />
      </Box>

      <Skeleton variant="text" width="250px" />
      <Skeleton variant="text" width="250px" />
    </Box>
  );
}
