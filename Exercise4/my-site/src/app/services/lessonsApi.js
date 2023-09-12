import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const lessonsApi = createApi({
    reducerPath: 'lessonsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3030'}),
    endpoints: (builder)=>({
        getLessons: builder.query({
            query:(page)=> `lessons?_page=${page}&_limit=8`,
            providesTags: ['lessons']
        }),

        updateLesson: builder.mutation({
            query:({id, lesson_name, lesson_code, unit, teacher})=>({
                url: `lessons/${id}`,
                method: 'PUT',
                body: {lesson_name, lesson_code, unit, teacher}
            }),
            invalidatesTags: ['lessons']
        }),

        removeLesson: builder.mutation({
            query:(id)=>({
                url: `lessons/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['lessons']
        })
    })
})

export const {useGetLessonsQuery, useUpdateLessonMutation, useRemoveLessonMutation} = lessonsApi;