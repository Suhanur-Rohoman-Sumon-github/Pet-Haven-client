import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
  reducerPath: 'pet-haven',
  tagTypes: ['product', 'cart', 'user', 'booking'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',
  }),
  endpoints: () => ({}),
});

export default baseApi;
