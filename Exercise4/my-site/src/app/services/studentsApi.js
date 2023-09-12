import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const studentsApi = createApi({
    reducerPath: 'studentsApi',
    baseQuery: fetchBaseQuery({baseUrl: ' http://localhost:3030'}),
    endpoints: (builder)=>({
        getStudents: builder.query({
            query:(page)=> `students?_page=${page}&_limit=8`,
            providesTags: ['students']
        }),

        addStudent: builder.mutation({
            query:({name, family, student_number, field_of_study})=>({
                url: 'students',
                method: 'POST',
                body: {name, family, student_number, field_of_study}
            }),
            invalidatesTags: ['students']
        }),

        removeStudent: builder.mutation({
            query:(id)=>({
                url: `students/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['students']
        })
    })
})

export const {useGetStudentsQuery, useAddStudentMutation, useRemoveStudentMutation} = studentsApi;