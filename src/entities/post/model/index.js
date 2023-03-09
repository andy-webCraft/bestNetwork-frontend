import updateLastItems from "shared/lib/updateLastItems";

export const addPostInCache = (draft, payload) => {
  if (draft.posts.length % 10 === 0) {
    draft.posts.splice(draft.posts.length - 1, 1);
  }

  draft.posts = [payload.newPost, ...draft.posts];
};

export const updateCommentsInCache = (draft, payload) => {
  const postIndex = draft.posts.findIndex((post) => post._id === payload.postId);
  draft.posts[postIndex].comments = payload.newComments;
};

export const updateLikesInCache = (draft, payload) => {
  const postIndex = draft.posts.findIndex((post) => post._id === payload.postId);
  draft.posts[postIndex].likes = payload.newLikes;
};

export const deletePostInCache = (draft, payload) => {
  const postIndex = draft.posts.findIndex((post) => post._id === payload.postId);
  draft.posts.splice(postIndex, 1);
};

export const mergePostsInCache = (currentCache, newItems) => {
  if (newItems.count !== currentCache.count) {
    const updatedList = updateLastItems(currentCache.posts, newItems.posts);

    currentCache.posts = updatedList;
    currentCache.count = newItems.count;
  } else {
    currentCache.posts.push(...newItems.posts);
  }
};
