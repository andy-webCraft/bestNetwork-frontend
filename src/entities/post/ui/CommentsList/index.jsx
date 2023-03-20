import { List, ListItem } from "@mui/material";
import PropTypes from "prop-types";
import { Comment, CommentSkeleton } from "../Comment";

export function CommentsList({ comments }) {
  return (
    <List disablePadding>
      {comments.map((comment) => (
        <ListItem key={comment._id} divider>
          <Comment comment={comment} />
        </ListItem>
      ))}
    </List>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.string]),
  )).isRequired,
};

export function CommentsListSkeleton() {
  return (
    <List>
      <ListItem divider>
        <CommentSkeleton />
      </ListItem>
      <ListItem divider>
        <CommentSkeleton />
      </ListItem>
    </List>
  );
}
