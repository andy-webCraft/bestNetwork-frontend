import { useMemo, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

import { postApi } from "entities/post";
import FlexColumn from "shared/ui/FlexColumn";
import useCallbackOnScroll from "shared/lib/hooks/useCallbackOnScroll";
import Loader from "shared/ui/Loader";
import WidgetWrapper from "shared/ui/WidgetWrapper";
import Post from "../Post";
import PostsListSkeleton from "./skeleton";

function PostsListWidget({ userId, feed = false }) {
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching } = feed
    ? postApi.useGetFeedPostsQuery({ page })
    : postApi.useGetUserPostsQuery({ userId, page });

  useEffect(() => {
    if (page > 1) setPage(1);
  }, [userId]);

  const handleSetNextPage = () => {
    if (!data || data.posts.length >= data.count) return;
    setPage((prev) => prev + 1);
  };

  const observedRef = useCallbackOnScroll(handleSetNextPage, { skip: isFetching });

  const postsList = useMemo(
    () => (
      data ? data.posts.map((post) => <Post key={post._id} post={post} />) : []),
    [data],
  );

  if (isLoading) return <PostsListSkeleton />;

  return (
    <FlexColumn gap="2rem">
      {postsList.length ? (
        postsList
      ) : (
        <WidgetWrapper>
          <Typography textAlign="center">No posts...</Typography>
        </WidgetWrapper>
      )}

      {!isLoading && <Box ref={observedRef}>{isFetching && <Loader />}</Box>}
    </FlexColumn>
  );
}

PostsListWidget.propTypes = {
  userId: PropTypes.string,
  feed: PropTypes.bool,
};

PostsListWidget.defaultProps = {
  userId: null,
  feed: false,
};

export default PostsListWidget;
