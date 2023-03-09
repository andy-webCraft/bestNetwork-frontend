import { api } from "app/api";

const API_PATH = "/advert";

const advertApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAdvert: builder.query({
      query: () => ({
        url: API_PATH,
        method: "GET",
      }),
      keepUnusedDataFor: 0,
    }),
  }),
});

// eslint-disable-next-line import/prefer-default-export
export const { useGetAdvertQuery } = advertApi;
