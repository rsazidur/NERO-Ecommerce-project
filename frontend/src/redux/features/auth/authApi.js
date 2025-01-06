import { createApi } from '@reduxjs/toolkit/query/react';
import { getBaseURL } from '../../../utils/baseURL';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ 
    baseUrl: `${getBaseURL()}/api/auth`,
    credentials: 'include',
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (newUser) => ({
                url: '/register',
                method: 'POST',
                body: newUser,
            }),
        }),
        loginUser: builder.mutation({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        logoutUser: builder.mutation({
            query: () => ({
                url: '/logout',
                method: 'POST',
            }),
        }),
        getUser: builder.query({
            query: () => ({
                url: '/users',
                method: 'GET',
            }),
            refetchOnMount: true,
            invalidatesTags: ['User']
        }),
        deleteUser: builder.mutation({
            query: (userID) => ({
                url: `/user/${userID}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['User']
        }),
        updateUserRole: builder.mutation({
            query: ({userId, role}) => ({
                url: `/user/${userId}`,
                method: 'PUT',
                body: {role},
            }),
            refetchOnMount: true,
            invalidatesTags: ['User']
        }),
        editProfile: builder.mutation({
            query: (profileData) => ({
                url: `/edit-profile`,
                method: 'PATCH',
                body: profileData,
            }),
        }),
    }),
});


export const { useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation,
    useGetUserQuery, useDeleteUserMutation, useUpdateUserRoleMutation, useEditProfileMutation } = authApi;
export default authApi;
