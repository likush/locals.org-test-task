import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {UserType} from '../../../types';

const baseUrl = 'https://api.github.com/';

const headers = {
  authorization: 'token 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',
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: builder => ({
    getUser: builder.query<UserType, string>({
      query: (value: string) => ({
        url: `/users/${value}`,
        headers,
      }),
    }),
  }),
});

export const {useGetUserQuery} = apiSlice;
