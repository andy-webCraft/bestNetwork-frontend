import FlexColumn from "shared/ui/FlexColumn";
import PostSkeleton from "widgets/post/Post/skeleton";

function PostsListSkeleton() {
  return (
    <FlexColumn gap="2rem">
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </FlexColumn>
  );
}

export default PostsListSkeleton;
