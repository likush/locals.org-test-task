import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.github.com/';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: builder => ({
    getUsers: builder.query({
      query: value => `/users/${value}`,
    }),
  }),
});

export const {useGetUsersQuery} = apiSlice;
