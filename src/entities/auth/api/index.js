import { api } from "app/api";
import { appModel } from "entities/app";
import { SUCCESS } from "shared/lib/vars";
import { authModel } from "..";

const API_PATH = "/auth";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: ({ formData }) => ({
        url: `${API_PATH}/register`,
        method: "POST",
        body: formData,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(appModel.addNotification({ type: SUCCESS, message: "Register was successeful" }));
      },
    }),

    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: `${API_PATH}/login`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(authModel.setLogin({ user: data.user, accessToken: data.accessToken }));
        dispatch(appModel.addNotification({ type: SUCCESS, message: "Login was successeful" }));
      },
    }),

    logoutUser: builder.query({
      query: () => ({
        url: `${API_PATH}/logout`,
        method: "GET",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(authModel.setLogout());
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserQuery,
  useLazyLogoutUserQuery,
  useLazyGetAuthUserQuery,
} = authApi;
