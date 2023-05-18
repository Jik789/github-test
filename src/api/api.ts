import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
    prepareHeaders: (headers) => {
      headers.set('authorization', `Bearer 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`);
      return headers;
    },
  }),
  endpoints: () => ({}),
});

export const {} = api;
export { api };
