import baseApi from '../../api/baseApi';

const productApis = baseApi.injectEndpoints({
  endpoints: builder => ({
    createProduct: builder.mutation({
      query: productInfo => ({
        url: `/products`,
        method: 'POST',
        body: productInfo,
      }),
      invalidatesTags: ['product'],
    }),
    getSingleProduct: builder.query({
      query: productId => ({
        url: `/products/${productId}`,
        method: 'GET',
      }),
      providesTags: ['product'],
    }),
    getAllProducts: builder.query({
      query: () => ({
        url: `/products`,
        method: 'GET',
      }),
      providesTags: ['product'],
    }),
    updateProduct: builder.mutation({
      query: payload => ({
        url: `/products/${payload.id}`,
        method: 'PATCH',
        body: payload.productInfo,
      }),
      invalidatesTags: ['product'],
    }),
    deleteProduct: builder.mutation({
      query: productId => ({
        url: `/products/${productId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['product'],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetSingleProductQuery,
  useGetAllProductsQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApis;
