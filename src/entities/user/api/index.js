import { api } from "app/api";
import { appModel } from "entities/app";
import { authModel } from "entities/auth";
import { SUCCESS } from "shared/lib/vars";

const API_PATH = "/users";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: ({ userId }) => ({
        url: `${API_PATH}/${userId}`,
        method: "GET",
      }),
    }),

    getFriends: builder.query({
      query: ({ userId }) => ({
        url: `${API_PATH}/${userId}/friends`,
        method: "GET",
      }),
      providesTags: ["Friends"],
    }),

    addFriendToggle: builder.mutation({
      query: ({ userId, friendId }) => ({
        url: `${API_PATH}/${userId}/${friendId}`,
        method: "PATCH",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(authModel.setUserFriends({ friends: data }));
      },
      invalidatesTags: (result, error) => !error && ["Friends"],
    }),

    searchUsersByName: builder.query({
      query: ({ queryString, page }) => ({
        url: `${API_PATH}/search/?query=${queryString}&page=${page}`,
        method: "GET",
      }),
      serializeQueryArgs: ({ endpointName, queryArgs }) => `${endpointName}-${queryArgs.queryString}`,
      merge: (currentCache, newItems) => {
        currentCache.users.push(...newItems.users);
      },
      forceRefetch: ({ currentArg, previousArg }) => currentArg !== previousArg,
      keepUnusedDataFor: 0,
    }),

    updateUser: builder.mutation({
      query: ({ formData }) => ({
        url: `${API_PATH}/update`,
        method: "POST",
        body: formData,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(authModel.setUser({ user: data }));
        dispatch(appModel.addNotification({ type: SUCCESS, message: "User has been updated" }));
      },
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetFriendsQuery,
  useAddFriendToggleMutation,
  useSearchUsersByNameQuery,
  useUpdateUserMutation,
} = userApi;
