import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.github.com/';

const headers = {
  authorization: 'token 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',
};

export type UserResponseType = {
  id: number;
  login: string;
  html_url: string;
  name: string;
  avatar_url: string;
  company: string;
  email: string;
  blog: string;
};

export type AllUsersResponseType = Array<UserResponseType>;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: builder => ({
    getUser: builder.query<UserResponseType, string>({
      query: (value: string) => ({
        url: `/users/${value}`,
        headers,
      }),
    }),
  }),
});

export const {useGetUserQuery} = apiSlice;
