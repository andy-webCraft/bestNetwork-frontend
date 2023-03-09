import { api } from "app/api";
import { appModel } from "entities/app";
import { SUCCESS } from "shared/lib/vars";
import { postModel } from "..";

const API_PATH = "/posts";

const postApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: ({ formData }) => ({
        url: API_PATH,
        method: "POST",
        body: formData,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled, getState }) {
        const { data } = await queryFulfilled;
        const [{ endpointName, originalArgs }] = postApi.util.selectInvalidatedBy(getState(), ["Posts"]);

        dispatch(
          postApi.util.updateQueryData(endpointName, originalArgs, (draft) => {
            postModel.addPostInCache(draft, { newPost: data });
          }),
        );

        dispatch(appModel.addNotification({ type: SUCCESS, message: "Post created" }));
      },
      invalidatesTags: (result, error) => !error && ["Posts"],
    }),

    getFeedPosts: builder.query({
      query: ({ page }) => ({
        url: `${API_PATH}/feed?page=${page}`,
        method: "GET",
      }),
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => postModel.mergePostsInCache(currentCache, newItems),
      forceRefetch: ({ currentArg, previousArg }) => currentArg !== previousArg,
      keepUnusedDataFor: 0,
      providesTags: ["Posts"],
    }),

    getUserPosts: builder.query({
      query: ({ userId, page }) => ({
        url: `${API_PATH}/${userId}/posts?page=${page}`,
        method: "GET",
      }),
      serializeQueryArgs: ({ endpointName, queryArgs }) => `${endpointName}-${queryArgs.userId}`,
      merge: (currentCache, newItems) => postModel.mergePostsInCache(currentCache, newItems),
      forceRefetch: ({ currentArg, previousArg }) => currentArg !== previousArg,
      keepUnusedDataFor: 0,
      providesTags: ["Posts"],
    }),

    deletePost: builder.mutation({
      query: ({ postId }) => ({
        url: `${API_PATH}/${postId}`,
        method: "DELETE",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled, getState }) {
        const { data } = await queryFulfilled;
        const [{ endpointName, originalArgs }] = postApi.util.selectInvalidatedBy(getState(), ["Posts"]);

        dispatch(
          postApi.util.updateQueryData(endpointName, originalArgs, (draft) => {
            postModel.deletePostInCache(draft, { postId: data._id });
          }),
        );

        dispatch(appModel.addNotification({ type: SUCCESS, message: "Post deleted" }));
      },
      invalidatesTags: (result, error) => !error && ["Posts"],
    }),

    likePostToggle: builder.mutation({
      query: ({ postId }) => ({
        url: `${API_PATH}/${postId}/likes`,
        method: "PATCH",
      }),
      async onQueryStarted({ postId }, { dispatch, queryFulfilled, getState }) {
        const { data } = await queryFulfilled;
        const [{ endpointName, originalArgs }] = postApi.util.selectInvalidatedBy(getState(), ["Posts"]);

        dispatch(
          postApi.util.updateQueryData(endpointName, originalArgs, (draft) => {
            postModel.updateLikesInCache(draft, { postId, newLikes: data.likes });
          }),
        );
      },
    }),

    addComment: builder.mutation({
      query: ({ postId, description }) => ({
        url: `${API_PATH}/${postId}/comments`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description }),
      }),
      async onQueryStarted({ postId }, { dispatch, queryFulfilled, getState }) {
        const { data } = await queryFulfilled;
        const [{ endpointName, originalArgs }] = postApi.util.selectInvalidatedBy(getState(), ["Posts"]);

        dispatch(
          postApi.util.updateQueryData(endpointName, originalArgs, (draft) => {
            postModel.updateCommentsInCache(draft, { postId, newComments: data.comments });
          }),
        );
      },
    }),

    deleteComment: builder.mutation({
      query: ({ commentId }) => ({
        url: `${API_PATH}/comment/${commentId}`,
        method: "DELETE",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled, getState }) {
        const { data } = await queryFulfilled;
        const [{ endpointName, originalArgs }] = postApi.util.selectInvalidatedBy(getState(), ["Posts"]);

        dispatch(
          postApi.util.updateQueryData(endpointName, originalArgs, (draft) => {
            postModel.updateCommentsInCache(
              draft,
              { postId: data._id, newComments: data.comments },
            );
          }),
        );
      },
    }),
  }),
});

export const {
  useCreatePostMutation,
  useGetFeedPostsQuery,
  useGetUserPostsQuery,
  useDeletePostMutation,
  useLikePostToggleMutation,
  useAddCommentMutation,
  useDeleteCommentMutation,
} = postApi;
