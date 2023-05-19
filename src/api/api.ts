import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITEM_FOR_PAGE } from '../utils/const';
import { IRepoListInfo } from '../utils/interfaces';

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
    prepareHeaders: (headers) => {
      headers.set('authorization', `Bearer 123`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    searchRepo: builder.query<IRepoListInfo, string>({
      query: (data) => {
        if (data === '') {
          return `/search/repositories?q=*&page=1&per_page=${ITEM_FOR_PAGE}`;
        } else {
          return `/search/repositories?q=${data}&page=1&per_page=${ITEM_FOR_PAGE}`;
        }
      },
    }),
  }),
});

export const { useSearchRepoQuery } = api;
export { api };
