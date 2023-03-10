import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import { Mutex } from "async-mutex";

import { appModel } from "entities/app";
import { authModel } from "entities/auth";
import { ERROR } from "shared/lib/vars";

const SERVER_BASE_URL = "https://best-network-backend.onrender.com";
const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: SERVER_BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let queryResult = await baseQuery(args, api, extraOptions);

  if (queryResult.error && queryResult.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);

        if (refreshResult.data) {
          const { user, accessToken } = refreshResult.data;
          api.dispatch(authModel.setLogin({ user, accessToken }));

          queryResult = await baseQuery(args, api, extraOptions);
        } else {
          await baseQuery("/auth/logout", api, extraOptions);
          api.dispatch(authModel.setLogout());
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      queryResult = await baseQuery(args, api, extraOptions);
    }
  }

  return queryResult;
};

export const fetchErrorHandler = (api) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    let errorText;

    if (action.payload.data) errorText = action.payload.data.message;
    else errorText = "Unknow error";

    api.dispatch(appModel.addNotification({ type: ERROR, message: errorText }));
  }

  return next(action);
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReAuth,
  tagTypes: ["Posts", "Friends"],
  endpoints: () => ({}),
});
