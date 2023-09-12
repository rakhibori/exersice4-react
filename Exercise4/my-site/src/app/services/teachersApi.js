import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const teachersApi = createApi({
    reducerPath: 'teachersApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3030'}),
    endpoints: (builder)=>({
        getTeachers: builder.query({
            query:(page)=> `teachers?_page=${page}&_limit=8`,
            providesTags: ['teachers']
        }),

        updateTeacher: builder.mutation({
            query:({id, name, family, personnel_id, lessons})=>({
                url: `teachers/${id}`,
                method: 'PUT',
                body: {name, family, personnel_id, lessons}
            }),
            invalidatesTags: ['teachers']
        }),

        removeTeacher: builder.mutation({
            query:(id)=>({
                url: `teachers/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['teachers']
        })
    })
})

export const {useGetTeachersQuery, useUpdateTeacherMutation, useRemoveTeacherMutation} = teachersApi;